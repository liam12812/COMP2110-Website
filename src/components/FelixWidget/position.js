var x = document.getElementById("co");

export function URL () {

    function getPos(position){

        const {
            latitude,
            longitude
        } = position.coords;

        fetchAPI(latitude, longitude);

        x.innerHTML = latitude + " " + longitude;
    }

    function fetchAPI(lat, lng) {
        alert(lat + " " + lng);
        var url = ("https://api.sunrisesunset.io/json?lat=" + lat + "&lng=" + lng);
        alert(url);
        return;
    }

    navigator.geolocation.getCurrentPosition(getPos);

    return;
}


/*
export function URL () {

    function getX () {

        function successCallback(position) {
            const {
                latitude,
            } = position.coords;

            alert(`Your latitude: (${latitude})`);

            lat = latitude;

            alert("Lat =" + lat);
        }
        
        function errorCallback(error) {
            alert(error);
        };

        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
        } else {
            alert("Geolocation not supported on browser");
        }

        var lat;

        alert("Lat2 =" + lat);

        return lat;
    }

    function getY () {

        function successCallback(position) {
            const {
                longitude
            } = position.coords;

            alert(`Your longitude: (${longitude})`);

            lng = longitude;

            alert("Lng =" + lng);
        }
        
        function errorCallback(error) {
            alert(error);
        };

        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
        } else {
            alert("Geolocation not supported on browser");
        }

        var lng;

        alert("Lng2 =" + lng);

        return lng;
    }

    const x = getX();
    const y = getY();

    const url = "https://api.sunrisesunset.io/json?lat=" + x + "&lng=" + y;

    return url;
}
*/
