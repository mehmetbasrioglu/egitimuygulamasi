import React from 'react'
import {FaSearch,FaUser} from "react-icons/fa"
import {MdLiveTv} from "react-icons/md"
import {GoBookmark} from "react-icons/go"
import { Avatar } from '@material-ui/core'
function Katilimcilar() {

   const [katilimcilar,setKatilimcilar] = React.useState([{
       id:1,
       username:"Öğr. Elon Musk",
       isMe:false,
       photoURL:"https://i.pinimg.com/564x/b9/1b/9e/b91b9eea8273eb38650c81e2b10e25a3.jpg",
       kamera:false,
       yetki:true

   },{
    id:2,
    username:"Mehmet Basrioğlu",
    isMe:true,
    photoURL:"https://i.pinimg.com/564x/43/e8/49/43e849a97dba66ec73729e69557687ca.jpg",
    kamera:false,
    yetki:false,


}
])

    return (
        <div className="katilimcilar">
            <div className="katilimcilar_header">
                <div className="katilimcilar_header2">
                <h4>Katılımcılar</h4>
                <span>{katilimcilar.length}</span>
                </div>
                <FaSearch/>
            </div>
        
        <div className="katilimcilar_mid">
            {katilimcilar.map(data => (
                <>
                <div className="katilimcilar_item">
                <div className="katilimcilar_name">
                <span><Avatar src={data.photoURL}/></span>
                <h4 className={data.isMe ? "boldusername" : "normalusername"}>{data.username}</h4>
                </div>
                <span className="katilimcilar_roundbadge"></span>
                <div className="katilimcilar_yetki">
                {data.kamera ? <MdLiveTv/>:""}
                {data.yetki ? <GoBookmark/>:""}
                </div>
            </div>
            </>
            ))}
        </div>
        </div>
    )
}

export default Katilimcilar
