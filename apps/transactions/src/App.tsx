import { useTransactionStore } from './store/useTransactionStore';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import './App.css';

function App() {
  const { transactions, isLoading } = useTransactionStore();

  const balance = transactions.reduce((acc, curr) => {
    return curr.type === 'income' ? acc + curr.amount : acc - curr.amount;
  }, 0);

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

        <section className="list-section">
          <h3>Histórico</h3>
          {transactions.length === 0 ? (
            <p>Nenhuma transação registrada.</p>
          ) : (
            <TransactionList />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;