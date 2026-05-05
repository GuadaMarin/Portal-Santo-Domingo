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

const Home: React.FC = () => {
  return (
    <IonPage>
      {/* Esta es la barra de navegación superior */}
      <IonHeader>
        <IonToolbar color="success"> {/* color="success" le da el tono verde de Ionic */}
          <IonTitle>Portal Municipal - Medio Ambiente</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Aquí va el contenido de la página */}
      <IonContent fullscreen className="ion-padding">
        
        <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Dashboard de Noticias</h1>

        <IonGrid>
          <IonRow>
            {/* Botón Horarios */}
            <IonCol size="12" sizeMd="4">
              <IonCard color="light" button={true} routerLink="/servicios">
                <IonCardHeader>
                  <IonCardTitle style={{ textAlign: 'center' }}>⏱️ Horarios</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>

            {/* Botón Puntos de Reciclaje */}
            <IonCol size="12" sizeMd="4">
              <IonCard color="light" button={true} routerLink="/servicios">
                <IonCardHeader>
                  <IonCardTitle style={{ textAlign: 'center' }}>♻️ Puntos de Reciclaje</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>

            {/* Botón Actividades */}
            <IonCol size="12" sizeMd="4">
              <IonCard color="light" button={true} routerLink="/actividades">
                <IonCardHeader>
                  <IonCardTitle style={{ textAlign: 'center' }}>📅 Actividad</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow>
            {/* Botón Proyectos Recientes */}
            <IonCol size="12" sizeMd="6">
              <IonCard color="light" button={true} routerLink="/proyectos">
                <IonCardHeader>
                  <IonCardTitle style={{ textAlign: 'center' }}>🏗️ Proyectos Recientes</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>

            {/* Botón Zonas Verdes */}
            <IonCol size="12" sizeMd="6">
              <IonCard color="light" button={true} routerLink="/servicios">
                <IonCardHeader>
                  <IonCardTitle style={{ textAlign: 'center' }}>🌳 Zonas Verdes</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default Home;