
import React from 'react';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonGrid, 
  IonRow, 
  IonCol, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonButton 
} from '@ionic/react';
import './Home.css';
import Navbar from '../components/Navbar';

const Inicio: React.FC = () => {
  return (
    <IonPage>
      <Navbar />
      <IonContent fullscreen className="ion-padding">
        <h1 className="text-center font-bold text-3xl my-6 text-gray-800 bg-white bg-opacity-75 p-2 rounded">Dashboard Medioambiental</h1>
        <IonGrid fixed>
          <IonRow>
            <IonCol size="12" sizeMd="4">
              <IonCard className="glass-panel hover:bg-green-50" button routerLink="/servicios?tipo=basura">
                <IonCardHeader>
                  <IonCardTitle className="text-center">⏱️ Horarios</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size="12" sizeMd="4">
              <IonCard className="glass-panel hover:bg-green-50" button routerLink="/servicios">
                <IonCardHeader>
                  <IonCardTitle className="text-center">♻️ Puntos de Reciclaje</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size="12" sizeMd="4">
              <IonCard className="glass-panel hover:bg-green-50" button routerLink="/actividades">
                <IonCardHeader>
                  <IonCardTitle className="text-center">📅 Actividades</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" sizeMd="6">
              <IonCard className="glass-panel hover:bg-green-50" button routerLink="/proyectos">
                <IonCardHeader>
                  <IonCardTitle className="text-center">🏗️ Proyectos Recientes</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size="12" sizeMd="6">
              <IonCard className="glass-panel hover:bg-green-50" button routerLink="/servicios">
                <IonCardHeader>
                  <IonCardTitle className="text-center">🌳 Zonas Verdes</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Inicio;
