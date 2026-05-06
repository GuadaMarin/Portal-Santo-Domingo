import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon } from '@ionic/react';
import { 
  homeOutline, 
  constructOutline, 
  newspaperOutline, 
  buildOutline, 
  calendarOutline, 
  chatbubbleEllipsesOutline 
} from 'ionicons/icons';

const Navbar: React.FC = () => {
  return (
    <IonHeader>
      <IonToolbar color="success">
        <IonTitle slot="start" className="font-bold">Muni Santo Domingo</IonTitle>
        <IonButtons slot="end">
          <IonButton routerLink="/inicio">
            <IonIcon slot="start" icon={homeOutline} />
            Inicio
          </IonButton>
          <IonButton routerLink="/proyectos">
            <IonIcon slot="start" icon={constructOutline} />
            Proyectos
          </IonButton>
          <IonButton routerLink="/noticias">
            <IonIcon slot="start" icon={newspaperOutline} />
            Noticias
          </IonButton>
          <IonButton routerLink="/servicios">
            <IonIcon slot="start" icon={buildOutline} />
            Servicios
          </IonButton>
          <IonButton routerLink="/actividades">
            <IonIcon slot="start" icon={calendarOutline} />
            Actividades
          </IonButton>
          <IonButton routerLink="/opinion">
            <IonIcon slot="start" icon={chatbubbleEllipsesOutline} />
            Opinión
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Navbar;
