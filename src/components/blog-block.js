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
    padding-right: 10px;
  }
  `;

  constructor() {
    super();
    this.blogpost = "5";
    this._blogposts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }

  connectedCallback() {
    super.connectedCallback();
    this._fetch();
}

  _fetch(){
    const url = `${BASE_URL}blog`;
    fetch(url + '?start=1&count=' + this.blogpost)
    .then(response => response.json())
    .then(posts => {
        this._posts = posts.posts; 
    });
}


 _updateBlog(e) {
  this.blogpost = e.target.value;
  this._posts = undefined;
  this._fetch();  
};


_post() {
  fetch(url), {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "id": 46611142, "name":"Liam Caden" })
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
    if (!this._posts)
      return html`Loading...`
    
    return html`
    <h1> COMP2110 Blog </h1>
    <p class='subject'> Welcome to the COMP2110 Blog, select the number of posts here:  </p> 
    <form class='subject'>
      <select name="film" @change=${this._updateBlog}>
          ${this._blogposts.map(blogpost => {
              console.log(blogpost===this._blogpost);
              let selected = blogpost == this.blogpost;
              return html`<option name=${blogpost} ?selected=${selected}>${blogpost}</option>`
         }
           )}
      </select>
    </form>

        ${this._posts.map(post => html`<div class="blogpost">
          <h2>${post.title}</h2>
          <h3>By ${post.name}</h3>
          ${BlockBlock.formatBody(post.content)}
          <hr class="dashed">
        </div>`)}


        <p> hello </p>
        
        `;

      
  }
}

customElements.define('blog-block', BlockBlock);


