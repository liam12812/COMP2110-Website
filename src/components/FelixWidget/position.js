var x = document.getElementById("coords");


export function Fetch () {

    function getPos(position){

        const {
            latitude,
            longitude
        } = position.coords;


        x.innerHTML = "https://api.sunrisesunset.io/json?lat=" + latitude + "&lng=" + longitude;
        alert("https://api.sunrisesunset.io/json?lat=" + latitude + "&lng=" + longitude);

        
    }

    navigator.geolocation.getCurrentPosition(getPos);

    return;
};

