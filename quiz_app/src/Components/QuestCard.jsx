import React from 'react';

function QuestCard({ question, current, onSelectOption, selectedOption, onNext }) {
  if (!question) return null;

  return (
    <div style={{
      backgroundColor: '#111827',
      minHeight: '85vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        backgroundColor: '#1f2937',
        padding: '30px 24px',
        borderRadius: '24px',
        maxWidth: '360px',
        width: '100%',
        boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
        border: '1px solid #374151',
        boxSizing: 'border-box'
      }}>
       
        <div style={{
          display: 'inline-block',
          backgroundColor: '#374151',
          color: '#3b82f6',
          padding: '4px 12px',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: '600',
          marginBottom: '15px'
        }}>
          ⚡ Question {current + 1}
        </div>

        <p style={{ 
          color: '#ffffff', 
          fontSize: '18px', 
          fontWeight: '600', 
          lineHeight: '1.5',
          textAlign: 'left',
          marginBottom: '30px',
          minHeight: '60px'
        }}>
          {question.q}
        </p>
        
        {/* Choice buttons rendered as pill items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {question.options.map((option, index) => {
            const isSelected = selectedOption === index;
            return (
              <button 
                key={index} 
                onClick={() => onSelectOption(index)}
                style={{
                  padding: '16px 20px',
                  fontSize: '15px',
                  fontWeight: '500',
                  borderRadius: '30px', 
                  border: isSelected ? '2px solid #f97316' : '1px solid #4b5563',
                  backgroundColor: isSelected ? '#f97316' : '#273142', 
                  color: isSelected ? '#ffffff' : '#e5e7eb',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease',
                  boxShadow: isSelected ? '0 4px 10px rgba(249, 115, 22, 0.2)' : 'none'
                }}
              >
                <span style={{
                  marginRight: '12px',
                  fontWeight: '700',
                  color: isSelected ? '#fff' : '#9ca3af'
                }}>
                  {String.fromCharCode(65 + index)}:
                </span>
                {option}
              </button>
            );
          })}

          
          <button
            onClick={onNext}
            disabled={selectedOption === null}
            style={{
              marginTop: '25px',
              padding: '15px',
              fontSize: '16px',
              fontWeight: '700',
              textTransform: 'uppercase',
              backgroundColor: selectedOption === null ? '#4b5563' : '#f97316',
              color: selectedOption === null ? '#9ca3af' : '#fff',
              border: 'none',
              borderRadius: '14px',
              cursor: selectedOption === null ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.2s',
              boxShadow: selectedOption === null ? 'none' : '0 4px 12px rgba(249, 115, 22, 0.3)'
            }}
          >
            Submit Answer
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestCard;