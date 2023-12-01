import React, {useState} from 'react';
import axios from 'axios';

const buttonIndex = [
    {id:1, text:'video1'},
    {id:2, text:'video2'},
    {id:3, text:'video3'},
    {id:4, text:'video4'},
    {id:5, text:'video5'},
  ]

const DataButton = () => {
    const [itemData, setItemData] = useState([])
    return(
    <>
    <div className="video_btn_box" id="draggable_div">
        {buttonIndex.map((item, idx)=>(
            <button key={idx} className='video_btn'
            
            onClick={()=>{
                axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${idx + 1}`)
                .then((Response)=>{
                    console.log(Response.data.data.movie)
                    const innerData = Response.data.status + idx
                    console.log(Response.data)
                    
                    setItemData(innerData)
                    console.log("a =" + itemData + idx)
                }).catch((Error)=>{
                    console.log(Error)
                })
                
            }}
            >
                {item.text}
            </button>
        ))}
        </div>
        <div className="video_box">
                <div className="video_over_box">
                    {itemData}
                </div>
            </div>
    </>
    )
}

export default DataButton;