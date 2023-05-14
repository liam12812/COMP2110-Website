import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { getUser, storeUser, deleteUser} from '../auth.js';
import { BASE_URL } from '../config.js';

class LoginWidget extends LitElement {
  static properties = {
    loginUrl: { type: String },
    user: {type: String, state: true },
  }

  static styles = css`
    :host {
        display: block;
    }

        .header-auth{
          width: 482px;
          height: 370px;

          background-color: #282A35;
          border-radius: 10px;
        
          display: flex;
          align-items: center;
          justify-content: center;
        } 
        
        #login_register{
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
        
        .textin input{
          width: 100%;
          height: 40px;
        
          border-top: none;
          border-bottom: 1px solid silver;
          border-left: 1px solid #282A35;
          border-right: none;
        
          background: none;
          color: silver;
        }

        .textin input:hover{
          background: none;
        }
        
        .textin input::placeholder{
          color: silver;
          background: none;
        }
        
        .textin input:hover::placeholder{
          color: grey;
          background: none;
        }

        .textin input:focus{
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
  
        
        img{
          width:140px;
          height:140px;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }

        #fail{
          text-align: center;
          position:relative;
          top: -30px;
          color: rgb(219,23,23);
        }

        #register2{
          text-align: center;
          position:relative;
          top: -37px;
        }
        
        #register2 a{
          text-decoration: none;
          color:rgb(223, 220, 216);
        }
        
        #register2 a:hover{
          text-decoration: underline;
        }

        @media only screen and (max-width: 2048px) {
          .header-auth{
            width: 462px;
          }
        }

        @media only screen and (max-width: 1664px) {
          .header-auth{
            width: calc(100vw - 70px);
            margin-left: 10px;
          }
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
    if (this.user && !this.user.error) {
        return html`
        <div class="header-auth">
            <div id="logged-in">
                <form @submit=${this.logout}>
                    <ul>
                        <li>
                          <img src="https://img.freepik.com/free-icon/user_318-563642.jpg">
                        <li>
                          <p>Welcome ${this.user.name}</p>
                        </li>
                        <li id="submitbutton">
                            <input type='submit' value='Log out'>
                        </li>
                    </ul>
                </form>
            </div>
        </div>`
    } 
    else if(this.user && this.user.error){
      return html`
      <div class="header-auth">
          <div id="login_register">
              <div id="login">
                  <form @submit=${this.submitForm}>
                    <ul>
                        <li class="textin">
                            <label for="username">Username</label>
                            <input name="username" placeholder="Username">
                        </li>
                        <li class="textin">
                            <label for="password">Password</label>
                            <input type="password" name="password" placeholder="Password">
                        </li>
                        <li id="submitbutton">
                            <input type='submit' value='Login'>
                        </li>
                    </ul>
                  </form>
                  <p id='fail'> Username or Password is incorrect</p>
              </div>
              <div id="register2">
                  <a href="#" id="register-link">Register</a>
              </div>
          </div>
      </div>`;
    }
    return html`
    <div class="header-auth">
        <div id="login_register">
            <div id="login">
                <form @submit=${this.submitForm}>
                  <ul>
                      <li class="textin">
                          <label for="username">Username</label>
                          <input name="username" placeholder="Username">
                      </li>
                      <li class="textin">
                          <label for="password">Password</label>
                          <input type="password" name="password" placeholder="Password">
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

