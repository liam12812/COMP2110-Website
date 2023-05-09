import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class UpcomingPublicHolidays extends LitElement {

    static properties = {
        upcomingHolidays:{type: Array},
        country: {type:String}

    }

    static MainUrl = 'https://date.nager.at/api/v2/publicholidays';

    static styles = css`

    h3{
        font-family:Georgia,'Times New Roman', Times, serif;
        font-size:20px;
    }
    ul{
        border-style:groove;
        display: inline-block;
        font-size:15px;
        margin-left:0;
        
    }
   `;

   constructor(){
   super();
   this.upcomingHolidays= [];
   this.country = 'AU';
   }

   connectedCallback(){
    super.connectedCallback();
    this.fetchUpcomingHolidays();
   }

    fetchUpcomingHolidays(){
    const cdate = new Date();
    const url = `${UpcomingPublicHolidays.MainUrl}/${cdate.getFullYear()}/${this.country}` ;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const upcomingHolidays=data.filter(holiday => new Date(holiday.date) >= cdate)
        this.upcomingHolidays= upcomingHolidays;
        this.requestUpdate();
    });
    
   }

    

   render(){
    return html`
        <h3> Next Public Holidays </h3>
        <select @change="${this.userCountryChange}">
            <option value= "AU"> Australia</option>
            <option value= "CA"> Canada</option>
            <option value= "MX"> Mexico</option>
            <option value= "US"> United States</option>
            <option value= "PY"> Paraguay</option>
        </select>

        <ul>
          ${this.upcomingHolidays.length === 0
            ?  html`<li> No Remaining Public Holidays</li>`
            : this.upcomingHolidays.map(
                holiday => html`<li>${holiday.date}: ${holiday.name}</li>`)}
                </ul>
    `;}
   

   userCountryChange(event){
    this.country= event.target.value;
    this.fetchUpcomingHolidays();

   }
    
}
customElements.define('uph-widget', UpcomingPublicHolidays);


