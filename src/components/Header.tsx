import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Controle de Empréstimo de Apagadores</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#4CAF50',
    padding: '10px',
    textAlign: 'center' as 'center',
    color: 'white'
  },
  title: {
    margin: 0,
    fontSize: '24px',
  }
};

export default Header;
