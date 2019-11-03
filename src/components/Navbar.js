import React, { Component } from "react"
import { StaticQuery, graphql, Link } from "gatsby"

class Navbar extends Component {
  render() {
    const menu = this.props.menu
    return (
      <div>
        <ul>
          {menu.map(item => {
            if (item.parentId == null) {
              return <li id={item.menuName}>{item.menuName}</li>
            }
          })}
        </ul>
      </div>
    )
  }
}

export default Navbar
