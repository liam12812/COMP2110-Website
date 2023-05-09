import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import {Fetch} from './position.js';

//Fetch();

// URL TO USE: https://api.sunrisesunset.io/json?lat=-33.8715&lng=151.2006

class SunWidget extends LitElement {

    static properties = {
        url: {type: String},
        _data: {state: true}
    }

    static styles = css`
        .widget-box {
            box-sizing: border-box;
            position: relative;
            border: 1px solid white;

            width: 100%;
            height: 0;
            padding-left: 20px;
            padding-right: 20px;
            padding-bottom: 100%;
            margin: auto;
        }

        .title {
            text-align: center;
            margin-top: 20px;
        }

        .data {
            text-align: right;

        }

        .credit {
            font-size: 16px;
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
            <div class="widget-box">
                <h3 class="title">Sunrise/set Times</h3>
                <p class="data">
                    Sunrise <br>
                    ${this._data.results.sunrise}
                    ${console.log(this._data)}
                </p>
                <p class="data">
                    Sunset <br>    
                    ${this._data.results.sunset}
                    ${console.log(this._data)}
                </p>
                <p class="credit"> 
                    Powered by <a href="https://sunrisesunset.io/">SunriseSunset.io</a>
                </p>
            </div>
            `;
        } else {
            return html`
                <p>Loading SunWidget</p>
            `;
        }
    }

}

customElements.define('sun-widget',  SunWidget);



class DawnWidget extends LitElement {

    static properties = {
        url: {type: String},
        _data: {state: true}
    }

    static styles = css`
        .widget-box {
            box-sizing: border-box;
            position: relative;
            border: 1px solid white;

            width: 100%;
            height: 0;
            padding-left: 20px;
            padding-right: 20px;
            padding-bottom: 100%;
            margin: auto;
        }

        .title {
            text-align: center;
            margin-top: 20px;
        }

        .data {
            text-align: right;

        }


        .credit {
            font-size: 16px;
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
            <div class="widget-box">
                <h3 class="title">Sunrise/set Times</h3>
                <p class="data">
                    Sunrise <br>
                    ${this._data.results.sunrise}
                    ${console.log(this._data)}
                </p>
                <p class="data">
                    Sunset <br>    
                    ${this._data.results.sunset}
                    ${console.log(this._data)}
                </p>
                <p class="credit"> 
                    Powered by <a href="https://sunrisesunset.io/">SunriseSunset.io</a>
                </p>
            </div>
            `;
        } else {
            return html`
                <p>Loading SunWidget</p>
            `;
        }
    }

}

customElements.define('dawn-widget',  DawnWidget);
