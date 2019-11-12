import React, { useRef } from "react"
import { /*Canvas,*/ useThree, useLoader } from "react-three-fiber"
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
    rotation: [0, 0, 0],
    config: { mass: 3, friction: 40, tension: 800 }
  }))
  const bindDrag = useDrag(
    ({ offset: [x, y], vxvy: [vx, vy], down, ...props }) =>
      set({ rotation: [y / aspect, x / aspect, 0] }),
    { pointerEvents: true }
  )

  const ref = useRef()
  const texture = useLoader(THREE.TextureLoader, './mars1.jpeg');

  return (
    <group ref={ref}>
      <rectAreaLight
        intensity={1}
        position={[5, 5, 5]}
        width={100}
        height={1000}
      />
      <rectAreaLight
        intensity={5}
        position={[-5, -5, -5]}
        width={100}
        height={1000}
      />
      <a.mesh {...spring} {...bindDrag()} castShadow >
        <sphereBufferGeometry attach="geometry" args={[1, 50, 50]} />
        <meshStandardMaterial attach="material" map={texture} />
        {/* <texture attach="map" image={img} onUpdate={self => img && (self.needsUpdate = true)} />  */}
      </a.mesh>
    </group>)
}




export default Obj;