import { useState , useEffect } from "react"
import { AnimatePresence , motion } from "framer-motion"
import { useSnapshot } from "valtio"
import config from "@/config/config"
import state from "@/store"
import { download, logoShirt, stylishShirt } from "@/assets"
import { downloadCanvasToImage , reader } from "@/config/helpers"
import { EditorTabs , FilterTabs , DecalTypes } from "@/config/constants"
import { fadeAnimation , slideAnimation } from "@/config/motion"
import { ColorPicker , FilePicker , CustomeButton , Tab } from "@/components"
import CanvasModel from "@/canvas"

function Customizer() {
    // const snap = useSnapshot(state)
    const [file , setFile] = useState('')
    const [activeEditorTab , setActiveEditorTab] = useState('')
    const [activeFilterTab , setActiveFilterTab] = useState({
        logoShirt:true,
        stylishShirt:false
    })
    

    
    // show tab content depending on the activeTab
    const generateTabContent = ()=>{
        switch(activeEditorTab){
            case "colorpicker":
                return <ColorPicker/>
            case "filepicker":
                return <FilePicker 
                file={file} 
                setFile={setFile} 
                readFile={readFile}
                />
            default:
                return null
        }
    }

    const handleActiveFilterTab=(tabName)=>{
        switch (tabName) {
            case "logoShirt":
                state.isLogoTexture = !state.isLogoTexture;
                break;
            case "stylishShirt":
                state.isFullTexture = !state.isFullTexture;
                break;
            default:
                state.isFullTexture = true
                state.isLogoTexture = false
                break;
        }
    }

    const handleDecals = (type , result) =>{
        const decalType = DecalTypes[type]
        state[decalType.stateProperty] = result

        if (!activeFilterTab[decalType.filterTab]) {
            handleActiveFilterTab(decalType.filterTab)
        }
    }

    const readFile = (type)=>{
        reader(file).then((res)=>{
            handleDecals(type , res)
            setActiveEditorTab("")
        })
    }
    useEffect(()=>{
        state.intro = false
    },[])
    return (
        <main className="app transition-all ease-in" key={1}>
        <CanvasModel />
        <AnimatePresence>
            
            <motion.div key="coustom" className="absolute top-0 left-0 z-10" {...slideAnimation('left')} >
                <div className="flex items-center min-h-screen">
                    <div className="editortabs-container tabs">
                        {EditorTabs.map((tab)=>{
                            return(
                                <Tab
                                key={tab.name}
                                tab={tab}
                                handleClick={()=>{activeEditorTab !=tab.name ? setActiveEditorTab(tab.name) : setActiveEditorTab('')}}
                                />
                            )
                        })}
                        {generateTabContent()}
                    </div>
                </div>
            </motion.div>
            <motion.div key="buu" className="absolute top-5 right-5 z-10" >
                    <CustomeButton type="filled" title="Go Back" to="/" customeStyles="w-fit px-4 py-2.5 font-bold text-sm" handleClick={()=>{state.intro = true}}/>
            </motion.div>
            <motion.div key="tt" className='filtertabs-container' {...slideAnimation("up")}>
                        {FilterTabs.map((e)=>{
                            return(
                                <Tab key={e.name} tab={e} handleClick={()=>{handleActiveFilterTab(e.name)}} isActiveTab = ""/>
                            )
                        })}
            </motion.div>
        </AnimatePresence>
        </main>
    )
}

export default Customizer