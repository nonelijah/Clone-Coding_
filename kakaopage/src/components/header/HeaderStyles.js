import styled from "styled-components";

export const HeaderSt = styled.header`
    /* 모바일, 태블릿 */
    @media screen and (min-width: 360px) {
        height: 56px;
        background-color: orange;
    }
    /* 데스크탑 */
    @media screen and (min-width: 1008px) {
        height: 96px;
        background-color: skyblue;
    }
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
