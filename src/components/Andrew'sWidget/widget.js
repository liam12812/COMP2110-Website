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
        this._currencys = [1, 2, 3, 4, 5, 6]
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

    _calculate(f,t,a) {
        this.from = f.target.value;
        this.to = t.target.value;
        this.amount = a.target.value;
        this._data = undefined;
        this._fetch();  
    }

    render() { 
        if (this._data) {
            const crawl = this._data.opening_crawl.split('\r\n')
            return html`

            <form>
                <select name="from" @change=${this._calculate}>
                    ${this._currencys.map(from => {
                        console.log(from===this.from);
                        let selected = from == this.from;
                        return html`<option name=${from} ?selected=${selected}>${from}</option>`
                    }
                        )}
                    ${this._currencys.map(to => {
                        console.log(to===this.to);
                        let selected = to == this.to;
                        return html`<option name=${to} ?selected=${selected}>${to}</option>`
                    }
                        )}
                </select>
            </form>
            
            <h2>Currency Conversions</h2>
            <h3>${this.from} to ${this.to}</h3>
            <p>${this.amount}${this.from} is ${this._data.result}${this.to}</p>
            <p>The conversion rate is 1:${this._data.info.rate}.</p>
            `;
        } else {
            return html`<p>Loading...</p>`;
        }
    }

}
customElements.define('cc-widget',CurrencyConversions);