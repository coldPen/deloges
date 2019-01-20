# [Aouf](../README.md) > API

L'api est un router sur lequel viennent se greffer de multiples controllers, chacun représentant un endpoint de l'API.  
Certains controllers peuvent être regroupés dans un "sous router" (ex.: `dislodged` ou `volunteer`).

> [En savoir plus sur les controllers](../controllers/README.md)

## dislodged

Dislodged est un sous router contenant plusieurs controllers.  
[Voir ses controllers](./dislodged/README.md)

## volunteer

Volunteer est un sous router contenant plusieurs controllers.  
[Voir ses controllers](./volunteer/README.md)

## signin

Identifie l'utilisateur et enregistre son identifiant en session.

## signout

Supprime la session de l'utilisateur.
