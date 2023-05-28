import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';


class WeatherWidget extends LitElement {

    static properties = {
        Longitude: { type: String },
        Latitude: { type: String },
        time: {type: String},
        _data: {type: String, state: true},
        _tzdata: {type: String, state: true},
        timezone: {type: String},
        weather_type: {type: String},
        imageUrl: {type: String},
        weatherCode: {type: String},
        isday: {type: String},
        currentloc: {type: String},
        textcolour: {type: String},
        iswhite: {type: String},
        currentHour: {type: String},
        weatherIcon: {type: String},
        BackColor: {type: String},
        DropColor:{type:String},
        TextColor: {type:String},
        City: {type:String},

      }
  
      static styles = css`
        :host {
            display: block;
            position: relative;
            top: 20px;
            
        }

        #container{
            background-color: #3498DB ;
            background-repeat: no-repeat;
            border-radius: 10px;
            position:relative;
            display: block;
            bottom: 30px;
            width: 320px;
            height: 320px;

        }

        #placename{
            position: relative;
            left: 8px;
            bottom: 43px;
            font-size: 18px;
            font-weight: 500 ;
            border-radius: 10px;
            display: inline-block;
            background: none;
        }


        #Temp{
            position: relative;
            left: 15px;
            bottom: 325px;
            font-weight: bold;
            font-size: 35px;
        }
        #title{
            font-weight: bold ;
            font-size: 24px;
            position: relative;
            left: 10px;
        }
        .place{
            display: inline-block;
        }
        #placeicon{
            width: 20px;
            position: relative;
            left: 10px;
            bottom: 40px;

        }
        #weather{
            position: relative;
            left: 17px;
            bottom: 361px;
            font-weight: bold;
            font-size: 20px;
        }

        #Date{
            position:relative;
            bottom: 125px;
            left: 240px;
            font-weight: bold;
            font-size: 12px;
            color: black;
        }
        #Time{
            position:relative;
            bottom: 135px;
            left: 278px;
            font-weight: bold;
            font-size: 12px;
            color: black;
        }
        #feel{
            position:relative;
            bottom: 375px;
            left: 17px;
            font-style: oblique;
            font-size: 14px;
        }
        #weathericon{
            position:relative;
            bottom: 495px; 
            left: 200px;
            width: 90px;
        }
        #highlow{
            position:relative;
            bottom: 395px; 
            right: 100px; 
            width: 60px;       

        }
        .max{
            position:relative;
            bottom: 475px;
            left: 50px;
            display: inline-block;
            font-size: 14px;
            color: #e0332d;
        }
        #maxlabel{
            font-weight: bold;
        }
        #maxtemp{
            font-style: oblique;
        }
        .min{
            position:relative;
            bottom: 505px;
            left: 50px;
            display: inline-block;
            font-size: 14px;
            color: #4C2EB1;
        }
        #minlabel{
            font-weight: bold;
        }
        #mintemp{
            font-style: oblique;
        }
        .RainPercent{
            left: 50px;
            display: inline-block;
        }
        #RainPLogo{
            position:relative;
            bottom: 585px;
            left: 170px;
        }
        #RainPText{
            position:relative;
            bottom: 605px;
            left: 170px;
            font-weight: bold;
            font-size: 22px;
        }
        .RainAmount{
            left: 50px;
            display: inline-block;
        }
        #RainALogo{
            position:relative;
            bottom: 620px;
            left: 170px;
            width: 45px;
        }
        #RainAText{
            position:relative;
            bottom: 635px;
            left: 173px;
            font-weight: bold;
            font-size: 22px;
        }
        #Backing{
            position: relative;
            bottom: 92px;
            left: 10px;
            width: 300px;
            height: 200px;
            opacity: 0.2;
            border-radius: 10px;
            color: transparent;
        }

    
        #container1{
            background-color: #3498DB ;
            background-repeat: no-repeat;
            border-radius: 10px;
            position:relative;
            display: block;
            bottom: 30px;
            width: 320px;
            height: 320px;

        }

        #dropdown1{
            position: relative;
            left: 10px;
            bottom: 28px;
            font-size: 18px;
            font-weight: 500 ;
            border-radius: 10px;
            display: inline-block;
            background: none;
        }

        #geobutton1 input{
            text-decoration: none;
            border-radius: 10px;
            display: inline-block;
            font-size: 15px;
            font-weight: 500;
        }

        #geobutton1 input:hover {
            transform: scale(1.03);
            cursor: pointer;
          }

        #geobutton2{
            position: relative;
            left: 18px;
            bottom: 28px;
            
        }
        #geobutton3{
            position: relative;
            left: 30px;
            bottom: 28px;
            
        }


        li{
            list-style: none;
          }

        #dropdown1 option{
            background-color: #1a5ba1;
        }

        #Temp1{
            position: relative;
            left: 15px;
            bottom: 305px;
            font-weight: bold;
            font-size: 35px;
        }
        #title1{
            font-weight: 600 ;
            font-size: 24px;
            position: relative;
            left: 10px;
        }
        .place1{
            display: inline-block;
        }
        #placeicon1{
            width: 20px;
            position: relative;
            left: 10px;
            bottom: 25px;

        }
        #weather1{
            position: relative;
            left: 17px;
            bottom: 341px;
            font-weight: bold;
            font-size: 20px;
        }

        #Date1{
            position:relative;
            bottom: 105px;
            left: 240px;
            font-weight: bold;
            font-size: 12px;
            color: black;
        }
        #Time1{
            position:relative;
            bottom: 115px;
            left: 278px;
            font-weight: bold;
            font-size: 12px;
            color: black;
        }
        #feel1{
            position:relative;
            bottom: 355px;
            left: 17px;
            font-style: oblique;
            font-size: 14px;
        }
        #weathericon1{
            position:relative;
            bottom: 475px; 
            left: 200px;
            width: 90px;
        }
        #highlow1{
            position:relative;
            bottom: 375px; 
            right: 100px; 
            width: 60px;       

        }
        .max1{
            position:relative;
            bottom: 455px;
            left: 50px;
            display: inline-block;
            font-size: 14px;
            color: #e0332d;
        }
        #maxlabel1{
            font-weight: bold;
        }
        #maxtemp1{
            font-style: oblique;
        }
        .min1{
            position:relative;
            bottom: 485px;
            left: 50px;
            display: inline-block;
            font-size: 14px;
            color: #4C2EB1;
        }
        #minlabel1{
            font-weight: bold;
        }
        #mintemp1{
            font-style: oblique;
        }
        .RainPercent1{
            left: 50px;
            display: inline-block;
        }
        #RainPLogo1{
            position:relative;
            bottom: 565px;
            left: 170px;
        }
        #RainPText1{
            position:relative;
            bottom: 585px;
            left: 170px;
            font-weight: bold;
            font-size: 22px;
        }
        .RainAmount1{
            left: 50px;
            display: inline-block;
        }
        #RainALogo1{
            position:relative;
            bottom: 600px;
            left: 170px;
            width: 45px;
        }
        #RainAText1{
            position:relative;
            bottom: 615px;
            left: 173px;
            font-weight: bold;
            font-size: 22px;
        }
        #Backing1{
            position: relative;
            bottom: 72px;
            left: 10px;
            width: 300px;
            height: 200px;
            opacity: 0.2;
            border-radius: 10px;
            color: transparent;
        }

    


      `;

      static BASE_URL = "https://api.open-meteo.com/v1/forecast?";
    
      constructor() {
        super();
        this.currentloc = sessionStorage.getItem("currentLoc");
        if(this.currentloc != 1){
            this.timezone = "Australia%2FSydney";
            this.Latitude = -33.87;
            this.Longitude = 151.21;
            this.City = "Sydney";
            }

        console.log(this.currentloc);
        console.log(sessionStorage.getItem("TZ"));

        
      }

      connectedCallback() {
        super.connectedCallback();
        this._fetch();
        this._tzfetch();
        
    }

    _fetch () {
        if(this.currentloc == 1){
            this.timezone = sessionStorage.getItem("TZ");
            this.Latitude = sessionStorage.getItem("lat");
            this.Longitude = sessionStorage.getItem("lng");
            this.City = (sessionStorage.getItem("TZ")).split('/')[1];
        }
        const url = `${WeatherWidget.BASE_URL}latitude=${this.Latitude}&longitude=${this.Longitude}&current_weather=true&timezone=${this.timezone}&hourly=temperature_2m,apparent_temperature,precipitation_probability,precipitation&daily=temperature_2m_max,temperature_2m_min&forecast_days=1`
        console.log(url);
        fetch(url)
        .then(response => response.json())
        .then(data => { 
            this._data = data;
        this._weatherText();
        });
    }
    
    _tzfetch(){
        fetch('https://api.sunrisesunset.io/json?lat='+ this.Latitude + '&lng=' + this.Longitude)
        .then(response => response.json())
        .then(data => {
            this._tzdata = data;
            sessionStorage.setItem("TZ", this._tzdata.results.timezone);
            console.log(this._tzdata);
            console.log(this._tzdata.results.timezone);
            console.log(sessionStorage.getItem("TZ"));
        });
    }


    _weatherText(){

        this.weatherCode = JSON.stringify(this._data.current_weather.weathercode);
        this.isday = JSON.stringify(this._data.current_weather.is_day);
        this.currentHour = ((this._data.current_weather.time).slice(11, 13));
        if(this.isday == "1"){
            this.BackColor = "rgb(255,255,255";
            this.TextColor = "rgb(0,0,0";
        }
        else if(this.isday == "0"){
            this.BackColor = "rgb(0,0,0";
            this.TextColor = "rgb(255,255,255";
        }
        console.log(this.BackColor);
        if(this.weatherCode == 0){
            this.weather_type = "Clear Sky"
            if(this.isday == "1"){
                this.imageUrl = "background-image: url(src/images/Clear_Day.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Sun.gif";
            }
            else if (this.isday == "0"){
                this.imageUrl = "background-image: url(src/images/Clear_Night.png";
                this.textcolour = "white";
                this.iswhite = "1";
                this.weatherIcon = "src/images/Moon.png";
            }
        }
        else if (this.weatherCode == "1"){
            this.weather_type = "Mainly Clear"
            if(this.isday == "1"){
                this.imageUrl = "background-image: url(src/images/Clear_Day.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Sun.gif";
            }
            else if (this.isday == "0"){
                this.imageUrl = "background-image: url(src/images/Clear_Night.png";
                this.textcolour = "white";
                this.iswhite = "1";
                this.weatherIcon = "src/images/Moon.png";
            }
        }
        else if (this.weatherCode == "2"){
            this.weather_type = "Partly Cloudy"
            if(this.isday == "1"){
                this.imageUrl = "background-image: url(src/images/Cloudy_Day.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Cloudy.gif";
            }
            else if (this.isday == "0"){
                this.imageUrl = "background-image: url(src/images/Cloudy_Night.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Cloudy.gif";
            }
        }
        else if (this.weatherCode == "3"){
            this.weather_type = "Overcast"
            if(this.isday == "1"){
                this.imageUrl = "background-image: url(src/images/Cloudy_Day.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Cloudy.gif";

            }
            else if (this.isday == "0"){
                this.imageUrl = "background-image: url(src/images/Cloudy_Night.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Cloudy.gif";
            }
        }
        else if (this.weatherCode == '45'){
            this.weather_type = "Foggy"
            if(this.isday == "1"){
                this.imageUrl = "background-image: url(src/images/Fog_Day.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Fog.gif";

            }
            else if (this.isday == "0"){
                this.imageUrl = "background-image: url(src/images/Night_Fog.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Fog.gif";
            }
        }
        else if (this.weatherCode == "48"){
            this.weather_type = "Rime Fog"
            if(this.isday == "1"){
                this.imageUrl = "background-image: url(src/images/Fog_Day.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Fog.gif";

            }
            else if (this.isday == "0"){
                this.imageUrl = "background-image: url(src/images/Night_Fog.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Fog.gif";
            }
        }
        else if (this.weatherCode == "51"){
            this.weather_type = "Light Drizzle"
            if(this.isday == "1"){
                this.imageUrl = "background-image: url(src/images/Day_Rain.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Sun_Rain.gif";
            }
            else if (this.isday == "0"){
                this.imageUrl = "background-image: url(src/images/Night_Rain.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Sun_Rain.gif";
            }
        }
        else if (this.weatherCode == "53"){
            this.weather_type = "Moderate Drizzle"
            if(this.isday == "1"){
                this.imageUrl = "background-image: url(src/images/Day_Rain.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Light_Rain.gif";
            }
            else if (this.isday == "0"){
                this.imageUrl = "background-image: url(src/images/Night_Rain.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Light_Rain.gif";
            }
        }
        else if (this.weatherCode == "55"){
            this.weather_type = "Dense Drizzle"
            if(this.isday == "1"){
                this.imageUrl = "background-image: url(src/images/Day_Rain.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Heavy_Rain.gif";
            }
            else if (this.isday == "0"){
                this.imageUrl = "background-image: url(src/images/Night_Rain.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Heavy_Rain.gif";
            }
        }
        else if (this.weatherCode == "56"){
            this.weather_type = "Light Freezing Drizzle"
            if(this.isday == "1"){
                this.imageUrl = "background-image: url(src/images/Day_Rain.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Light_Rain.gif";
            }
            else if (this.isday == "0"){
                this.imageUrl = "background-image: url(src/images/Night_Rain.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Light_Rain.gif";
            }
        }
        else if (this.weatherCode == "57"){
            this.weather_type = "Dense Freezing Drizzle"
            if(this.isday == "1"){
                this.imageUrl = "background-image: url(src/images/Day_Rain.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Heavy_Rain.gif";
            }
            else if (this.isday == "0"){
                this.imageUrl = "background-image: url(src/images/Night_Rain.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Heavy_Rain.gif";
            }
        }
        else if (this.weatherCode == "61"){
            this.weather_type = "Light Rain"
            if(this.isday == "1"){
                this.imageUrl = "background-image: url(src/images/Day_Rain.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Light_Rain.gif";
            }
            else if (this.isday == "0"){
                this.imageUrl = "background-image: url(src/images/Night_Rain.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Light_Rain.gif";
            }
        }
        else if (this.weatherCode == "63"){
            this.weather_type = "Moderate Rain"
            if(this.isday == "1"){
                this.imageUrl = "background-image: url(src/images/Day_Rain.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Rain.gif";
            }
            else if (this.isday == "0"){
                this.imageUrl = "background-image: url(src/images/Night_Rain.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Rain.gif";
            }
        }
        else if (this.weatherCode == "65"){
            this.weather_type = "Heavy Rain"
            if(this.isday == "1"){
                this.imageUrl = "background-image: url(src/images/Day_Rain.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Heavy_Rain.gif";
            }
            else if (this.isday == "0"){
                this.imageUrl = "background-image: url(src/images/Night_Rain.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Heavy_Rain.gif";
            }
        }
        else if (this.weatherCode == "66"){
            this.weather_type = "Freezing Light Rain"
            if(this.isday == "1"){
                this.imageUrl = "background-image: url(src/images/Day_Rain.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Light_Rain.gif";
            }
            else if (this.isday == "0"){
                this.imageUrl = "background-image: url(src/images/Night_Rain.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Light_Rain.gif";
            }
        }
        else if (this.weatherCode == "67"){
            this.weather_type = "Freezing Heavy Rain"
            if(this.isday == "1"){
                this.imageUrl = "background-image: url(src/images/Day_Rain.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Heavy_Rain.gif";
            }
            else if (this.isday == "0"){
                this.imageUrl = "background-image: url(src/images/Night_Rain.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Heavy_Rain.gif";
            }
        }
        else if (this.weatherCode == "71"){
            this.weather_type = "Slight Snow"
            if(this.isday == "1"){
                this.imageUrl = "background-image: url(src/images/Day_Snow.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Light_Snow.gif";
            }
            else if (this.isday == "0"){
                this.imageUrl = "background-image: url(src/images/Night_Snow.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Light_Snow.gif";
            }
        }
        else if (this.weatherCode == "73"){
            this.weather_type = "Moderate Snow"
            if(this.isday == "1"){
                this.imageUrl = "background-image: url(src/images/Day_Snow.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Snow.gif";
            }
            else if (this.isday == "0"){
                this.imageUrl = "background-image: url(src/images/Night_Snow.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Snow.gif";
            }
        }
        else if (this.weatherCode == "75"){
            this.weather_type = "Heavy Snow"
            if(this.isday == "1"){
                this.imageUrl = "background-image: url(src/images/Day_Snow.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Blizzard.gif";
            }
            else if (this.isday == "0"){
                this.imageUrl = "background-image: url(src/images/Night_Snow.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Blizzard.gif";
            }
        }
        else if (this.weatherCode == "77"){
            this.weather_type = "Snow Grains"
            if(this.isday == "1"){
                this.imageUrl = "background-image: url(src/images/Day_Snow.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Snow.gif";
            }
            else if (this.isday == "0"){
                this.imageUrl = "background-image: url(src/images/Night_Snow.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Snow.gif";
            }
        }
        else if (this.weatherCode == "80"){
            this.weather_type = "Slight Rain Showers"
            if(this.isday == "1"){
                this.imageUrl = "background-image: url(src/images/Day_Rain.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Sun_Rain.gif";
            }
            else if (this.isday == "0"){
                this.imageUrl = "background-image: url(src/images/Night_Rain.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Sun_Rain.gif";
            }
        }
        else if (this.weatherCode == "81"){
            this.weather_type = "Moderate Rain Showers"
            if(this.isday == "1"){
                this.imageUrl = "background-image: url(src/images/Day_Rain.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Rain.gif";
            }
            else if (this.isday == "0"){
                this.imageUrl = "background-image: url(src/images/Night_Rain.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Rain.gif";
            }
        }
        else if (this.weatherCode == "82"){
            this.weather_type = "Violent Rain Showers"
            if(this.isday == "1"){
                this.imageUrl = "background-image: url(src/images/Day_Rain.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Heavy_Rain.gif";
            }
            else if (this.isday == "0"){
                this.imageUrl = "background-image: url(src/images/Night_Rain.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Heavy_Rain.gif";
            }
        }
        else if (this.weatherCode == "85"){
            this.weather_type = "Light Snow Showers"
            if(this.isday == "1"){
                this.imageUrl = "background-image: url(src/images/Day_Snow.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Light_Snow.gif";
            }
            else if (this.isday == "0"){
                this.imageUrl = "background-image: url(src/images/Night_Snow.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Light_Snow.gif";
            }
        }
        else if (this.weatherCode == "86"){
            this.weather_type = "Heavy Snow Showers"
            if(this.isday == "1"){
                this.imageUrl = "background-image: url(src/images/Day_Snow.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Blizzard.gif";
            }
            else if (this.isday == "0"){
                this.imageUrl = "background-image: url(src/images/Night_Snow.png";
                this.textcolour = "black";
                this.iswhite = "0";
                this.weatherIcon = "src/images/Blizzard.gif";
            }
            
        }

    }

    _updateCity(event){
        this.City= event.target.value;
        if(this.City == "Sydney"){
            this.Latitude = -33.87;
            this.Longitude = 151.21;
            this.timezone = "Australia%2FSydney";
        }
        else if(this.City == "Melbourne"){
            this.Latitude = -37.84;
            this.Longitude = 144.95;
            this.timezone = "Australia%2FMelbourne";
        }
        else if(this.City == "Brisbane"){
            this.Latitude = -27.47;
            this.Longitude = 153.02;
            this.timezone = "Australia%2FBrisbane";
        }
        else if(this.City == "Canberra"){
            this.Latitude = -35.28;
            this.Longitude = 149.13;
            this.timezone = "Australia%2FCanberra";
        }
        else if(this.City == "Adelaide"){
            this.Latitude = -34.92;
            this.Longitude = 138.60;
            this.timezone = "Australia%2FAdelaide";
        }
        else if(this.City == "Darwin"){
            this.Latitude = -12.46;
            this.Longitude = 130.84;
            this.timezone = "Australia%2FDarwin";
        }
        else if(this.City == "Hobart"){
            this.Latitude = -42.88;
            this.Longitude = 147.32;
            this.timezone = "Australia%2FHobart";
        }
        else if(this.City == "Perth"){
            this.Latitude = -31.95;
            this.Longitude = 115.86;
            this.timezone = "Australia%2FPerth";
        }

        this._fetch();
    }

    useLocation(){
        sessionStorage.setItem("currentLoc", 1);
        this._tzfetch();
        this._fetch();
        console.log("test");
    }

    stopLocation(){
        sessionStorage.setItem("currentLoc", 0);
        this._tzfetch();
        this._fetch();
    }

        render() {
            if(this._data){    
                if(this.currentloc != 1){
                                
                    return html`
                    <div id='container1' style="${this.imageUrl})">
                        <p id='title1' style="color:${this.textcolour}; ">Current Weather:</p>
                        <img src="src/images/Location.png" class='place1' id='placeicon1' style="filter: invert(${this.iswhite});"></img>
                        <select class='place1' id='dropdown1' style="color:${this.textcolour}; ${this.DropColor};" @change="${this._updateCity}">
                        <option value= "Sydney"> Sydney</option>
                        <option value= "Melbourne"> Melbourne</option>
                        <option value= "Brisbane"> Brisbane</option>
                        <option value= "Canberra"> Canberra</option>
                        <option value= "Adelaide"> Adelaide</option>
                        <option value= "Darwin"> Darwin</option>
                        <option value= "Hobart"> Hobart</option>
                        <option value= "Perth"> Perth</option>
                    </select>
                    <form class= 'place1' id='geobutton2' @submit=${this.useLocation}> 
                    <li id="geobutton1">
                          <input type='submit' value='Use Current Location' style="color:${this.textcolour}; ${this.DropColor}; background-color: ${this.BackColor},0.2); border: 1px solid ${this.textcolour};">
                    </li>
                </form>
                        <p id='Date1'  >${(this._data.current_weather.time).slice(8, 10)}/${(this._data.current_weather.time).slice(5, 7)}/${(this._data.current_weather.time).slice(0, 4)}</p>
                        <p id='Time1' >${(this._data.current_weather.time).slice(11, 16)}</p>
                        <p id='Backing1' style="background-color:${this.BackColor}); "></p>
                        <p id='Temp1' style="color:${this.TextColor})">${this._data.current_weather.temperature}&deg;C</p>
                        <p id='weather1' style="color:${this.TextColor})">${this.weather_type}</p>
                        <p id='feel1' style="color:${this.TextColor})">Feels like ${this._data.hourly.apparent_temperature[this.currentHour]}&deg;C</p>
                        <img src="${this.weatherIcon}" id='weathericon1'></img>
                        <img src="src/images/High_Low.png" id='highlow1'></img>
                        <div id='max1'>
                            <p class='max1' id='maxlabel1' >Max:</p>
                            <p class='max1' id='maxtemp1'>${this._data.daily.temperature_2m_max}&deg;C</p>
                        <div>
                        <div id="min1">
                        <p class='min1' id='minlabel1'>Min:</p>
                        <p class='min1' id='mintemp1'>${this._data.daily.temperature_2m_min}&deg;C</p>
                        </div>
                        <div>
                        <img src="src/images/Rain_Percent.png" class='RainPercent1' id='RainPLogo1'></img>
                        <p class='RainPercent1' id='RainPText1' style="color:${this.TextColor})">: ${this._data.hourly.precipitation_probability[this.currentHour]}%</p>
                        </div>
                        <div>
                        <img src="src/images/Rain_Amount.png" class='RainAmount1' id='RainALogo1'></img>
                        <p class='RainAmount1' id='RainAText1' style="color:${this.TextColor})">: ${this._data.hourly.precipitation[this.currentHour]}mm</p>
                        </div>
                    </div>
                    `;  
                }
            else if(this.currentloc == 1) {        
                return html`
                <div id='container' style="${this.imageUrl})">
                    <p id='title' style="color:${this.textcolour}; ">Current Weather:</p>
                    <img src="src/images/Location.png" class='place' id='placeicon' style="filter: invert(${this.iswhite});"></img>
                    <p class='place' id='placename' style="color:${this.textcolour}; ${this.DropColor};">${this.City}</p>
                    <form class= 'place' id='geobutton3' @submit=${this.stopLocation}> 
                    <li id="geobutton1">
                          <input type='submit' value='Stop Using Location' style="color:${this.textcolour}; ${this.DropColor}; background-color: ${this.BackColor},0.2); border: 1px solid ${this.textcolour};">
                    </li>
                </form>
                    <p id='Date'  >${(this._data.current_weather.time).slice(8, 10)}/${(this._data.current_weather.time).slice(5, 7)}/${(this._data.current_weather.time).slice(0, 4)}</p>
                    <p id='Time' >${(this._data.current_weather.time).slice(11, 16)}</p>
                    <p id='Backing' style="background-color:${this.BackColor}); "></p>
                    <p id='Temp' style="color:${this.TextColor})">${this._data.current_weather.temperature}&deg;C</p>
                    <p id='weather' style="color:${this.TextColor})">${this.weather_type}</p>
                    <p id='feel' style="color:${this.TextColor})">Feels like ${this._data.hourly.apparent_temperature[this.currentHour]}&deg;C</p>
                    <img src="${this.weatherIcon}" id='weathericon'></img>
                    <img src="src/images/High_Low.png" id='highlow'></img>
                    <div id='max'>
                        <p class='max' id='maxlabel' >Max:</p>
                        <p class='max' id='maxtemp'>${this._data.daily.temperature_2m_max}&deg;C</p>
                    <div>
                    <div id="min">
                    <p class='min' id='minlabel'>Min:</p>
                    <p class='min' id='mintemp'>${this._data.daily.temperature_2m_min}&deg;C</p>
                    </div>
                    <div>
                    <img src="src/images/Rain_Percent.png" class='RainPercent' id='RainPLogo'></img>
                    <p class='RainPercent' id='RainPText' style="color:${this.TextColor})">: ${this._data.hourly.precipitation_probability[this.currentHour]}%</p>
                    </div>
                    <div>
                    <img src="src/images/Rain_Amount.png" class='RainAmount' id='RainALogo'></img>
                    <p class='RainAmount' id='RainAText' style="color:${this.TextColor})">: ${this._data.hourly.precipitation[this.currentHour]}mm</p>
                    </div>
                </div>
                
                `; 
            }               
            }

        }
    
    
}

customElements.define('weather-widget', WeatherWidget);





