
import React from 'react';
import { View, UserRole } from '../types';
import BriefcaseIcon from './icons/BriefcaseIcon';
import LightbulbIcon from './icons/LightbulbIcon';
import ArrowRightIcon from './icons/ArrowRightIcon';


interface SignupChoiceProps {
  setView: (view: View) => void;
  setUserRole: (role: UserRole) => void;
}

const RoleCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
    onClick: () => void;
    colorClass: string;
}> = ({ icon, title, description, onClick, colorClass }) => {
    return (
        <button
            onClick={onClick}
            className={`group w-full text-left p-8 rounded-xl border-2 border-transparent transition-all bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transform `}
        >
            <div className={`flex items-center justify-center h-16 w-16 rounded-full mb-6 ${colorClass}/10 text-${colorClass}`}>
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-dark mb-2">{title}</h3>
            <p className="text-slate-600 mb-6">{description}</p>
            <div className={`font-bold text-${colorClass} flex items-center gap-2`}>
                Continuar como {title}
                <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </div>
        </button>
    )
}

const SignupChoice: React.FC<SignupChoiceProps> = ({ setView, setUserRole }) => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">
          Bem-vindo(a) à Connecta!
        </h2>
        <p className="mb-12 text-lg text-slate-600">
          Para começar, conte-nos como você usará a plataforma.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
            <RoleCard 
                icon={<BriefcaseIcon className="h-8 w-8" />}
                title="Empreendedor"
                description="Preciso de ajuda especializada para meu negócio. Quero encontrar e contratar consultores qualificados."
                onClick={() => setUserRole(UserRole.ENTREPRENEUR)}
                colorClass="primary"
            />
            <RoleCard 
                icon={<LightbulbIcon className="h-8 w-8" />}
                title="Consultor"
                description="Sou um especialista e quero oferecer meus serviços. Busco projetos e oportunidades de consultoria."
                onClick={() => setUserRole(UserRole.CONSULTANT)}
                colorClass="secondary"
            />
        </div>
        <p className="mt-12 text-sm text-slate-500">
          Já tem uma conta?{' '}
          <button onClick={() => setView('LOGIN')} className="font-medium text-primary hover:underline">
            Faça login
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignupChoice;
