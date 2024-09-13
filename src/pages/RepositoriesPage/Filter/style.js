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

   @media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
    border-radius: 20px;
    display:flex;
  }
}
`;

export const Cleaner = styled.button`
  background: transparent;
  color: ${(props) => props.theme.colors.text};
  text-align: left;
  border: none;
  margin-top: 0.8rem;

  &:hover{
    color: rgba( 255, 255, 255, 0.5);
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
  text-align: center;
  padding: 0 1rem;
  }
`;
