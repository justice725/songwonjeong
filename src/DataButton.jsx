import React, {useState} from 'react';
import axios from 'axios';

const buttonIndex = [ // 버튼 개수 및 키값을 어레이 형식으로 정의하기
    {id:1, text:'video1'},
    {id:2, text:'video2'},
    {id:3, text:'video3'},
    {id:4, text:'video4'},
    {id:5, text:'video5'},
  ]

const DataButton = () => {
    const [itemData, setItemData] = useState([]) // api로 받아오는 데이터를 담을 리스트 형식의 state 정의하기
    return(
    <>
    <div className="video_btn_box" id="draggable_div">
        {buttonIndex.map((item, idx)=>(// 버튼을 개수만큼 만들어내기 
            <button key={idx} className='video_btn' 
            
            onClick={()=>{
                axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${idx + 1}`)
                .then((Response)=>{ // api 연동이 성공했을 때!!
                    console.log(Response.data) // 콘솔에서 어떤 데이터를 넘겨오는지 확인하기
                    console.log(Response.data.data.movie) // 제가 원하는 데이터는 이거에요
                    const innerData = Response.data.data.movie 
    
                    setItemData(innerData) // 미리 준비한 state에 api로 가져온 데이터 넣어버리기
                }).catch((Error)=>{ // api 연동이 실패했을 때!
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
                    <ul>
                        <li><img src={itemData.medium_cover_image} alt="#" /></li>
                        <li>{itemData.year}</li>
                        <li>{itemData.date_uploaded}</li>
                        <li>{itemData.title}</li>
                    </ul>
                </div>
            </div>
    </>
    )
}

export default DataButton;