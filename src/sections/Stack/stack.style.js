import styled from "styled-components";

const StackSectionWrapper = styled.div`
  padding: 85px 0;

  .Stack-Wrapper {
    .title__wrapper {
      text-align: center;
    }
    .language-image {
      display: flex;
      justify-content: space-evenly;
      margin-top: 45px;
      a {
        &:hover {
          opacity: 0.7;
        }
        img {
          width: auto;
        }
      }
      .team-member-name {
        font-weight: bold;
        margin-bottom: -1rem;
      }
      .qualifications {
        ul {
          padding: 0 30px;
          margin: 0;
          li {
            font-size: 18px;
            line-height: 28px
          }
        }
      }
    }
  }

  .numberUser{
    font-size: 45px;
    font-weight: bold;
    letter-spacing: 2px;
  }

  .img-ceo{
    gap: 100px;
  }

  .img-ceo > div{
    gap: 20px;
    flex-direction: column;
  }

  .img-ceo > div p {
    font-size: 27px;
    text-align: center;
  }

  @media only screen and (max-width: 568px) {
    .box.language-image a img{
      width: 85%;
    } 
  }

  @media only screen and (max-width: 480px) {
     padding: 20px 0;
    .box.language-image a img{
      width: 70%;
    } 
    .heading{
      font-size: 33px;
      line-height: 40px;
    }
    .box.language-image{
      flex-wrap: wrap;
      gap: 30px !important;
    }
  }
  @media only screen and (max-width:375px) {
    .heading{
      font-size: 28px;
      line-height: 35px;
    }
  }
`;

export default StackSectionWrapper;
