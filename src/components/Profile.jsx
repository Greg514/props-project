
import React from 'react'
import image from '../image/profile-pic copy.jpeg'

export default function Profile() {
  return (
   <>
   <div className="Profile">
    <img className="Profile-pic" src={image} alt="" />
    <h2 className="Profile-title">Gregory Jean-Louis</h2>
    <h3 className="Profile-subtitle">React Developer</h3>
    <p  className="Profile-text">Hi my name is Gregory and I'm a student learning to become a React developer</p>

   </div>
   
   
   
   </>
  )
}
