import styled from "styled-components";

export const PotdContainerStyle = styled.div`
  color: antiquewhite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 10%;

  .POTD-second-header {
    font-size: 1rem;
  }
  .POTD-third-header {
    font-size: 0.8rem;
  }
  .POTD-second-header {
    width: 80%;
    font-family: "Roboto", sans-serif;
  }
  .POTD-img {
    padding: 3%;
    background-color: black;
    border: 3px solid grey;
    width: 60%;
  }
  .photo-box {
    width: 70%;
  }
  @media (max-width: 800px) {
    .photo-box {
      width: 70%;
    }
  }
`;
