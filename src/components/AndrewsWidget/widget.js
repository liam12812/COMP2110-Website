import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class CurrencyConversions extends LitElement {

    static properties = {
        from: {type: String},
        to: {type: String},
        _data: {state: true}
    }
    static styles = css``;

    static BASE_URL = "https://api.exchangerate.host/convert?";

    constructor() {
        super();
        this.from = "AUD";
        this.to = "USD";
        this.amount = "1";
        this._currencys = ["AUD","USD","EUR"]
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

            <form>
                <select name="from" @change=${this._changefrom}>
                    ${this._currencys.map(from => {
                        console.log(from===this.from);
                        let fchoice = from == this.from;
                        return html`<option name=${from} ?selected=${fchoice}>${from}</option>`
                    })}
                </select>
                <select name="to" @change=${this._changeto}>
                    ${this._currencys.map(to => {
                        console.log(to===this.to);
                        let tchoice = to == this.to;
                        return html`<option name=${to} ?selected=${tchoice}>${to}</option>`
                    })}
                </select>
            </form>
            
            <!-- <h2>Currency Conversions</h2> -->
            <h3>${this.from} to ${this.to}</h3>
            <p>${this.amount} ${this.from} is ${this._data.result} ${this.to}</p>
            <p>The conversion rate is 1:${this._data.info.rate}.</p>
            `;
        } else {
            return html`<p>Loading...</p>`;
        }
    }

}
customElements.define('cc-widget',CurrencyConversions);