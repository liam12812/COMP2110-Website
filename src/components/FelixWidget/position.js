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
    window.onload = function() {      
        var geoSuccess = function(position) {           
           $.cookie("position_latitude", position.coords.latitude);
           $.cookie("position_longitude", position.coords.longitude);
           document.location.reload(true);
        };
        if ($.cookie("position_longitude", undefined))
            navigator.geolocation.getCurrentPosition(geoSuccess);
      };

    return;
};

