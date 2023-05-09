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

   


    
}


