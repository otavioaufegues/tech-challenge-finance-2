import { useState } from 'react';
import { useTransactionStore } from './store/useTransactionStore';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import './App.css';
import { TransactionFilter } from '.';

function App() {
  const { transactions, isLoading } = useTransactionStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const balance = transactions.reduce((acc, curr) => {
    return curr.type === 'income' ? acc + curr.amount : acc - curr.amount;
  }, 0);

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch = (transaction.description || '')
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || transaction.type === filterType;
    return matchesSearch && matchesType;
  });

  if (isLoading) {
    return <div>Carregando transações...</div>;
  }

  return (
    <div className="transaction-container">
      <header>
        <h2>Minhas Transações</h2>
        <div className={`balance-card ${balance >= 0 ? 'positive' : 'negative'}`}>
          <span>Saldo Atual</span>
          <h1>R$ {balance.toFixed(2)}</h1>
        </div>
      </header>

      <main>
        <section className="form-section">
          <h3>Nova Entrada/Saída</h3>
          <AddTransaction />
        </section>

        <TransactionFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterType={filterType}
          setFilterType={setFilterType}
        />

        <section className="list-section">
          <h3>Histórico</h3>
          {filteredTransactions.length === 0 ? (
            <p>Nenhuma transação encontrada.</p>
          ) : (
            <TransactionList transactions={filteredTransactions} />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;