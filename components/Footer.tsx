
import React from 'react';
import Logo from './icons/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-slate-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo className="h-8 w-auto text-white" />
            <p className="mt-4 text-sm text-slate-400">Conectando inovação e expertise.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Para Empreendedores</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Buscar Consultores</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Publicar Projeto</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Como Funciona</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white">Para Consultores</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Buscar Projetos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Criar Perfil</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Benefícios</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white">Empresa</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Connecta. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
