// src/App.tsx

import React from 'react';
import FarmerRegistrationForm from './components/FarmerRegistrationForm';
import ProductList from './components/ProductList';
import ContactMeForm from './components/ContactMeForm';
import './App.css'; // Import the CSS file

const App: React.FC = () => {
  return (
    <div className="app-container">
      <header>Local Farmers' Market</header>
      <main>
        <FarmerRegistrationForm />
        <ProductList />
	<ContactMeForm />
      </main>
      <footer>© 2023 Farmers' Market</footer>
    </div>
  );
};

export default App;
