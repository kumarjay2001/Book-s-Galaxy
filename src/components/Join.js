import React from 'react'
import "./Join.css"
import whiteTick from "../assets/whiteTick.png"

const Join = () => {
  return (
    <div className='plans-containers' id='plans'>
     <div className='blur blur-p-1'></div>
     <div className='blur blur-p-2'></div>
        <div className='programs-header'>
            <span>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span>NOW WITH US</span>
        </div>



        <div className='plans'>
                <div className='plan'>
                   <span>BASIC PLAN</span>
                   <span className='money'>$ 25</span>
                   <div className='features'> 
                     <div className='feature'>
                        <div >
                           <img src={whiteTick}></img>
                           <span >Issue 1 book at a time</span>
                        </div>
                        <div>
                           <img src={whiteTick}></img>
                           <span >Have access only limited books</span>
                        </div>   
                         <div>
                           <img src={whiteTick}></img>
                           <span >Extra charges included</span>
                         </div> 
                           
                           
                     </div>
                   </div>
                   <div>
                     <span>See more benifits -></span>
                   </div>
                   <button className='btn'>Join now</button>
                </div>

                <div className='plan'>
                   <span>PREMIUM PLAN</span>
                   <span className='money'>$ 50</span>
                   <div className='features'> 
                   <div className='feature'>
                        <div >
                           <img src={whiteTick}></img>
                           <span >Issue 5 books at a time</span>
                        </div>
                        <div>
                           <img src={whiteTick}></img>
                           <span >Have access of many books</span>
                        </div>   
                         <div>
                           <img src={whiteTick}></img>
                           <span >Limited Books can be Download </span>
                         </div> 
                           
                           
                     </div>
                   </div>
                   <div>
                     <span>See more benifits -></span>
                   </div>
                   <button className='btn'>Join now</button>
                </div>

                <div className='plan'>
                   <span>PRO PLAN</span>
                   <span className='money'>$ 75</span>
                   <div className='features'> 
                    <div className='feature'>
                        <div >
                           <img src={whiteTick}></img>
                           <span >Issue many books at a time</span>
                        </div>
                        <div>
                           <img src={whiteTick}></img>
                           <span >Have access of all the books</span>
                        </div>   
                         <div>
                           <img src={whiteTick}></img>
                           <span >No Extra fee charged</span>
                         </div> 
                           
                           
                     </div>
                   </div>
                   <div>
                     <span>See more benifits -></span>
                   </div>
                   <button className='btn'>Join now</button>
                </div>
        </div>
    </div>
  )
}

export default Join