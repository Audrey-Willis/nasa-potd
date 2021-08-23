import styled from "styled-components";

export const HeaderStyle = styled.div`
    margin-bottom: 15%;
    text-align: center;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-bottom:22px double black;
    margin-left:10%;
    margin-right:10%;
    padding-bottom:8%;
    
  .header-first-header {
    text-decoration: none;
  }
  .header-box{
    width:80%;
  }
  @media (max-width: 800px) {

  .header-first-header {
    font-size: 2rem;
  }
  .header-box{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:90%;
  }
  .header-insides{
    width:80%;
  }
  .header-quote{
    font-size:.9rem;
  }
  }
  @media (max-width:500px){
   .header-first-header{
      font-size:1.2rem;
    }
    .header-box{
      width:98%;
    }
    .header-insides{
      width:98%;
    }
    .header-quote{
      font-size:.8rem;
    }
  }
`;
