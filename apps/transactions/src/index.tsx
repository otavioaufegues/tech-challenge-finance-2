import './styles.css';

interface TransactionFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filterType: string;
  setFilterType: (type: string) => void;
}

export const TransactionFilter = ({
  searchTerm,
  setSearchTerm,
  filterType,
  setFilterType,
}: TransactionFilterProps) => {
  return (
    <section className="filter-section">
      <input
        type="text"
        placeholder="Buscar transação..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        className="filter-select"
      >
        <option value="all">Todas</option>
        <option value="income">Entradas</option>
        <option value="expense">Saídas</option>
      </select>
    </section>
  );
};