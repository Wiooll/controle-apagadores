// src/components/LoanForm.tsx
import React, { useState } from 'react';
import { Loan } from '../types';

interface LoanFormProps {
  onAddLoan: (loan: Loan) => void;
}

const LoanForm: React.FC<LoanFormProps> = ({ onAddLoan }) => {
  const [teacherName, setTeacherName] = useState('');
  const [eraserId, setEraserId] = useState<number | undefined>(undefined);
  const [loanDate, setLoanDate] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!teacherName || !eraserId || !loanDate) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const newLoan = {
      id: Math.floor(Math.random() * 10000), // Gera um ID aleatório
      teacherName,
      eraserId,
      loanDate,
    };

    onAddLoan(newLoan);

    // Limpar o formulário
    setTeacherName('');
    setEraserId(undefined);
    setLoanDate('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.formGroup}>
        <label htmlFor="teacherName">Nome do Professor:</label>
        <input
          type="text"
          id="teacherName"
          value={teacherName}
          onChange={(e) => setTeacherName(e.target.value)}
          required
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="eraserId">ID do Apagador:</label>
        <input
          type="number"
          id="eraserId"
          value={eraserId ?? ''}
          onChange={(e) => setEraserId(Number(e.target.value))}
          required
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="loanDate">Data do Empréstimo:</label>
        <input
          type="date"
          id="loanDate"
          value={loanDate}
          onChange={(e) => setLoanDate(e.target.value)}
          required
          style={styles.input}
        />
      </div>
      <button type="submit" style={styles.button}>Adicionar Empréstimo</button>
    </form>
  );
};

const styles = {
  form: {
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '10px',
  },
  input: {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box' as 'border-box',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer' as 'pointer',
  },
};

export default LoanForm;
