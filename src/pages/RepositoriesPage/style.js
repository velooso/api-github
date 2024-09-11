import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  min-height: 100vh;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  background: ${(props) => props.theme.colors.background};
  min-width: 8rem;
  min-height: 100vh;
  overflow-y: hidden;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}){
    padding: 1rem 1rem;
    min-height: 100%;
  }
`;

export const Main = styled.section`
  background-color: ${(props) => props.theme.colors.container};
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  padding: 40px;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
    height: 100%;
  }
    @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}){
    padding: 2.5rem 0.1rem;
    // width: 100vw;
  }
  `;
