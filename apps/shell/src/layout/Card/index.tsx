import { ReactNode } from "react";
import styles from "./Card.module.css";

interface CardProps {
  title?: string;
  action?: ReactNode;
  children: ReactNode;
}

export function Card({ title, action, children }: CardProps) {
  return (
    <section className={styles.card}>
      {(title || action) && (
        <header className={styles.header}>
          {title && <h2>{title}</h2>}
          {action}
        </header>
      )}

      <div>{children}</div>
    </section>
  );
}
