import React, { Suspense } from "react";
import styles from "./App.module.css";
import { Header } from "./layout/Header";
import { Card } from "./layout/Card";

import { useTransactionStore } from "transactions/store";

// const TransactionsApp = React.lazy(() => import("transactions/App"));
// const AnalyticsApp = React.lazy(() => import("analytics/App"));

interface Transaction {
  type: 'income' | 'outcome';
  amount: number;
}

export default function App() {
  const { transactions } = useTransactionStore();

  const balance = transactions.reduce((acc: number, curr: Transaction) => {
    return curr.type === "income" ? acc + curr.amount : acc - curr.amount;
  }, 0);

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.headerWrapper}>
          <Header userName="João" balance={balance} />
        </div>

        <section className={styles.content}>
          <Card title="Últimas Transações">
            <Suspense fallback={<p>Carregando transações...</p>}>
              {/* <TransactionsApp /> */}
            </Suspense>
          </Card>

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
