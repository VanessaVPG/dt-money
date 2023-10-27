import styled from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
  `;
interface SummaryCardProps {
  variant?: 'green';
}
export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${props => props.theme['gray-600']};
  width: 100%;
  border-radius: 0.25rem;
  padding: 1.5rem;
  background: ${props => props.variant === 'green' &&  props.theme['green-500']};
  color: ${props => props.variant === 'green' ? props.theme.white : props.theme['gray-300']};
  strong {
    font-size: 2rem;
    line-height:140%;
    color: ${props => props.theme['gray-100']};
  }
`;

export const SummaryCardHeader = styled.header<SummaryCardProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  span {
    font-size: 1rem;
  }
`;