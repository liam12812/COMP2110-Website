import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class UpcomingPublicHolidays extends LitElement {

    static properties = {
        upcomingholidays:{type: Array},
        country: {type:String}

    }

    static styles = css`
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

   async fetchUpcomingholidays(){
    const url = 'https://date.nager.at/api/v2/publicholidays/${new Date().getFullYear()}/${this.country}';
    const answer = await fetch(url);
    const data = await answer.json();
    this.upcomingHolidays = data;
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


