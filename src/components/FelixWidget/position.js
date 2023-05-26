export function Fetch () {

    function getPos(position){

        const {
            latitude,
            longitude
        } = position.coords;


        sessionStorage.setItem("lat", latitude);
        sessionStorage.setItem("lng", longitude);
    }

    function failed(){
        alert("Please use a browser that supports geolocation or unblock location services for full widget functionality")
    }

    navigator.geolocation.getCurrentPosition(getPos, failed);

    return;
};

