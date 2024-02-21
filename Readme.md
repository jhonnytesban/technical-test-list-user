# Aplicación de Gestión de Usuarios con Ionic y Angular

Esta aplicación Ionic-Angular sirve como proyecto de prueba para la autenticación de usuarios, registro y operaciones CRUD en los datos de los usuarios. La aplicación incluye funciones para el inicio de sesión de usuarios, la creación de cuentas y la gestión de la información del usuario.

## Tabla de Contenidos

- [Descripción General](#descripción-general)
- [Funcionalidades Clave](#funcionalidades-clave)
- [Cómo Empezar](#cómo-empezar)
- [Decisiones y Consideraciones](#decisiones-y-consideraciones)
- [Tiempo Dedicado](#tiempo-dedicado)
- [Desafíos y Soluciones](#desafíos-y-soluciones)
- [Dependencias](#dependencias)

## Descripción General

Esta aplicación Ionic-Angular está diseñada como un proyecto de prueba para demostrar la implementación de la autenticación de usuarios, el registro y las funcionalidades CRUD. El proyecto incluye una interfaz fácil de usar con páginas para inicio de sesión, registro, listado de usuarios y detalles del usuario. El objetivo es mostrar competencia en la construcción de un sistema completo de gestión de usuarios utilizando el framework Ionic con Angular.

## Funcionalidades Clave

- **Autenticación de Usuarios:** Permite a los usuarios iniciar sesión de forma segura con sus credenciales.
- **Registro de Usuarios:** Proporciona un formulario de registro para crear nuevas cuentas de usuario.
- **Listado de Usuarios:** Muestra una lista de usuarios con detalles básicos.
- **Detalles del Usuario:** Permite ver y editar detalles del usuario, incluyendo nombre, apellidos, correo electrónico y contraseña.

## Cómo Empezar

1. **Instala las dependencias:**
   ```bash
   npm install
2. **Inicia el proyecto:**
    ```bash
    npm start

## Decisiones y Consideraciones
- **Estructura del proyecto:** he obtado por usar una estructura basada en módulos para una mayor agilidad y control del código por la experiencia de trabajar sobre éstos, ya que de esta forma he podido realizarlo en menor tiempo que si lo hubiese desarrollado con componentes **Standalone**

- **Uso de localStorage:** para el almacenamiento del token para la sesión usé esta API de javascript para agilizar tiempos.

## Tiempo Dedicado
Se estima que se dedicaron aproximadamente 6 a 8 horas al desarrollo de esta prueba

## Desafíos y soluciones
Como principal desafío ha sido el tiempo autoexigido para finalizar la prueba en algo menos de una jornada de trabajo, en mi opinión, varios días de desarrollo de una prueba da facilidades que, la mayoría de las veces, no se encuentran en la presión del día a día.

## Dependencias

La aplicación hace uso de las siguientes dependencias clave:

- `@ionic/angular`: Framework Ionic para el desarrollo de aplicaciones móviles con Angular.
- `@ngx-translate/core`: Librería para la internacionalización de la aplicación.
