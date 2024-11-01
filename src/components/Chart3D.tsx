import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

interface BarProps {
  position: [number, number, number];
  height: number;
  color: string;
}

function Bar({ position, height, color }: BarProps) {
  const mesh = useRef<any>();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh position={position} ref={mesh}>
      <boxGeometry args={[1, height, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

interface MonthlyData {
  month: string;
  activeUsers: number;
  revenue: number;
}

interface Chart3DProps {
  data?: MonthlyData[];
}

export default function Chart3D({ data = [] }: Chart3DProps) {
  const maxRevenue = Math.max(...data.map(item => item.revenue));
  const normalizedData = data.map(item => ({
    ...item,
    normalizedRevenue: (item.revenue / maxRevenue) * 5
  }));

  return (
    <div className="h-[400px] w-full bg-gray-900 rounded-xl border border-gray-800">
      <Canvas camera={{ position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {normalizedData.map((item, index) => (
          <Bar
            key={item.month}
            position={[(index - 2.5) * 1.5, item.normalizedRevenue / 2, 0]}
            height={item.normalizedRevenue}
            color={`hsl(${index * 60}, 70%, 60%)`}
          />
        ))}
        <OrbitControls />
      </Canvas>
    </div>
  );
}