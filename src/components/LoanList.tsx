import React from 'react';

interface Loan {
  id: number;
  teacherName: string;
  eraserId: number;
  loanDate: string;
}

const LoanList: React.FC<{ loans: Loan[] }> = ({ loans }) => {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th>Professor</th>
          <th>ID do Apagador</th>
          <th>Data do Empréstimo</th>
        </tr>
      </thead>
      <tbody>
        {loans.map(loan => (
          <tr key={loan.id}>
            <td>{loan.teacherName}</td>
            <td>{loan.eraserId}</td>
            <td>{loan.loanDate}</td>
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
    marginTop: '20px',
  },
  th: {
    backgroundColor: '#f2f2f2',
    padding: '8px',
    borderBottom: '1px solid #ddd',
  },
  td: {
    padding: '8px',
    borderBottom: '1px solid #ddd',
  },
};

export default LoanList;
