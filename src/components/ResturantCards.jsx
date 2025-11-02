import { CDN_URL } from "../utils/contants";    //this is the named import url thats why we are using {}

const  RestaurantCard = (props) => {  //props are used to pass data from one component to another, here we are passing data from Body to RestaurantCard, it is used to make components reusable, so that we can use the same component with different data
    //props are objects in js destructuring the language feature
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src={CDN_URL} />
            <h3>{props.resName}</h3>
            <h3>{props.cusines}</h3>
            <h4>{props.rating} stars</h4>
            <h4>34 mins | ₹300 for two</h4>
           
        </div>
    )
}

export default RestaurantCard;