import React from 'react';
import '../scss/main.scss';

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar__title">
            <h1>Wesley</h1>
        </div>
        <div className="sidebar__search">
            <span>Discover</span>
        </div>
        <div className="sidebar__content s-content">
            <div className="s-content__watched">
                <h2>Watched</h2>
                <p>
                    <span>Movies</span>
                    <span>TV Shows</span>
                </p>
            </div>
            <div className="s-content__saved">
                <h2>Saved</h2>
                <p>
                    <span>Movies</span>
                    <span>TV Shows</span>
                </p>
            </div>
        </div>
    </div>
  );
}

export default Sidebar;
