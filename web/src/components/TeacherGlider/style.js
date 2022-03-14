import styled from "styled-components";

export const TeacherGliderStyled = styled.div`
  .card {
    background-color: black;
  }
`;

export const CardsWrappwer = styled.div`
  border-radius: 20px;
  text-align: center;
  color: black;
  background-color: black;

  .carousel {
    background-color: black;
  }

  .imageContainer {
    width: auto;
    border-radius: 20px;
    img {
      object-fit: cover;
      width: 100%;
      height: 600px;
      border-radius: 20px;
    }

    .infoContainer {
      position: absolute;
      top: 90%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: black;
      width: 100%;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
      margin-bottom: 10px;
    
      
          h3,
          h4,
          p,
          a {
            color: #f2e7d7;
          }

          h3{
            font-size: 32px;
            margin: 10px 0;
          }
          .nationality>p{
           margin: 0;
           margin-bottom: 10px;
          }
          .instagram>p>a{
            margin: 0;
            margin-bottom: 10px;
          }
          a:hover{
            text-decoration: underline;
            color: #4814CC;
          }
        }

        .infoRow{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
    }
    
`;
