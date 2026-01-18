import { useState } from 'react';
import { useTransactionStore } from '../../store/useTransactionStore';
import './styles.css';

export const AddTransaction = () => {
  const addTransaction = useTransactionStore((state) => state.addTransaction);
  const [isOpen, setIsOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState<'income' | 'expense'>('expense');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description || !amount) return;

    addTransaction({
      description,
      amount: Number(amount),
      type,
    });

    setIsOpen(false);
    setDescription('');
    setAmount('');
    setType('expense');
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Adicionar Transação</button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Nova Transação</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="description">Descrição</label>
                <input
                  id="description"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="amount">Valor</label>
                <input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="type">Tipo</label>
                <select
                  id="type"
                  value={type}
                  onChange={(e) => setType(e.target.value as 'income' | 'expense')}
                >
                  <option value="income">Entrada</option>
                  <option value="expense">Saída</option>
                </select>
              </div>
              <div className="modal-actions">
                <button type="button" onClick={() => setIsOpen(false)}>
                  Cancelar
                </button>
                <button type="submit">Salvar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};