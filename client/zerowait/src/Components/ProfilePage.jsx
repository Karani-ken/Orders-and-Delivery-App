import React from 'react'
import ArrowIcon from '../Assets/Images/arrow.png'
import { useNavigate } from 'react-router-dom'
import ProfilePic from '../Assets/Images/profile.jpg'
function ProfilePage() {
    const navigate = useNavigate();
    return (
        <div className='profile-page'>
            <div className='icons'>
                <img src={ArrowIcon} alt="" className='icon-image p-1' onClick={()=> navigate('/')} />
            </div>
            <div className='d-flex justify-content-center mt-5'>
                <img src={ProfilePic} alt="" className='dp-image' />
            </div>

            <div className='details-section'>
                <div className='p-3 mt-5'>
                    <div className='input-span'>
                        <label htmlFor="name">Name</label>
                        <input type="text" />
                    </div>
                    <div className='input-span'>
                        <label htmlFor="email">Email</label>
                        <input type="text" />
                    </div>
                    <div className='input-span'>
                        <label htmlFor="address">Delivery Address</label>
                        <input type="text" />
                    </div>
                    <div className='input-span'>
                        <label htmlFor="password">Password</label>
                        <input type="text" />
                    </div>
                    <div className='mt-2'>
                        <h2 className='my-4'>Payment Details</h2> 
                        <h2 className='my-4'>Order History</h2>                        
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <button className='btn-2 p-3' 
                    style={{background:'rgba(0,0,0,0.75)',fontSize:'15px', fontWeight:'normal'}}>Edit Profile</button>
                     <button className='btn-2 p-3' 
                     style={{background:'#fff',border:'1px #f81405 solid',
                      color:'#f81405',fontSize:'15px', fontWeight:'normal'}}>Log Out</button>
                </div>


            </div>

        </div>
    )
}

export default ProfilePage