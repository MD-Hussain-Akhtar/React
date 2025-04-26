import React from 'react'


const itemContrent=["Convert"]
const button1=["Add","Subtraction","multipliction"]


const Crency = () => {
    return (
        <div className='place-self-center bg-slate-700 mt-5 rounded-2xl w-96 h-80'>
            <h1 className='bg-slate-300 text-3xl text-center'>Creancy Converater..</h1>
            <div className='flex'>
                <input type="number" 
                className='mt-3 p-5 rounded-2xl w-full' />
                <label htmlFor="" className='content-center bg-white mt-4 p-4'>item</label>
                </div>
  <input type="number" 
                className='mt-3 p-5 border-none rounded-2xl w-full' />

                <button className='bg-blue-300 mt-4 p-4 rounded-xl w-full text-center'>{itemContrent[0]}</button>
            

        </div>
        
    )
}

export default Crency