import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  background-color: ${(props) => props.theme.colours.main};
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
`;

export const Item = styled.a`
  padding: 0 10px;
  text-decoration: none;
  color: ${(props) => props.theme.colours.textSecondary};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colours.textSecondary};
  }
`;
