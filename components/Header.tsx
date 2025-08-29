
import React from 'react';
import Logo from './icons/Logo';
import { View } from '../types';

interface HeaderProps {
  setView: (view: View) => void;
}

const Header: React.FC<HeaderProps> = ({ setView }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="cursor-pointer" onClick={() => setView('LANDING')}>
            <Logo />
        </div>
        <nav className="flex items-center space-x-4">
          <button
            onClick={() => setView('LOGIN')}
            className="text-slate-600 hover:text-primary font-medium transition-colors"
          >
            Login
          </button>
          <button
            onClick={() => setView('SIGNUP_CHOICE')}
            className="bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-sm hover:shadow-md"
          >
            Cadastre-se
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
