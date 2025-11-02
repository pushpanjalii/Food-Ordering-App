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



const  RestaurantCard = (props) => {  //props are used to pass data from one component to another, here we are passing data from Body to RestaurantCard, it is used to make components reusable, so that we can use the same component with different data
    //props are objects in js destructuring the language feature
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src="https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4=" />
            <h3>{props.resName}</h3>
            <h3>{props.cusines.join(", ")}</h3>
            <h4>34 mins | ₹300 for two</h4>
           
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard 
                 resName={"McDonald's"}
                 cusines={["North Indian", "Fast Food", "Beverages"]}
                 rating={"4.2"}
                
                />
                <RestaurantCard 
                    resName={"KFC"}
                    cusines={["Fast Food", "Burgers", "Beverages"]}
                    rating={"4.0"}
                />
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