import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

// URL TO USE: https://api.sunrisesunset.io/json?lat=-33.8715&lng=151.2006

class SunWidget extends LitElement {

    static properties = {
        url: {type: String},
        _data: {state: true},
    }

    static styles = css`

        :host {
            box-sizing: border-box;

            border: 1px solid white;
            border-radius: 5px;

            width: 460px;
            height: 460px;

            margin: auto;

            background: url(src/components/FelixWidget/content/vecteezy_vector-illustration-of-mountain-landscapes-in-a-flat-style_8555312.jpg);
            background-size: 150%;
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
            margin-bottom: 20px;
        }

        .main {
            width: 100%;
            height: 70%;

            margin: 0 auto;
            position: relative;
        }

        .left-button {
            position: absolute;
            top: 33%;

            height: 30%;
            width: 25px;

            margin-left: 5px;

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
            left: 93.8%;
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

            text-align: right;
            backdrop-filter: blur(6px);
            border: 1px solid white;
            border-radius: 5px;

            padding: 10px;
        }

        #sunrise-icon {
            float: left;
            border: 1px dotted black;
            margin: auto;

            height: 80px;
            width: 80px;
        }

        #sunset-icon {
            float: left;
            border: 1px dotted black;
            margin: auto;

            height: 80px;
            width: 80px;
        }

        .footer {
            width: 90%;

            margin: auto;
        }

        #creditAPI {
            font-size: 12px;
            width: 50%;
            float: right;
            text-align: right;
        }

        #creditIMG {
            font-size: 12px;
            width: 50%;
            float: left;
            text-align: left;
        }

        a {
            color: white;
        }

    `;

    constructor(){
        super();
        this.url = 'https://api.sunrisesunset.io/json?lat=-33.8715&lng=151.2006'
    }

    connectedCallback() {
        super.connectedCallback();
        this._fetch();
    }

    _fetch() {  
        fetch(this.url)
        .then(response => response.json())
        .then(data => {
            this._data = data;
        });
    }

    render() {  
        if(this._data) {
            return html`

            <script>
            var slideIndex = 1;
            showDivs(slideIndex);
            
            function plusDivs(n) {
              showDivs(slideIndex += n);
            }
            
            showDivs(n){
                var i;
                var x = document.getElementsByClassName("main");
                if (n > x.length) {slideIndex = 1}
                if (n < 1) {slideIndex = x.length}
                for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";  
                }
                x[slideIndex-1].style.display = "block";
            }
            
            }
            </script>


                <h3 class="title">Sun Position</h3>

                    <div class="main">
                        <button class="left-button" onclick="">&#10094;</button>
                        <button class="right-button" onclick="">&#10095;</button>
                        <p class="sunrise">
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
            `;
        } else {
            return html`
            <h3 class="title">Sunrise/set Times</h3>
            <div class="main">
                <p class="sunrise">
                    <img class="icon" id="sunrise-icon" src="src/components/FelixWidget/content/vecteezy_sunrise-sun-line-icon-vector-illustration-logo_.jpg">
                    Sunrise <br>
                    Loading...
                    </p>
                <p class="sunset">
                    <img class="icon" id="sunset-icon" src="src/components/FelixWidget/content/vecteezy_sunset-sun-line-icon-vector-illustration-logo_.jpg">
                    Sunset <br>    
                    Loading...
                </p>
            </div>
        <section class="footer">
        <p id="creditAPI"> 
            Powered by <a href="https://sunrisesunset.io/">SunriseSunset.io</a>
        <p id="creditIMG">
            <a href="https://www.vecteezy.com/free-vector/sunrise">Sunrise Vectors by Vecteezy</a>
        </p>
        </section>
            `;
        }
    }

}

customElements.define('sun-widget',  SunWidget);

