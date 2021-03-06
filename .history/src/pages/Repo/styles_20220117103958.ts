import styled from "styled-components"

export const Header = styled.header`
display: flex;
align-items: center;
justify-content: space-between;

a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover { 
        color: #666666;
    }

    svg {
        margin-right: 4px;
    }
}
`;

export const RepoInfo = styled.section`
margin-top: 80px;

header {
    display: flex;
    align-items: center;

    img {
        width: 120px;
        height: 120px;
        bor
    }
}
`;