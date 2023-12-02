import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import $ from 'jquery'
import axios from 'axios';
import React, { useState } from 'react';
import DataButton from './DataButton';

import CardCss from './CardCss';

function App() {
  
  return (
    <>
    <section className="main_section">
    <div className="header_wrap">
        <header>
            <nav className="">
                <div className="logo_box"><img src="./image/logo.svg" alt="#" /></div>
                <div className="control_box">
                    <button className="button_box" type="button">
                        <svg id="그룹_8" data-name="그룹 8" xmlns="http://www.w3.org/2000/svg" width="46.7" height="46.7"
                             viewBox="0 0 46.7 46.7">
                            <g id="그룹_7" data-name="그룹 7" transform="translate(0 0)">
                                <g id="그룹_5" data-name="그룹 5">
                                    <path id="패스_20" data-name="패스 20"
                                          d="M131.164,111.1v-6.578H124.9a17.3,17.3,0,0,0-2.677-6.465l4.432-4.432L122,88.978l-4.432,4.432a17.3,17.3,0,0,0-6.465-2.675v-6.27h-6.578v6.271a17.3,17.3,0,0,0-6.464,2.676l-4.433-4.433-4.651,4.651,4.433,4.433a17.3,17.3,0,0,0-2.676,6.464H84.464V111.1h6.27a17.3,17.3,0,0,0,2.675,6.465L88.978,122l4.651,4.651,4.432-4.432a17.3,17.3,0,0,0,6.465,2.677v6.269H111.1V124.9a17.3,17.3,0,0,0,6.466-2.676L122,126.65,126.651,122l-4.431-4.431A17.3,17.3,0,0,0,124.9,111.1h6.269Zm-23.349,7.373a10.661,10.661,0,1,1,10.661-10.661A10.673,10.673,0,0,1,107.815,118.476Z"
                                          transform="translate(-84.464 -84.464)"/>
                                </g>
                            </g>
                        </svg>
                        <p>실행</p>
                    </button>
                    <button className="button_box" type="button">
                        <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" width="40.784"
                             height="46.7" viewBox="0 0 40.784 46.7">
                            <g id="_27.Power" data-name="27.Power" transform="translate(0 0)">
                                <g id="icon">
                                    <path id="패스_15" data-name="패스 15" d="M70.37,31h5.842V54.346H70.37Z"
                                          transform="translate(-52.933 -31)" fill="#ccc"/>
                                    <path id="패스_16" data-name="패스 16"
                                          d="M77.543,63.47A20.457,20.457,0,0,1,57.118,83.9a2.512,2.512,0,0,1-.394,0,20.41,20.41,0,0,1-5.437-39.948v6.226A14.573,14.573,0,0,0,56.723,78.1h.394a14.573,14.573,0,0,0,5.831-27.984V43.89A20.467,20.467,0,0,1,77.543,63.47Z"
                                          transform="translate(-36.759 -37.203)"/>
                                </g>
                            </g>
                        </svg>
                        <p>종료</p>
                    </button>
                    <button className="button_box" type="button">
                        <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" width="40.991"
                             height="39.867" viewBox="0 0 40.991 39.867">
                            <g id="_23.Restart" data-name="23.Restart" transform="translate(0)">
                                <g id="Icon">
                                    <path id="Icon-2" data-name="Icon"
                                          d="M66.71,66.037A20.668,20.668,0,0,1,37.48,36.826c0-.028.06-.055.078-.092l-3.436-3.426H45.05l.028,10.927-3.454-3.426a.4.4,0,0,0-.078.064,15.107,15.107,0,1,0,17.233-2.756V31.87a20.668,20.668,0,0,1,7.96,34.167Z"
                                          transform="translate(-31.79 -31.87)"/>
                                </g>
                            </g>
                        </svg>
                        <p>재시작</p>
                    </button>
                </div>
                <div className="current_box">
                    <div>
                        <p className="gray_text">
                            현재상태
                        </p>

                        <p className="white_text">
                            오류
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23">
                            <g id="그룹_58" data-name="그룹 58" transform="translate(-1060 -76)">
                                <g id="그룹_57" data-name="그룹 57" transform="translate(0 -12)">
                                    <circle id="타원_16" data-name="타원 16" cx="11.5" cy="11.5" r="11.5"
                                            transform="translate(1060 88)" fill="#d83b2f"/>
                                </g>
                                <g id="Layer_6" data-name="Layer 6" transform="translate(1046.525 78.97)">
                                    <path id="패스_3400" data-name="패스 3400"
                                          d="M26.3,3.09A1.8,1.8,0,0,0,23.18,4.449l.475,6a1.324,1.324,0,0,0,2.639,0l.475-6A1.8,1.8,0,0,0,26.3,3.09Z"
                                          transform="translate(0 0)" fill="#fff"/>
                                    <path id="패스_3401" data-name="패스 3401"
                                          d="M27.12,49.27a1.248,1.248,0,1,0,1.246,1.248A1.248,1.248,0,0,0,27.12,49.27Z"
                                          transform="translate(-2.145 -37.22)" fill="#fff"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div>
                        <p className="white_text">
                            SD카드 삽입
                        </p>
                        <button className="on_off_btn" type="button">
                            <span className="sd_selector"></span>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    </div>
    <div className="render_box">
        <div className="video_wrap">
                <DataButton />
                
        </div>
        <div className="data_box">
            <div className="state_change_box">
                <button type="button" className="state_change_btn">상태값 변경</button>
            </div>
            <div className="screen_box">
                <div className="is_screen">
                    <span className="green_text">CPU온도</span>
                    <h2 className="white_text warning">65&#186;C</h2>
                </div>
                <div className="is_screen">
                    <span className="green_text">외부날씨</span>
                    <h2 className="white_text caution">13&#186;C</h2>
                </div>
                <div className="is_screen">
                    <span className="green_text">배터리</span>
                    <h2 className="white_text">82&#37;</h2>
                </div>
                <div className="is_screen">
                    <span className="green_text">작동상태</span>
                    <h2 className="white_text">정상</h2>
                </div>
            </div>
            <div className="textarea_box">
                <textarea name="" id="" cols="30" rows="10" className="state_textarea" value={'ass'} 
                onChange={(e)=>{console.log(e.target.value)}}
                />
            </div>
        </div>
    </div>

    <div className="temporary_button_wrap">
        <button className="alert_handler" type="button">임시 alert 팝업 띄우기</button>
        <button className="confirm_handler" type="button">임시 confirm 팝업 띄우기</button>
    </div>
    
    <CardCss/> 

</section>

<div className="alert_pop pop_content">
    <img src="./image/alert.svg" alt="#" className="alert_icon" />
    <h2 className="alert_title">변경을 <span className="blue_text alert_blue">취소</span>하고 나가시겠습니까?</h2>
    <p className="alert_text">선택한 내용들은 모두 초기화 됩니다.</p>
    <div className="alert_btn_box">
        <button className="cancel_btn" id="alert_cancel" type="button">취소</button>
        <button className="agree_btn" id="alert_confirm" type="submit">확인</button>
    </div>
</div>

<div className="confirm_pop pop_content">
    <div className="confirm_title_box">
        <div className="confirm_title_wrap">
            <h2 className="confirm_title">프로그램 변경 안내</h2>
        </div>
        <div className="close_box">
            <button className="close_btn" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16.124" height="16.064" viewBox="0 0 16.124 16.064">
                    <path id="패스_3396" data-name="패스 3396"
                          d="M4.164,18.838a.536.536,0,0,0,.758,0l6.584-6.584,6.587,6.584a.536.536,0,0,0,.758-.758L12.265,11.5l6.584-6.587a.536.536,0,0,0-.758-.758l-6.584,6.587L4.92,4.154a.536.536,0,0,0-.755.755L10.748,11.5,4.164,18.083a.536.536,0,0,0,0,.755Z"
                          transform="translate(-3.447 -3.431)" strokeWidth="1"/>
                </svg>
            </button>
        </div>
    </div>
    <div className="confirm_text_box">
        <p className="confirm_text">
            지금 당신의 계정 상태가 변경되었습니다! <br/>
            이 변경은 [변경 내용 간략 설명]과 관련이 있습니다. <br />
            변경에 동의하지 않거나 추가 문의사항이 있으시면 언제든지 <br/>
            연락 주세요. 감사합니다.
        </p>
    </div>
    <div>
        <button className="cancel_btn" id="confirm_cancel" type="button">취소</button>
        <button className="agree_btn" id="confirm_confirm" type="submit">변경</button>
    </div>
    
    
</div>


<div className="background_wrapper"></div>
    </>
  );
}

export default App;
