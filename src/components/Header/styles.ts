import styled from "styled-components";

export const HeaderContainer = styled.header`
background: ${props => props.theme['gray-900']};
padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
width: 100%;
max-width: 1120px;
padding: 0 1.5rem;
margin: 0 auto;

display: flex;
align-items: center;
justify-content: space-between;
align-items: center;
`;

export const NewTransactionButton = styled.button`
font-size: 1rem;
line-height: 160%;
color: ${props => props.theme.white};
background: ${props => props.theme['green-500']};
border: 0;
padding: 0.75rem 1.25rem;
border-radius: 0.25rem;
transition: background-color 0.2s;
font-weight: bold;
cursor: pointer;

&:hover {
  background-color: ${props => props.theme['green-700']};
}
`;
