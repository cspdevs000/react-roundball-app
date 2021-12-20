import React, { Component } from "react";

//component
import Menu from "./Menu";
import Article from "./Article"

const articles = [
{
  title: 'Mets announce Showalter as new manager',
  link: 'https://www.mlb.com/news/buck-showalter-mets-manager'
},
{
  title: "A's hire Mark Kotsay as manager",
  link: 'https://www.mlb.com/news/mark-kotsay-a-s-manager'
},
{
  title: 'Ichiro strikes out 17 -- vs. high schoolers',
  link: 'https://www.mlb.com/news/ichiro-suzuki-pitches-to-high-school-girls-team'
},
{
  title: 'Reds sign versatile IF/OF Bauers as NRI',
  link: 'https://www.mlb.com/news/jake-bauers-signed-by-reds'
},
{
  title: 'These players hit 2 grand slams in 1 game',
  link: 'https://www.mlb.com/news/two-grand-slams-in-a-game-c268200758'
},
]

const displayArticles = articles.map((article,index)=>{
  return (
     <Article key={index} link={article.link} title={article.title} />
  )
})

const navbar = [
{
    name:'Home',
    link: 'https://www.mlb.com'
},{
    name:'Scores',
    link: 'https://www.mlb.com/scores'
},{
    name:'Schedule',
    link: 'https://www.mlb.com/postseason'
},{
    name:'Stats',
    link: 'https://www.mlb.com/stats'
},
]

const displayNavbar = navbar.map((menu,index)=>{
    return (
       <Menu key={index} link={menu.link} name={menu.name} />
    )
})

class Cover extends Component {
  render() {
    return (
      <section className="hero is-fullheight is-default is-bold">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item" href="https://www.mlb.com/">
                  <img class="logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Major_League_Baseball_logo.svg/1200px-Major_League_Baseball_logo.svg.png"/>
                </a>
              </div>
              <br></br>
              <div id="navbarMenu" className="navbar-menu">
                <div className="navbar-end">
                  <div className="tabs is-right">
                    <ul>
                      {displayNavbar}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <br></br>
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-vcentered">
              <div className="column is-5">
                <figure className="image is-4by3">
                  <img
                    class="frontPageImg"
                    src="https://external-preview.redd.it/DJIyFooigzYQorz7vabm1noVvwHvHgz0z61xHvJZGa8.jpg?auto=webp&s=aa26a6a1434166260476308db11dacdb59439058"
                    alt="Roundball Players"
                  />
                </figure>
              </div>
              <br></br>
              <div className="column is-6 is-offset-1">
                <ol>
                  <li>
                  {displayArticles}
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-foot">
          <div className="container">
            <div className="tabs is-centered">
                  <a>THE END</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Cover;