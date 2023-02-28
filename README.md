
# John Barcia Portfolio

Projects made 2020-2022

PASOS:
- Instalar gh-pages:
 npm install --save-dev gh-pages (o $ npm i -D gh-pages)

- Crear el repo y darle un nombre | eportfolio (en mi caso)
- Agregarlo como remote git:
$ git remote add origin https://github.com/Jebarcia77/eportfolio.git

- En el package.json pega la linea:

 "homepage":"http://Jebarcia77.github.io/eportfolio" 

Y los scripts de ejecución en rama main:
- "predeploy": "npm run build",
- "deploy": "gh-pages -d build"

Correr los scripts por orden:
- npm run build
- npm run deploy
