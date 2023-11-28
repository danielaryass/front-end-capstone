'use client';
import axios from 'axios';
export default function Page(){
    const handleClick = async() =>{
        const response = await axios.get('/api/get');
        console.log(response);
    }
    return(
        <div className="">
            <button className="p-4" onClick={handleClick}>Klik Me</button>
        </div>
    )
}