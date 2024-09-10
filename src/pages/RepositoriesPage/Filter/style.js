import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 0.2rem;
  margin: 1rem auto;
  padding-right: 2rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
  grid-template-columns: auto auto;
  gap: 0.8rem;
  padding: 0 1rem;
  }
`;

export const Selector = styled.button`
  display: flex;
  aling-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.container};
  color: ${(props) => props.color || props.theme.colors.text};
  min-height: 2rem;
  width: 100%;
  border: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: background 0.3s, transform 0.3s;
  padding: 0.2rem 1rem;


  &:hover,
  &.selected{
  background: ${(props) => props.color || props.theme.colors.light};
  color: ${(props) => props.color ? props.theme.colors.white : props.theme.colors.black};
  }
`;

export const Cleaner = styled.button`
  background: transparent;
  text-align: center;
  border: none;
  margin-top: 0.8rem;
  padding-right: 10rem;

  color: ${(props) => props.theme.colors.text};
`;
