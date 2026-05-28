import React from 'react';
import { 
    IonPage, 
    IonContent, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonCard, 
    IonCardContent, 
    IonButton 
} from '@ionic/react';
import Navbar from '../components/Navbar';

const Opinion: React.FC = () => {
  return (
    <IonPage>
        <Navbar />
      <IonContent fullscreen className="ion-padding flex flex-col justify-center items-center">
        <div className="max-w-2xl mx-auto mt-10">
          <IonCard className="glass-panel text-center p-6 border-t-8 border-t-yellow-500">
            <IonCardContent>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">¡Nos importa tu opinión!</h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                El desarrollo sustentable y armónico de nuestra comuna solo es posible mediante la <strong>cogobernanza</strong>. 
                Tu retroalimentación nos ayuda a evaluar el impacto real de las obras, corregir falencias y asegurar que los proyectos 
                arquitectónicos mejoren la calidad de vida de todos los vecinos, protegiendo nuestro entorno medioambiental.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-8 text-left">
                <p className="text-sm text-yellow-800">
                  🔒 <strong>Importante:</strong> Para garantizar la transparencia y validez de las votaciones vecinales, 
                  se requerirá autenticación oficial mediante Clave Única al momento de emitir tu opinión.
                </p>
              </div>
              <IonButton expand="block" color="primary" size="large" routerLink="/proyectos">
                Revisar Proyectos Disponibles para Opinar
              </IonButton>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Opinion;
