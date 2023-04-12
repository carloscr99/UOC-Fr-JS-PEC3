

### Mensaje de error que aparece en la última línea, por pasar un string en lugar de un número:

![Captura del error](ejer2_error.png)

Esta es una ventaja frente a ``JS``, dado que vemos el error en tiempo de desarrollo, y no tenemos que esperar a la compilación y ejecución del código.

1. ``TypeScript`` inferirá los siguientes tipos de datos:
   1. **number**: En la constante ``a``, dado que es un número
   2. **string**: En las constantes ``b`` y ``c``, dado que son cadenas de texto
   3. **boolean[]**: En la constante ``d``, ya que es un array, donde todos los valores son booleanos
   4. **{type: string}**: En la constante ``e``, dado que es un objeto con la propiedad type, la cual es de tipo string
   5. **(number | boolean)[]**: En la constante ``f``, dado que en el dicho array, ya un número y un bollean, por lo que en este array, pueden haber los dos tipos de datos
   6. **number[]**: En la constante ``g``, ya que en este array, solo cuenta con números.
   7. **null**: En la constante ``h``, ya que es un valor null

