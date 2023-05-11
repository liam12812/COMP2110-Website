import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class WeatherWidget extends LitElement {

    static properties = {
        Longitude: { type: String },
        Latitude: { type: String },
        time: {type: String},
        _data: {type: String, state: true},
        timezone: {type: String},
        weather_type: {type: String},
        imageUrl: {type: String},

      }
  
      static styles = css`
        :host {
            display: block;
            width: 320px;
            height: 320px;
            
        }

        #container{
            background-color: #3498DB ;
            background-image: url(src/images/Clear_Day.png);
            border-radius: 10px;
            position:relative;
            display: block;
            bottom: 30px;
        }

        #place{
            position: relative;
            left: 10px;
            bottom: 20px;
            font-size: 30px;
        }
        #Temp{
            position: relative;
            left: 15px;
            bottom: 40px;
            font-weight: bold;
        }
    


      `;

      static BASE_URL = "https://api.open-meteo.com/v1/forecast?";
    
      constructor() {
        super();
        this.Latitude = -33.87;
        this.Longitude = 151.21;
        this.timezone = "Australia%2FSydney";
        this.imageUrl = "src/images/Clear_Day.png"
        
      }

      connectedCallback() {
        super.connectedCallback();
        this._fetch();
        
    }

    _fetch () {
        const url = `${WeatherWidget.BASE_URL}latitude=${this.Latitude}&longitude=${this.Longitude}&current_weather=true&timezone=${this.timezone}`
        fetch(url)
        .then(response => response.json())
        .then(data => { 
            this._data = data;
        this._weatherText();
        });
        
        
    }



    _weatherText(){
        let weatherCode = JSON.stringify(this._data.current_weather.weathercode);
        let isday = JSON.stringify(this._data.current_weather.is_day);
        if(weatherCode = 0){
            this.weather_type = "Clear Sky"
            if(isday = 1){
                this.imageUrl = "url(src/images/Clear_Day.png)"
            }
            else if (isday = 0){
                this.imageUrl = "url(src/images/Clear_Night.png)"
            }
            css('background-image', this.imageUrl);
        }
        else if (weatherCode = 1){
            this.weather_type = "Mainly Clear"
            if(isday = 1){
                this.imageUrl = "url(src/images/Clear_Day.png)"
            }
            else if (isday = 0){
                this.imageUrl = "url(src/images/Clear_Night.png)"
            }
            css('background-image', this.imageUrl);
        }
        else if (weatherCode = 2){
            this.weather_type = "Partly Cloudy"
            if(isday = 1){
                this.imageUrl = "url(src/images/Cloudy_Day.png)"
            }
            else if (isday = 0){
                this.imageUrl = "url(src/images/Cloudy_Night.png)"
            }
            css('background-image', this.imageUrl);
        }
        else if (weatherCode = 3){
            this.weather_type = "Overcast"
        }
        else if (weatherCode = 45){
            this.weather_type = "Foggy"
        }
        else if (weatherCode = 48){
            this.weather_type = "Rime Fog"
        }
        else if (weatherCode = 51){
            this.weather_type = "Light Drizzle"
        }
        else if (weatherCode = 53){
            this.weather_type = "Moderate Drizzle"
        }
        else if (weatherCode = 55){
            this.weather_type = "Dense Drizzle"
        }
        else if (weatherCode = 56){
            this.weather_type = "Light Freezing Drizzle"
        }
        else if (weatherCode = 57){
            this.weather_type = "Dense Freezing Drizzle"
        }
        else if (weatherCode = 61){
            this.weather_type = "LIght Rain"
        }
        else if (weatherCode = 63){
            this.weather_type = "Moderate Rain"
        }
        else if (weatherCode = 65){
            this.weather_type = "Heavy Rain"
        }
        else if (weatherCode = 66){
            this.weather_type = "Freezing Light Rain"
        }
        else if (weatherCode = 67){
            this.weather_type = "Freezing Heavy Rain"
        }
        else if (weatherCode = 71){
            this.weather_type = "Slight Snow"
        }
        else if (weatherCode = 73){
            this.weather_type = "Moderate Snow"
        }
        else if (weatherCode = 75){
            this.weather_type = "Heavy Snow"
        }
        else if (weatherCode = 77){
            this.weather_type = "Snow Grains"
        }
        else if (weatherCode = 80){
            this.weather_type = "Slight Rain Showers"
        }
        else if (weatherCode = 81){
            this.weather_type = "Moderate Rain Showers"
        }
        else if (weatherCode = 82){
            this.weather_type = "Violent Rain Showers"
        }
        else if (weatherCode = 85){
            this.weather_type = "Light Snow Showers"
        }
        else if (weatherCode = 86){
            this.weather_type = "Heavy Snow Showers"
        }
    }

    


        render() {
            if(this._data){
            return html`
            <div id='container'>
                <p id='title'>Current Weather</p>
                <p id='place'>Sydney</p>
                <p id='Temp'>${this._data.current_weather.temperature}&deg;C</p>
                <p id='Time'>${(this._data.current_weather.time).slice(0, 10)}</p>
                <p id='weather'>${this.weather_type}</p>
            </div>
            `;
            }
        }
    
    
}
customElements.define('weather-widget', WeatherWidget);


