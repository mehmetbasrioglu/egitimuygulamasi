import React from 'react'

/**
 * 
 * Programı Yazan Kişi : Mehmet Basrioğlu
 * 
 * Emoji Picker in React JS
 * 
 * 
 * 
 * */
import hafifcegulumseyenyuz from "./Emojiler/hafifcegulumseyenyuz.png"
import hafifcegulumseyenyuz2 from "./Emojiler/hafifcegulumseyenyuz2.png"
import melekyuz from "./Emojiler/melekyuz.png"
import aglayanyuz from "./Emojiler/aglayanyuz.png"
import aglayanyuz2 from "./Emojiler/aglayanyuz2.png"
import dizzy from "./Emojiler/dizzyemoji.png"
import drooling from "./Emojiler/drooling.png"
import cowboy from "./Emojiler/cowboy.png"
import smillingfaceclosedeyes from "./Emojiler/smillingfaceclosedeyes.png"
import happy from "./Emojiler/happy.png"
import smiling from "./Emojiler/smiling.png"
import happy2 from "./Emojiler/happy2.png"
import grinmacing from "./Emojiler/grinmacing.png"
import smirk from "./Emojiler/smirk.png"
import sunglasses from "./Emojiler/sunglasses.png"
import think from "./Emojiler/think.png"
import unamused from "./Emojiler/unamused.png"
import sad from "./Emojiler/sad.png"
import worried from "./Emojiler/worried.png"
import surprised from "./Emojiler/surprised.png"
import withoutmouth from "./Emojiler/withoutmouth.png"
import expressionless from "./Emojiler/expressionless.png"
import flushed from "./Emojiler/flushed.png"
import frowning from "./Emojiler/frowning.png"
import wink from "./Emojiler/wink.png"
import hearteyes from "./Emojiler/hearteyes.png"
import hug from "./Emojiler/hug.png"
import tearslaugh from "./Emojiler/tearslaugh.png"

// Hand Emojis
import beslik from "./Emojiler/beslik.png"
import biceps from "./Emojiler/biceps.png"
import thumbsup from "./Emojiler/thumbsup.png"
import thumbsdown from "./Emojiler/thumbsdown.png"
import praying from "./Emojiler/praying.png"
import writing from "./Emojiler/writing.png"
import handshake from "./Emojiler/handshake.png"
import yumruk from "./Emojiler/yumruk.png"
import clap from "./Emojiler/clap.png"

//People Emojis

import man from "./Emojiler/man.png"
import woman from "./Emojiler/woman.png"
import santaclaus from "./Emojiler/santaclaus.png"

//Animal Emojis

import balik from "./Emojiler/balik.png"
import kaplumbag from "./Emojiler/kaplumbaga.png"
import yunus from "./Emojiler/yunus.png"
import at from "./Emojiler/at.png"

// ETC Emojis
import eyes from "./Emojiler/eyes.png"
import ikikalp from "./Emojiler/ikikalp.png"
import growingkalp from "./Emojiler/growingkalp.png"
import parlayankalp from "./Emojiler/parlayankalp.png"


//Icons
import {FaRegSmile,FaRegHandPeace,FaUser,FaCat,FaGifts} from "react-icons/fa"


// Sounds

import rollover from "./rollover.mp3"
import popup from "./rollover msg.mp3"

// JQuery
import $ from "jquery"



function Emojipicker() {

    const [smile,setSmile] = React.useState([
        {
            id:1,
            emoji:"🙂",
            emojiimg:hafifcegulumseyenyuz
        },
        {
            id:2,
            emoji:"🙃",
            emojiimg:hafifcegulumseyenyuz2
        },
        {
            id:3,
            emoji:"😇",
            emojiimg:melekyuz
        },
        {
            id:4,
            emoji:"😭",
            emojiimg:aglayanyuz
        },
        {
            id:5,
            emoji:"😢",
            emojiimg:aglayanyuz2
        },
        {
            id:6,
            emoji:"😵",
            emojiimg:dizzy
        },
        {
            id:7,
            emoji:"🤤",
            emojiimg:drooling
        },
        {
            id:8,
            emoji:"🤠",
            emojiimg:cowboy
        },
        {
            id:9,
            emoji:"😆",
            emojiimg:smillingfaceclosedeyes
        },
        {
            id:10,
            emoji:"😄",
            emojiimg:happy
        },
        {
            id:11,
            emoji:"😃",
            emojiimg:smiling
        },
        {
            id:12,
            emoji:"😁",
            emojiimg:happy2
        },
        {
            id:13,
            emoji:"😬",
            emojiimg:grinmacing
        }
        ,
        {
            id:14,
            emoji:"😏",
            emojiimg:smirk
        },
        {
            id:15,
            emoji:"😎",
            emojiimg:sunglasses
        },{
            id:16,
            emoji:"🤔",
            emojiimg:think
        },{
            id:17,
            emoji:"😒",
            emojiimg:unamused
        },{
            id:18,
            emoji:"😔",
            emojiimg:sad
        },{
            id:19,
            emoji:"😟",
            emojiimg:worried
        },{
            id:20,
            emoji:"😲",
            emojiimg:surprised
        },{
            id:21,
            emoji:"😶",
            emojiimg:withoutmouth
        },{
            id:22,
            emoji:"😑",
            emojiimg:expressionless
        },{
            id:23,
            emoji:"😳",
            emojiimg:flushed
        },{
            id:24,
            emoji:"😦",
            emojiimg:frowning
        },{
            id:25,
            emoji:"😉",
            emojiimg:wink
        },
        {
            id:26,
            emoji:"😍",
            emojiimg:hearteyes
        },{
            id:27,
            emoji:"🤗",
            emojiimg:hug
        },{
            id:28,
            emoji:"😂",
            emojiimg:tearslaugh
        },
        



    ]);

    const [hand,setHand] = React.useState([{
        id:1,
        emoji:"🙌",
        emojiimg:beslik
    },{
        id:2,
        emoji:"💪",
        emojiimg:biceps
    },{
        id:3,
        emoji:"👍",
        emojiimg:thumbsup
    },{
        id:4,
        emoji:"👎",
        emojiimg:thumbsdown
    },{
        id:5,
        emoji:"✍️",
        emojiimg:writing
    },{
        id:6,
        emoji:"👊",
        emojiimg:yumruk
    }
    ,{
        id:7,
        emoji:"🤝",
        emojiimg:handshake
    },{
        id:8,
        emoji:"👏",
        emojiimg:clap
    }


]
    )


    const [people,setPeople]  = React.useState([{
        id:1,
        emoji:"👨",
        emojiimg:man
    },{
        id:2,
        emoji:"👩",
        emojiimg:woman
    },{
        id:3,
        emoji:"🎅",
        emojiimg:santaclaus
    }

])

const [animals,setAnimals]  = React.useState([{
    id:1,
    emoji:"🐟",
    emojiimg:balik
},{
    id:2,
    emoji:"🐢",
    emojiimg:kaplumbag
},{
    id:3,
    emoji:"🐬",
    emojiimg:yunus
},{
    id:4,
    emoji:"🐎",
    emojiimg:at
}

])

const [etc,setEtc]  = React.useState([{
    id:1,
    emoji:"👀",
    emojiimg:eyes
},
{
    id:2,
    emoji:"💕",
    emojiimg:ikikalp
},
{
    id:3,
    emoji:"💗",
    emojiimg:growingkalp
},
{
    id:4,
    emoji:"💖",
    emojiimg:parlayankalp
}

])

const soundref = React.createRef(null)
const playsoundhover = (e) => {
soundref.current.play();
}
const stopsound = (e) => {
    soundref.current.pause();
    soundref.current.currentTime = 0;
    }
const soundref2 = React.createRef(null)
const emojisend = (e,emoji) => {

  
    alert(emoji)
}

    return (
        <div className="emojipicker">
            <audio ref={soundref} class="my_audio"  preload="none">
             <source src={rollover} type="audio/mpeg"/>
           </audio>
   
            <div className="emojiheader">
            <a href="#emojifaces" onMouseEnter={playsoundhover} onMouseLeave={stopsound}><FaRegSmile/></a>
            <a href="#hand" onMouseEnter={playsoundhover} onMouseLeave={stopsound}> <FaRegHandPeace/></a>
            <a href="#people" onMouseEnter={playsoundhover} onMouseLeave={stopsound}><FaUser/></a>
            <a href="#animal" onMouseEnter={playsoundhover} onMouseLeave={stopsound}><FaCat/></a>
            <a href="#etc" onMouseEnter={playsoundhover} onMouseLeave={stopsound}><FaGifts/></a>
            </div>
            <div className="emojipicker2" >
            <h4 id="emojifaces">Emoji Faces</h4>
            <div className="emojipickerarea" >
            {smile.map(data => (
                <span onClick={(e)=>emojisend(e,data.emoji)} onMouseEnter={playsoundhover} onMouseLeave={stopsound}>
                    <img src={data.emojiimg} />
                </span>
            ))}
            </div>
            <h4 id="hand">Hand Signs</h4>
            <div className="emojipickerarea">
            {hand.map(data => (
                <span onClick={(e) => alert(data.emoji)} onMouseEnter={playsoundhover} onMouseLeave={stopsound}>
                    <img src={data.emojiimg} />
                </span>
            ))}
            </div>
            <h4 id="people">People</h4>
            <div className="emojipickerarea">
            {people.map(data => (
                <span onClick={(e) => alert(data.emoji)} onMouseEnter={playsoundhover} onMouseLeave={stopsound}>
                    <img src={data.emojiimg} />
                </span>
            ))}
            </div>
            <h4 id="animal">Animals</h4>
            <div className="emojipickerarea">
            {animals.map(data => (
                <span onClick={(e) => alert(data.emoji)} onMouseEnter={playsoundhover} onMouseLeave={stopsound}>
                    <img src={data.emojiimg} />
                </span>
            ))}
            </div>
            <h4 id="etc">ETC</h4>
            <div className="emojipickerarea">
            {etc.map(data => (
                <span onClick={(e) => alert(data.emoji)} onMouseEnter={playsoundhover} onMouseLeave={stopsound}>
                    <img src={data.emojiimg} />
                </span>
            ))}
            </div>
            </div>
        </div>
    )
}

export default Emojipicker
