
import React, { useState } from 'react';
import { View, UserRole } from './types';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import SignupChoice from './components/SignupChoice';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [view, setView] = useState<View>('LANDING');
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  
  const handleSetUserRole = (role: UserRole) => {
    setUserRole(role);
    // In a real app, this would navigate to a detailed signup form.
    // Here we simulate completion and return to the landing page.
    alert(`Você selecionou o perfil: ${role === UserRole.ENTREPRENEUR ? 'Empreendedor' : 'Consultor'}. Próximo passo: preencher o cadastro!`);
    setView('LANDING');
  }

  const renderView = () => {
    switch (view) {
      case 'LOGIN':
        return <Login setView={setView} />;
      case 'SIGNUP_CHOICE':
        return <SignupChoice setView={setView} setUserRole={handleSetUserRole} />;
      case 'LANDING':
      default:
        return <LandingPage setView={setView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-800">
      <Header setView={setView} />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
