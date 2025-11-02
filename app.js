import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
            <img
                className="logo" 
            src = "https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const  RestaurantCard = () => {
    return (
        <div className="res-card">
           <h3>Burger</h3>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
            </div>
        </div>
    )
}

const AppLayout  = () => {
    return (
        <div className ="app">
            <Header />
            <Body />
        </div>
    )
}



 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(<AppLayout />);