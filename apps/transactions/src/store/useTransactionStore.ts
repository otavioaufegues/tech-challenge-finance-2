import { create } from "zustand";
import { MOCK_TRANSACTIONS } from "./initialTransactions";

export interface Transaction {
  id: string;
  description: string;
  amount: number;
  type: "income" | "expense";
  date: string;
}

interface TransactionState {
  transactions: Transaction[];
  isLoading: boolean;
  addTransaction: (transaction: Omit<Transaction, "id" | "date">) => void;
  removeTransaction: (id: string) => void;
  setTransactions: (transactions: Transaction[]) => void;
}



export const useTransactionStore = create<TransactionState>((set) => ({
  transactions: MOCK_TRANSACTIONS,
  isLoading: false,

  addTransaction: (newTx) =>
    set((state: TransactionState) => ({
      transactions: [
        {
          ...newTx,
          id: crypto.randomUUID(),
          date: new Date().toISOString(),
        },
        ...state.transactions,
      ],
    })),

  removeTransaction: (id: string) =>
    set((state: TransactionState) => ({
      transactions: state.transactions.filter((tx) => tx.id !== id),
    })),

  setTransactions: (transactions: Transaction[]) =>
    set({ transactions, isLoading: false }),
}));
