import React from 'react'
import "./Home.css"
import {motion} from "framer-motion";
import {useTypewriter,Cursor} from 'react-simple-typewriter'// import {useTypewriter,Cursor} from 'react-typewriter'
import userimage from "../assets/user-image.jpg"
const Home = ({isLoggedIn}) => {
  const transition ={type:'spring' ,duration:3}
  const [text]=useTypewriter({
    words:['24x7 Services','Books at cheap rate','Notifications and Alerts','Online Reservations','and many more...'],
    loop:{},
  })
  return (
    <div className=' home  text-white text-3xl h-full'>
    <div className='left-h'>
      <div className='the-best-ad'>
       <motion.div initial={{left:'360px'}}
                   whileInView={{left:'8px'}}
                   transition={{...transition,type:'tween'}}
                >                </motion.div>

        <span>Effectively Manage and Track with Ease!</span>
      </div>
      <div className='home-text gap-2 ' >
             <span>We Provide </span>
              <span class="role">{text} <Cursor/></span>
            </div>
    </div>
    <div className='right-t user-par w-[500px] h-1/2 mr-28 mt-28 '>
        <div className="user-image filte absolute">
            <img src={userimage} height={10} alt="" />
            
        </div>
    </div>
    </div>
  )
}

export default Home
