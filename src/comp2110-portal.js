import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import './components/widget-block.js';
import './components/blog-block.js';
import './components/blog-post.js';
import './components/widget-column.js';
import './components/ad-widget.js';
import './components/login-widget.js';
import './components/AndrewsWidget/widget.js';
import './components/SaeedsWidget/saeedwidget.js';
import './components/LiamWidget/liamwidget.js';
import './components/FelixWidget/sunset-widget.js'

window.onload = function() {      
  var geoSuccess = function(position) {           
     document.cookie("position_latitude", position.coords.latitude);
     document.cookie("position_longitude", position.coords.longitude);
     document.location.reload(true);
  };
  if (document.cookie("position_longitude", undefined))
      navigator.geolocation.getCurrentPosition(geoSuccess);
};

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
  }
  
  .logo {
    scale: 30%;
    position: absolute;
    left: 10px;
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
    width: 45%;
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
    transition: transform 0.3s ease-in-out;
    transform-style: preserve-3d;
  }
  
  .main-menu span:hover{
    transform: scale(1.1);
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
    transition: transform 0.3s ease-in-out;
    transform-style: preserve-3d;
  }
  
  .main-menu a:hover {
    background-color: rgb(3, 136, 87);
    transform: scale(1.1);
  }
  
  .header-search {
    float: right;
    width: 55%;
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
    padding-right: 5px;
  }
  
  #nav-main-search input[type=search]{
    height: 50px;
    width: 200px;
    margin: 25px 5px 25px 0px;
    background: none;
    border: 1px solid silver;
    border-radius: 10px;
    transition: width 0.4s ease-in-out;
  }

  #nav-main-search #searchBar{
    padding-left: 15px;
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
    grid-template-columns: 1fr 1536px 512px 1fr;
    grid-template-rows: 380px 3fr;
    margin-top: 20px;
    background: url(src/images/funky-lines.webp);
    background-color: rgb(24, 26, 27);
  }
  
  .widgets{
    padding: 10px;
    margin-top: 20px;
    background-color: rgb(36, 39, 41);
    border-radius: 10px;

    position: relative;
  }
  
  .widget{
    padding: 10px;
    margin: 10px;
  }

  #primary-widgets{
    grid-column: 2;
    grid-row: 1;
    margin: 0px 10px 10px 20px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    position: relative;

    font-size: 30px;
    box-shadow: 5px 5px 4px 2px slategray;
  }
  
  .blog{
    grid-column: 2;
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
    grid-column: 3;
    grid-row: 2;

    width: 482px;
    height: 1100px;

    display: grid;
    grid-template-rows: 1fr 1fr 1fr;

    font-size: 30px;
    box-shadow: 5px 5px 4px 2px slategray;

    margin-left: 10px;
    margin-top: 10px;
  }
  
  footer{
    width: 99%;
    height: 50px;
    margin: auto 0.5% 0.5% 0.5%;
    background-color: #282A35;
    border-radius: 10px;
    font-size: 20px;
    display: flex;

    position: absolute;
    bottom: 0;

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

  

  sun-widget{
    grid-column: 1;
    grid-row: 1;

    position: absolute;
    top: 15px;
    left: 96px;
  }

  weather-widget{
    grid-column: 2;
    grid-row: 1;

    position: absolute;
    top: 20px;
    left: 96px;
  }

  #primary-ad{
    grid-column: 3;
    grid-row: 1;

    position: absolute;
    top: 50px;
    left: 96px;

    scale: 125%;
    border-radius: 10px;
  }

  
  login-widget{
    grid-row: 1;
    grid-column: 3;

    margin-left: 10px;
  }


  cc-widget{
    grid-row: 1;
  }

  uph-widget{
    grid-row: 2;

    position: absolute;
    top: 2%;
    left: 2%;
  }
  
  #secondary-ad{
    grid-row: 3;
    position: absolute;
    top: 10%;
    left: 25%;

    width: 320;
    height: 320;
  } 

  #container {
    position: relative;
    min-height: 100vh;
  }

  #content {
    padding-bottom: 80px;
  }



  @media only screen and (max-width: 2048px) {

    .logo {
      scale: 25%;
    }

    main{
      display: grid;
      grid-template-columns: 1fr 482px;
      grid-template-rows: 380px 1fr 380px;

      margin-left: 10px;
      margin-right: 15px;
    }

    login-widget{
      grid-row: 1;
      grid-column: 2;
    }

    .blog{
      grid-row: 2;
      grid-column: 1 / 3;
    }
    
    #primary-widgets{
      grid-row: 1;
      grid-column: 1;
    }

    #secondary-widgets {
      grid-row: 3;
      grid-column: 1 / 3;

      display: grid;
      grid-template-rows: 380px;
      grid-template-columns: 1fr 1fr 1fr;

      height: 380px;
      width: calc(100% - 30px);

      margin-left: 20px;
    }

    cc-widget{
      grid-column: 1;
      grid-row: 1;
    }
  
    uph-widget{
      grid-column: 2;
      grid-row: 1;
    }
    
    #secondary-ad{
      grid-column: 3;
      grid-row: 1;
    }

    #content {
      padding-bottom: 90px;
    }

  }



  @media only screen and (max-width: 1664px) {

    .logo {
      scale: 25%;
    }

    main{
      display: grid;
      grid-template-columns: 1fr 482px;
      grid-template-rows: 380px 1fr 380px;

      margin-left: 10px;
      margin-right: 15px;
    }

    login-widget{
      grid-row: 1;
      grid-column: 2;

      margin: 0 auto;
    }

    .blog{
      grid-row: 2;
      grid-column: 1 / 3;
    }
    
    #primary-widgets{
      grid-column: 2;
      grid-row: 1;
      margin: 0px 10px 10px 20px;
  
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    #primary-widgets{
      grid-row: 1;
      grid-column: 1;
    }

    sun-widget{
      grid-column: 1;
      grid-row: 1;
  
      position: absolute;
      top: 10px;
      left: 10px;
    }
  
    weather-widget{
      grid-column: 2;
      grid-row: 1;
  
      position: absolute;
      top: 15px;
      left: 10px;
    }
  
    #primary-ad{
      display: none;
    }

    #secondary-widgets {
      grid-row: 3;
      grid-column: 1 / 3;

      display: grid;
      grid-template-rows: 380px;
      grid-template-columns: 1fr 1fr 1fr;

      height: 380px;
      width: calc(100% - 30px);

      margin-left: 20px;
    }

    cc-widget{
      grid-column: 1;
      grid-row: 1;
    }
  
    uph-widget{
      grid-column: 2;
      grid-row: 1;
    }
    
    #secondary-ad{
      grid-column: 3;
      grid-row: 1;
    }

    #content {
      padding-bottom: 90px;
    }

  }

  @media only screen and (max-width: 1220px) {

    .logo {
      scale: 25%;
    }

    main{
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 380px 380px 1fr 380px;

      margin-left: 10px;
      margin-right: 15px;
    }

    login-widget{
      grid-row: 1;
      grid-column: 1;

      margin: 0 auto;
    }

    .blog{
      grid-row: 3;
      grid-column: 1;

      width: calc(100vw - 60px);
    }
    
    #primary-widgets{
      grid-column: 1;
      grid-row: 2;
      margin: 0px 10px 10px 20px;
  
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    #primary-widgets{
      grid-row: 2;
      grid-column: 1;
    }

    sun-widget{
      grid-column: 1;
      grid-row: 1;
  
      position: absolute;
      top: 10px;
      left: 13%;
    }
  
    weather-widget{
      grid-column: 2;
      grid-row: 1;
  
      position: absolute;
      top: 15px;
      left: 15%;
    }
  
    #primary-ad{
      display: inline;
    }

    #secondary-widgets {
      grid-row: 4;
      grid-column: 1;

      display: grid;
      grid-template-rows: 380px;
      grid-template-columns: 1fr 1fr 1fr;

      height: 380px;
      width: calc(100vw - 60px);

      margin-left: 20px;
    }

    cc-widget{
      grid-column: 1;
      grid-row: 1;
    }
  
    uph-widget{
      grid-column: 2;
      grid-row: 1;
    }
    
    #secondary-ad{
      grid-column: 3;
      grid-row: 1;
    }

    #content {
      padding-bottom: 90px;
    }

  }



  @media only screen and (max-width: 900px) {

    .logo {
      scale: 20%;
    }

    .page-header{
      height: 300px;
    }

    .page-header-main{
      height: 200px;
    }

    .main-nav{
      float: left;
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px 5px 5px 20px;
    }
 
    .header-search {
      float: left;
      width: 100%;
      height: 100px;
      padding-right: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #nav-main-search {
      height: 100px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
 
    main{
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 392px 1200px 1fr 1000px;
    }

    login-widget{
      grid-row: 1;
      grid-column: 1;

      margin: 0 auto;
    }

    .blog{
      grid-row: 3;
      grid-column: 1;

      width: calc(100vw - 60px);

      margin-left: 10px;
    }
    
    #primary-widgets{
      grid-row: 2;
      grid-column: 1;

      display: grid;
      grid-template-rows: 360px 360px 360px;
      grid-template-columns: 1fr;

      margin-left: 10px;
    }

    sun-widget{
      grid-column: 1;
      grid-row: 3;
  
      position: absolute;
      top: 15%;
      left: 22%;
    }
  
    weather-widget{
      grid-column: 1;
      grid-row: 2;
  
      position: absolute;
      top: 5%;
      left: 22%;
    }
  
    #primary-ad{
      display: inline;

      grid-column: 1;
      grid-row: 1;
  
      position: absolute;
      top: 5%;
      left: 28%;
    }

    #secondary-widgets {
      grid-row: 4;
      grid-column: 1;

      display: grid;
      grid-template-rows: 360px 360px 360px;
      grid-template-columns: 1fr;

      margin-left: 10px;
      margin-top: 0px;

      height: 100%;
      width: calc(100% - 20px);
    }

    cc-widget{
      grid-column: 1;
      grid-row: 2;
    }
  
    uph-widget{
      grid-column: 1;
      grid-row: 3;
    }
    
    #secondary-ad{
      grid-column: 1;
      grid-row: 1;
    }

  }
  `;

  constructor() {
    super();
    this.header = 'COMP2110 Portal';
  }

  render() {
    return html`
    <div id="container">
      <div id="content">
        <header class="page-header">
          <a href="#" class="logo">
            <img src="src/images/COMP_2110_Logo.png"/>
          </a>
            <h1>COMP2110 Portal</h1>
              <div class="page-header-main">
                <nav class="main-nav">
                  <ul class="main-menu">
                    <li><span class="currentpage">Home</span></li>
                    <li><a href="#blog" class="pagelink">Blog</a></li>
                    <li><a href="#secondary-widgets" class="pagelink">Widgets</a></li>
                  </ul>
                </nav>
                                    
                <div class="header-search">
                  <form action="/search" role="search" class="search-form search-widget" id="nav-main-search">
                    <label for="main-q" class="visually-hidden">Search Site</label>
                    <div id="searchBar"><input id="main-q"  type="search" class="search-input-field" name="q" placeholder="Site search..."></div>
                    <input type="submit" class="search-button" aria-label="Search" value="Search"> 
                  </form>
                </div>
              </div>
        </header>

        <main>

          <login-widget></login-widget>

          <section class="widgets" id="primary-widgets"> 
            <weather-widget></weather-widget>
            <sun-widget></sun-widget>
            <ad-widget id="primary-ad"></ad-widget>
          </section>

          <div class="blog" id='blog'>
            <div class="blogpost" id="blogpost-1">
              <blog-block></blog-block>
            </div>
            <div class="blogpost" id="blogpost-2">
              <blog-post></blog-post>
            </div>
          </div>

          <section class="widgets" id="secondary-widgets">
            <cc-widget></cc-widget>
            <uph-widget></uph-widget>
            <div id="secondary-ad"></div>
          </section>
        </main>
      </div>

      <footer id="footer">
        <p id="copyright">Copyright &copy; COMP2110 Web Designers, 2023.</p>
        <p id="attribution">The COMP2110 Portal is a service of Group 48.</p>
      </footer>
    </div>
    `;
  }
}

customElements.define('comp2110-portal', Comp2110Portal);