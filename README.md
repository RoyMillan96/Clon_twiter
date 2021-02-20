# REACT_JS
Proyecto hecho con el framework de NEXT.JS y REACT.JS que simula ser un clon de twiter

para este proyecto se necesita tener instalado 
node.js
npm (se instala junto con node)
yarn  (npm install -g yarn)


# antes de crear el proyecto instalar el paquete 
npm i create-next-app

# crear el proyecto 
 npx create-next-app o yarn create next-app

 # agregar firebase al proyecto 
 yarn add firebase

# agregar eslint que sirve para corregir errores de codigo
 yarn add eslint -D (-D es de desarrollo)

# inicializar todas las configuraciones de eslint
npx eslint --init

# buscar problemas con eslint 
npx eslint .

# Corregir los errores
npx eslint . --fix ó npm run lint

 para correr el servidor 
 npm run
 npm run dev

 # si llega a fallar el proyecto se soluciona haciendo un 
 npm run  build 

 # eso corrije errores y crea el .next en caso de que no exista


# instalar prettier con eslint 
yarn add eslint-config-prettier -D

#instalar prettier 
yarn add prettier -D

# revisar errores con prettier
npx prettier . --check

#corregir errores con prettier
npx prettier . --write

# agregar firebase admin
yarn add firebase-admin