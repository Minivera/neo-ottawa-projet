# Reset2047

Bienvenue sur le répertoire de code du projet Reset2047, appelé neo-ottawa-project dans le code du projet. L'utilisation ou la modification du code des éléments qui y sont associés est autorisée en vertu d’une LICENCE ONTARIO COMMONS - Sans œuvre dérivée, sauf indication contraire. Consultez le document [LICENCE.pdf](./LICENCE.pdf) pour obtenir plus
d'informations.

## Utilisation

Le répertoire contient une application JavaScript construite avec l'outil Vite.js et la librairie React. Pour lancer le serveur de développement, utilisez la commande suivante.

```bash
npm install
npm run start
```

La première commande installe toutes les dépendances JavaScript et la seconde lance le serveur de développement. La génération des fichiers d'images de personnage optimisés à partir des versions SVG se fait avec la commande suivante.

```bash
npm run generate:assets
```

Cette command génèrera un dossier `__generated__` dans le dossier `src/assets` qui contient les images optimisées ainsi qu'un dossier `__generated__` dans le dossier `src/components` afin de pouvoir utiliser les images des personnages dans le code. Finalement, elle générera aussi un fichier `knownExpression.ts` dans le dossier `src/data/__generated__`. Ce fichier permet de seulement charger les images utilisées en jeu. Il peut être généré individuellement via la commande suivante.

```bash
npm run generate:expressions
```

### Git LFS

Le repertoire utilise l'outil [Git LFS](https://git-lfs.github.com/) pour le stockage des fichiers lourds tels que les documents PDF ou les images. Veuillez utiliser cet outil pour le développement.
