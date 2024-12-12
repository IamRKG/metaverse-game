import { Canvas } from '@react-three/fiber'
import { Sky, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { World } from './World'
import { Player } from './Player'

export function MetaverseGame() {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 5, 10]} />
      <OrbitControls />
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <World />
      <Player />
    </Canvas>
  )
}
