import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

// URL TO USE: https://api.sunrisesunset.io/json?lat=-33.8715&lng=151.2006

class SunWidget extends LitElement {

    static properties = {
        _data: {state: true},
        slide: {type: Number},
        Latitude: {type: String},
        Longitude: {type: String},
        Timezone: {type: String},
    }

    static styles = css`

        #container{
            box-sizing: border-box;

            border-radius: 10px;

            width: 320px;
            height: 320px;

            margin: auto;
            
            background-size: 180%;
            background-repeat: no-repeat;

            color: white;

            overflow: hidden;
        }

        .title {
            text-align: center;

            width: 90%;
            height: 10%;

            margin: auto;
            margin-top: 20px;

            font-size: 30px;
        }

        .content {
            width: 100%;
            height: 70%;

            margin: 0 auto;
            position: relative;
        }

        .left-button {
            position: absolute;
            top: 33%;
            left: 0%;

            height: 30%;
            width: 25px;

            background-color: rgba(0, 0, 0, 0);
            border: none;
            border-radius: 3px;
            color: white;
            font-size: 20px;
        }

        .left-button:hover {
            background-color: rgba(0, 0, 0, 0.25);
        }

        .left-button:active {
            font-size: 25px;
        }

        .right-button {
            position: absolute;
            left: 92.3%;
            top: 33%;

            height: 30%;
            width: 25px;

            background-color: rgba(0, 0, 0, 0);
            border: none;
            border-radius: 3px;
            color: white;
            font-size: 20px;
        }

        .right-button:hover {
            background-color: rgba(0, 0, 0, 0.25);
        }

        .right-button:active {
            font-size: 25px;
        }

        .sunrise {
            box-sizing: border-box;

            width: 80%;

            position: absolute;
            left: 10%;
            top: 8%;

            margin: 0 auto;
            float: left;
            font-size: 25px;

            text-align: right;
            backdrop-filter: blur(6px);
            border: 1px solid white;
            border-radius: 5px;

            padding: 10px;
        }

        .sunset {
            box-sizing: border-box;

            width: 80%;

            position: absolute;
            left: 10%;
            top: 55%;

            margin:  0 auto;
            float: left;
            font-size: 25px;

            text-align: right;
            backdrop-filter: blur(6px);
            border: 1px solid white;
            border-radius: 5px;

            padding: 10px;
        }

        #sunrise-icon {
            float: left;
            border-radius: 5px;
            margin: auto;

            height: 60px;
            width: 60px;
        }

        #sunset-icon {
            float: left;
            border-radius: 5px;
            margin: auto;

            height: 60px;
            width: 60px;
        }

        .footer {
            width: 90%;

            margin: auto;
        }

        #creditAPI {
            font-size: 10px;
            width: 50%;
            float: left;
            text-align: left;
        }

        #creditIMG {
            font-size: 10px;
            width: 50%;
            float: right;
            text-align: right;
        }

        a {
            color: white;
        }

    `;

    constructor(){
        super();
        this.slide = 0;
        this.Latitude = sessionStorage.getItem("lat");
        this.Longitude = sessionStorage.getItem("lng");
    }

    connectedCallback() {
        super.connectedCallback();
        this._fetch();
    }

    _fetch() { 

        function success(){
            location = 1;
        }

        var location = 0;
        navigator.geolocation.getCurrentPosition(success)
        console.log("Check " + this.Latitude + " " + this.Longitude)
        if(this.Latitude == null && location == 0) {
        this.Latitude = Math.floor(Math.random() * 60);
        this.Longitude = Math.floor(Math.random() * 180);
        var lat_pol;
        var lng_pol;
        if(Math.round(Math.random()) == 0){
            lat_pol = "-";
        } else {
            lat_pol = "";
        }
        if(Math.round(Math.random()) == 0){
            var lng_pol = "-";
        } else {
            var lng_pol = "";
        }
        this.Latitude = lat_pol + this.Latitude;
        this.Longitude = lng_pol + this.Longitude;
        fetch('https://api.sunrisesunset.io/json?lat='+ this.Latitude + '&lng=' + this.Longitude)
        .then(response => response.json())
        .then(data => {
            this._data = data;
            console.log(this._data);
            sessionStorage.setItem("Timezone", this._data.results.timezone);
            console.log('https://api.sunrisesunset.io/json?lat='+ this.Latitude + '&lng=' + this.Longitude);
            console.log(this.Latitude + " " + this.Longitude + " " + this._data.results.timezone)
            var checkGMT = this._data.results.timezone.substring(this._data.results.timezone.indexOf('/') + 1);
            checkGMT = checkGMT.slice(0, 3);
            console.log(checkGMT);
            if(checkGMT.slice(0, 3) == "GMT"){
                this._data = null;
                this.Latitude = null;
                this.Longitude = null;
                this._fetch();
            }
        });
        } else {
            location = 1;
            fetch('https://api.sunrisesunset.io/json?lat='+ this.Latitude + '&lng=' + this.Longitude)
            .then(response => response.json())
            .then(data => {
            this._data = data;
            var checkGMT = this._data.results.timezone.substring(this._data.results.timezone.indexOf('/') + 1);
            checkGMT = checkGMT.slice(0, 3);
            console.log(checkGMT);
            if(checkGMT.slice(0, 3) == "GMT"){
                this._fetch();
            }
            console.log(this._data);
            sessionStorage.setItem("Timezone", this._data.results.timezone);
            console.log('https://api.sunrisesunset.io/json?lat='+ this.Latitude + '&lng=' + this.Longitude);
            console.log(this.Latitude + " " + this.Longitude + " " + this._data.results.timezone)
        });
        }
    }

    

    leftClick (){
        if (this.slide == 0){
            this.slide = 2;
        } else {
            this.slide -= 1;
        }
        console.log(this.slide);
    }

    rightClick (){
        if (this.slide == 2){
            this.slide = 0;
        } else {
            this.slide += 1;
        }
        console.log(this.slide);
    }

    render() { 
        if (this._data && (this.slide == 0)) {
            return html`
                <div id="container" style = "background-image: url(src/components/FelixWidget/content/vecteezy_beautiful-forest-panoramic-realistic-wanderlust-vector_9302810.jpg)">
                <h3 class="title">${this._data.results.timezone.substring(this._data.results.timezone.indexOf('/') + 1)}</h3>
                    <div class="content">
                        <button class="left-button" @click=${this.leftClick}>&#10094;</button>
                        <button class="right-button" @click=${this.rightClick}>&#10095;</button>
                        <p class="sunrise" id="wonky">
                            <img class="icon" id="sunrise-icon" src="src/components/FelixWidget/content/vecteezy_sunrise-sun-line-icon-vector-illustration-logo_.jpg">
                            Sunrise <br>
                            ${this._data.results.sunrise}
                            </p>
                        <p class="sunset">
                            <img class="icon" id="sunset-icon" src="src/components/FelixWidget/content/vecteezy_sunset-sun-line-icon-vector-illustration-logo_.jpg">
                            Sunset <br>    
                            ${this._data.results.sunset}
                        </p>
                    </div>
                <section class="footer">
                <p id="creditAPI"> 
                    Powered by <a href="https://sunrisesunset.io/">SunriseSunset.io</a>
                <p id="creditIMG">
                    <a href="https://www.vecteezy.com/free-vector/sunrise">Sunrise Vectors by Vecteezy</a>
                </p>
                </section>
                </div>
            `;
        } else if (this._data && (this.slide == 1)) {
            return html`
            <div id="container" style = "background-image: url(src/components/FelixWidget/content/vecteezy_realistic-mountain-flat-landscape-vector-illustration_22976120.jpg)">
            <h3 class="title">${this._data.results.timezone.substring(this._data.results.timezone.indexOf('/') + 1)}</h3>

                    <div class="content">
                        <button class="left-button" @click=${this.leftClick}>&#10094;</button>
                        <button class="right-button" @click=${this.rightClick}>&#10095;</button>
                        <p class="sunrise" id="wonky">
                            <img class="icon" id="sunrise-icon" src="src/components/FelixWidget/content/vecteezy_sunrise-sun-line-icon-vector-illustration-logo_.jpg">
                            Dawn <br>
                            ${this._data.results.dawn}
                            </p>
                        <p class="sunset">
                            <img class="icon" id="sunset-icon" src="src/components/FelixWidget/content/vecteezy_sunset-sun-line-icon-vector-illustration-logo_.jpg">
                            Dusk <br>    
                            ${this._data.results.dusk}
                        </p>
                    </div>

                <section class="footer">
                <p id="creditAPI"> 
                    Powered by <a href="https://sunrisesunset.io/">SunriseSunset.io</a>
                <p id="creditIMG">
                    <a href="https://www.vecteezy.com/free-vector/sunrise">Sunrise Vectors by Vecteezy</a>
                </p>
                </section>
                </div>
            `;
        } else if (this._data && (this.slide == 2)) {
            return html`
            <div id="container" style = "background-image: url(src/components/FelixWidget/content/vecteezy_beautiful-forest-panoramic-realistic-neon-vector-vivid_13780884.jpg)">
            <h3 class="title">${this._data.results.timezone.substring(this._data.results.timezone.indexOf('/') + 1)}</h3>

                    <div class="content">
                        <button class="left-button" @click=${this.leftClick}>&#10094;</button>
                        <button class="right-button" @click=${this.rightClick}>&#10095;</button>
                        <p class="sunrise" id="wonky">
                            <img class="icon" id="sunrise-icon" src="src/components/FelixWidget/content/vecteezy_sunrise-sun-line-icon-vector-illustration-logo_.jpg">
                            Day Length <br>
                            ${this._data.results.day_length}
                            </p>
                        <p class="sunset">
                            <img class="icon" id="sunset-icon" src="src/components/FelixWidget/content/vecteezy_sunset-sun-line-icon-vector-illustration-logo_.jpg">
                            Golden Hour <br>    
                            ${this._data.results.golden_hour}
                        </p>
                    </div>

                <section class="footer">
                <p id="creditAPI"> 
                    Powered by <a href="https://sunrisesunset.io/">SunriseSunset.io</a>
                <p id="creditIMG">
                    <a href="https://www.vecteezy.com/free-vector/sunrise">Sunrise Vectors by Vecteezy</a>
                </p>
                </section>
                </div>
            `;
        } else {
        return html`
            <div id="container" style = "background-image: url(src/components/FelixWidget/content/vecteezy_beautiful-forest-panoramic-realistic-wanderlust-vector_9302810.jpg)">
            <h3 class="title">Loading...</h3>

                <div class="content">
                    <p class="sunrise" id="wonky">
                        <img class="icon" id="sunrise-icon" src="src/components/FelixWidget/content/vecteezy_sunrise-sun-line-icon-vector-illustration-logo_.jpg">
                        Loading... <br>
                        </p>
                    <p class="sunset">
                        <img class="icon" id="sunset-icon" src="src/components/FelixWidget/content/vecteezy_sunset-sun-line-icon-vector-illustration-logo_.jpg">
                        Loading... <br>    
                    </p>
                </div>

            <section class="footer">
            <p id="creditAPI"> 
                Powered by <a href="https://sunrisesunset.io/">SunriseSunset.io</a>
            <p id="creditIMG">
                <a href="https://www.vecteezy.com/free-vector/sunrise">Sunrise Vectors by Vecteezy</a>
            </p>
            </section>
            </div>
        `;
    }}

}

customElements.define('sun-widget',  SunWidget);

