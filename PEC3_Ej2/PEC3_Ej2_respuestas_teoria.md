

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
2. En el ``code3.ts``, se disparan los siguientes errores:
   1. `` // Error TS2588 : Cannot assign to 'i' because it is a constant.ts(2588)``: Este error nos indica que estamos intentando asignar un nuevo valor a una variable. En este caso, se trata que estamos asignando a la variable ``i`` el número 4, pero dicha variable es una constante, por lo que no se le pueden asignar valores y se queda con en valor con la que fue declarada, en este caso, ``3``.
   2. `` // Error TS2345: Argument of type '"5"' is not assignable to parameter of type 'number'.``: Se nos indica que no es posible asignar ``"5"`` a esa variable, dado que hemos asignado el valor 5 como un ``string``, y el array es de tipo ```number``.
   3. ``// Error TSTS2322: Type '4' is not assignable to type 'never'.``: Estamos intentando asignar el valor 4 a una variable, la cual es de tipo ``never``, y esto no es posible dado que dicho tipo no admite valores.
   4. ``// Error TS2571: Object is of type 'unknown'.``: Al ser un tipo ``unknown``, en este caso, no puede hacer la multiplicación, dado que espera un tipo ``number``.

3. La diferencia entre una clase y una interfaz en ``TypeScript``, es que una clase proporciona la implementación y no solo la forma, como es el caso de las interfaces 

