import React from 'react';

function ReportScreen({ score, total, onRestart }) {
  const scorePercentage = total > 0 ? Math.round((score / total) * 100) : 0;
  const isHighPassing = scorePercentage >= 70;

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
        {/* Large Central Trophy Graphic Alignment */}
        <div style={{ fontSize: '64px', marginBottom: '15px' }}>🏆</div>
        
        <h2 style={{ color: '#ffffff', fontSize: '24px', fontWeight: '700', marginBottom: '5px' }}>
          Congrats!
        </h2>
        
        
        <div style={{ 
          fontSize: '36px', 
          fontWeight: '800', 
          color: isHighPassing ? '#10b981' : '#f59e0b', // Dynamic Green or Amber
          margin: '15px 0'
        }}>
          {scorePercentage}% Score
        </div>
        
        <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.5', marginBottom: '35px' }}>
          Quiz completed successfully.<br />
          You answered <strong>{score}</strong> out of {total} questions correctly.
        </p>
        
        <button 
          onClick={onRestart}
          style={{
            width: '100%',
            padding: '14px',
            fontSize: '15px',
            fontWeight: '600',
            color: '#fff',
            backgroundColor: '#374151',
            border: '1px solid #4b5563',
            borderRadius: '12px',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
        >
          🔄 Reattempt Quiz
        </button>
      </div>
    </div>
  );
}

export default ReportScreen;