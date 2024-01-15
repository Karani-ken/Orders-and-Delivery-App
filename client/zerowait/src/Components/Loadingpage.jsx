import React from 'react'
import './components.css'
import WelcomeImage from '../Assets/Images/Welcome.png'
function Loadingpage() {
    return (
        <div className='welcome-page'>

            <div className='main-text'>
                <h1>ZeroWaits</h1>
                <p>Order in a flash, Delivering joy in a Dash!</p>

                <div className='welcome-image'>
                    <img src={WelcomeImage} alt="" />
                </div>
            </div>


        </div>  
    )
}

export default Loadingpage