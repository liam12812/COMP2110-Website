import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import './components/widget-block.js';
import './components/blog-block.js';
import './components/widget-column.js';
import './components/ad-widget.js';
import './components/login-widget.js';
import './components/AndrewsWidget/widget.js';

class Comp2110Portal extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  } 
  
  html{
    font-family: hat;
  }
  
  body{
    color: rgb(223, 220, 216);
    background: url(src/images/funky-lines.webp);
    /* background-color: rgb(24, 26, 27);*/
  }
  
  .page-header{
    width: 100%;
    height: 200px;
    background: url(src/images/funky-lines.webp);
    /* background-color: rgb(24, 26, 27);*/
  }
  
  .page-header .logo{
    float: left;
    width: 10%;
    height: 100px;
    background: url(src/images/funky-lines.webp);
    background-color: rgb(24, 26, 27);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .page-header h1{
    float: right;
    width: 90%;
    height: 100px;
    color: rgb(24, 26, 27);
    background: url(src/images/funky-lines.webp);
    background-color: rgb(24, 26, 27);
    text-align: center;
    vertical-align: middle;
    line-height: 100px;
    padding-right: 10%;
    font-size: 60px;
  }
  
  .page-header-main{
    float: left;
    width: 99%;
    height: 100px;
    margin-left: 0.5%;
    margin-right: 0.5%;
    background-color: #282A35;
    border-radius: 10px;
  }

  .main-nav{
    float: left;
    width: 50%;
    min-width: ;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: left;
    padding: 5px 5px 5px 20px;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  }
  
  .main-menu {
    list-style-type: none;
  }
  
  .main-menu li{
    display: inline;
    font-size: 30px;
  }
  
  .main-menu span{
    float: left;
    height: 60px;
    border-radius: 5px;
    color: rgb(223, 220, 216);
    text-align: center;
    vertical-align: middle;
    line-height: 58px;
    text-decoration: none;
    padding-left: 20px;
    padding-right: 20px;
    margin-right: 5px;
  }
  
  .main-menu span.currentpage {
    background-color:rgb(219, 23, 23);
    color: white;
  }
  
  .main-menu a{
    float: left;
    height: 60px;
    border-radius: 5px;
    color: rgb(223, 220, 216);
    text-align: center;
    vertical-align: middle;
    line-height: 58px;
    text-decoration: none;
    padding-left: 20px;
    padding-right: 20px;
    margin-right: 5px;
    margin-left: 5px;
  }
  
  .main-menu a:hover {
    background-color: rgb(3, 136, 87);
  }
  
  .header-search {
    float: right;
    width: 50%;
    height: 100px;
    padding-right: 10px;
    display: flex;
    align-items: center;
    justify-content: right;
  }
  
  #nav-main-search {
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: right;
  }
  
  #nav-main-search label{
    width: 100px;
    font-size: 25px;
    text-align: center;
    border-right: 1px solid silver;
    margin-right: 10px;
    padding-right: 5px;
  }
  
  #nav-main-search input[type=search]{
    height: 50px;
    width: 200px;
    margin: 25px 5px 25px 5px;
    background: none;
    border: 1px solid silver;
    border-radius: 10px;
    transition: width 0.4s ease-in-out;
  }
  
  #nav-main-search input[type=search]::placeholder{
   color:rgba(223, 220, 216, 0.6);
  }
  
  #main-q {
    color:rgb(223, 220, 216);
    padding-left: 5px;
  }
  
  #nav-main-search input[type=search]:hover{
    width: 400px;
  }
  
  #nav-main-search input[type=search]:focus{
    width: 400px;
  }
  
  .search-button{
    width: 100px;
    height: 50px;
    margin: 0px 0px 0px 10px;
    color: rgb(223, 220, 216);
    border: 0px solid silver;
    border-radius: 10px;
    background-color:rgb(219, 23, 23);
    font-size: 20px;
    transition: transform 0.3s ease-in-out;
    transform-style: preserve-3d;
  }
  
  .search-button:hover{
    transform: scale(1.1);
  }
  
  .search-button:focus{
    background-color:rgb(3, 136, 87);
  }
  
  main{
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-rows: 350px 3fr;
    margin-top: 20px;
    background: url(src/images/funky-lines.webp);
    background-color: rgb(24, 26, 27);
  }
  
  .widgets{
    padding: 10px;
    margin-top: 20px;
    background-color: rgb(36, 39, 41);
    border-radius: 10px;
  }
  
  .widget{
    padding: 10px;
    margin: 10px;
  }

  #primary-widgets{
    grid-column: 1;
    grid-row: 1;
    margin: 0px 10px 10px 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    font-size: 30px;
    box-shadow: 5px 5px 4px 2px slategray;
  }
  
  #primary-widgets .advertisement{
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 1px solid silver;
    border-right: 1px solid silver;
  }
  
  #weather-widget{
    grid-column: 3;
  }
  
  #weather-widget h2{
    text-align: center;
    font-size: 40px;
    padding-bottom: 10px;
  }
  
  #weather-widget ul{
    list-style: none;
    padding-left: 10px;
  }
  
  #weather-widget li{
    padding: 5px;
  }
  
  #links-widget{
    grid-column: 1;
    grid-row: 1;
  }
  
  #links-widget h2{
    text-align: center;
    font-size: 40px;
    padding-bottom: 10px;
  }
  
  #links-widget ul{
    list-style: none;
    padding-left: 10px;
  }
  
  #links-widget li{
    padding: 3px;
  }
  
  #links-widget a{
    text-decoration: none;
    color:rgb(219, 23, 23);
  }
  
  #links-widget a:hover{
    text-decoration: underline;
  }
  
  .blog{
    grid-column: 1;
    grid-row: 2;
    margin: 10px 10px 0px 20px;
  }
  
  .blogpost{
    padding: 40px 20px 40px 20px;
    background-color: rgb(36, 39, 41);
    border-radius: 10px;
    box-shadow: 5px 5px 4px 2px slategray;
  }
  
  #blogpost-2{
    margin: 20px 0px 20px 0px;
  }
  
  .blogpost h2{
    font-size: 50px;
  }
  
  .blogpost h3{
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid silver;
    font-size: 30px;
  }
  
  .blogpost p{
    padding-top: 30px;
    font-size: 25px;
  }
  
  #secondary-widgets{
    grid-column: 2;
    grid-row: 2;
    width: 329.22;
    margin: 10px 20px 0px 10px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    font-size: 30px;
    box-shadow: 5px 5px 4px 2px slategray;
  }
  
  #task-widget{
    grid-row: 1;
    border-bottom: 1px solid silver;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  
  #task-widget h2{
    text-align: center;
    padding-bottom: 20px;
  }
  
  #task-widget dt{
    border-bottom: 1px solid silver;
    font-weight: bold;
    padding-bottom: 10px;
  }
  
  #task-widget dd{
    font-size: 25px;
    padding-bottom: 20px;
    padding-top: 10px;
    padding-left: 20px;
  }
  
  #assignments-widget{
    grid-row: 2;
    margin-top: 40px;
    margin-bottom: 40px
  }
  
  #assignments-widget h2{
    text-align: center;
    padding-bottom: 20px;
  }
  
  #assignments-widget ul{
    list-style: circle;
    list-style-position: outside;
  }
  
  #assignments-widget li{
    font-size: 25px;
    padding-bottom: 20px;
    padding-left: 20px;
    margin-left: 30px;
  }

  #secondary-widgets .advertisement{
    grid-row: 3;
    border-top: 1px solid silver;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  footer{
    width: 99%;
    height: 50px;
    margin: 20px 0.5% 0.5% 0.5%;
    background-color: #282A35;
    border-radius: 10px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  #copyright{
    padding-left: 10px;
    padding-right: 5px;
  }
  
  #attribution{
    padding-left: 5px;
    padding-right: 10px;
  }
  `;

  constructor() {
    super();
    this.header = 'COMP2110 Portal';
  }

  render() {
    return html`
    <header class="page-header">
      <a href="#" class="logo">
        <img src="src/images/COMP2110_Logo.png" width="500" height="80"/>
      </a>
        <h1>COMP2110 Portal</h1>
          <div class="page-header-main">
            <nav class="main-nav">
              <ul class="main-menu">
                <li><span class="currentpage">Home</span></li>
                <li><a href="#" class="pagelink">About</a></li>
                <li><a href="#" class="pagelink">Blog</a></li>
              </ul>
            </nav>
                                    
            <div class="header-search">
              <form action="/search" role="search" class="search-form search-widget" id="nav-main-search">
                <label for="main-q" class="visually-hidden">Search Site</label>
                <input id="main-q"  type="search" class="search-input-field" name="q" placeholder="Site search..." value="">
                <input type="submit" class="search-button" aria-label="Search" value="Search"> 
              </form>
            </div>

            <login-widget></login-widget>

          </div>
    </header>

    <main>
      <section class="widgets" id="primary-widgets">
        <cc-widget></cc-widget>
        <widget-block></widget-block>
        <ad-widget></ad-widget>
      </section>

      <div class="blog">
        <div class="blogpost" id="blogpost-1">
            <blog-block></blog-block>
        </div>
      </div>

      <section class="widgets" id="secondary-widgets">
        <widget-block></widget-block>
        <widget-block></widget-block>
        <ad-widget></ad-widget>
      </section>
    </main>

    <footer id="footer">
      <p id="copyright">Copyright &copy; COMP2110 Web Designers, 2023.</p>
      <p id="attribution">The COMP2110 Portal is a service of Bob Bobalooba Enterprises.</p>
    </footer>
    `;
  }
}

customElements.define('comp2110-portal', Comp2110Portal);