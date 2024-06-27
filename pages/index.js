import  {motion , AnimatePresence} from "framer-motion"
import { useSnapshot } from "valtio"
import state from "@/store"
import { CustomeButton } from "@/components"
import {headContainerAnimation , headTextAnimation , headContentAnimation , slideAnimation} from "@/config/motion"
import Customizer from "./customizer"
import CanvasModel from "@/canvas"
import { useEffect } from "react"
function Home() {
    const snap = useSnapshot(state)
    useEffect(()=>{
        state.intro = true
    },[])
    return (
        <main className="app transition-all ease-in">
        <AnimatePresence>
            <motion.section className="home" {...slideAnimation("left")}>
                <motion.header {...slideAnimation("down")}><img src="nike-logo-png-132.png" className="w-8 h-8 object-contain m-1"/></motion.header>
                <motion.div className="home-content" {...headTextAnimation}>
                    <h1 className="head-text">LET'S <br className="xl:block hidden"/>Do It.</h1>
                </motion.div>
                <motion.div {...headContentAnimation} className="flex flex-col gap-5">
                <p className="max-w-md font-normal text-gray-600 text-base">
                Create your unique and exclusive shirt with our brand-new 3D customization tool. <strong>Unleash your imagination</strong>{" "} and define your own style.
                </p>
                <CustomeButton type="filled" title="Customizer" to="/customizer" customeStyles = "w-fit px-4 py-2.5 font-bold text-sm" handleClick={()=>{state.intro = false}} />
                </motion.div>
            </motion.section>
        </AnimatePresence>
        <CanvasModel/>
        </main>
    )
}

export default Home