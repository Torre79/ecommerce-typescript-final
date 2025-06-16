**E-Commerce React + TypeScript**
Este proyecto es una aplicación web de comercio electrónico desarrollada con React, TypeScript y Firebase. El sistema permite a los usuarios visualizar un catálogo de productos, realizar compras, gestionar un carrito, registrarse, iniciar sesión y acceder a un panel de administración básico.

📦 Características implementadas
Desarrollo completo en React 18 + TypeScript.
Gestión global de estado con React Context API.
Autenticación de usuarios mediante Firebase Authentication (email/password y Google).
Catálogo de productos gestionado de forma local (sin conexión a base de datos externa).
Carrito de compras funcional con persistencia en el estado global.
Gestión de reseñas de productos de forma local.
Panel de administración básico con métricas simuladas.
Ruteo implementado con react-router-dom.
Interfaz responsiva con Bootstrap 5.
Gráficos estadísticos en el panel de administración usando Chart.js.

📂 Estructura principal del proyecto
.
├── public/
├── src/
│   ├── components/
│   │   ├── Admin/
│   │   ├── Auth/
│   │   ├── Cart/
│   │   ├── Common/
│   │   └── Products/
│   ├── context/
│   ├── data/
│   ├── pages/
│   ├── types/
│   ├── App.tsx
│   ├── index.tsx
│   └── firebase.ts
├── firebaseConfig.ts
├── package.json
└── tsconfig.json

🚀 Requisitos previos
- Node.js (v16 o superior recomendado)
- npm o yarn

⚙ Instalación
1️⃣ Clonar el repositorio:

git clone <url-del-repositorio>
cd ecommerce-typescript-final-main

2️⃣ Instalar las dependencias:
# npm:
npm install

# yarn:
yarn install

🔐 Configuración de Firebase
El sistema utiliza Firebase Authentication. Ya existe un archivo de configuración firebaseConfig.ts incluido con las claves de ejemplo.

Si deseas usar tus propias credenciales de Firebase:

1️⃣ Crea un proyecto en Firebase Console.

2️⃣ Habilita:
Authentication (Email/Password)
Authentication (Google Sign-In)

3️⃣ Reemplaza los valores de firebaseConfig.ts por los de tu proyecto.

▶ Ejecución en entorno local
Para levantar el proyecto localmente:

# Usando npm
npm start

# Usando yarn
yarn start

La aplicación estará disponible en:
http://localhost:3000

👤 Acceso como administrador
Actualmente el rol de administrador es asignado por email. Para ingresar al panel administrativo debes iniciar sesión con el siguiente email:

admin@example.com
Todos los demás usuarios registrados son considerados seller (vendedores).

🔒 Rutas protegidas
Solo los usuarios autenticados con el rol de admin pueden acceder a /admin.

El resto de funcionalidades (catálogo, carrito, reseñas, etc.) están disponibles para cualquier usuario autenticado o anónimo.

📊 Datos simulados
El catálogo de productos se encuentra en:
src/data/data.ts

Los datos de ventas simuladas se encuentran en:
src/data.ts (salesData)

📌 Tecnologías utilizadas
React 18
TypeScript
React Router DOM
React Context API
Firebase Authentication
Bootstrap 5
Chart.js
React Chart.js 2
FontAwesome 


----------------------------------------------------
        ARQUITECTURA LÓGICA DEL SISTEMA 
----------------------------------------------------

USUARIO FINAL
    │
    ▼
FRONTEND (React + TypeScript + Bootstrap)
    ├── index.tsx (arranque de la aplicación)
    ├── App.tsx (gestión de rutas principales)
    │
    ├── Contexto Global (AppContext.tsx)
    │       ├── Estado de usuario autenticado (user)
    │       ├── Estado del carrito de compras (cart)
    │       ├── Funciones globales: login, logout, addToCart, removeFromCart, updateQuantity
    │
    ├── Autenticación (Firebase Authentication)
    │       ├── Login (LoginForm.tsx)
    │       ├── Registro (RegisterForm.tsx)
    │       ├── Recuperación de contraseña (ResetPasswordForm.tsx)
    │
    ├── Productos
    │       ├── data.ts (datos de productos)
    │       ├── ProductList.tsx (listado general)
    │       ├── ProductCard.tsx (tarjeta individual)
    │       ├── ProductDetail.tsx (detalle completo)
    │       └── ProductReview.tsx (sistema de reseñas local)
    │
    ├── Carrito de compras
    │       ├── Cart.tsx (listado total de productos en carrito)
    │       └── CartItem.tsx (detalle de cada producto)
    │
    ├── Administración (solo admin@example.com)
    │       ├── AdminPanel.tsx (panel principal de KPIs)
    │       ├── SalesChart.tsx (gráfico de ventas con Chart.js)
    │       └── StatsCard.tsx (tarjetas estadísticas)
    │
    ├── Otras páginas
    │       ├── HomePage, AboutPage, ContactPage, CheckoutPage, CatalogPage, etc.
    │
    ├── Rutas protegidas
    │       └── ProtectedRoute.tsx (solo admin puede acceder)

BACKEND (Firebase)
    ├── FirebaseConfig.ts (configuración de Firebase)
    ├── firebase.ts (inicialización de SDK)
    └── Servicios utilizados:
            ├── Authentication (email/password y Google)
            └── Analytics (getAnalytics)


