"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, useTexture } from "@react-three/drei";

function Globe() {
  const texture = useTexture("/textures/earthmap.jpg"); // Load from public folder

  return (
    <Sphere args={[1, 64, 64]}>
      <meshStandardMaterial map={texture} />
    </Sphere>
  );
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <Globe />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
