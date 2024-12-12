# Video Store

## Descripción General
Este proyecto es una tienda en línea de cursos de programación y robótica orientada a estudiantes y entusiastas de la tecnología. La aplicación permite a los usuarios explorar cursos organizados por categorías, ver detalles específicos de cada curso, agregar productos a un carrito de compras, realizar el proceso de checkout y generar un resumen de las compras realizadas.

## Características Principales
- **Visualización por Categorías:** Los cursos están organizados por categorías y el usuario puede navegar entre ellas.
- **Detalle de Producto:** Cada curso tiene una página de detalle que incluye descripción, precio, imágenes en carrusel y botones de acción.
- **Carrito de Compras:** Los usuarios pueden agregar productos al carrito y ver un resumen de sus selecciones.
- **Proceso de Checkout:** Se recopilan los datos del usuario y se genera una orden con un código único.
- **Resumen de la Orden:** Tras confirmar la compra, el usuario ve un resumen con todos los detalles y el código de la orden.
- **Integración con Firebase:** Los cursos y las órdenes se almacenan en Firestore (Cloud Firestore de Firebase).

## Tecnologías Utilizadas
### Frontend
- **React:** Desarrollo de los componentes de la interfaz de usuario.
- **React Router DOM:** Navegación entre rutas de la aplicación.
- **Bootstrap:** Estilo y diseño responsivo.
- **React Toastify:** Notificaciones para mejorar la experiencia del usuario.

### Backend
- **Firebase Firestore:** Base de datos en la nube para almacenar cursos y órdenes.

## Dependencias Extra
### Agregadas por npm
- **React Toastify:** Utilizada para mostrar notificaciones cuando se agregan productos al carrito o se genera una orden.
  - **Decisión:** Mejora la retroalimentación visual para el usuario.
- **Bootstrap:** Para crear un diseño responsivo y moderno de manera rápida.
  - **Decisión:** Facilitar el desarrollo de una interfaz de usuario amigable y consistente.
- **Firebase:** Para la integración con Cloud Firestore.
  - **Decisión:** Proveer una solución de almacenamiento fácilmente escalable.

## Estructura del Proyecto
```
/src
  /components
    Header.jsx
    Footer.jsx
    NavBar.jsx
  /contexts
    CartContext.js
  /data
    cursos.js
  /firebase
    firebaseConfig.js
  /pages
    Home.jsx
    ProductDetail.jsx
    CartPage.jsx
    CheckoutPage.jsx
    OrderSummary.jsx
  /styles
    Home.css
    CheckoutPage.css
index.js
App.jsx
README.md
```

## Flujo de Trabajo
1. **Home Page:** El usuario explora cursos organizados por categorías.
2. **Detalles del Curso:** Puede visualizar información detallada de un curso.
3. **Carrito:** Se agregan productos y se visualiza un resumen antes del pago.
4. **Checkout:** Se completan los datos del usuario y se genera una orden.
5. **Resumen de la Orden:** Se muestra un código de confirmación y el detalle de la compra.

## Configuración de Firebase
1. Crear un proyecto en Firebase.
2. Configurar Firestore y las reglas de seguridad:
```json
{
  "rules_version": "2",
  "service": "cloud.firestore",
  "match": {
    "/databases/{database}/documents": {
      "/{document=**}": {
        "allow read, write": "if true"
      }
    }
  }
}
```
3. Configurar el archivo `firebaseConfig.js` con las credenciales del proyecto.

## Ejecución del Proyecto
1. Clonar el repositorio.
2. Instalar dependencias con `npm install`.
3. Iniciar el proyecto con `npm start`.
4. Subir los cursos a Firestore ejecutando `uploadCourses.js` si es necesario.

---
Este proyecto está pensado para servir como punto de partida en el desarrollo de aplicaciones de e-commerce utilizando tecnologías modernas y escalables.

Observacion por cuestion de tiempo tiene imagenes de tamaño pero no comerciales o los videos para vender el curso de microbit


El video https://zoom.us/rec/share/1wAYC1L2c69ui8tlloZ0EFuDWxwuyMskJ-kc6VALJTCciEMwo-Mb63qtDD_Y7IUP.W6lpKrZYg_IvuS76?startTime=1734027786000