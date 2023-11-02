import { ReactNode, useCallback, useEffect, useState  } from "react";
import { api } from "../lib/axios";
import { createContext } from "use-context-selector";

interface Transaction {
  id: number,
  description: string,
  type: 'income' | 'outcome',
  category: string,
  price: number,
  createdAt: string
}

interface CreateTransactionData {
  description: string,
  type: 'income' | 'outcome',
  category: string,
  price: number,
}
interface TransactionContextType {
  transactions: Transaction[],
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionData) => Promise<void>
}

interface TransactionProviderProps {
  children: ReactNode;
}




export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  },[])

  const createTransaction = useCallback(async (data: CreateTransactionData) => {
    const { description, price, type, category} = data;
    const response  = await api.post('/transactions', {
      description,
      price,
      type,
      category,
      createdAt: new Date(),
    });
    setTransactions(state => [response.data, ...state])
  }, [])
  
  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);
  
  return (
    <TransactionsContext.Provider value={{
      transactions,
      fetchTransactions,
      createTransaction,
    }}>
      {children}
    </TransactionsContext.Provider>

  )
}