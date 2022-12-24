import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.div`
  padding: 10px;
  background-color: ${(props) => props.theme.colors};
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
`;

export const Item = styled.a`
  padding: 0 10px;
  text-decoration: none;
  color: ${theme.WHITE};
  cursor: pointer;
  &:hover {
    color: ${theme.LIGHTEST_GREY};
  }
`;
