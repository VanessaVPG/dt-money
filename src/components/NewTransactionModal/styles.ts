import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from "@radix-ui/react-radio-group";

export const Overlay = styled(Dialog.Overlay)`
position: fixed;
width: 100vw;
height: 100vh;
inset: 0;
background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
min-width: 32rem;
border-radius: 0.25rem;
padding:  3rem;
background: ${props => props.theme['gray-800']};

position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

form {
  margin-top:2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    border-radius: 0.25rem;
    border: 0;
    padding: 1rem;
    background: ${props => props.theme['gray-900']};
    color: ${props => props.theme['gray-300']};

    &::placeholder {
      color: ${props => props.theme['gray-500']};
    } 
  }
  button[type="submit"] {
    height: 3.625rem;
    border: 0;
    background-color: ${props => props.theme['green-500']};
    border-radius: 0.25rem;
    color: ${props => props.theme.white};
    font-weight: bold;
    cursor: pointer;
    line-height: 160%;
    padding: 1rem;
    transform: background-color 0.2s;
    margin-top: 1.5rem;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    &::not(disabled):hover {
      background-color: ${props => props.theme['green-700']};
  }
}
}
`;

export const CloseButton = styled(Dialog.Close)`
position: absolute;
top: 1rem;
right: 1rem;
width: 1.5rem;
height: 1.5rem;
border: 0;
background: transparent;
cursor: pointer;
line-height: 0;
transition: filter 0.2s;
color: ${props => props.theme['gray-500']};

&:focus{
  border-radius: 0.25rem;
}
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`;

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome';
}

export const TransactionTypeButton = styled(RadioGroup.Item) <TransactionTypeButtonProps>`
background-color: ${props => props.theme['gray-700']};
padding: 1rem;
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
border-radius: 0.25rem;
cursor: pointer;
border: 0;
color: ${props => props.theme['gray-300']};

svg {
  color: ${props => props.variant === 'income' ? props.theme['green-300'] : props.theme['red-300']};
}
&[data-state="unchecked"]:hover{
  transition: background-color 0.2s;
  background-color: ${props =>props.theme['gray-600']};

}

&[data-state= "checked"] {
  background-color: ${props => props.variant === 'income' ? props.theme['green-500'] : props.theme['red-500']};
  color: ${props => props.theme.white};
  svg{
    color: ${props => props.theme.white};
  }
}
`;