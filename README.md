
# Twitter-Clone

Twitter-Clone est un clone simplifié de Twitter développé avec React et Vite.

![Twitter-Clone Screenshot](screenshots/Twitter-Clone-screenshot.png)

## Table des matières

- [Installation](#installation)
- [Utilisation](#utilisation)
- [Fonctionnalités](#fonctionnalités)
- [Contribuer](#contribuer)
- [Licence](#licence)

## Installation

Pour installer Twitter-Clone, suivez ces étapes simples :

1. Clonez le repository :

```bash
git clone https://github.com/votreutilisateur/twitclone.git
cd Twitter-Clone
```

2. Installez les dépendances avec npm ou yarn :

```bash
npm install
# ou
yarn install
```

## Utilisation

Une fois l'installation terminée, lancez l'application localement avec la commande suivante :

```bash
npm start
# ou
yarn start
```

L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Fonctionnalités

- **Fonctionnalité: Navigation vers les profils:** Scénario: L'utilisateur navigue vers une page de profil
  Étant donné que l'utilisateur est sur un tweet
  Quand il clique sur l'avatar, le nom d'utilisateur ou le handle
  Alors il est redirigé vers la page de profil de l'utilisateur
  Et le chemin de navigation est "/<username>"
.
- **Fonctionnalité: Navigation entre les pages:** Scénario: L'utilisateur navigue vers une page de profil
  Étant donné que l'utilisateur est sur la page d'accueil
  Quand il sélectionne le menu "Profil" dans la barre de navigation
  Ou il clique sur la section ProfileSetting (cfr. maquette)
  Alors il est redirigé vers sa page de profil
 .
- **Fonctionnalité: Effets sur les boutons d'action:** Scénario: L'utilisateur survole les boutons d'action
  Étant donné que l'utilisateur est sur un tweet
  Quand il survole une action sous le contenu du tweet
  Alors la couleur de l'icone et texte change conformement à l'illustration "action-button-effects.gif"
  Et quand il quitte le bouton
  Alors le bouton reprend sa couleur de depart
.
- **Fonctionnalité: Effets sur les boutons d'action:** Scénario: L'utilisateur clique un bouton d'action
  Étant donné que l'utilisateur est sur un tweet
  Quand il clique un bouton d'action sous le contenu du tweet
  Alors la couleur de l'icone et texte change conformement à l'illustration "action-button-effects.gif".

## Contribuer

Nous encourageons les contributions pour rendre Twitter-Clone encore meilleur. Suivez ces étapes pour contribuer :

1. Fork le projet.
2. Clonez le fork sur votre machine.
3. Créez une nouvelle branche pour vos modifications.
4. Faites vos modifications et assurez-vous de respecter les conventions de codage.
5. Proposez une demande de tirage.

## Licence

Twitter-Clone est distribué sous la licence MIT. Consultez le fichier [LICENSE](LICENSE) pour plus de détails.

----