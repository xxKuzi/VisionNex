import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, SpotLight } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const Model = ({ rotate }) => {
  const obj = useLoader(OBJLoader, "./Glasses-v10.obj"); // Update with the correct path to your .obj file
  const objRef = useRef(); // Create a ref for the model

  useFrame(() => {
    if (objRef.current && rotate) {
      // Adjust the rotation speed as needed
      objRef.current.rotation.z -= 0.002;
    }
  });

  function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
  }

  function newRotation(degreesX, degreesY, degreesZ) {
    const rotationX = degreesToRadians(degreesX);
    const rotationY = degreesToRadians(degreesY);
    const rotationZ = degreesToRadians(degreesZ);
    return [rotationX, rotationY, rotationZ];
  }

  return (
    <primitive
      ref={objRef}
      object={obj}
      scale={0.017}
      rotation={newRotation(0, 180, 0)}
    />
  );
};

export default function Product_Model({ version }) {
  const [rotate, setRotate] = useState(false); // Start rotation as false
  const [timer, setTimer] = useState(null); // State to track the timeout
  const containerRef = useRef(null); // Ref for the container

  const startUserInteraction = () => {
    setRotate(false); // Stop rotation when user interacts
  };

  const endUserInteraction = () => {
    if (timer) clearTimeout(timer); // Clear any existing timer
    const newTimer = setTimeout(() => setRotate(true), 3000); // Restart rotation after 3 seconds
    setTimer(newTimer);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setRotate(true), 1500);
        } else {
          setRotate(false); // Stop rotation when not visible
        }
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (timer) clearTimeout(timer); // Clean up the timer if the component unmounts
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [timer]);

  return (
    <div ref={containerRef} className="h-[80vh] w-screen relative bg-white">
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <spotLight
            position={[10, 20, 10]}
            angle={0.3}
            penumbra={1}
            intensity={1.5}
            castShadow
          />
          <directionalLight
            position={[-5, 10, -5]}
            intensity={0.7}
            castShadow
          />
          <PerspectiveCamera makeDefault position={[0, -30, 0]} fov={10} />
          <Model rotate={rotate} />
          <OrbitControls
            enableZoom={false}
            enablePan={true}
            enableRotate={true}
            maxPolarAngle={Math.PI}
            minPolarAngle={0}
            onStart={startUserInteraction}
            onEnd={endUserInteraction}
          />
        </Suspense>
      </Canvas>
      <p className="absolute bottom-[30vh] right-[35vw] w-[70vw] text-end">
        model {version}
      </p>
    </div>
  );
}
