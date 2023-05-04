import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { getUser, storeUser, deleteUser} from '../auth.js';
import { BASE_URL } from '../config.js';

class LoginWidget extends LitElement {
  static properties = {
    loginUrl: { type: String },
    user: {type: String, state: true }
  }

  static styles = css`
    :host {
        display: block;
        
    }

        .header-auth{
          width: calc(30% - 30px);
          min-width: 329.22px;
          height: 340px;
        
          position: absolute;
          top: 220px;
          right: calc(0% + 20px);
        
          background-color: #282A35;
          border-radius: 10px;
        
          display: flex;
          align-items: center;
          justify-content: center;
        } #login_register{
          width: 100%;
          height: 100%;
        
          padding: 20px 10px;
        }
        
        
        #login ul{
          list-style: none;
          text-align: left;
        
          padding: 10px;
          font-size: 25px;
        }
        
        #login li{
          padding: 10px 0px 10px 0px;
        }
        
        #login label{
          padding-left: 10px;
          color: rgb(223 220 216);
        }
        
        #login input{
          width: 100%;
          height: 30px;
        
          border-top: 1px solid #282A35;
          border-bottom: 1px solid silver;
          border-left: 1px solid #282A35;
          border-right: 1px solid #282A35;
        
          background: none;
        
          color:rgb(223, 220, 216);
        }
        
        #login input:focus{
          background: none;
        }
        
        #submitbutton input{
          width: 80%;
          height: 40px;
        
          margin: 0px 10%;
          padding: 5px;
        
          font-size: 20px;
          vertical-align: middle;
          line-height: 30px;
        
          color: rgb(223, 220, 216);
          border: 0px solid silver;
          border-radius: 10px;
          background-color:rgb(219, 23, 23);
        
          transition: transform 0.3s ease-in-out;
          transform-style: preserve-3d;
        }
        
        #submitbutton input:hover{
          transform: scale(1.2);
        }
        
        #submitbutton input:focus{
          background-color: rgb(3, 136, 87);
        }
        
        #register{
          text-align: center;
        }
        
        #register a{
          text-decoration: none;
          color:rgb(223, 220, 216);
        }
        
        #register a:hover{
          text-decoration: underline;
        }
          
        #logged-in ul{
          list-style: none;        
          padding: 10px;
          font-size: 25px;
          color:rgb(223, 220, 216);

        }
        #logged-in input{
          width: 130%;
        }       
          `;

    

  constructor() {
    super();
    this.loginUrl = `${BASE_URL}users/login`;
    this.user = getUser();
  }

  submitForm(event) { 
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    fetch(this.loginUrl, {
        method: 'post',
        body: JSON.stringify({username, password}),
        headers: {'Content-Type': 'application/json'}
    }).then(result => result.json()).then(response => {
        this.user = response;
        storeUser(response);
    })
  }

  logout() {
    deleteUser();
    this.user = null;
  }

  render() {
    if (this.user) {
        return html`
        <div class="header-auth">
            <div id="logged-in">
                <form @submit=${this.logout}>
                    <ul>
                        <li>
                          <p>Hello</p>
                        </li>
                        <li id="submitbutton">
                            <input type='submit' value='Log out'>
                        </li>
                    </ul>
                </form>
            </div>
        </div>`
    } 
    return html`
    <div class="header-auth">
        <div id="login_register">
            <div id="login">
                <form @submit=${this.submitForm}>
                  <ul>
                      <li><label for="username">Username</label>
                          <input name="username">
                      </li>
                      <li><label for="password">Password</label>
                          <input type="password" name="password">
                      </li>
                      <li id="submitbutton">
                          <input type='submit' value='Login'>
                      </li>
                  </ul>
                </form>
            </div>
            <div id="register">
                <a href="#" id="register-link">Register</a>
            </div>
        </div>
    </div>`;
    
  }
}

customElements.define('login-widget',  LoginWidget);

