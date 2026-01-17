import React, { Suspense } from "react";

const TransactionsApp = React.lazy(() => import("transactions/App"));
const AnalyticsApp = React.lazy(() => import("analytics/App"));

export default function App() {
  return (
    <div>
      <h1>💰 Finance App (Shell)</h1>

      <Suspense fallback={<p>Carregando transações...</p>}>
        <TransactionsApp />
      </Suspense>

      <Suspense fallback={<p>Carregando análises...</p>}>
        <AnalyticsApp />
      </Suspense>
    </div>
  );
}
