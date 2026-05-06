import React, { useState } from 'react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect, Switch } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';

// Acá se importan las vistas de las paginas
import Inicio from '../pages/Inicio';
import Servicios from '../pages/Servicios';
import ListaProyectos from '../pages/Proyectos/Lista-de-Proyectos';
import Opinion from '../pages/Opinion';
import ProtectedRoute from '../components/ProtectedRoute';

const AppRoutes: React.FC = () => {
  // Simulador de estado de autenticación / esto es por mientras hasta que se agregue la autenticación mediante clave unica
  const [isAuth, setIsAuth] = useState(false);

  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Switch>
          {/* Rutas Públicas */}
          <Route exact path="/inicio" component={Inicio} />
          <Route exact path="/proyectos" component={ListaProyectos} />
          <Route exact path="/servicios" component={Servicios} />
          
          {/* Rutas Protegidas (Requieren Clave Única) */}
          <ProtectedRoute 
            exact path="/proyectos/:id/opinar" 
            component={Opinion} 
            isAuthenticated={isAuth} 
          />

          {/* Redirección por defecto */}
          <Route exact path="/">
            <Redirect to="/inicio" />
          </Route>
        </Switch>
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default AppRoutes;