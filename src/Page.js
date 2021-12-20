import React, { Component } from "react";

//component
import Menu from "./Menu";

const header = {
    title: 'Mets announce Showalter as new manager',
    link: 'https://www.mlb.com/news/buck-showalter-mets-manager'
}

const menuList = [
{
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
                  <img src="logo.jpg" alt="Logo" title='logo'/>
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
                      <li className="is-active">
                        <a>Home</a>
                      </li>
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
                    src="roundball.jpeg"
                    alt="Description"
                  />
                </figure>
              </div>
              <div className="column is-6 is-offset-1">
                <h1 className="title is-2">{header.title}</h1>
                <h2 className="subtitle is-4">
                  {header.subTitle}
                </h2>
                <br />
                <p className="has-text-centered">
                  <a className="button is-medium is-info is-outlined" href={header.link}>
                    Read more
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-foot">
          <div className="container">
            <div className="tabs is-centered">
              <ul>
                <li>
                  <a>DO I SEE ME</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Cover;