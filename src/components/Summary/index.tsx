import { SummaryCard, SummaryCardHeader, SummaryContainer } from "./styles";
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar  } from 'phosphor-react';

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <SummaryCardHeader>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </SummaryCardHeader>
        <strong>R$ 1000,00</strong>
      </SummaryCard>

      <SummaryCard>
        <SummaryCardHeader>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </SummaryCardHeader>
        <strong>R$ 1000,00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <SummaryCardHeader>
          <span>Total</span>
          <CurrencyDollar size={32} color="#ffffff" />
        </SummaryCardHeader>
        <strong>R$ 1000,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}