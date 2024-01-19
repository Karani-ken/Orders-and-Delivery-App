import React from "react"
import {useNavigate} from "react-router-dom"
import ProfilePic from '../Assets/Images/profile.jpg'
import SearchIcon from '../Assets/Images/magnifying.png'
import HomeIcon from '../Assets/Images/home.png'
import UserIcon from '../Assets/Images/user.png'
import InboxIcon from '../Assets/Images/inbox.png'
import WishListIcon from '../Assets/Images/wishlist.png'
import productsData from '../Assets/products.json'
function HomePage() {  
    const navigate = useNavigate();  
    const handleClick = (product) =>{
        navigate(`/product/${product.id}`)
    }
    const navigateToProfile = ()=>{
        navigate('/profile')
    }
    return (
        <div className='Home-page'>
            <div className="header-section">
                <nav>
                    <div className="nav-text">
                        <h2 className="logo">ZeroWaits</h2>
                        <p className='slogan'>Order now! We deliver fast.</p>
                    </div>
                    <div className="profile-image" onClick={navigateToProfile}>
                        <img src={ProfilePic} alt="" />
                    </div>
                </nav>
                <section className="search-bar">
                    <div className="search-input">
                        <img src={SearchIcon} alt="" />
                        <input type="text" placeholder='type here....' />
                    </div>
                    <button className='btn-2'>Enter</button>
                </section>

                <nav className='scroll-buttons'>
                    <button className='btn-2'>All</button>
                    <button className='btn-2 filter-btn'>Food</button>
                    <button className='btn-2 filter-btn'>Drinks</button>
                    <button className='btn-2 filter-btn'>Pastry</button>
                    <button className='btn-2 filter-btn'>Snacks</button>
                    <button className='btn-2 filter-btn'>Beverages</button>
                </nav>
            </div>

            <section className='product-section'>
                <div className="product-container">
                    {productsData.products.map((category) => {
                        return (<div key={category.category} >
                            <ul className="prod-container">
                                {category.products.map((product) => {
                                    return (
                                        <li key={product.id} className="product-card"  onClick={()=>handleClick(product)}>
                                            <img src={product.image} alt="" className="product-image" />
                                            <div className="product-details">
                                                <p>{product.name}</p>
                                                <p>{product.producer}</p>
                                                <p>rating: {product.rating}</p>
                                            </div>                                            
                                        </li>)
                                })}

                            </ul>

                        </div>)
                    })}

                </div>
            </section>
            <section className="down-menu">
                <div className="left-tab">
                    <span><img src={HomeIcon} alt="" className="icon-image"/></span>
                    <span><img src={UserIcon} alt="" className="icon-image"/></span>
                </div>
                <button className="btn-2 menu-btn">+</button>
                <div className="Right-tab">
                    <span><img src={InboxIcon} alt="" className="icon-image"/></span>
                    <span><img src={WishListIcon} alt="" className="icon-image"/></span>
                </div>
            </section>
        </div>
    )
}

export default HomePage