import { TransactionsContext } from "../../contexts/TransactionsContext";
import { priceFormatter } from "../../utils/formatter";
import { SummaryCard, SummaryCardHeader, SummaryContainer } from "./styles";
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react';
import { useContext } from "react";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'income'){
      acc.income += transaction.price;
      acc.total += transaction.price;

    }else {
      acc.outcome += transaction.price;
      acc.total -= transaction.price
    }
    return acc;
  },
    { income: 0, outcome: 0, total: 0 }
  )

  return (
    <SummaryContainer>
      <SummaryCard>
        <SummaryCardHeader>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </SummaryCardHeader>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <SummaryCardHeader>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </SummaryCardHeader>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <SummaryCardHeader>
          <span>Total</span>
          <CurrencyDollar size={32} color="#ffffff" />
        </SummaryCardHeader>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}