import React, { useRef } from "react"
import { /*Canvas,*/ useThree, useLoader, useFrame } from "react-three-fiber"
import { useDrag, /*useHover*/ } from "react-use-gesture"
import { useSpring, a } from "react-spring/three"
import * as THREE from 'three';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib';

RectAreaLightUniformsLib.init()

function Obj() {
  
  const { size, viewport } = useThree()
  const aspect = size.width / viewport.width
  const [spring, set] = useSpring(() => ({
    scale: [3, 3, 3],
    position: [0, 0, 0],
    rotation: [0, 0,0 ],
    config: { mass: 10, friction: 50, tension: 50 }
  }))
  const bindDrag = useDrag(
    ({ offset: [x, y], vxvy: [vx, vy], down, ...props }) =>
      set({ rotation: [y / aspect, x / aspect, 0] }),
    { pointerEvents: true }
  )
  
  useFrame(() => {
    ref.current.rotation.y += 0.001
  })

  const ref = useRef()
  const texture = useLoader(THREE.TextureLoader, './mars9.jpg');
  
  return (
    <group ref={ref}>
      <ambientLight
      intensity={1.83}
      />
      
      <a.mesh {...spring} {...bindDrag()} castShadow >
        <sphereBufferGeometry attach="geometry" args={[1, 50, 50]} />
        <meshStandardMaterial attach="material" map={texture} />
        {/* <texture attach="map" image={img} onUpdate={self => img && (self.needsUpdate = true)} />  */}
      </a.mesh>
    </group>)
}
export default Obj;