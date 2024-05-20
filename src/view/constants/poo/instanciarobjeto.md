# Instanciar objeto
- - -
Tienes una clase llamada **Debito** con los siguientes atributos: `cod`, `bankName`, `cod_seguridad`. Asimismo, si **cod_securidad** es nulo tendrá que lanzar un _exception_ con el mensaje: `Código de seguridad no puede ser nulo`.

Su _constructor_ es el siguiente:

```Java
class Debito {
    
    /* Atributos */

    public Debito(
        String cod, 
        String bankName,
        int cod_seguridad
    ) {
        this.cod = cod;
        this.bankName = bankName;
        this.cod_seguridad = cod_seguridad;
    }
}
```