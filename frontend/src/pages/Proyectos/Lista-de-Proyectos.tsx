import React from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonBadge, IonButton, IonIcon } from '@ionic/react';
import Navbar from '../../components/Navbar';

const Proyectos: React.FC = () => {
  const proyectos = [
    { id: 1, nombre: "Extensión de Ciclovía Costera", sector: "Borde Costero", estado: "En Planificación" },
    { id: 2, nombre: "Mejoramiento Plaza de Armas", sector: "Centro", estado: "En Ejecución" },
    { id: 3, nombre: "Nuevo Centro Comunitario Ecológico", sector: "Sector Sur", estado: "Licitación" },
    { id: 4, nombre: "Restauración de Fachadas Patrimoniales", sector: "Casco Histórico", estado: "Evaluación Ambiental" }
  ];

  return (
    <IonPage>
      <Navbar />
      <IonContent fullscreen className="ion-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold bg-white bg-opacity-75 p-2 rounded mb-4">Cartera de Proyectos</h2>
          {proyectos.map((proyecto) => (
            <IonCard key={proyecto.id} className="glass-panel mb-4">
              <IonCardHeader>
                <div className="flex justify-between items-start">
                  <IonCardTitle>{proyecto.nombre}</IonCardTitle>
                  <IonBadge color="primary">{proyecto.estado}</IonBadge>
                </div>
              </IonCardHeader>
              <IonCardContent>
                <p><strong>Sector:</strong> {proyecto.sector}</p>
                <div className="mt-4 flex gap-2">
                  <IonButton color="light" fill="outline">Ver Detalles</IonButton>
                  <IonButton color="warning" routerLink={`/opinion?proyectoId=${proyecto.id}`}>🗣️ Dar mi Opinión</IonButton>
                </div>
              </IonCardContent>
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Proyectos;
