import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";
import { MeshDistortMaterial, Float } from "@react-three/drei";

// Mouse interaction hook
function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return mousePosition;
}

// Particle system
function Particles() {
  const particlesRef = useRef<THREE.Points>(null);
  const mouse = useMousePosition();

  const [positions, colors] = useMemo(() => {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const colorPalette = [
      new THREE.Color("#00ffff"),
      new THREE.Color("#a855f7"),
      new THREE.Color("#ec4899"),
      new THREE.Color("#06b6d4"),
    ];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (!particlesRef.current) return;

    const time = state.clock.elapsedTime;
    const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const z = positions[i + 2];

      positions[i + 1] = y + Math.sin(time + x) * 0.001;
      positions[i] = x + Math.cos(time + y) * 0.001;
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true;
    particlesRef.current.rotation.y = time * 0.05;
    
    // Mouse interaction
    particlesRef.current.rotation.x = mouse.y * 0.2;
    particlesRef.current.rotation.z = mouse.x * 0.1;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.5}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Camera controller with mouse interaction
function CameraRig() {
  const mouse = useMousePosition();
  const { camera } = useThree();

  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 0.5, 0.03);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 0.5, 0.03);
  });

  return null;
}

// Floating Icosahedron
function FloatingIcosahedron() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useMousePosition();

  useFrame((state) => {
    if (!meshRef.current) return;
    
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.15 + mouse.y * 0.1;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 + mouse.x * 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh ref={meshRef} position={[-3, 1, -2]}>
        <icosahedronGeometry args={[1.2, 1]} />
        <MeshDistortMaterial
          color="#00ffff"
          attach="material"
          distort={0.3}
          speed={1.2}
          roughness={0}
          metalness={0.9}
          emissive="#00ffff"
          emissiveIntensity={0.9}
          toneMapped={false}
        />
      </mesh>
    </Float>
  );
}

// Animated Torus Knot
function AnimatedTorusKnot() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useMousePosition();

  useFrame((state) => {
    if (!meshRef.current) return;
    
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.1 + mouse.x * 0.15;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.15 + mouse.y * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={1}>
      <mesh ref={meshRef} position={[3, -1, -3]}>
        <torusKnotGeometry args={[1, 0.3, 128, 32, 2, 3]} />
        <MeshDistortMaterial
          color="#a855f7"
          attach="material"
          distort={0.25}
          speed={1}
          roughness={0.1}
          metalness={0.95}
          emissive="#a855f7"
          emissiveIntensity={0.8}
          toneMapped={false}
        />
      </mesh>
    </Float>
  );
}

// Pulsating Sphere
function PulsatingSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useMousePosition();

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const scale = 1 + Math.sin(state.clock.elapsedTime * 1) * 0.1;
    meshRef.current.scale.set(scale, scale, scale);
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.08 + mouse.y * 0.15;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.08 + mouse.x * 0.15;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={meshRef} position={[0, -2, -4]}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <MeshDistortMaterial
          color="#ff66d9"
          attach="material"
          distort={0.3}
          speed={1.2}
          roughness={0}
          metalness={0.9}
          emissive="#ff66d9"
          emissiveIntensity={0.8}
          toneMapped={false}
        />
      </mesh>
    </Float>
  );
}

// Animated Octahedron
function AnimatedOctahedron() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useMousePosition();

  useFrame((state) => {
    if (!meshRef.current) return;
    
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.25 + mouse.x * 0.2;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.15 + mouse.y * 0.15;
  });

  return (
    <Float speed={2.2} rotationIntensity={1} floatIntensity={1.2}>
      <mesh ref={meshRef} position={[2, 2, -5]}>
        <octahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#06b6d4"
          attach="material"
          distort={0.3}
          speed={1.3}
          roughness={0.1}
          metalness={0.95}
          emissive="#06b6d4"
          emissiveIntensity={0.9}
          toneMapped={false}
        />
      </mesh>
    </Float>
  );
}

// Floating Torus
function FloatingTorus() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useMousePosition();

  useFrame((state) => {
    if (!meshRef.current) return;
    
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 + mouse.y * 0.12;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.1 + mouse.x * 0.12;
  });

  return (
    <Float speed={1.6} rotationIntensity={0.6} floatIntensity={0.9}>
      <mesh ref={meshRef} position={[-2, 1, -6]}>
        <torusGeometry args={[1.2, 0.4, 32, 100]} />
        <MeshDistortMaterial
          color="#ec4899"
          attach="material"
          distort={0.2}
          speed={1}
          roughness={0}
          metalness={0.9}
          emissive="#ec4899"
          emissiveIntensity={0.8}
          toneMapped={false}
        />
      </mesh>
    </Float>
  );
}

// Animated Dodecahedron
function AnimatedDodecahedron() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useMousePosition();

  useFrame((state) => {
    if (!meshRef.current) return;
    
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.12 + mouse.x * 0.17;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.17 + mouse.y * 0.12;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.7}>
      <mesh ref={meshRef} position={[0, 3, -4]}>
        <dodecahedronGeometry args={[0.8, 0]} />
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.25}
          speed={1.1}
          roughness={0.2}
          metalness={0.95}
          emissive="#8b5cf6"
          emissiveIntensity={0.9}
          toneMapped={false}
        />
      </mesh>
    </Float>
  );
}

// DNA Helix
function DNAHelix() {
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useMousePosition();

  useFrame((state) => {
    if (!groupRef.current) return;
    
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.15 + mouse.x * 0.1;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
  });

  return (
    <group ref={groupRef} position={[-4, -1, -7]}>
      {Array.from({ length: 20 }).map((_, i) => {
        const angle = (i / 20) * Math.PI * 4;
        const y = (i / 20) * 4 - 2;
        return (
          <Float key={i} speed={1 + i * 0.1} rotationIntensity={0.2} floatIntensity={0.3}>
            <mesh position={[Math.cos(angle) * 0.5, y, Math.sin(angle) * 0.5]}>
              <sphereGeometry args={[0.1, 16, 16]} />
              <meshStandardMaterial
                color={i % 2 === 0 ? "#00ffff" : "#a855f7"}
                emissive={i % 2 === 0 ? "#00ffff" : "#a855f7"}
                emissiveIntensity={1.2}
                metalness={0.9}
                roughness={0}
                toneMapped={false}
              />
            </mesh>
          </Float>
        );
      })}
    </group>
  );
}

export const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none -z-10 opacity-50">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 0.8
        }}
      >
        {/* Transparent background */}
        <fog attach="fog" args={["#000000", 8, 25]} />
        
        {/* Subtle Lighting for Premium Neon Glow */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#00ffff" distance={25} decay={2} />
        <pointLight position={[-10, -10, -10]} intensity={1.8} color="#a855f7" distance={25} decay={2} />
        <pointLight position={[0, 10, 5]} intensity={1.5} color="#ec4899" distance={20} decay={2} />
        <pointLight position={[-5, -5, 5]} intensity={1.5} color="#06b6d4" distance={20} decay={2} />
        <spotLight 
          position={[5, 5, 5]} 
          intensity={1.8} 
          color="#06b6d4" 
          angle={0.5} 
          penumbra={1} 
          distance={30}
          decay={2}
        />
        
        {/* 3D Objects */}
        <FloatingIcosahedron />
        <AnimatedTorusKnot />
        <PulsatingSphere />
        <AnimatedOctahedron />
        <FloatingTorus />
        <AnimatedDodecahedron />
        <DNAHelix />
        
        {/* Particle System */}
        <Particles />
        
        {/* Camera Interaction */}
        <CameraRig />
      </Canvas>
    </div>
  );
};
