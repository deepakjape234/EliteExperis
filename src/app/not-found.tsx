"use client";

import Image from 'next/image';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import Link from 'next/link';
import { useRef, useMemo, useEffect } from 'react';

export default function Custom404() {
  return (
    <div className="relative min-h-screen bg-zinc-950 overflow-hidden w-full">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[0, 0, 10]} intensity={1.2} />
        <OrbitControls enableZoom={true} enablePan={true} autoRotate autoRotateSpeed={0.5} />
        <GalaxyPoints count={2000} />
      </Canvas>

      {/* Background Glow Overlay */}
      <Image
        src="/Vector 1.svg"
        alt="bg-curve"
        width={1463}
        height={579}
        className="absolute top-0 left-0 z-0 w-full h-full object-cover pointer-events-none"
      />

      <div className="relative z-20 flex flex-col items-center justify-center text-center min-h-screen px-4 pt-40">
        <Image src="/404.svg" alt="404" width={400} height={200} className="mb-6" />
        <Image src="/Page Not Found.svg" alt="Page Not Found" width={500} height={72} />

        <Link href="/" className="mt-6">
          <div className="px-6 py-3 bg-cyan-500 rounded-full flex items-center gap-2 hover:bg-cyan-600 transition-all">
            <span className="text-white text-lg font-medium font-[Montserrat]">Back to Home</span>
            <Image src="/Arrow R.svg" alt="Arrow Icon" width={24} height={24} />
          </div>
        </Link>
      </div>
    </div>
  );
}

const GalaxyPoints = ({ count = 1000 }: { count: number }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 8 + 2;
      const angle = Math.random() * 2 * Math.PI;
      const x = Math.cos(angle) * radius;
      const y = (Math.random() - 0.5) * radius;
      const z = Math.sin(angle) * radius;
      pos.push(new THREE.Vector3(x, y, z));
    }
    return pos;
  }, [count]);

  useEffect(() => {
    if (!meshRef.current) return;
    positions.forEach((pos, i) => {
      const matrix = new THREE.Matrix4();
      matrix.setPosition(pos);
      meshRef.current!.setMatrixAt(i, matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  }, [positions]);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.03, 6, 6]} />
      <meshStandardMaterial color={'green'} emissive={'green'} emissiveIntensity={0.6} />
    </instancedMesh>
  );
};