import React from "react";
function Home() {
    return (
        <div>
            <div className="add-to-cart">
                <img src="https://imgs.search.brave.com/WJQ3xIFMUJtiuQgG6To2NIsChSuQfsSVzCzhmIsz6U0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzczLzEwLzY0/LzM2MF9GXzczMTA2/NDI4X1E5MUxOVWln/ZzRaUklpMUl0eElj/Z0V6eVc4Qzl5bHVF/LmpwZw" />
            </div>
            <h1>Home component</h1>
            <div className="cart-wrapper" >
                <div className="img-wrapper item">
                    <img src="https://imgs.search.brave.com/0EAxeZgpvOcgAwHteuNSWx-mH_uYA8AAbELe5-B_ZMU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE2/MTEyMzk4NC9waG90/by9tb2JpbGUtcGhv/bmUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUJUWGFXa2pl/eVBvQmhKMjJHWUwx/Yy1MUWxXRDBoM1k4/NDNWWThubEhmSFU9" />
                </div>

                <div className="text-wrapper item">
                    <span>Folding phone</span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home;
