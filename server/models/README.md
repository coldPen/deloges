# [Aouf](../README.md) > Models

Un model est une collection de fonctions permettant de requêter une table de la base de donnée.

## client

Le client contient des fonctions utiles aux modèles. Il contient notamment la fonction qui permet d'exécuter une requête, celle-ci se chargeant de configurer la connexion.

## User model

### create

Crée un utilisateur.

### list

Liste des utilisateurs selon des filtres.

### read

Récupère un utilisateur à partir de sont identifiant.

### readAdmin

Récupère un utilisateur de type `admin` à partir de sont identifiant.

### readVolunteer

Récupère un utilisateur de type `volunteer` à partir de sont identifiant.

### readDislodged

Récupère un utilisateur de type `dislodged` à partir de sont identifiant.
