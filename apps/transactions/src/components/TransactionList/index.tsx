import { useEffect, useRef, useState } from 'react';
import { useTransactionStore } from '../../store/useTransactionStore';
import './styles.css';

const ITEMS_PER_PAGE = 10;

interface Transaction {
  id: string;
  description: string;
  amount: number;
  type: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

export const TransactionList = ({ transactions }: TransactionListProps) => {
  const { removeTransaction } = useTransactionStore();
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(() => {
          setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
        }, 3000);
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [transactions, visibleCount]);

  const visibleTransactions = transactions.slice(0, visibleCount);

  return (
    <>
      <ul className="transaction-list">
        {visibleTransactions.map((tx) => (
          <li key={tx.id} className="transaction-item">
            <div className="transaction-info">
              <span className="transaction-description">{tx.description}</span>
              <span className={`transaction-amount ${tx.type}`}>
                {tx.type === 'expense' ? '- ' : '+ '}
                R$ {Number(tx.amount).toFixed(2)}
              </span>
            </div>
            <button className="delete-button" onClick={() => removeTransaction(tx.id)}>Excluir</button>
          </li>
        ))}
      </ul>
      {visibleCount < transactions.length && (
        <div ref={loaderRef} style={{ textAlign: 'center', padding: '10px' }}>
          Carregando mais.....
        </div>
      )}
    </>
  );
};