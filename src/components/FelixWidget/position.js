export function Fetch () {

    function getPos(position){

        const {
            latitude,
            longitude
        } = position.coords;


        localStorage.setItem("lat", latitude);
        localStorage.setItem("lng", longitude);
    }

    navigator.geolocation.getCurrentPosition(getPos);

    return;
};

