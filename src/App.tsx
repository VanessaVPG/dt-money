import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default.ts';
import { GlobalStyle } from './styles/global.ts';
import { Transactions } from './pages/Transactions/index.tsx';
import { Summary } from './components/Summary/index.tsx';
import { PriceHighlight, TransactionsContainer, TransactionsTable } from './pages/Transactions/styles.ts';
import { SearchForm } from './pages/Transactions/components/SearchForm/index.tsx';

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Transactions />
      <Summary />
      <TransactionsContainer>
      <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de website</td>
              <td>
                <PriceHighlight variant='income'>R$ 12.000</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>12/01/2021</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceHighlight variant='outcome'>-R$ 59,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>13/01/2021</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>

    </ThemeProvider>

  )
}


