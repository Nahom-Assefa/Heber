// MainLayout.js
import React from 'react';
import Header from '../components/header';
// import Footer from '../components/footer';
// import styles from '../css/MainLayout.module.css' // Import CSS module

function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      {/* <div className={styles.content}> */}
        {/* <h1 className={styles.pageTitle}>Where <span className={styles.bold}>Community</span> meets <span className={styles.bold}>Culture</span></h1> */}
        {/* <h1> HELOO MF</h1>
        <div className={styles.pageContent}>
          {children}
        </div>
      </div> */}
      {/* Footer component */}
    </div>
  );
}

export default MainLayout;
