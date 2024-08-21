// src/components/LoanList.tsx
import React from 'react';
import { Loan } from '../types';

interface LoanListProps {
  loans: Loan[];
  onDelete: (id: number) => void; // Nova função para deletar empréstimos
  onReturn: (id: number) => void; // Nova função para marcar como devolvido
}

const LoanList: React.FC<LoanListProps> = ({ loans, onDelete, onReturn }) => {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th>ID do Empréstimo</th>
          <th>Nome do Professor</th>
          <th>ID do Apagador</th>
          <th>Data do Empréstimo</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {loans.map((loan) => (
          <tr key={loan.id}>
            <td>{loan.id}</td>
            <td>{loan.teacherName}</td>
            <td>{loan.eraserId}</td>
            <td>{loan.loanDate}</td>
            <td>
              <button onClick={() => onDelete(loan.id)} style={styles.deleteButton}>Excluir</button>
              <button onClick={() => onReturn(loan.id)} style={styles.returnButton}>Devolver</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const styles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse' as 'collapse',
  },
  deleteButton: {
    backgroundColor: '#f44336',
    color: 'white',
    padding: '5px 10px',
    marginRight: '10px',
    border: 'none',
    cursor: 'pointer' as 'pointer',
  },
  returnButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '5px 10px',
    border: 'none',
    cursor: 'pointer' as 'pointer',
  },
};

export default LoanList;
