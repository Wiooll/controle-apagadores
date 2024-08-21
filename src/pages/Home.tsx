// src/pages/Home.tsx
import React, { useState } from 'react';
import Header from '../components/Header';
import LoanList from '../components/LoanList';
import LoanForm from '../components/LoanForm';
import { Loan } from '../types';

const Home: React.FC = () => {
  const [loans, setLoans] = useState<Loan[]>([
    { id: 1, teacherName: 'Prof. João', eraserId: 101, loanDate: '2024-08-20' },
    { id: 2, teacherName: 'Prof. Maria', eraserId: 102, loanDate: '2024-08-21' },
  ]);

  const addLoan = (newLoan: Loan) => {
    setLoans([...loans, newLoan]);
  };

  const deleteLoan = (id: number) => {
    setLoans(loans.filter(loan => loan.id !== id));
  };

  const returnLoan = (id: number) => {
    const updatedLoans = loans.map(loan => 
      loan.id === id ? { ...loan, loanDate: 'Devolvido' } : loan
    );
    setLoans(updatedLoans);
  };

  return (
    <div>
      <Header />
      <main style={styles.main}>
        <h2>Adicionar Novo Empréstimo</h2>
        <LoanForm onAddLoan={addLoan} />
        <h2>Empréstimos Ativos</h2>
        <LoanList loans={loans} onDelete={deleteLoan} onReturn={returnLoan} />
      </main>
    </div>
  );
};

const styles = {
  main: {
    padding: '20px',
  },
};

export default Home;
