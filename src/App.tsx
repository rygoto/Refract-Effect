import React, { Suspense, VFC } from 'react';
import { OrbitControls, Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Refract } from './components/Refract';

function App() {

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <Canvas
        camera={{
          position: [0, 0, 3],
          fov: 50,
          aspect: window.innerWidth / window.innerHeight,
          near: 0.1,
          far: 2000
        }}
        dpr={window.devicePixelRatio}
        shadows >
        <color attach="background" args={['#000']} />
        <Suspense fallback={null}>
          <Refract />
        </Suspense>
        <OrbitControls />
      </Canvas >
    </div >
  )
}

export default App
