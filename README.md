# Mini API

## Descripción
Este proyecto es una mini API que fue creada para demostrar cómo construir una API básica utilizando Node.js y Express. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en usuarios. Además, incluye un cliente en React para interactuar con la API.

## Cómo se hizo
1. **Inicialización del proyecto**: Se creó un nuevo proyecto utilizando Node.js.
2. **Configuración del servidor**: Se configuró el servidor utilizando Express.
3. **Definición de rutas**: Se definieron las rutas para los diferentes endpoints de la API.
4. **Implementación de controladores**: Se implementaron los controladores para manejar la lógica de cada endpoint.
5. **Validaciones**: Se añadieron validaciones para asegurar que los datos enviados a la API sean correctos.
6. **Pruebas**: Se realizaron pruebas para asegurar que la API funcione correctamente.
7. **Cliente en React**: Se creó un cliente en React para interactuar con la API, permitiendo registrar y listar usuarios.

## Endpoints
### Obtener todos los usuarios
- **URL**: `/usuarios`
- **Método**: `GET`
- **Descripción**: Obtiene una lista de todos los usuarios.

### Crear un nuevo usuario
- **URL**: `/usuarios`
- **Método**: `POST`
- **Descripción**: Crea un nuevo usuario.
- **Validaciones**:
  - `nombre`: Debe ser un string no vacío.
  - `correo`: Debe tener un formato de correo válido.
  - `edad`: Debe ser un número mayor que 0.

### Obtener un usuario por correo
- **URL**: `/usuarios/:correo`
- **Método**: `GET`
- **Descripción**: Obtiene un usuario específico por su correo.

### Actualizar un usuario por correo
- **URL**: `/usuarios/:correo`
- **Método**: `PUT`
- **Descripción**: Actualiza un usuario específico por su correo.
- **Validaciones**:
  - `nombre`: (Opcional) Debe ser un string no vacío.
  - `edad`: (Opcional) Debe ser un número mayor que 0.

### Eliminar un usuario por correo
- **URL**: `/usuarios/:correo`
- **Método**: `DELETE`
- **Descripción**: Elimina un usuario específico por su correo.

## Validaciones
Las validaciones se realizan utilizando express-validator. Estas validaciones aseguran que los datos enviados a la API sean correctos y previenen errores.

## Cliente en React
El cliente en React permite registrar y listar usuarios. La lista de usuarios se actualiza automáticamente después de registrar un nuevo usuario.

### Componentes principales
- **App**: Componente principal que maneja el estado de los usuarios y los errores.
- **UserForm**: Componente para registrar un nuevo usuario.
- **UserListContainer**: Componente para listar los usuarios registrados.

## Ejecución del proyecto
Para ejecutar el proyecto, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone 
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor:
   ```bash
   npm start
   ```
4. Inicia el cliente:
   ```bash
   cd client
   npm install
   npm start
   ```


