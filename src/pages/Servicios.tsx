import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  IonPage, 
  IonContent, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonGrid, 
  IonRow, 
  IonCol, 
  IonCard, 
  IonCardContent, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonTextarea, 
  IonButton, 
  IonSelect, 
  IonSelectOption 
} from '@ionic/react';
import Navbar from '../components/Navbar';


const Servicios: React.FC = () => {
  const [servicio, setServicio] = useState('basura');

  return (
    <IonPage>
      <Navbar />
      <IonContent fullscreen className="ion-padding">
        <IonGrid fixed>
          <IonRow>
            {/* Menú Lateral */}
            <IonCol size="12" sizeMd="4">
              <IonCard className="glass-panel">
                <IonList lines="full" className="bg-transparent">
                  <IonItem button onClick={() => setServicio('basura')} color={servicio === 'basura' ? 'light' : 'transparent'}>
                    <IonLabel>🚛 Horarios de Basura</IonLabel>
                  </IonItem>
                  <IonItem button onClick={() => setServicio('puntos-reciclaje')} color={servicio === 'puntos-reciclaje' ? 'light' : 'transparent'}>
                    <IonLabel>♻️ Puntos de Reciclaje</IonLabel>
                  </IonItem>
                  <IonItem button onClick={() => setServicio('zonas-verdes')} color={servicio === 'zonas-verdes' ? 'light' : 'transparent'}>
                    <IonLabel>🌳 Zonas Verdes</IonLabel>
                  </IonItem>
                  <IonItem button onClick={() => setServicio('recoleccion-domicilio')} color={servicio === 'recoleccion-domicilio' ? 'light' : 'transparent'}>
                    <IonLabel>🏠 Pedir Recolección a Domicilio</IonLabel>
                  </IonItem>
                  <IonItem button onClick={() => setServicio('solicitar-tacho')} color={servicio === 'solicitar-tacho' ? 'light' : 'transparent'}>
                    <IonLabel>🗑️ Solicitar Tacho Reciclaje</IonLabel>
                  </IonItem>
                </IonList>
              </IonCard>
            </IonCol>

            {/* Contenido Dinámico */}
            <IonCol size="12" sizeMd="8">
              <IonCard className="glass-panel min-h-[400px]">
                <IonCardContent>
                  {servicio === 'basura' && (
                    <div>
                      <h2 className="text-xl font-bold mb-4">Recorridos del Camión de Basura</h2>
                      <IonSelect placeholder="Seleccione su sector" interface="popover" className="border p-2 rounded mb-4 w-full">
                        <IonSelectOption value="norte">Sector Norte (Lun-Mie-Vie 08:00 a 12:00)</IonSelectOption>
                        <IonSelectOption value="centro">Sector Centro (Mar-Jue-Sab 09:00 a 14:00)</IonSelectOption>
                        <IonSelectOption value="sur">Sector Sur (Lun-Mie-Vie 15:00 a 19:00)</IonSelectOption>
                      </IonSelect>
                      <div className="bg-gray-300 h-48 rounded flex items-center justify-center font-bold text-gray-500">[ Mapa del Recorrido ]</div>
                    </div>
                  )}

                  {servicio === 'puntos-reciclaje' && (
                    <div>
                      <h2 className="text-xl font-bold mb-4">Ubicación Puntos de Reciclaje (Campanas)</h2>
                      <div className="bg-gray-300 h-64 rounded flex items-center justify-center font-bold text-gray-500">[ Mapa con Pines Verdes ]</div>
                    </div>
                  )}

                  {servicio === 'zonas-verdes' && (
                    <div>
                      <h2 className="text-xl font-bold mb-4">Parques y Zonas Verdes</h2>
                      <div className="bg-gray-300 h-64 rounded flex items-center justify-center font-bold text-gray-500">[ Mapa de Parques Comunales ]</div>
                    </div>
                  )}

                  {servicio === 'recoleccion-domicilio' && (
                    <div>
                      <h2 className="text-xl font-bold mb-4">Solicitar Recolección de Voluminosos o Reciclaje</h2>
                      <IonItem className="mb-2">
                        <IonLabel position="stacked">Nombre y Apellido</IonLabel>
                        <IonInput placeholder="Ej. Juan Pérez"></IonInput>
                      </IonItem>
                      <IonItem className="mb-2">
                        <IonLabel position="stacked">Dirección exacta</IonLabel>
                        <IonInput placeholder="Calle, Número, Población"></IonInput>
                      </IonItem>
                      <IonItem className="mb-2">
                        <IonLabel position="stacked">Tipo de Basura</IonLabel>
                        <IonSelect placeholder="Seleccionar">
                          <IonSelectOption value="reciclable">Cartón / Vidrio / Latas (Reciclable)</IonSelectOption>
                          <IonSelectOption value="desechable">Escombros / Muebles (Desechable)</IonSelectOption>
                        </IonSelect>
                      </IonItem>
                      <IonButton expand="block" color="success" className="mt-4">Pedir Recolección</IonButton>
                    </div>
                  )}

                  {servicio === 'solicitar-tacho' && (
                    <div>
                      <h2 className="text-xl font-bold mb-4">Petición de Tacho de Reciclaje</h2>
                      <p className="text-sm mb-4 text-gray-600">Solicite un contenedor diferenciado para su cuadra, condominio o junta de vecinos.</p>
                      <IonItem className="mb-2">
                        <IonLabel position="stacked">Dirección Propuesta</IonLabel>
                        <IonInput placeholder="Ubicación donde se instalaría"></IonInput>
                      </IonItem>
                      <IonItem className="mb-2">
                        <IonLabel position="stacked">Tipo de Tacho Necesitado</IonLabel>
                        <IonSelect placeholder="Seleccionar material principal">
                          <IonSelectOption value="vidrio">Campana de Vidrio</IonSelectOption>
                          <IonSelectOption value="plastico">Contenedor Plásticos PET</IonSelectOption>
                          <IonSelectOption value="carton">Contenedor Papel y Cartón</IonSelectOption>
                        </IonSelect>
                      </IonItem>
                      <IonItem className="mb-2">
                        <IonLabel position="stacked">Motivo de la solicitud</IonLabel>
                        <IonTextarea rows={3} placeholder="Explique brevemente por qué hace falta en su sector..."></IonTextarea>
                      </IonItem>
                      <IonButton expand="block" color="success" className="mt-4">Enviar Petición</IonButton>
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