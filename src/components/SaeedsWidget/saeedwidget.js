import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class UpcomingPublicHolidays extends LitElement {

    static properties = {
        upcomingholidays:{type: Array},
        country: {type:String}

    }

    static MainUrl = "https://date.nager.at/api/v2/publicholidays";

    static styles = css`

    .main {
        size 20px;
    }
   `;

   constructor(){
   super();
   this.upcomingholidays=[];
   this.country = 'AUS';
   }

   connectedCallback(){
    super.connectedCallback();
    this.fetchUpcomingholidays();
   }

    fetchUpcomingholidays(){
    fetch(UpcomingPublicHolidays.MainUrl + "country="+ this.country +"upcomingholidays="+this.upcomingholidays)
    .then(response => response.json())
    .then(data => {
        this.upcomingHolidays= data
    })
    
   }

   render(){
    return html`
        <h3> Next Public Holidays </h3>
        <select @change="${this.userCountryChange}">
            <option value= "AUS"> Australia</option>
            <option value= "CAN"> Canada</option>
            <option value= "MEX"> Mexico</option>
            <option value= "USA"> United States of America</option>
        </select>

        <ul>
            ${this.upcomingholidays.map((holiday) => html`<li>${holiday.date}: ${holiday.name}</li>`)}
        </ul>
    `;
   }

   userCountryChange(event){
    this.country= event.target.value;
    this.fetchUpcomingholidays();

   }
    
}
customElements.define('uph-widget', UpcomingPublicHolidays);


