// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
import Pages from "./pages/Pages.jsx";
import Category from "./components/Category.jsx";
import Search from "./components/Search.jsx";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav role="navigation">
          <GiKnifeFork />
          <Logo to={"/"} title="Home Page" aria-label="return to the home page">
            Delisiousss
          </Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  font-family: "Lobster Two", cursive;
  font-size: 1.5rem;
  font-weight: 400;
  text-decoration: none;

  &:active {
    color: #f27121;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4rem 0rem;

  svg {
    font-size: 2rem;
  }
`;
