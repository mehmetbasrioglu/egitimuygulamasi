/*

Perculus Yeni UI Kod Yazarı: Mehmet Basrioğlu
Kendimi Geliştirmek adına çalışmalar yapmaktayım.

Perculus New UI Code Writer: Mehmet Basrioğlu
i'm hard working for improve myself...

*/


import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import perculus from "./perculus.png"
import { Avatar } from '@material-ui/core';
import {FaBook,
  FaSmileWink,
  FaSmileBeam,
  FaSmile,
  FaLaughBeam,
  FaLaughSquint,
  FaRegHandPointer,
  FaVideoSlash,
  FaMicrophoneSlash,
  FaRegUser,
  FaComments,
  FaUserFriends,
  FaPlusCircle
} from "react-icons/fa"



import {BsClockHistory,BsList,BsThreeDotsVertical} from "react-icons/bs"



import {MdKeyboardArrowUp} from "react-icons/md"
import Emojipicker from './emojipicker/Emojipicker';
import Saat from './emojipicker/Saat';
import Katilimcilar from './Katilimcilar';



// Emoji Picker


var interval;
function App() {
  const [hoveremoji,setHover] = React.useState(1);
  const [emojipickerstate,setEmojiPickerState] = React.useState(false)
  const hover = (e) => {
    if(hoveremoji == 1){
      setHover(2);
    }
    else if(hoveremoji == 2){
      setHover(3);
    }
    else if(hoveremoji == 3){
      setHover(4);
    }
    else if(hoveremoji == 4){
      setHover(5);
    }
    else if(hoveremoji == 5){
      setHover(1);
    }
  }

  React.useEffect(() =>{
    sleep(1000).then(() =>
    hover());
  })

  const showemoji = (e) => {
    if(emojipickerstate){
      setEmojiPickerState(false)
    }
    else{
      setEmojiPickerState(true)
    }
  }


  const [sessionState,setSession] = React.useState(false)
  const [sessionState2,setSession2] = React.useState(true)
  const [TimeSession,setTimeSession] = React.useState(false)

  const startTime = ()=> {
    if(!interval){
      runTime();
    interval = setInterval(runTime,15);
    }
  }

  
  if(!sessionState){
    sleep(5000).then(() => {
      setSession(true);
    })
  }
  else{
    sleep(5000).then(() => {
      setSession2(false);



    })
  }


  const [time,setTime] = React.useState({ms:0,s:0,m:0,h:0});
  


  var updatedMs = time.ms,updatedS = time.s,updatedM = time.m,updatedH = time.h

const runTime = () => {
  if(updatedM === 60){
    updatedH++;
    updatedM = 0;
  }
  if(updatedS === 60){
    updatedM++;
    updatedS = 0;
  }
  if(updatedMs === 60){
    updatedS++;
    updatedMs = 0;
  }
  if(updatedMs === 100){
    updatedS++;
    updatedMs = 0;
  }
  updatedMs++;
  return setTime({ms:updatedMs,s:updatedS,m:updatedM,h:updatedH})
}

if(!sessionState2){
  startTime();
}

const [headerState,setHeaderTabIndex] = React.useState(1);

  return (
    <div className="App">
      <div className="App_body">
        {sessionState2  ? <img src={perculus} className="img"/> :  ""}
        {!sessionState2 ? (
          <>
          <div className="sessiondiv">
            <div className="sessionmid">
            <div className="session_header">
            <div className="sessionlogo">
            <img src={perculus} />
            </div>
            <h4>Ekran Paylaşımı</h4>
            <div className="span2">
            <span><BsClockHistory/> </span>

            {/* SAAT SÜRESİ */}
            <Saat time={time}/>


            <span><BsList/></span>
            </div>
            </div>
            <div className="sessionvideo">
            <iframe  src="https://www.youtube.com/embed/mf6ljwlObdg?autoplay=1&" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
            <div className="session_sozisteme">
              <span><Avatar 
               src="https://i.pinimg.com/564x/b9/1b/9e/b91b9eea8273eb38650c81e2b10e25a3.jpg"
               />
               <p>Öğr. Elon Musk</p></span>
               <div class="session_sozisteme2">
               <FaRegHandPointer/>
               </div>
            </div>
            </div>
            {/* Konuşmacı Alanı */}
            <div class="session_chatter">
              <div className="konusmaciheader">
                <span><FaVideoSlash/></span>
                <span><FaMicrophoneSlash/></span>
                <span><BsThreeDotsVertical/></span>
              </div>
              <div className="rtcvideo">
              <Avatar 
               src="https://i.pinimg.com/564x/b9/1b/9e/b91b9eea8273eb38650c81e2b10e25a3.jpg"
               />
               <p>Öğr. Elon Musk</p>
                </div>
              <div className="rtcchat">
                <div className="rtcchat_header">
                  <span  onClick={(e)=> {setHeaderTabIndex(1)}} className={headerState == 1 ? "rtcchat_span_aktif": "" }><FaComments/></span>
                  <span onClick={(e)=> {setHeaderTabIndex(2)}} className={headerState == 2 ? "rtcchat_span_aktif": "" }><FaUserFriends/></span>
                  <span><BsList/></span>
                </div>

                <div className="rtcchat_mid">
                  {headerState == 1 ? (
                    <div className="rtcchat_sidebar">
                    <div className="rtcchat_g">
                      <span>G</span>
                    </div>
                    <FaPlusCircle/>
                  </div>
                  ):""}
                  <div className="rtcchat_chatzone">
                    {/* Chat Konusma Alanı */}
                   {headerState == 1 ?(
                        <>
                        <div className="sender">
                        <h5>Öğr. Elon Musk</h5>
                        <p>
                        Merhaba Gençler. Hoşgeldiniz 
                      
                        </p>
                        <span>17:00</span>
                      </div>
                      <div className="sender reciev">
                        <h5>Mehmet Basrioğlu</h5>
                        <p>
                        Selam Hoşgeldin !
                      
                        </p>
                        <span>17:00</span>
                      </div>
                      </>
                   ):""}

                   {headerState == 2 ? (
                     <>
                     <Katilimcilar/>
                     </>
                   ):""}

                  </div>
                </div>

                <div className="rtcchatinput">
                <input type="text" placeholder="Ne Düşünüyorsun ? Mehmet" />
                <div className="App_resp" >
                  {emojipickerstate ? <Emojipicker/>: ""}
                  <div onClick={showemoji} style={{marginLeft:"10px"}}>
                  {hoveremoji === 1 ? <FaSmile  /> : ""}
                 {hoveremoji === 2 ? <FaSmileBeam  /> : ""}
                 {hoveremoji === 3 ? <FaSmileWink    /> : ""}
                 {hoveremoji === 4 ? <FaLaughBeam   /> : ""}
                 {hoveremoji === 5 ? <FaLaughSquint   /> : ""}
                  </div>
                  </div>
                 <MdKeyboardArrowUp/>
                </div>

              </div>

            </div>
          </div>
          </>
        ):""}
        {!sessionState ? (
          <>
          
               <p>Yöneticinin dersi başlatması bekleniyor.</p>
               <div className="App_chat">
                 <div className="App_ders">
                   <Avatar
                   src="https://i.pinimg.com/564x/b9/1b/9e/b91b9eea8273eb38650c81e2b10e25a3.jpg"
                   className="avatar"/>
                   <p>Öğr. Elon Musk</p>
                   <FaBook className="svg"/>
                   <p>Internet Programcılığı</p>
                 </div>
                 <div className="App_chatarea">
                 <div className="sender">
                   <h5>Öğr. Elon Musk</h5>
                   <p>
                   Merhaba Gençler. Hoşgeldiniz 
                 
                   </p>
                   <span>17:00</span>
                 </div>
                 <div className="sender reciev">
                   <h5>Mehmet Basrioğlu</h5>
                   <p>
                   Selam Hoşgeldin !
                 
                   </p>
                   <span>17:00</span>
                 </div>
               </div>
       
                <div className="App_msg">
                  
                  <input type="text" placeholder="Ne Düşünüyorsun ? Mehmet" />
                  <div className="App_resp" >
                  {emojipickerstate ? <Emojipicker/>: ""}
                  <div onClick={showemoji} style={{marginLeft:"10px"}}>
                  {hoveremoji === 1 ? <FaSmile  /> : ""}
                 {hoveremoji === 2 ? <FaSmileBeam  /> : ""}
                 {hoveremoji === 3 ? <FaSmileWink    /> : ""}
                 {hoveremoji === 4 ? <FaLaughBeam   /> : ""}
                 {hoveremoji === 5 ? <FaLaughSquint   /> : ""}
                  </div>
                  </div>
                 <MdKeyboardArrowUp/>
                </div>
               </div>
        
        </>
        ):""}
     {/* Chat Bölgesi */}
      </div>
      <div class="custom-shape-divider-top-1609874504">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path fill="#7DC24F" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path fill="#7DC24F" d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path fill="#7DC24F" d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>

    </div>
  );
}
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}



export default App;
