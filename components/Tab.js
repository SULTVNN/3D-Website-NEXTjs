import React from 'react'
import Image from 'next/image';
import { useSnapshot } from 'valtio'
import state from '@/store'
function Tab({tab , isFillterTab , isActiveTab , handleClick}) {
    const snap = useSnapshot(state)
    const activeStyles = isFillterTab && isActiveTab ? {backgroundColor : snap.color , opcity:0.5} : {backgroundColor:"transparent" , opcity:1}
    return (
        <div 
        style={activeStyles} 
        key={tab.name} 
        className={`tab-btn ${isFillterTab ? 'rounded-full glassmorhism ' : 'rounded-4'}`} 
        onClick={handleClick}
        >
            <Image src={tab.icon} alt={tab.name} className={`${isFillterTab ? 'w-2/3 h-2/3' : 'w-11/12 h-11/12 object-contain'}`}/>
        </div>
    )
}

export default Tab