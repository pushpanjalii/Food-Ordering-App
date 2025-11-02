import RestaurantCard from "./ResturantCards";


const Body = () => {


    
    return (
        <div className="body">
            <div className="filter">
                   <button className="filter-btn" onClick={() => {
                    console.log("button clicked.")
                   }}>Top Rated Resturants</button>
            </div>
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

export default Body;