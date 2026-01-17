import React, { Suspense } from "react";
import styles from "./App.module.css";
import { Header } from "./layout/Header";
import { Card } from "./layout/Card";

// const TransactionsApp = React.lazy(() => import("transactions/App"));
// const AnalyticsApp = React.lazy(() => import("analytics/App"));

export default function App() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.headerWrapper}>
          <Header userName="João" balance={3250.75} />
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
