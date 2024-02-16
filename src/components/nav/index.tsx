import { Link } from "react-router-dom"
import styled from "styled-components"

//constants
import { NAVIGATION_ITEMS } from "../../constants"

//styled utils
import { media } from "../../styled/utils"

const Nav = () => {
  return (
    <NavBar>
      <ul>
        {NAVIGATION_ITEMS.map(navItems => (
          <li>
            <Link to={navItems.url}>{navItems.title}</Link>
          </li>
        ))}
      </ul>
    </NavBar>
  )
}

export default Nav

export const NavBar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgb(2, 0, 36);
  background: linear-gradient(0deg, rgba(2, 0, 36, 1) 50%, rgba(255, 255, 255, 1) 100%);
  padding: 10px 0;

  ${media.tablet` 
    display: none;
  `}

  ul {
    display: flex;
    gap: 20px;
    align-items: center;
    list-style-type: none;
    justify-content: space-around;

    li a {
      color: #fff;
      text-decoration: none;
    }
  }
`
