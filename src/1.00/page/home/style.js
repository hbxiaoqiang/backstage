import styled from 'styled-components';

export const UserInfo = styled.div`
    height: ${100/16}rem;
    margin-bottom: ${90/16}rem;
    padding-top: ${8/16}rem;
    background-color: #000000;
    background-image: -webkit-linear-gradient(left,#4ad858,#34c577);
    background-image: linear-gradient(left,#4ad858,#34c577);
    border-bottom-left-radius: 30%;
    border-bottom-right-radius: 30%;
    position: relative;

    .welcome{
        left: 5px;
        top: ${8/16}rem;
        font-size: ${20/16}rem;
        color:#fff;
        text-align: center;
    }

    .exit-login{
        right: ${8/16}rem;
        top: ${8/16}rem;
        text-decoration: underline;
        color: #ff6a00;
        font-size: ${14/16}rem;
        position: absolute;
    }
`;