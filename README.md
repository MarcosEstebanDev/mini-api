# Mini API

## Descripción
Este proyecto es una mini API que fue creada para demostrar cómo construir una API básica utilizando Node.js y Express. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en usuarios.

## Cómo se hizo
1. **Inicialización del proyecto**: Se creó un nuevo proyecto utilizando Node.js.
2. **Configuración del servidor**: Se configuró el servidor utilizando Express.
3. **Definición de rutas**: Se definieron las rutas para los diferentes endpoints de la API.
4. **Implementación de controladores**: Se implementaron los controladores para manejar la lógica de cada endpoint.
5. **Validaciones**: Se añadieron validaciones para asegurar que los datos enviados a la API sean correctos.
6. **Pruebas**: Se realizaron pruebas para asegurar que la API funcione correctamente.

## Endpoints
### Obtener todos los usuarios
- **URL**: `/api/users`
- **Método**: `GET`
- **Descripción**: Obtiene una lista de todos los usuarios.

### Obtener un usuario por ID
- **URL**: `/api/users/:id`
- **Método**: `GET`
- **Descripción**: Obtiene un usuario específico por su ID.
- **Validaciones**:
  - `id`: Debe ser un número entero válido.

### Crear un nuevo usuario
- **URL**: `/api/users`
- **Método**: `POST`
- **Descripción**: Crea un nuevo usuario.
- **Validaciones**:
  - `name`: Debe ser un string no vacío.
  - `age`: Debe ser un número mayor que 0.

### Actualizar un usuario por ID
- **URL**: `/api/users/:id`
- **Método**: `PUT`
- **Descripción**: Actualiza un usuario específico por su ID.
- **Validaciones**:
  - `id`: Debe ser un número entero válido.
  - `name`: Debe ser un string no vacío.
  - `age`: Debe ser un número mayor que 0.

### Eliminar un usuario por ID
- **URL**: `/api/users/:id`
- **Método**: `DELETE`
- **Descripción**: Elimina un usuario específico por su ID.
- **Validaciones**:
  - `id`: Debe ser un número entero válido.

## Validaciones
Las validaciones se realizan utilizando express-validator. Estas validaciones aseguran que los datos enviados a la API sean correctos y previenen errores.

## Ejecución del proyecto
Para ejecutar el proyecto, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone [URL del repositorio]
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor:
   ```bash
   npm start
   ```

## Contribuciones
Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request para contribuir al proyecto.
