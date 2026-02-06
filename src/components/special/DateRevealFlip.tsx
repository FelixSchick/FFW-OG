import React, { useState, useEffect } from 'react';
import './DateRevealFlip.css';

const DateRevealFlip: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFlipped(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="date-reveal-section">
      <div className="reveal-container">
        <h2 className="reveal-title">100 Jahre Feuerwehr Oberbillig</h2>
        <p className="reveal-subtitle">
          40 Jahre Jugendfeuerwehr Oberbillig <br/>
          SAVE THE DATE  
        </p>
        
        {/* Simple Mobile View */}
        <div className="mobile-dates-simple">
          <div className="simple-date-card">
            <div className="simple-date-number">06.05.2027</div>
            <div className="simple-date-day">Donnerstag - Vatertag</div>
          </div>
          <div className="simple-divider">&</div>
          <div className="simple-date-card">
            <div className="simple-date-number">08.05.2027</div>
            <div className="simple-date-day">Samstag</div>
          </div>
        </div>

        {/* Desktop Flip Calendar View */}
        <div className="calendars-wrapper">
          {/* First Date */}
          <div className="calendar-container">
            <div className={`calendar-flip ${isFlipped ? 'flipped' : ''}`}>
              {/* Front of calendar (hidden initially) */}
              <div className="calendar-face calendar-front">
                <div className="calendar-header">
                  <span className="month">MAI</span>
                  <span className="year">2027</span>
                </div>
                <div className="calendar-body">
                  <div className="date-display">06</div>
                  <div className="weekday">Donnerstag - Vatertag</div>
                </div>
                <div className="calendar-footer">
                  <div className="red-stripe"></div>
                </div>
              </div>
              
              {/* Back of calendar (shown initially) */}
              <div className="calendar-face calendar-back">
                <div className="question-mark">?</div>
              </div>
            </div>
            <div className="date-label">Erster Termin</div>
          </div>

          {/* Divider */}
          <div className="dates-divider">
            <div className="divider-line"></div>
            <span className="divider-text">&</span>
            <div className="divider-line"></div>
          </div>

          {/* Second Date */}
          <div className="calendar-container">
            <div className={`calendar-flip ${isFlipped ? 'flipped' : ''} delay`}>
              {/* Front of calendar (hidden initially) */}
              <div className="calendar-face calendar-front">
                <div className="calendar-header">
                  <span className="month">MAI</span>
                  <span className="year">2027</span>
                </div>
                <div className="calendar-body">
                  <div className="date-display">08</div>
                  <div className="weekday">Samstag</div>
                </div>
                <div className="calendar-footer">
                  <div className="red-stripe"></div>
                </div>
              </div>
              
              {/* Back of calendar (shown initially) */}
              <div className="calendar-face calendar-back">
                <div className="question-mark">?</div>
              </div>
            </div>
            <div className="date-label">Zweiter Termin</div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default DateRevealFlip;