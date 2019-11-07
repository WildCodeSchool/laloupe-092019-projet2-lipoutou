import React from "react"
import { /*Canvas,*/ useThree } from "react-three-fiber"
import { useDrag, /*useHover*/ } from "react-use-gesture"
import { useSpring, a } from "react-spring/three"


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
 
 return (
   <a.mesh {...spring} {...bindDrag()}  castShadow>
     <sphereBufferGeometry attach="geometry" args={[1,50,50]} />
     <meshNormalMaterial attach="material" />
   </a.mesh>
 )
}


export default Obj;