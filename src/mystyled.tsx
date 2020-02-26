import styled from "styled-components";

export const Button = styled.button`
  border-radius: 5px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 0.3em;
  padding: 0.1em 1em;
  font-family: Cambria, Cochin, Georg?]ia, Times, "Times New Roman", serif;
`;

export const Div = styled.div`
  padding: 10em;
  padding-block-end: ${(props: any) =>
    props.padd === "Save" ? "5em" : "100em"};
  color: transparent;
  background: papayawhip;
  margin: 1em;
  border-radius: 4em;
`;
export const H3 = styled.h3`
  color: palevioletred;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

export const Input = styled.input`
  margin: 0.2em;
  color: goldenrod;
  border: 2px solid palevioletred;
  background: white;
`;
export const Form = styled.form`
  background: transparent;
`;
