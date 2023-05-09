import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class UpcomingPublicHolidays extends LitElement {

    static properties = {
        holidays:{type: Array},
        country: {type:String}

    }

    static styles = css`
   `;

   constructor(){
   super();
   this.holidays=[];
   this.country = 'AUS';
   }

   connectedCallback(){
    this.connectedCallback();
    this.fetchUpcomingholidays();
   }

   async fetchUpcomingholidays(){
    const url = 'https://date.nager.at/api/v2/publicholidays/${new Date().getFullYear()}/${this.country}';
    const answer = await fetch(url);
    const data = await response.json();
    this.upcomingHolidays = data;
   }

   render(){
    return html`
        <h3> Next Public Holidays </h3>
        <




    `;
   }




    
}


