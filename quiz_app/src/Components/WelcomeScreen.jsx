import React from 'react';

function WelcomeScreen({ onStart }) {
  return (
    <div style={{
      backgroundColor: '#111827', 
      minHeight: '90vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        backgroundColor: '#1f2937', 
        padding: '40px 30px',
        borderRadius: '24px',
        maxWidth: '360px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
        border: '1px solid #374151'
      }}>
       
        <div style={{
          fontSize: '48px',
          marginBottom: '20px',
          background: 'linear-gradient(45deg, #ff7e5f, #feb47b)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 'bold'
        }}>
          🏆
        </div>
        
        <h1 style={{ 
          color: '#ffffff', 
          fontSize: '28px', 
          fontWeight: '700', 
          marginBottom: '10px',
          lineHeight: '1.2'
        }}>
          Welcome to the Front End Quiz
        </h1>
        
        <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '35px' }}>
          Test your skills with our offline adaptive challenge.
        </p>
        
        
        <button
          onClick={onStart}
          style={{
            width: '100%',
            padding: '14px',
            fontSize: '16px',
            fontWeight: '600',
            color: '#fff',
            background: 'linear-gradient(90deg, #f97316, #ea580c)', 
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(234, 88, 12, 0.3)',
            transition: 'transform 0.1s'
          }}
        >
          START QUIZ
        </button>
      </div>
    </div>
  );
}

export default WelcomeScreen;