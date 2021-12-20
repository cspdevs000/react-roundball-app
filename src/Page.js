import React, { Component } from "react";

//component
import Menu from "./Menu";

const navbar = {
    title: 'Mets announce Showalter as new manager',
    link: 'https://www.mlb.com/news/buck-showalter-mets-manager'
}

const menuList = [
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

const displayMenuList = menuList.map((menu,index)=>{
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
                  <img src="data:image/png;base64,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"/>
                </a>
                <span className="navbar-burger burger" data-target="navbarMenu">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenu" className="navbar-menu">
                <div className="navbar-end">
                  <div className="tabs is-right">
                    <ul>
                      {displayMenuList}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-vcentered">
              <div className="column is-5">
                <figure className="image is-4by3">
                  <img
                    src="https://external-preview.redd.it/DJIyFooigzYQorz7vabm1noVvwHvHgz0z61xHvJZGa8.jpg?auto=webp&s=aa26a6a1434166260476308db11dacdb59439058"
                    alt="Description"
                  />
                </figure>
              </div>
              <div className="column is-6 is-offset-1">
                <h1 className="title is-2">{navbar.title}</h1>
                <a className="button is-medium is-info is-outlined" href={navbar.link}>
                    Link to Article
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-foot">
          <div className="container">
            <div className="tabs is-centered">
                <br></br>
                  <a>THE END</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Cover;