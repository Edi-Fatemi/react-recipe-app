import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          placeholder="Search..."
        />
        <FaSearch></FaSearch>
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  width: 50vw;
  margin: 0rem auto;
  border-radius: 1rem;
  div {
    position: relative;
    width: 100%;
  }

  input {
    width: 100%;
    padding: 1rem 3rem;
    font-size: 1.5rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    color: #fff;
    background: linear-gradient(35deg, #494949, #313131);
    box-shadow: 0 0 1rem rgb(0, 0, 0, 0.5);
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: #fff;
    cursor: pointer;
  }

  input:focus {
    outline: 2px solid #f27121ad;
  }

  input:focus + svg {
    fill: #f27121ad;
  }
`;

export default Search;
