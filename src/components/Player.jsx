import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box } from '@react-three/drei'
import { keys } from '../utils/controls' // Add this import

export function Player() {
  const playerRef = useRef()
  const speed = 0.1
  
  useFrame((state, delta) => {
    if (playerRef.current) {
      // Basic keyboard controls
      const { current: player } = playerRef
      
      if (keys['w']) player.position.z -= speed
      if (keys['s']) player.position.z += speed
      if (keys['a']) player.position.x -= speed
      if (keys['d']) player.position.x += speed
    }
  })

  return (
    <Box
      ref={playerRef}
      position={[0, 1, 0]}
      scale={[1, 2, 1]}
    >
      <meshStandardMaterial color="#00ff00" />
    </Box>
  )
}
