import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { BASE_URL } from '../config.js';
import { getUser, storeUser, deleteUser} from '../auth.js';


class BlogPost extends LitElement {
  static properties = {
   user: {type: String},
   authToken: {type: String}
  }

  static styles = css`
  :host {
    margin: 1em;
  }

  #Poster ul{
    list-style: none;
    text-align: left;
  
    padding: 10px;
    font-size: 25px;
  }

  #Poster input{
    width: 100%;
    height: 30px;
  
  
    background: #5A5A5A;
  
    color:rgb(223, 220, 216);
  }
  #Poster textarea{
    width: 100%;
    height: 30px;
  
  
    background: #5A5A5A;
  
    color:rgb(223, 220, 216);
  }

  #Poster li{
    padding: 10px 0px 10px 0px;
  }
  
  #Poster label{
    padding-left: 10px;
    color: rgb(223 220 216);
  }

  #submitbutton input{
    width: 70px;
    height: 40px;

    padding: 5px;
  
    font-size: 20px;
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

  #contentfield textarea{
    height: 100px;
  }
  `;

  constructor() {
    super();
    this.user = getUser();
  }

  connectedCallback() {
    super.connectedCallback();
}


_post() {
  event.preventDefault();
  this.authToken = JSON.stringify(getUser().token);
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  const url = `${BASE_URL}blog`;
  fetch(url), {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'basic' + this.auth
    },
    body: {
      "title": title,
      "content": content
   }
  }
}

  render() {
    
    if(this.user && !this.user.error){
      return html`
        <h1> Post to Blog</h1>
        <p> Write a title and message below to post to the blog <p>
                <div id="Poster">
                    <form @submit=${this._post}>
                      <ul>
                          <li><label for="title">Title</label>
                              <input name="title" id='title'>
                          </li>
                          <li id='contentfield'><label for="content">Content</label>
                              <textarea name="content" id='content'> </textarea>
                          </li>
                          <li id="submitbutton">
                              <input type='submit' value='Post'>
                          </li>
                      </ul>
                    </form>
                </div>     
                <p> ${JSON.stringify(getUser().token)}</p>   
    `;
    }
    else{
      return html`
      <h1>Post to Blog</h1>
      <p>You must be logged in to use this feature <p>
  `;
    }
  }
}

customElements.define('blog-post', BlogPost);


