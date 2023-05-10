import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class WeatherWidget extends LitElement {

    static properties = {
        Longitude: { type: String },
        Latitude: { type: String },
        time: {type: String},
        _data: {type: String, state: true}
      }
    
      static styles = css`
        :host {
            display: block;
            width: 250px;
            height: 320px;
            background-color: none;
            position:relative;
            left: 20px;
            
        }
      `;

      static BASE_URL = "https://api.open-meteo.com/v1/forecast?";
    
      constructor() {
        super();
        this.Latitude = -33.87;
        this.Longitude = 151.21;
      }

      connectedCallback() {
        super.connectedCallback();
        this._fetch();
    }

    _fetch () {
        const url = `${WeatherWidget.BASE_URL}latitude=${this.Latitude}&longitude=${this.Longitude}&current_weather=true`
        fetch(url)
        .then(response => response.json())
        .then(data => { 
            this._data = data;
        });
    }


        render() {
            if(this._data){
            return html`

                <p>${this._data.current_weather.temperature}</p>
            `;
            }
        }
    
    
}
customElements.define('weather-widget', WeatherWidget);


