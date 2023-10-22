import "./nav-3.styles.css"
import React from 'react';

const Nav3 = ({ currentPage, setCurrentPage }) => {
  return(
    <nav>
    <div class="moreinfo">
      <p id="info"
        onClick={() => setCurrentPage('myDocuments')}
        className={currentPage === 'myDocuments' ? 'active' : ''}
      >
        My Documents
      </p>
      <p id="info"
        onClick={() => setCurrentPage('viewDocuments')}
        className={currentPage === 'viewDocuments' ? 'active' : ''}
      >
        View Documents
      </p>
    </div>
    </nav>
  );
};

export default Nav3;
