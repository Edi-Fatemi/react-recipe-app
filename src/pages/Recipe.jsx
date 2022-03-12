import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe() {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  let params = useParams();

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <ImageBox>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </ImageBox>

      <Info>
        <ButtonWrapper>
          <Button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </Button>
          <Button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </Button>
        </ButtonWrapper>
        {activeTab === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  max-width: 768px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-block: 5rem 5rem;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }

  h2 {
    margin-bottom: 2rem;
  }
`;

const ImageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    max-width: 100%;
    object-fit: cover;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgb(0, 0, 0, 0.2);
  }
`;

const ButtonWrapper = styled.div`
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  margin-right: 2rem;
  font-weight: 600;
  color: #313131;
  background: #fff;
  border: 2px solid #000;
  border-radius: 0.5rem;
  cursor: pointer;
  box-shadow: 0rem 0rem 1rem rgb(0 0 0 / 30%);
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;

  div:nth-of-type(2) {
    padding: 2rem;
    margin-block: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0rem 0rem 1rem rgb(0, 0, 0, 0.1);
  }

  ol li::marker {
    color: #e15488;
  }

  ul {
    padding: 2rem;
    margin-block: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0rem 0rem 1rem rgb(0, 0, 0, 0.1);
  }

  ul li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  ul li::marker {
    color: #e15488;
  }
`;

export default Recipe;
