import React from "react"
import ProfilePic from '../Assets/Images/profile.jpg'
import SearchIcon from '../Assets/Images/magnifying.png'
import productsData from '../Assets/products.json'
function HomePage() {
    return (
        <div className='Home-page'>
            <div className="header-section">
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
            </div>

            <section className='product-section'>
                <div className="product-container">
                    {productsData.products.map((category) => {
                        return (<div key={category.category} >
                            <ul className="prod-container">
                                {category.products.map((product) => {
                                    return (
                                        <li key={product.name} className="product-card">
                                            <img src={product.image} alt="" className="product-image" />
                                            <div className="product-details">
                                                <h5>{product.name}</h5>
                                                <p>{product.producer}</p>
                                                <h6>rating: {product.rating}</h6>
                                            </div>
                                            <div className="det-btn">
                                                <button className="btn">View</button>
                                            </div>
                                        </li>)
                                })}

                            </ul>

                        </div>)
                    })}

                </div>
            </section>
        </div>
    )
}

export default HomePage