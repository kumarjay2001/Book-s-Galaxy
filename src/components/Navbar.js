import React from 'react'
import logo from "../assets/logo.png"
import {Link} from "react-router-dom"
import {toast} from "react-hot-toast"
import { useState } from 'react'
import Bars from "../assets/bars.png"

const Navbar = (props) => {
    const mobile=window.innerWidth<=768?true:false;
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
    const [menuOpened,setMenuOpened]=useState(false);

    function menuhandler(){
        setMenuOpened(true);
      }
      function closeHandler(){
        setMenuOpened(false);
      }
  return (
    <div className='sticky  flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

        <Link to="/"> 
            <img className='hii' src={logo} alt="Logo" width={130} height={32} loading="lazy"/>
        </Link>

        <nav>
        
            <ul className='text-richblack-100 homi flex gap-x-6'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/about">Join Us?</Link>
                </li>
                <li>
                    <Link to='/aboi'>About us</Link>
                </li>
               
            </ul>
      
        </nav>
        <div className=' flex items-center gap-x-4'>
            { !isLoggedIn &&
                <Link to="/login">
                    <button className='bg-richblack-800 login text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Log in
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button  className='bg-richblack-800 signup text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Sign up
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }}
                    className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Log Out
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button
                     className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Dashboard
                    </button>
                </Link>
            }
        </div>
      
    </div>
  )
}

export default Navbar
