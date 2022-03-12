import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <List>
      <SLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
  width: 6rem;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 2rem;
  text-decoration: none;
  border-radius: 50%;
  background: linear-gradient(35deg, #494949, #313131);
  transform: scale(0.8);
  cursor: pointer;
  box-shadow: 0 0 1rem rgb(0 0 0 / 50%);

  h4 {
    font-size: 0.8rem;
    color: #fff;
  }

  svg {
    font-size: 1.5rem;
    color: #fff;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: #fff;
    }

    h4 {
      color: #fff;
    }
  }
`;

export default Category;
