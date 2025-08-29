
import React from 'react';
import { View } from '../types';
import BriefcaseIcon from './icons/BriefcaseIcon';
import LightbulbIcon from './icons/LightbulbIcon';
import ArrowRightIcon from './icons/ArrowRightIcon';


interface LandingPageProps {
  setView: (view: View) => void;
}

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
            {icon}
        </div>
        <h3 className="text-lg font-bold mb-2 text-dark">{title}</h3>
        <p className="text-slate-600">{description}</p>
    </div>
);


const LandingPage: React.FC<LandingPageProps> = ({ setView }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-emerald-50 py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-dark leading-tight">
            Conectando <span className="text-primary">Empreendedores</span> a <span className="text-secondary">Consultores</span> de Elite.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Acelere o crescimento do seu negócio com a expertise que você precisa, ou encontre projetos desafiadores para aplicar seu conhecimento.
          </p>
          <div className="mt-10 flex justify-center items-center gap-4">
            <button
              onClick={() => setView('SIGNUP_CHOICE')}
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
            >
              Começar Agora
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-dark mb-12">Você é um...</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="border border-slate-200 rounded-lg p-8 text-center hover:border-primary hover:shadow-lg transition-all">
              <BriefcaseIcon className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-2xl font-semibold text-dark mb-3">Empreendedor?</h3>
              <p className="text-slate-600 mb-6">Encontre o consultor ideal para superar desafios, validar ideias e escalar seu negócio com segurança e agilidade.</p>
              <button onClick={() => setView('SIGNUP_CHOICE')} className="font-semibold text-primary hover:underline">Publique um projeto <ArrowRightIcon className="inline h-4 w-4" /></button>
            </div>
            <div className="border border-slate-200 rounded-lg p-8 text-center hover:border-secondary hover:shadow-lg transition-all">
              <LightbulbIcon className="h-12 w-12 mx-auto text-secondary mb-4" />
              <h3 className="text-2xl font-semibold text-dark mb-3">Consultor?</h3>
              <p className="text-slate-600 mb-6">Acesse oportunidades exclusivas, gerencie seus projetos e construa uma reputação sólida em nossa plataforma.</p>
              <button onClick={() => setView('SIGNUP_CHOICE')} className="font-semibold text-secondary hover:underline">Encontre projetos <ArrowRightIcon className="inline h-4 w-4" /></button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20">
          <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-dark mb-2">Uma Plataforma Completa</h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Tudo que você precisa para uma colaboração de sucesso, do início ao fim.</p>
              <div className="grid md:grid-cols-3 gap-8">
                  <FeatureCard 
                    icon={<BriefcaseIcon className="h-6 w-6" />} 
                    title="Matching Inteligente" 
                    description="Nosso algoritmo conecta seu projeto aos consultores com as habilidades mais relevantes." 
                  />
                  <FeatureCard 
                    icon={<LightbulbIcon className="h-6 w-6" />} 
                    title="Gestão Simplificada" 
                    description="Acompanhe marcos, pagamentos e comunicação em um dashboard centralizado." 
                  />
                  <FeatureCard 
                    icon={<BriefcaseIcon className="h-6 w-6" />} 
                    title="Pagamentos Seguros" 
                    description="Garantimos a segurança das transações com pagamentos liberados por marcos de entrega." 
                  />
              </div>
          </div>
      </section>

    </div>
  );
};

export default LandingPage;
