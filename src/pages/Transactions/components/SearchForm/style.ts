import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
`;

export const SearchFormInput = styled.input`
background: ${props => props.theme['gray-900']};
border: 0;
border-radius: 0.25rem;
width: 100%;
padding: 1rem;
color: ${props => props.theme['gray-300']};

&::placeholder {
  color: ${props => props.theme['gray-500']};
}
`;

export const SearchFormButton = styled.button`
display: flex;
align-items: center;
gap: 0.75rem;
padding: 1.00625rem 2rem;
background: transparent;
border: 1px solid ${props => props.theme['green-300']};
border-radius: 0.25rem;
cursor: pointer;
transition: background-color 0.2s, border-color 0.2s, color 0.2s;
color: ${props => props.theme["green-300"]};

&:disabled {
  cursor: not-allowed;
  opacity: 0.4;
}

&::not(disabled):hover {
  background: ${props => props.theme['green-500']};
  border-color: ${props => props.theme['green-500']};
  color: ${props => props.theme.white};
}

span {
  font-size: 1rem;
  font-weight: bold;
  line-height: 160%;
}
`;
