import React, { Component } from "react"
import { Link } from "gatsby"
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"

class NavBarMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: "",
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            })
      }
    )
  }

  render() {
    const menu = this.props.menu
    return (
      <Navbar variant="dark" expand="lg" id="site-navbar">
        {/* <Container> */}
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span">Carport Template</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {menu.map(item => {
              if (item.parentId == null) {
                return (
                  <Link to={"/" + item.menuName} className="link-no-style">
                    <Nav.Link as="span" eventKey={item.menuName}>
                      {item.menuName}
                    </Nav.Link>
                  </Link>
                )
              }
            })}
          </Nav>
          {/* <Nav className="ml-auto">
            <Form inline onSubmit={e => e.preventDefault()}>
              <Form.Group>
                <FormControl
                  type="text"
                  placeholder="Fake Search"
                  className="mr-2"
                />
              </Form.Group>
              <Button>Fake Button</Button>
            </Form>
          </Nav> */}
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
      //old
      // <nav
      //   className="navbar is-fixed-top is-light"
      //   role="navigation"
      //   aria-label="main-navigation"
      // >
      //   <div className="container is-fluid">
      //     <div className="navbar-brand">
      //       {/* Hamburger menu */}
      //       <div
      //         className={`navbar-burger burger ${this.state.navBarActiveClass}`}
      //         data-target="navMenu"
      //         onClick={() => this.toggleHamburger()}
      //       >
      //         <span />
      //         <span />
      //         <span />
      //       </div>
      //     </div>
      //     <div
      //       id="navMenu"
      //       className={`navbar-menu ${this.state.navBarActiveClass}`}
      //     >
      //       <div className="navbar-end has-text-centered">
      //         {menu.map(item => {
      //           if (item.parentId == null) {
      //             return (
      //               <Link className="navbar-item" to="/" {...item.menuName}>
      //                 <h2 as="h4">{item.menuName}</h2>
      //               </Link>
      //             )
      //           }
      //         })}
      //       </div>
      //     </div>
      //   </div>
      // </nav>
    )
  }
}

export default NavBarMenu
