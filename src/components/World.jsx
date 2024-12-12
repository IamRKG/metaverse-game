import { useRef } from 'react'
import { Box } from '@react-three/drei'

export function World() {
  const floorRef = useRef()

  return (
    <>
      {/* Ground */}
      <Box
        ref={floorRef}
        position={[0, -0.5, 0]}
        scale={[50, 1, 50]}
        receiveShadow
      >
        <meshStandardMaterial color="#53ad53" />
      </Box>
      
      {/* Some decorative cubes */}
      <Box position={[-4, 1, -4]} scale={[1, 2, 1]}>
        <meshStandardMaterial color="#904e95" />
      </Box>
      <Box position={[4, 1, 4]} scale={[1, 2, 1]}>
        <meshStandardMaterial color="#904e95" />
      </Box>
    </>
  )
}
