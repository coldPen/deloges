# Aouf

## Installation

```shell
$ git clone https://github.com/coldPen/deloges.git
$ cd deloges/server
$ npm install
```

La création des tables de la base de donnée est expliquée plus bas.

## Usage

Avant d'exécuter une commande, votre dossier courant doit être celui du server.

### Lancement du server

```shell
$ npm start
```

### Créations des tables (base de donnée)

```shell
$ npm run create-database
```

### Hash d'un password

```shell
$ npm run hash-password mot-de-passe-en-clair
```

## Structure du server

### /api

Contient tous les controllers lié à l'api.  
[En savoir plus](./server/api/README.md)

### /controllers

Un controller est une fonction qui réalise une ou des opérations relative(s) à la requête et/ou la réponse.  
Le controller renvoie la réponse à la fin de son traitement.  
[En savoir plus](./server/controllers/README.md)

### /middlewares

Contient tous les middlewares de l'application. Un middleware est une fonction qui fait une ou des opérations relative(s) à la requête et/ou la réponse.  
Le middleware ne renvoie pas la réponse, il lance l'exécution du middleware/controller suivant ou lance une erreur.  
[En savoir plus](./server/middlewares/README.md)

### /public

Contient tous les fichiers statics et publics de l'application (images, fonts,…). Ces fichiers sont accessible via la route `/assets`.

> Ex.: `/public/logo.png` est accessible via la route `/assets/logo.png`

### /views

Contient les templates de l'application utilisés par les controlleurs pour le rendu des pages.
