/**
 * A Blog widget that displays blog posts pulled from 
 * an API
 * 
 * <blog-block></blog-block>
 */

import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { BASE_URL } from '../config.js';

class BlockBlock extends LitElement {
  static properties = {
    _posts: { state: true },
    blogpost: {type: String},
    start: {type: Number},
    pagenum: {type: Number},
  }

  static styles = css`
  :host {
    margin: 1em;
  }
  .blogpost {
    text-align: left;
  }
  .blogpost h2 {
    text-transform: capitalize;
  }
  hr.dashed {
    border: none;
    border-top: 3px dashed;
    padding-bottom: 20px;
  }
  .subject{
    display: inline-block;
  }

  #text{
    padding-right: 10px;
  }

  #submitbutton input{
    text-decoration: none;
    padding: 8px 16px;
    cursor: pointer;
    background-color: rgb(219,23,23);
    color: rgb(223, 220, 216);
    border: 0px solid silver;
    transition: transform 0.3s ease-in-out;
    transform-style: preserve-3d;
  }
  
  #submitbutton input:hover {
    transform: scale(1.2);
  }

  p#pagenum { 
    text-decoration: none;
    width: 32px;
    padding-top:4px;
    padding-bottom:6.5px;
    background-color: rgb(219,23,23);
    text-align: center;
  }
  
  #back li input {
    border-radius: 10px 0 0 10px;
  }
  
  #next li input{
    border-radius: 0 10px 10px 0;
  }

  li{
    list-style: none;
  }

  select[name="postnums"] {
    background: rgb(36, 39, 60);
    height: 30px;
    border-color: rgb(219,23,23);
    border-width: 1px;
    border-radius: 10px;
    color:rgb(223, 220, 216);
    margin-right: 20px;
    margin-left: 5px;
  
  }
  select[name="postnums"]:hover {
    background: rgb(36, 50, 60);
  
  }

  `;

  constructor() {
    super();
    this.blogpost = "3";
    this._blogposts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.start = 1;
    this.pagenum = 1;
  }

  connectedCallback() {
    super.connectedCallback();
    this._fetch();
}

  _fetch(){
    const url = `${BASE_URL}blog`;
    fetch(url + '?start=' + this.start + '&count=' + this.blogpost)
    .then(response => response.json())
    .then(posts => {
        this._posts = posts.posts; 
    })
}


 _updateBlog(e) {
  this.blogpost = e.target.value;
  this.start = 1;
  this.pagenum = 1;
  this._posts = undefined;
  this._fetch();  

};

_nextpage(){
  this.start = this.start + parseInt(this.blogpost);
  this.pagenum++;
  this._posts = undefined;
  this._fetch();
}

_backpage(){
if(this.start - parseInt(this.blogpost) > 0){
  this.start = this.start - parseInt(this.blogpost);
  this.pagenum--;
  this._posts = undefined
  this._fetch();
}
else{
  this.start = 1;
  this.pagenum = 1;
  this._posts = undefined;
  this._fetch(); 
}
}




  // A simple formatter that just splits text into paragraphs and 
  // wraps each in a <p> tag
  // a fancier version could use markdown and a third party markdown
  // formatting library
  static formatBody(text) {
    const paragraphs = text.split('\r\n')
    return paragraphs.map(paragraph => html`<p>${paragraph}</p>`)
  }

  render() {
    if (!this._posts){
      return html`Loading...`
    }
    
    return html`
    <h1> COMP2110 Blog </h1>
    <p class='subject' id='text'> Welcome to the COMP2110 Blog, select the number of posts per page here:  </p> 
    <form class='subject'>
      <select name="postnums" @change=${this._updateBlog}>
          ${this._blogposts.map(blogpost => {
              console.log(blogpost===this._blogpost);
              let selected = blogpost == this.blogpost;
              return html`<option name=${blogpost} ?selected=${selected}>${blogpost}</option>`
         }
           )}
      </select>
    </form>
    <form class= 'subject' id='back' @submit=${this._backpage}> 
        <li id="submitbutton">
              <input type='submit' value='&laquo; Back'>
        </li>
    </form>
        <p class="subject" id = "pagenum">${this.pagenum}</p>
        <form class= 'subject' id='next' @submit=${this._nextpage}> 
        <li id="submitbutton">
              <input type='submit' value='Next &raquo;'>
        </li>
    </form>

        ${this._posts.map(post => html`<div class="blogpost">
          <h2>${post.title}</h2>
          <h3>By ${post.name}</h3>
          ${BlockBlock.formatBody(post.content)}
          <hr class="dashed">
        </div>`)}
         
        `;

      
  }

}

customElements.define('blog-block', BlockBlock);


