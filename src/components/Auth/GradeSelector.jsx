import React from 'react';
import './GradeSelector.css';

const GradeSelector = ({ onSelect, selectedGrade }) => {
  const grades = Array.from({ length: 11 }, (_, i) => i + 1);

  return (
    <div className="modal-overlay">
      <div className="grade-selector-modal" data-aos="zoom-in">
        <h2>Sinfingizni tanlang</h2>
        <p>Sinfingizni bir marta tanlaysiz va u saqlanadi.</p>
        
        <div className="grades-grid">
          {grades.map((grade) => (
            <button 
              key={grade} 
              className={`grade-item ${selectedGrade === grade ? 'selected' : ''}`}
              onClick={() => onSelect(grade)}
            >
              {grade}
            </button>
          ))}
        </div>
        
        <div className="grade-footer">
          <p>Keyinchalik sozlamalardan ozgartirish mumkin.</p>
        </div>
      </div>
    </div>
  );
};

export default GradeSelector;
