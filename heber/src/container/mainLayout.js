import React from 'react';

function MainLayout({ children }) {
  return (
    <div>
      <main>
        {children}
      </main>
      {/* Footer component */}
    </div>
  );
}

export default MainLayout;
