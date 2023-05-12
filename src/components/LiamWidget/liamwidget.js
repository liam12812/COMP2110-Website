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
        weatherCode: {type: String},
        isday: {type: String},
        textcolour: {type: String},

      }
  
      static styles = css`
        :host {
            display: block;
            width: 320px;
            height: 320px;
            
        }

        #container{
            background-color: #3498DB ;
            background-repeat: no-repeat;
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
        #title{
            font-weight: ;
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
        console.log(url);
        fetch(url)
        .then(response => response.json())
        .then(data => { 
            this._data = data;
        this._weatherText();
        });
        
        
    }    

    _weatherText(){

        this.weatherCode = "2"//JSON.stringify(this._data.current_weather.weathercode);
        this.isday = "0"//JSON.stringify(this._data.current_weather.is_day);
        if(this.weatherCode == 0){
            this.weather_type = "Clear Sky"
            if(this.isday == "1"){
                this.imageUrl = "background-image: url(src/images/Clear_Day.png";
                this.textcolour = "black";
            }
            else if (this.isday == "0"){
                this.imageUrl = "background-image: url(src/images/Clear_Night.png";
                this.textcolour = "white";
            }
        }
        else if (this.weatherCode == "1"){
            this.weather_type = "Mainly Clear"
            if(this.isday == "1"){
                this.imageUrl = "background-image: url(src/images/Clear_Day.png";
                this.textcolour = "black";
            }
            else if (this.isday == "0"){
                this.imageUrl = "background-image: url(src/images/Clear_Night.png";
                this.textcolour = "white";
            }
        }
        else if (this.weatherCode == "2"){
            this.weather_type = "Partly Cloudy"
            if(this.isday == "1"){
                this.imageUrl = "background-image: url(src/images/Cloudy_Day.png";
                this.textcolour = "black";
            }
            else if (this.isday == "0"){
                this.imageUrl = "background-image: url(src/images/Cloudy_Night.png";
                this.textcolour = "black";
            }
        }
        else if (this.weatherCode == "3"){
            this.weather_type = "Overcast"
            if(this.isday == "1"){

            }
            else if (this.isday == "0"){

            }
        }
        else if (this.weatherCode == '45'){
            this.weather_type = "Foggy"
            if(this.isday == "1"){

            }
            else if (this.isday == "0"){

            }
        }
        else if (this.weatherCode == "48"){
            this.weather_type = "Rime Fog"
            if(this.isday == "1"){

            }
            else if (this.isday == "0"){

            }
        }
        else if (this.weatherCode == "51"){
            this.weather_type = "Light Drizzle"
            if(this.isday == "1"){

            }
            else if (this.isday == "0"){

            }
        }
        else if (this.weatherCode == "53"){
            this.weather_type = "Moderate Drizzle"
            if(this.isday == "1"){

            }
            else if (this.isday == "0"){

            }
        }
        else if (this.weatherCode == "55"){
            this.weather_type = "Dense Drizzle"
            if(this.isday == "1"){

            }
            else if (this.isday == "0"){

            }
        }
        else if (this.weatherCode == "56"){
            this.weather_type = "Light Freezing Drizzle"
            if(this.isday == "1"){

            }
            else if (this.isday == "0"){

            }
        }
        else if (this.weatherCode == "57"){
            this.weather_type = "Dense Freezing Drizzle"
            if(this.isday == "1"){

            }
            else if (this.isday == "0"){

            }
        }
        else if (this.weatherCode == "61"){
            this.weather_type = "Light Rain"
            if(this.isday == "1"){

            }
            else if (this.isday == "0"){

            }
        }
        else if (this.weatherCode == "63"){
            this.weather_type = "Moderate Rain"
            if(this.isday == "1"){

            }
            else if (this.isday == "0"){

            }
        }
        else if (this.weatherCode == "65"){
            this.weather_type = "Heavy Rain"
            if(this.isday == "1"){

            }
            else if (this.isday == "0"){

            }
        }
        else if (this.weatherCode == "66"){
            this.weather_type = "Freezing Light Rain"
            if(this.isday == "1"){

            }
            else if (this.isday == "0"){

            }
        }
        else if (this.weatherCode == "67"){
            this.weather_type = "Freezing Heavy Rain"
            if(this.isday == "1"){

            }
            else if (this.isday == "0"){

            }
        }
        else if (this.weatherCode == "71"){
            this.weather_type = "Slight Snow"
            if(this.isday == "1"){
 
            }
            else if (this.isday == "0"){

            }
        }
        else if (this.weatherCode == "73"){
            this.weather_type = "Moderate Snow"
            if(this.isday == "1"){

            }
            else if (this.isday == "0"){

            }
        }
        else if (this.weatherCode == "75"){
            this.weather_type = "Heavy Snow"
            if(this.isday == "1"){

            }
            else if (this.isday == "0"){

            }
        }
        else if (this.weatherCode == "77"){
            this.weather_type = "Snow Grains"
            if(this.isday == "1"){

            }
            else if (this.isday == "0"){

            }
        }
        else if (this.weatherCode == "80"){
            this.weather_type = "Slight Rain Showers"
            if(this.isday == "1"){
 
            }
            else if (this.isday == "0"){

            }
        }
        else if (this.weatherCode == "81"){
            this.weather_type = "Moderate Rain Showers"
            if(this.isday == "1"){

            }
            else if (this.isday == "0"){

            }
        }
        else if (this.weatherCode == "82"){
            this.weather_type = "Violent Rain Showers"
            if(this.isday == "1"){
            
            }
            else if (this.isday == "0"){

            }
        }
        else if (this.weatherCode == "85"){
            this.weather_type = "Light Snow Showers"
            if(this.isday == "1"){
            
            }
            else if (this.isday == "0"){

            }
        }
        else if (this.weatherCode == "86"){
            this.weather_type = "Heavy Snow Showers"
            if(this.isday == "1"){
                
            }
            else if (this.isday == "0"){

            }
            
        }
    }

        render() {
            if(this._data){
                                
                return html`
                <div id='container' style="${this.imageUrl})">
                    <p id='title' style="color:${this.textcolour};">Current Weather:</p>
                    <p id='place'>Sydney</p>
                    <p id='Temp'>${this._data.current_weather.temperature}&deg;C</p>
                    <p id='Date'>${(this._data.current_weather.time).slice(0, 10)}</p>
                    <p id='Time'>${(this._data.current_weather.time).slice(11, 16)}</p>
                    <p id='weather'>${this.weather_type}</p>

                </div>
                `;


                
            }
        }
    
    
}
customElements.define('weather-widget', WeatherWidget);


