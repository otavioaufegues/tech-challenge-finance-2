import React from "react";
import styles from "./App.module.css";
import { Card } from "../../layout/Card";
import { Suspense } from "react";
import { useNavigate } from "react-router-dom";


const TransactionsApp = React.lazy(() => import("transactions/App"));


export default function Transactions() {
    const navigate = useNavigate();
    return (
        <main className={styles.page}>
            <button
                onClick={() => navigate("/")}
                className={styles.backButton}
            >
                ← Voltar
            </button>
            <div className={styles.container}>
                <section className={styles.content}>
                    <Card>
                        <Suspense fallback={<p>Carregando análises...</p>}>
                            <TransactionsApp />
                        </Suspense>
                    </Card>
                </section>
            </div>
        </main>
    );
}
