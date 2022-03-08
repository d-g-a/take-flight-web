import styled from 'styled-components';

export const EventsPageStyled = styled.div`
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #000;
    //align-items: flex-start;

    h2{
        margin: 25px;
        padding: 0;
        
    }

    p{
        margin: 25px;
        font-size: 24px;
        text-align: left;
    }
    .Content{
        width: 90vw;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .Vertical{
        //transform: rotate(90deg);
        width: 10vw;
        
        .Marquee{
            position: absolute;
            left: 0;
        }
    }
`;