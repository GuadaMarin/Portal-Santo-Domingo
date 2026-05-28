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
    IonCardSubtitle, 
    IonCardContent, 
    IonButton 
} from '@ionic/react';
import Navbar from '../components/Navbar';

const Noticias: React.FC = () => {
  const noticias = [
    {
      id: 1,
      titulo: "Gran Limpieza del Borde Costero",
      fecha: "05 de Mayo, 2026",
      resumen: "Más de 200 voluntarios se reunieron este fin de semana para retirar plásticos y residuos de nuestras playas locales, protegiendo la fauna marina."
    },
    {
      id: 2,
      titulo: "Nuevo programa de compostaje domiciliario",
      fecha: "02 de Mayo, 2026",
      resumen: "La municipalidad entregará 500 composteras gratuitas a las juntas de vecinos inscritas para reducir la huella de carbono comunal."
    },
    {
      id: 3,
      titulo: "Inauguración de luminarias solares en plazas",
      fecha: "28 de Abril, 2026",
      resumen: "Se instalaron postes con paneles solares 100% autónomos en tres plazas principales, mejorando la seguridad y la eficiencia energética."
    }
  ];

  return (
    <IonPage>
      <Navbar />
      <IonContent fullscreen className="ion-padding">
        <div className="max-w-4xl mx-auto">
          {noticias.map((noticia) => (
            <IonCard key={noticia.id} className="glass-panel mb-4">
              <IonCardHeader>
                <IonCardSubtitle>{noticia.fecha}</IonCardSubtitle>
                <IonCardTitle>{noticia.titulo}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p className="mb-4 text-gray-700">{noticia.resumen}</p>
                <IonButton fill="outline" color="success">Leer Noticia Completa</IonButton>
              </IonCardContent>
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Noticias;