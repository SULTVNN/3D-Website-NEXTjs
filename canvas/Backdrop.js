import { easeing } from "maath"
import { useFrame } from "@react-three/fiber"
import { AccumulativeShadows , RandomizedLight } from "@react-three/drei"
import { useRef } from "react"


function Backdrop() {
    const shadows = useRef()
    return (
        <AccumulativeShadows
        position={[0,0,-0.14]} 
        ref={shadows}
        // temporal 
        frames={60} 
        alphaTest={0.25} 
        scale={5} 
        rotation={[Math.PI/2 , 0 ,0]}
        color="white"
        >
            <RandomizedLight
            amount={4}
            radius={9}
            intensity={0.55}
            ambient={0.25}
            position={[5,5,-10]}
            />
            <RandomizedLight
            amount={4}
            radius={5}
            intensity={0.25}
            ambient={0.55}
            position={[-5,5,-8]}
            />
        </AccumulativeShadows>
    )
}

export default Backdrop