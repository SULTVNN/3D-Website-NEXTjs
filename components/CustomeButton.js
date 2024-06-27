import state from "@/store"
import { useSnapshot } from "valtio"
import Link from "next/link"
import { getContrastingColor } from "@/config/helpers"

function CustomeButton({type,handleClick, title ,to, customeStyles}) {
    const snap = useSnapshot(state)
    const generateStyle = (type)=>{
        if(type == 'filled'){
            return {
                backgroundColor :snap.color,
                color : getContrastingColor(snap.color)
            }
        }else if(type == "outline"){
            return{
                borderWidth:'1px',
                borderColor : getContrastingColor(snap.color),
                backgroundColor:getContrastingColor(snap.color),
                color : snap.color
            }
        }
    }
    return (
        <Link href={to ? to : ''} onClick={handleClick} className={`px-2 py-1.5 flex-1 rounded-md ${customeStyles}`} style={generateStyle(type)} >{title}</Link>
    )
}

export default CustomeButton