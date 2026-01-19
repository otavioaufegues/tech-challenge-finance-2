import { Suspense } from "react";
import styles from "./App.module.css";

import { useTransactionStore } from "transactions/store";
import { useNavigate } from "react-router-dom";
import { Header } from "../../layout/Header";
import { Card } from "../../layout/Card";


interface Transaction {
  type: 'income' | 'outcome';
  amount: number;
}

export default function Home() {
  const { transactions } = useTransactionStore();
  const navigate = useNavigate();

  const balance = transactions.reduce((acc: number, curr: Transaction) => {
    return curr.type === "income" ? acc + curr.amount : acc - curr.amount;
  }, 0);

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.headerWrapper}>
          <Header userName="João" balance={balance} />
        </div>
        <button
          onClick={() => navigate("/transactions")}
          className={styles.transactionsButton}
        >
          Ver Transações
        </button>
        <section className={styles.content}>
          <Card title="Análises Financeiras">
            <Suspense fallback={<p>Carregando análises...</p>}>
              {/* <AnalyticsApp /> */}
            </Suspense>
          </Card>
        </section>
      </div>
    </main>
  );
}
