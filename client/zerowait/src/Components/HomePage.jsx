import React from "react"
import ProfilePic from '../Assets/Images/profile.jpg'
import SearchIcon from '../Assets/Images/magnifying.png'

function HomePage() {
    return (
        <div className='Home-page'>
            <nav>
                <div className="nav-text">
                    <h2 className="logo">ZeroWaits</h2>
                    <p className='slogan'>Order now! We deliver fast.</p>
                </div>
                <div className="profile-image">
                    <img src={ProfilePic} alt="" />
                </div>
            </nav>      
            <section className="search-bar">
                <div className="search-input">
                    <img src={SearchIcon} alt="" />    
                    <input type="text" placeholder='type here....' />
                </div>
                <button className='btn'>Enter</button>
            </section>
          
            <nav className='scroll-buttons'>  
            <button className='btn'>All</button> 
            <button className='btn filter-btn'>Food</button>
            <button className='btn filter-btn'>Drinks</button>
            <button className='btn filter-btn'>Pastry</button>
            <button className='btn filter-btn'>Snacks</button>
            <button className='btn filter-btn'>Beverages</button>
            </nav> 
            <section className='product-section'>
                <div className="product-container">
                    <div className="product-card">
                        <img src="" alt="" />
                        <h3>Pizza</h3>
                        <p>Brade gate</p>
                        <h2>
                       
                        </h2>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage