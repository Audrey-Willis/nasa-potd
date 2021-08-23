import styled from "styled-components";

export const NavStyle = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 7%;
  margin-top: 10%;
  width: 98%;
  .inner-nav {
    display: flex;
    justify-content: space-around;
    margin-bottom:4%;
    width: 98%;
  }
  .navLinks {
    color: antiquewhite;
    text-decoration: none;
  }
  .navLinks:hover {
    font-size: 1.3rem;
    color: blue;
  }
  @media (max-width: 500px) {
    .navLinks {
      font-size: 1rem;
      margin-bottom: 10%;
    }
    .nav {
      flex-direction: column;
    }
  }
`;
