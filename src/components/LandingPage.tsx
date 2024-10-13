import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Star, TrendingUp } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Gestiona el feedback de tus clientes con facilidad
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            opiniones.app te ayuda a recopilar, analizar y actuar sobre las opiniones de tus clientes para mejorar tu negocio.
          </p>
          <div className="mt-8">
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Comenzar ahora
            </Link>
          </div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                      <MessageSquare className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Recopila opiniones fácilmente</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Envía solicitudes de feedback a través de WhatsApp o enlaces personalizados con un solo clic.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                      <Star className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Analiza las opiniones</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Visualiza tendencias y métricas clave en un dashboard intuitivo para tomar decisiones informadas.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                      <TrendingUp className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Mejora tu negocio</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Identifica áreas de mejora y fortalece la relación con tus clientes para impulsar el crecimiento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;