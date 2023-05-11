import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class CurrencyConversions extends LitElement {

    static properties = {
        from: {type: String},
        to: {type: String},
        _data: {state: true}
    }
    static styles = css`
    div {
        margin: 0px;
        padding: 0px;
        text-align: center;
    }
    h2 {
        margin: 0;
        font-size: 30px;
    }
    form p {
        display: Inline;
        font-size: 20px;
    }
    p {
        font-size: 25px;
    }
    #amount {
        max-width: 100px;
    }
    #amount:hover{
        background-color: rgba(255,255,255,0.1);
    }
    input{
        height: 25px;
        width: 150px;
        color: silver;
        background: none;
        border: 1px solid silver;
        border-radius: 10px;
    }
    select{
        height: 25px;
        color: silver;
        background: none;
        border: 1px solid silver;
        border-radius: 10px;
    }
    select:hover{
        background-color: rgba(255,255,255,0.1);
    }
    select option{
        background-color: #282A35;
        border: 1px solid silver;
        border-radius: 10px;
    }
  `;

    static BASE_URL = "https://api.exchangerate.host/convert?";

    constructor() {
        super();
        this.from = "AUD";
        this.to = "USD";
        this.amount = "1";
        //this._currencys = ["AUD","USD","EUR","GBP","CAD","BRL"]
        this._currencys = ["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BZD","CAD","CDF","CHF","CLP","CNY","COP","CRC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","STD","SVC","SYP","SZL","THB","TJS","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VES","VND","VUV","WST","XAF","XCD","XOF","XPF","YER","ZAR"]
    }

    connectedCallback() {
        super.connectedCallback();
        this._fetch();
    }

    _fetch () {
        fetch(CurrencyConversions.BASE_URL + "from=" + this.from + "&to=" + this.to + "&amount=" + this.amount)
        .then(response => response.json())
        .then(data => { 
            this._data = data;
        });
    }

    _changefrom(f) {
        this.from = f.target.value;
        this._data = undefined;
        this._fetch();  
    }

    _changeto(t) {
        this.to = t.target.value;
        this._data = undefined;
        this._fetch();  
    }

    _changeamount(a) {
        this.amount = a.target.value;
        this._data = undefined;
        this._fetch();  
    }

    render() { 
        if (this._data) {
            return html`
            <div>
                <h2>Currency Conversions</h2>

                <form>
                    <select name="from" @change=${this._changefrom}>
                        ${this._currencys.map(from => {
                            console.log(from===this.from);
                            let fchoice = from == this.from;
                            return html`<option name=${from} ?selected=${fchoice}>${from}</option>`
                        })}
                    </select>
                    <p> to </p>
                    <select name="to" @change=${this._changeto}>
                        ${this._currencys.map(to => {
                            console.log(to===this.to);
                            let tchoice = to == this.to;
                            return html`<option name=${to} ?selected=${tchoice}>${to}</option>`
                        })}
                    </select><br>
                    <input type="text" id="amount" name="amount" value="${this.amount}" @change=${this._changeamount}>
                    <p>${this.from} is <br>
                    ${this._data.result} ${this.to}</p>
                </form>
                <p>The conversion rate is
                <br> 1 : ${this._data.info.rate}</p>
            </div>
            `;
        } else {
            return html`<p>Loading...</p>`;
        }
    }

}
customElements.define('cc-widget',CurrencyConversions);