import styles from "./Header.module.css";

interface HeaderProps {
  userName: string;
  balance: number;
}

export function Header({ userName, balance }: HeaderProps) {
  const formattedBalance = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(balance);

  return (
    <header className={styles.header}>
      <div>
        <h1>Bem-vindo, {userName}</h1>
        <p className={styles.subtitle}>
          Aqui está um resumo da sua vida financeira
        </p>
      </div>

      <div className={styles.balance}>
        <span>Saldo atual</span>
        <strong>{formattedBalance}</strong>
      </div>
    </header>
  );
}
