import React from 'react';

function ProgressBar({ history, score, total }) {
  
  const completedPercentage = total > 0 ? (history.length / total) * 100 : 0;

  return (
    <div className="progress-container" style={{ marginBottom: '20px' }}>
     
      <div style={{
        width: '100%',
        backgroundColor: '#e5e7eb',
        borderRadius: '8px',
        height: '12px',
        overflow: 'hidden'
      }}>
       
        <div style={{
          width: '${completedPercentage}%',
          backgroundColor: '#3b82f6',
          height: '100%',
          transition: 'width 0.3s ease'
        }}></div>
      </div>

      
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '8px',
        fontSize: '14px',
        color: '#4b5563'
      }}>
        <span>Question {history.length} of {total}</span>
        <span>Current Score: {score}</span>
      </div>

     
      <div style={{ display: 'flex', gap: '6px', marginTop: '10px' }}>
        {history.map((status, index) => (
          <span 
            key={index} 
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: status === 'correct' ? '#10b981' : '#ef4444',
              display: 'inline-block'
            }}
            title={`Question ${index + 1}: ${status}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ProgressBar;