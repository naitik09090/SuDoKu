import React from 'react';

const Home = ({ onPlayNow }) => {
    return (
        <div className="home-container">
            <div className="home-content">
                <div className="glitch-wrapper">
                    <h1 className="hero-title" data-text="SuDoKu">SuDoKu</h1>
                </div>
                <p className="hero-subtitle">The Universe's Most Advanced Sudoku Experience</p>

                <button className="play-now-btn" onClick={onPlayNow}>
                    <span className="btn-text">PLAY NOW</span>
                    <span className="btn-glow"></span>
                </button>
            </div>

            <div className="background-decor">
                <div className="stars"></div>
                <div className="stars2"></div>
                <div className="stars3"></div>
                <div className="grid-overlay"></div>
                <div className="nebula-cloud"></div>
            </div>
        </div>
    );
};

export default Home;
