# prueba ecomsur con reactJS
- ## resultado



use:
```
reactjs
npm install react-router-dom
npm install --save styled-components
material icons
npm install axios

```

# mi explicacion:

```
- en la ruta "/Calificaciones" se carga la pagina y se cargan todos los reusltados de la api
- se puede consultar atravez de ej: "/Calificaciones/7" y traera los usuarios de la pagina 7
- el usuario puede escribir en el  "campo de busqueda"
- el usuario puede cambiar de pagina  con los botones para "paginacion"

- se limito a traer 9 usuarios de cada pagina para no saturar
- se trabaja con la idea de que los datos de la fuente son dinamicos por lo que se realiza consulta directa al API y no solo sobre un valor estatico
- las consultas se hacen con mi funcion "AllData" que basicamente realiza todas las operaciones donde se usan inputs,paginacion y se asigna valor a listado de personas
```

```
existe estado para la "paginacion"
existe estado para el "campo de busqueda"
existe estado para el "listado de personas"
```
- si la pagina carga se consulta con "AllData" y se entrega resultado al "listado" 
- si se escribe en el "campo de busqueda" se usa "AllData" , se filtra por nombre y el resultado va  al "listado"
- luego en caso de que el "campo de busqueda" tiene algun valor como un texto ej "Freddy" se consulta con "AllData" y se filtra sus datos para regresarse al "listado"
- si el "campo de busqueda" vuelve a estar vacio  se consulta con "AllData" y se entrega a "listado"
- en caso de que se use la "paginacion" se consulta con "AllData" y se filtra si es necesario , sino igualmente se regresa el valor al "listado"
- si el usuario presiona en eliminar se borrara este del "listado" actual.



# detalles para completar el desafio

- ## etapas del desarrollo para esta prueba
    - ### detalles
        - [api a consumir](https://randomuser.me/api/?results=15)  
        - se adjunto wireframe de ejemplo pero el **diseño a libre elección**
          ![wireframe](wireframe-test-imp.png)
        -  tecnologias 
            - react: { [HOOKS,STATES] }
        - cliente HTTP
        - AXIOS
    - ### informacion solicitada
        - README.md
            - explicacion de esta solucion con fundamentos
            - repo en git (adicionalmente lo dejo en [DEPLOY aqui](www.google.com) para facil acceso) 
    - ### objetivos de la APP
        - Mostrar un listado de las personas. 
        - Incluir un buscador por nombre
        - Un botón para eliminar personas del listado 


