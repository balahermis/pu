import React from "react";

function Location() {

    // currentLocation
    React.useEffect(() =>{
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords )
        })
    })
    return(
        <div>
      

        </div>
    )
}
export default Location