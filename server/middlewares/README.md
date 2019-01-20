# [Aouf](../README.md) > Middlewares

Un middleware est une fonction qui réalise une ou des opérations relative(s) à la requête et/ou la réponse.  
 Le middleware ne renvoie pas la réponse, il lance l'exécution du middleware/controller suivant ou lance une erreur.

> **request** -> middleware1 -> middleware2 -> … -> controller -> **response**

## common

Middleware commun à toute l'application, il est exécuté sur toute les requêtes.  
Fonctions :

- log des requêtes (method, route, response code) en console lorsque l'application est exécuté dans un environnement de dev
- support du cross-origin resource sharing
- gestion de la session utilisateur

## requireAdmin

Middleware qui lance une erreur `ACCESS_FORBIDDEN` si l'utilisateur courant n'est pas un admin, empêchant l'exécution du endpoint.

## requireDislodged

Middleware qui lance une erreur `ACCESS_FORBIDDEN` si l'utilisateur courant n'est pas un délogé, empêchant l'exécution du endpoint.

## requireUser

Middleware qui lance une erreur `ACCESS_FORBIDDEN` si l'utilisateur courant n'est pas identifié (sans restriction sur le type d'utilisateur), empêchant l'exécution du endpoint.

## requireVolunteer

Middleware qui lance une erreur `ACCESS_FORBIDDEN` si l'utilisateur courant n'est pas un bénévole, empêchant l'exécution du endpoint.
