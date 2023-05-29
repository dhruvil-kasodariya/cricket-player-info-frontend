import { styled } from "styled-components";

export const TeamsPreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const TeamsPreviewCard = styled.div`
  height: 100px;
  flex: 0 0 23%;
  margin: 10px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: red;
  h4 {
    margin-bottom: 5px;
  }
`;
