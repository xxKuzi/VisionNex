// src/components/RotatingModel.js
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

function RotatingModel({ model }) {
  const meshRef = useRef();

  // Randomize rotation axes
  const randomRotation = {
    x: 0.1,
    y: 0.1,
    z: 0.1,
  };

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += randomRotation.x * 0.01;
      meshRef.current.rotation.y += randomRotation.y * 0.01;
      meshRef.current.rotation.z += randomRotation.z * 0.01;
    }
  });

  return <primitive ref={meshRef} object={model} />;
}

export default RotatingModel;
