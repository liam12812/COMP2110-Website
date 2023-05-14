export function URL () {

    function getPosition() {

        return new Promise((res, rej) => {
            navigator.geolocation.getCurrentPosition(res, rej);
        });
    }

    async function main() {
        var position = await getPosition();  // wait for getPosition to complete
        const ur = 'https://api.sunrisesunset.io/json?lat='+ position.coords.latitude +'&lng=' + position.coords.longitude;
        return ur;
    }

    const url = main();

    alert(url + " Yay");

    return url;
}
