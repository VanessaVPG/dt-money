import styled from "styled-components";

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

export const TransactionsTable = styled.table`
  margin-top: 1.5rem;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  
  
  td {
    padding: 1.25rem 2rem;
    background: ${props => props.theme['gray-700']};
    &:first-child {
      border-top-left-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
    }
    &:last-child {
      border-top-right-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
    }
    &:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
  `;

interface PriceHighlightProps {
  variant: 'income' | 'outcome';
}
export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${props => props.variant === 'income' ? props.theme['green-500'] : props.theme['red-500']};
  `;
