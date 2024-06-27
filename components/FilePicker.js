import React from 'react'
import CustomeButton from './CustomeButton'


function FilePicker({file , setFile , readFile}) {
    return (
        <div className='filepicker-container'>
            <div className='flex-1 flex flex-col'>
                <input id='file-upload' type='file' accept='image/*' onChange={(e)=> setFile(e.target.files[0])}/>
                <label htmlFor='file-upload' className='filepicker-label'>upload File</label>
                <p className='mt-2 text-gray-500 text-xs truncate'>
                    {file==='' ? 'No file selected yet' : file.name}
                </p>
                <div className='mt-24 flex flex-wrap gap-3'>
                    <CustomeButton type="outline" title="Logo" handleClick={()=>file===''?"error":readFile('logo')} customeStyles="text-xs"/>
                    <CustomeButton type="filled" title="Full" handleClick={()=>file===''?"error":readFile('full')} customeStyles="text-xs"/>
                </div>
            </div>
        </div>
    )
}

export default FilePicker