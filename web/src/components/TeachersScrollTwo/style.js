import styled from "styled-components";

export const TScrollStyled= styled.div`

padding: 0;
margin: 0;
height: 100vh ;
display: flex ;
align-items: center;
justify-content: center ;
background-color: black ;


.loading-wrapper{
    width: 100%;
    height: 580px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

.loading-inner-content{
    background-color: #fff ;
    height: 580px ;
    width:  3600px ;
    
}

.box{
    position: relative;
    width: 360px;
    height: 540px;
    margin: 20px 20px 0 0;
    float: left;
    overflow: hidden ;
    border-radius: 20px ;
}

.box:first-child{
    margin-left: 20px;
}

.box:last-child{
    margin-right: 20px;
}

.box-content{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
}

.box-content > img {
    width: 100% ;
}

`;