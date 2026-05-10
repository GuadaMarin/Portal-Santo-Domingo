# Portal_Web_Santo_Domingo
Portal Web creado para la municipalidad de Santo Domingo donde se da información sobre noticias medio-ambientales, actividades de la municipalidad y la posibilidad de que las personas puedan dar su opinión sobre proyectos que se lleven a cabo en la zona

## 1. Justificación del Problema y Análisis del Usuario Objetivo

**Justificación del problema:**
La ciudadanía actualmente tiene un rol limitado en el manejo de recursos y decisiones de impacto territorial. [cite_start]Este portal nace como respuesta a la necesidad de mejorar la gestión ambiental comunal[cite: 13]. [cite_start]Su objetivo es diagnosticar la capacidad de gestión en dimensiones clave como Gobernanza, Gestión de Residuos, Áreas Verdes, Movilidad e Infraestructura Sustentable[cite: 34]. [cite_start]La plataforma provee evidencia empírica para desarrollar medidas de gestión ambiental que propendan hacia mayores niveles en la calidad de vida de los habitantes, apoyando el desarrollo de proyectos y el establecimiento de metas medioambientales[cite: 215].

**Análisis del Usuario Objetivo:**
El sistema contempla dos roles principales:
* **Usuario (Ciudadano):** Habitantes de la comuna que requieren información rápida y accesible sobre servicios diarios (basura, reciclaje, actividades) y que buscan un canal seguro y validado (vía Clave Única) para ejercer su derecho a la participación ciudadana opinando sobre proyectos arquitectónicos.
* **Admin (Funcionario Municipal):** Encargados de las áreas de medio ambiente y obras, que necesitan publicar noticias, actualizar la cartelera de proyectos y recolectar informes consolidados sobre la opinión popular para respaldar la toma de decisiones.

## 2. Requerimientos del Sistema

### Requerimientos Funcionales (RF)
1. **Consulta de Servicios:** El sistema debe permitir al usuario visualizar los horarios y recorridos de los camiones de recolección de basura.
2. **Geolocalización Informativa:** El sistema debe listar la ubicación de puntos de reciclaje y zonas verdes comunales.
3. **Gestión de Solicitudes:** El sistema debe permitir a los ciudadanos enviar formularios para solicitar retiro de basura/reciclables a domicilio o la instalación de nuevos tachos de reciclaje.
4. **Visualización de Proyectos:** El sistema debe mostrar una cartera de proyectos arquitectónicos detallando su estado, sector y duración.
5. **Participación Ciudadana (Votación):** El sistema debe permitir a los usuarios autenticados emitir una valoración y comentario sobre proyectos específicos.
6. **Gestión de Contenido (Admin):** El administrador debe tener la capacidad de publicar y editar noticias medioambientales y la agenda de actividades.
7. **Generación de Reportes (Admin):** El sistema debe proveer al administrador un informe consolidado con las estadísticas de la opinión popular sobre los proyectos.

### Requerimientos No Funcionales (RNF)
1. **Seguridad de Identidad:** El proceso de participación y opinión debe estar estrictamente ligado a una validación de identidad simulando el uso del RUT y Clave Única del Estado.
2. **Diseño Responsivo:** La interfaz debe estar construida bajo el paradigma *Mobile-First*, garantizando una visualización y usabilidad óptima tanto en navegadores de escritorio como en dispositivos móviles.
3. **Rendimiento (SPA):** La plataforma debe funcionar como una *Single Page Application*, asegurando que la navegación entre secciones (Noticias, Servicios, Proyectos) ocurra sin recargar el navegador, minimizando los tiempos de espera.

## 3. Arquitectura de Navegación y Experiencia de Usuario (UX)

La plataforma utiliza una arquitectura plana y modular orientada a facilitar el acceso rápido a la información.

* **Rutas Principales:** `/inicio`, `/proyectos`, `/noticias`, `/servicios`, `/actividades`, `/opinion`, `/login`.
* **Jerarquía y Flujo de Interacción:** La navegación está centralizada en una barra superior (`Navbar`) persistente. Desde el `Inicio` (Dashboard), el usuario tiene atajos directos a submódulos específicos (ej. consultar un horario redirige a `/servicios?tipo=basura`). 
* **Puntos Críticos de Interacción:** El flujo de votación ciudadana requiere pasar por un *gateway* de seguridad. Si un usuario intenta opinar sobre un proyecto (`/proyectos/:id/opinar`), el sistema intercepta la acción y fuerza el flujo de inicio de sesión (`/login`) antes de permitir el envío del formulario.
* **Diferencia de Acceso (Roles):** Todas las rutas informativas son públicas. La emisión de formularios de opinión está protegida para el rol **Usuario** validado. Las vistas de publicación y revisión de reportes estarán protegidas exclusivamente para el rol **Admin**.
* **Justificación Técnica:** Se implementó `React Router` dentro del ecosistema de Ionic (`IonReactRouter`) para manejar el enrutamiento del lado del cliente, garantizando la escalabilidad de la arquitectura frontend. Se utilizaron componentes nativos de Ionic (`IonGrid`, `IonCard`) para asegurar la coherencia espacial y la eficiencia de interacción en cualquier tamaño de pantalla, manteniendo un diseño limpio y estandarizado.

## 4. Tecnologías Utilizadas
* **Framework:** Ionic React
* **Enrutamiento:** React Router DOM
* **Estilos:** CSS Modules / Ionic Variables

## 5. Links a Figma
**Link al prototipo en figma: ** https://www.figma.com/proto/013ipqQanul4cv33jTLhFr/PortalWeb_Muni_San.Dom?node-id=0-1&t=cra6mHxdbwDANnk2-1 
