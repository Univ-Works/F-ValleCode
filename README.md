# ValleCode

- - -
Crear carpeta **node_modules** e instalar dependencias:

`npm install`

Inciar el frontend:

`npm run start`
- - -

> [!IMPORTANT]
> Crea un archivo `.env` y copia esta variable. Luego, agrégalo en la raíz del proyecto

```
REACT_APP_SECRET_KEY=cHJveWVjdF91Y3Zfc2JfMjU2X2JpdHNfdG9fand0X3NlY3JldF9rZXk=
```

> [!NOTE]
> Las rutas están protegidas y, por lo tanto, funcionan junto con el [backend](https://github.com/Code-UCV/B-ValleCode). Sin embargo, puedes modificar el estado `isAuthenticated` a **true** en el archivo [ProtectedRoute.js](https://github.com/Code-UCV/F-ValleCode/blob/master/src/private/ProtectedRoute.js) para que te permita el ingreso sin necesidad de autenticarte.

```Javascript
export function ProtectedRoute() {
    const [isAuthenticated, setIsAutenticated] = useState(false) // cambiar a true
    /*
     . . .
    */
```
