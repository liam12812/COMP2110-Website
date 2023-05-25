export function Fetch () {

    function getPos(position){

        const {
            latitude,
            longitude
        } = position.coords;


        url =  "https://api.sunrisesunset.io/json?lat=" + latitude + "&lng=" + longitude;
        alert("https://api.sunrisesunset.io/json?lat=" + latitude + "&lng=" + longitude);
    }

    var url;
    navigator.geolocation.getCurrentPosition(getPos);

    return url;
};

