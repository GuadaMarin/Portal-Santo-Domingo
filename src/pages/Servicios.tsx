import React, { useState } from 'react';
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonList, IonItem, IonLabel } from '@ionic/react';
import Navbar from '../components/Navbar';

const Servicios: React.FC = () => {
  const [servicioSeleccionado, setServicioSeleccionado] = useState('basura');

  return (
    <IonPage>
      <Navbar />
      <IonContent className="ion-padding">
        <IonGrid fixed>
          <IonRow>
            {/* Menú Lateral */}
            <IonCol size="12" sizeMd="4">
              <IonCard className="glass-panel">
                <IonList lines="full">
                  <IonItem button onClick={() => setServicioSeleccionado('basura')} color={servicioSeleccionado === 'basura' ? 'light' : ''}>
                    <IonLabel>🚛 Camión de Basura</IonLabel>
                  </IonItem>
                  <IonItem button onClick={() => setServicioSeleccionado('reciclaje')}>
                    <IonLabel>♻️ Puntos de Reciclaje</IonLabel>
                  </IonItem>
                  <IonItem button onClick={() => setServicioSeleccionado('zonas-verdes')}>
                    <IonLabel>🌳 Zonas Verdes</IonLabel>
                  </IonItem>
                  <IonItem button onClick={() => setServicioSeleccionado('retiro')}>
                    <IonLabel>🏠 Pedir Recolección</IonLabel>
                  </IonItem>
                </IonList>
              </IonCard>
            </IonCol>

            {/* Contenido Dinámico */}
            <IonCol size="12" sizeMd="8">
              <IonCard className="glass-panel">
                <IonCardContent>
                  {servicioSeleccionado === 'basura' && (
                    <div>
                      <h2>Recorridos del Camión</h2>
                      <p>Seleccione su sector para ver el mapa de recorrido.</p>
                      {/* Aquí iría el div del mapa y el select que dibujaste */}
                      <div style={{ height: '300px', backgroundColor: '#e0e0e0', marginTop: '20px', borderRadius: '8px' }}>
                        Mapa
                      </div>
                    </div>
                  )}
                  {servicioSeleccionado === 'retiro' && (
                    <div>
                      <h2>Formulario de Retiro</h2>
                      {/* Aquí van los inputs del formulario */}
                    </div>
                  )}
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Servicios;