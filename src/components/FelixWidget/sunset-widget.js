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

            width: 100%;
            height: 100%;
            padding-left: 20px;
            padding-right: 20px;
            padding-bottom: 100%;
            margin: auto;

            background: url(src/components/FelixWidget/content/vecteezy_vector-illustration-of-mountain-landscapes-in-a-flat-style_8555312.jpg);
            background-size: 150%;
            background-repeat: no-repeat;

            color: white;

            overflow: hidden;
        }

        .title {
            text-align: center;
            margin-top: 20px;
            text-decoration: underline;

            width: 100%;
            height: 30%;
        }

        .main {
            width: 80%;
            height: 80%;

            margin: auto;
        }

        .sunrise {
            width: 80%;

            margin: auto;
            float: left;

            text-align: right;
            backdrop-filter: blur(6px);
            border: 1px solid white;
            border-radius: 5px;

            padding: 10px;
        }

        .sunset {
            width: 80%;
            margin: auto;
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
                <h3 class="title">Sunrise/set Times</h3>
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
                <p>Loading SunWidget</p>
            `;
        }
    }

}

customElements.define('sun-widget',  SunWidget);

