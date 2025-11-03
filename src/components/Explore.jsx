import React from 'react';
import toast from 'react-hot-toast';

const Explore = () => {
    const handleButtonClick=()=>{
        // console.log("kjafhaif");
        toast.success("vai you are done!");
    }
    return (
        <div>
            <h3>abc</h3>
            <button onClick={()=>handleButtonClick()} className='bg-red-500 px-3 py-1.5 text-white rounded-md cursor-pointer hover:opacity-80'>click here</button>
        </div>
    );
};

export default Explore;