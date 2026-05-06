import React from 'react';
import { 
    IonPage, 
    IonContent, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent, 
    IonItem, 
    IonIcon, 
    IonLabel 
} from '@ionic/react';
import Navbar from '../components/Navbar';

const Actividades: React.FC = () => {
  const agenda = [
    { id: 1, titulo: "Taller de Huertos Urbanos", fecha: "10 de Mayo, 2026", hora: "10:00 - 13:00 hrs", ubicacion: "Invernadero Municipal", desc: "Aprende a cultivar tus propios vegetales en espacios reducidos usando botellas recicladas." },
    { id: 2, titulo: "Caminata de Observación de Aves", fecha: "15 de Mayo, 2026", hora: "08:00 - 11:30 hrs", ubicacion: "Humedal Costero", desc: "Recorrido guiado para identificar especies endémicas y concientizar sobre la protección de humedales." },
    { id: 3, titulo: "Feria de Emprendimiento Sustentable", fecha: "22 de Mayo, 2026", hora: "11:00 - 18:00 hrs", ubicacion: "Plaza Principal", desc: "Stands de artesanos y pymes locales que trabajan con economía circular y materiales reciclados." }
  ];

  return (
    <IonPage>
        <Navbar s/>
      <IonContent fullscreen className="ion-padding">
        <div className="max-w-4xl mx-auto">
          {agenda.map((act) => (
            <IonCard key={act.id} className="glass-panel mb-4">
              <IonCardHeader>
                <IonCardTitle>{act.titulo}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <div className="bg-green-50 p-3 rounded mb-3 border border-green-200">
                  <p><strong>📅 Fecha:</strong> {act.fecha}</p>
                  <p><strong>⏰ Horario:</strong> {act.hora}</p>
                  <p><strong>📍 Ubicación:</strong> {act.ubicacion}</p>
                </div>
                <p className="text-gray-700">{act.desc}</p>
              </IonCardContent>
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Actividades;
