import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        display: flex;
        gap: 0.5rem;

        a {
            width: 3rem;
            height: 3rem;

            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px;
            border-radius: 8px;
            background: ${(props) => props.theme["yellow-light"]};

            text-decoration: none;

            &:hover {
              background: ${(props) => props.theme["yellow"]};
            }

            &.active {
                color: ${(props) => props.theme["yellow-dark"]};
            }
        }

        a:first-child {
            width: 7rem;
            font-size: 0.8rem;
            font-weight: bold;
            color: ${(props) => props.theme["purple-dark"]};
            background: ${(props) => props.theme["purple-light"]};
            border: none;
            outline: none;
        }
    }
`