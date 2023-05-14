import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class UpcomingPublicHolidays extends LitElement {

    static properties = {
        upcomingHolidays:{type: Array},
        country: {type:String}

    }

    static MainUrl = 'https://date.nager.at/api/v2/publicholidays';

    static styles = css`
    
    select{
        color:silver;
        height:25px;
        background-color:transparent;
        border:1px solid silver;
        border-radius: 10px;
        margin-top:-5px;
    }
    select:hover{
        background-color:#56667A;
        
        
    }

    h3{
        margin-top:-15px;
        font-size:30px;
        text-align:center;
        color:white;
    }
    ul{
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        font-size:12px;
        list-style-type:none;
        padding:0;
        margon:0;
        max-height:200px;
        overflow-y:auto;
        font-size:15px;
        
        
    }
    li{
        text-align:center;
        border: 1px solid silver;
        border-radius:10px;
        margin:5px;
        padding:5px;
        overflow:hidden;
        
        white-space:nowrap;
       
       
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
        <div class ="widget">
        <h3> Upcoming Public Holidays </h3>
            <div class="button">
            <select @change="${this.userCountryChange}">
                <option value= "AU"> Australia</option>
                <option value= "AT"> Austria</option>
                <option value= "AR"> Argentina</option>
                <option value= "CN"> China</option>
                <option value= "MX"> Mexico</option>
                <option value= "ZA"> South Africa</option>
                <option value="ES"> Spain</option>
                <option value= "US"> United States</option>
            </select>
        </div>
   

        <ul>
          ${this.upcomingHolidays.length === 0
            ?  html`<li> No Remaining Public Holidays</li>`
            : this.upcomingHolidays.map(
                holiday => html`<li>${holiday.date}: ${holiday.name}</li>`)}
        </ul>
     </div>
    `;}
   

   userCountryChange(event){
    this.country= event.target.value;
    this.fetchUpcomingHolidays();

   }
    
}
customElements.define('uph-widget', UpcomingPublicHolidays);


