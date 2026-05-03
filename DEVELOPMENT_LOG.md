/**
 * @AI_SPACE
 * @purpose : Journal de bord et mémoire vive du développement
 * @logic : Assure la traçabilité des décisions et de l'état du système tout au long du projet.
 * @decisions : Format obligatoire selon les règles globales utilisateur.
 * @references : N/A
 */

- **[SESSION_1] - 2026-04-04 14:04**
- **CHANGEMENTS** : Initialisation du journal de développement. Démarrage de la phase de conception via le workflow de Brainstorming.
- **[SESSION_2] - 2026-04-04 14:24**
- **CHANGEMENTS** : Abandon de la structure V2 "from scratch". Demande utilisateur stricte : "Recopier le thème GitHub bedimcode/portfolio-responsive-complete.git".
- **LOGIQUE TECHNIQUE** : L'approche devient non plus de coder de zéro, mais d'intégrer et adapter un template existant professionnel et complet.
- **ÉTAT DU SYSTÈME** : 
  - À faire : Valider le plan de migration (Nettoyage de l'existant, clonage du repo, injection des données "Data Analyst").

- **[SESSION_3] - 2026-04-04 15:54**
- **CHANGEMENTS** : Ajustement de `index.html` et `styles.css` pour adapter la nouvelle photo de portrait dans le mask SVG (`home__blob`).
- **LOGIQUE TECHNIQUE** : Agrandissement de l'image (`width: 560px;` sur `.home__blob-img` en CSS) et ajustement des coordonnées de la balise `<image>` (`x="-40" y="30"`) pour masquer la coupure inférieure de la photo derrière les bords de la forme blob.
- **SOURCES** : Ajustement manuel des masques SVG.
- **ÉTAT DU SYSTÈME** : La première section est désormais harmonieuse avec la photo correctement intégrée.

- **[SESSION_4] - 2026-04-04 16:13**
- **CHANGEMENTS** : Fusion de la section "About" dans la section "Home" et refonte du layout Hero.
- **LOGIQUE TECHNIQUE** : 
    - **HTML** : Suppression de `<section id="about">`, intégration du texte descriptif dans `.home__data`, et réordonnancement des éléments (`social -> data -> img`) pour un meilleur contrôle du flux.
    - **CSS** : Conversion de la section Home en grille à 3 colonnes sur desktop (`max-content 1fr 1fr`) pour éviter le chevauchement de l'image `home__img` avec le texte. Passage de l'image en `position: relative` sur desktop.
- **ÉTAT DU SYSTÈME** : Landing page consolidée. L'information essentielle est visible dès le premier coup d'œil. Layout responsive et sans overlap validé par tests navigateurs.

- **[SESSION_5] - 2026-04-04 19:00**
- **CHANGEMENTS** : Refonte esthétique "Premium" de la section Accueil (Home).
- **LOGIQUE TECHNIQUE** : 
    - **HTML** : Regroupement du bouton "Contact" et des icônes sociales dans `.home__actions`. Suppression du sous-titre redondant.
    - **CSS** : Passage à une grille 2 colonnes (`1.2fr 1fr`). Alignement horizontal (row) des icônes sociales à côté du bouton. Amélioration de la typographie (titre plus large, description plus aérée et typographiquement hiérarchisée).
- **ÉTAT DU SYSTÈME** : Visuel épuré et moderne validé. Navigation optimale.

- **[SESSION_6] - 2026-04-04 22:25**
- **CHANGEMENTS** : Optimisation finale de la Skill Map (Densité, Orbite et Interaction).
- **LOGIQUE TECHNIQUE** : 
    - **CSS** : Resserrement orbital (`--rel: 0.6`) pour un aspect plus compact. Renforcement du hover (`scale: 1.25` + glow bleu).
    - **ANIMATIONS** : Orbite fluide avec contre-rotation synchronisée des contenus (`node-content`) pour maintenir les icônes et tooltips toujours verticaux. Pause automatique au survol.
    - **FIX** : Propagation de l'attribut `data-name` sur les sous-conteneurs pour assurer l'affichage des tooltips.
- **ÉTAT DU SYSTÈME** : Skill Map "State of the Art" terminée (compacte, animée, interactive). Prêt pour le déploiement.

- **[SESSION_7] - 2026-04-12 13:23**
- **CHANGEMENTS** : Intégration des 13 cartes réelles de travaux au portfolio dans la section "Work".
- **LOGIQUE TECHNIQUE** : Modification de `index.html`. Remplacement des anciens mockups ou placeholders de la zone `#work-grid` par les 13 cas pratiques et SAE fournis. Association d'attributs `data-category` et `data-tags` spécifiques pour rendre le filtrage fonctionnel sur la grille. Noms des images standardisés suivant le titre des projets.
- **ÉTAT DU SYSTÈME** : Les données du profil, la landing hero, le profil de compétences et le portfolio sont à présent structurés. Il reste à s'assurer de l'existence des images des projets dans le dossier `assets/img/`.
- **CORRECTIF** : À la suite de l'intégration, rétablissement strict de l'ensemble des chemins natifs d'images (`src="assets/img/..."`) et des liens de téléchargement (`data-download`) existants préalablement afin qu'ils ne soient pas altérés. La carte n°13 utilise temporairement une image mock (`work1.jpg`) en attendant le visuel final.

- **[SESSION_8] - 2026-04-12 13:40**
- **CHANGEMENTS** : Ajout de la section "Me connaître" (`#about`) entre la landing Home et la section Compétences.
- **LOGIQUE TECHNIQUE** :
    - **HTML** : Nouveau `<section class="about section" id="about">` avec un bloc `.about__intro` (avatar circulaire + biographie) et une grille `.about__cards` de 3 cartes thématiques (Données & IA, Ouverture internationale, Expérience terrain).
    - **CSS** : Nouveau système de styles complets pour la section about : flexbox pour l'intro, CSS Grid 3 colonnes pour les cartes, animation `::before` glissante en hover (barre dégradée), hover lift sur les cartes, drapeaux emoji interactifs, badges de compétences. Suppression du doublon de l'ancienne règle `.about__container` vide.
    - **NAV** : Ajout du lien "Me connaître" dans la barre de navigation.
- **SOURCES** : Variables CSS existantes (`--first-color`, `--second-color`, `--first-color-light`) réutilisées sans modification.
- **ÉTAT DU SYSTÈME** : Portfolio structuré avec 5 sections fonctionnelles (Home, Me connaître, Compétences, Expérience, Work, Contact). Section about responsive (1 colonne mobile, 3 colonnes desktop).

- **[SESSION_9] - 2026-04-12 13:48**
- **CHANGEMENTS** : Refonte complète de la section Contact.
- **LOGIQUE TECHNIQUE** :
    - **HTML** : Layout 2 colonnes (infos + formulaire). Colonne gauche avec 3 cartes cliquables (email `mailto:`, téléphone `tel:`, localisation statique) et 2 liens sociaux (LinkedIn, GitHub). Colonne droite avec formulaire structuré (labels + groupes `contact__form-group`) composé de 4 champs : nom, email, sujet, message.
    - **CSS** : `contact__container` en CSS Grid 2 colonnes (`1fr 1.4fr`). Cartes info avec hover `translateX(4px)` + barre bleue gauche. Inputs avec focus ring bleu semi-transparent. Bouton `inline-flex` avec icône. Feedback status coloré (vert = succès, rouge = erreur). Suppression des doublons de l'ancien CSS contact.
    - **JS** : Gestion asynchrone du formulaire via `fetch()` vers Formspree. Spinner pendant l'envoi, reset du formulaire en cas de succès, message d'erreur contextualisé en cas d'échec.
    - **FORMSPREE** : Le formulaire utilise `action="https://formspree.io/f/YOUR_FORM_ID"`. L'utilisateur doit créer un compte Formspree gratuit et remplacer `YOUR_FORM_ID` par son identifiant de formulaire.
- **SOURCES** : https://formspree.io/
- **ÉTAT DU SYSTÈME** : Toutes les sections du portfolio sont fonctionnelles. À faire : (1) activer Formspree avec le vrai ID, (2) ajouter les images manquantes dans `assets/img/`.


- **[SESSION_10] - 2026-05-02 17:15**
- **CHANGEMENTS** :
  - Ajout du bouton filtre `BUT2` dans la barre de filtres de la section Work.
  - Création de 3 nouvelles cartes de projets de **2ème année** (Cards 13, 14, 15) :
    - **Card 13** : Dashboard Pauvreté en France (R Shiny, Plotly, Leaflet) — déployé sur ShinyApps.io.
    - **Card 14** : Base de données avancée (SQL, MCD, MLD, triggers) — BUT2.
    - **Card 15** : SAE Développement Web (FastAPI + HTML/CSS/JS) — BUT2.
  - Génération de 3 images de preview avec l'outil IA et copie dans `assets/img/`.
  - Ajout d'un badge doré "2ème année" (`.work-card__badge`) positionné en absolu sur chaque carte BUT2.
  - Ajout d'une bordure supérieure ambre (`.work-card--but2`) pour distinguer visuellement les projets de 2ème année.
- **LOGIQUE TECHNIQUE** :
  - Classe CSS `.work-card--but2` + `.work-card__badge` ajoutées à la fin de `styles.css`.
  - Attribut `data-category="BUT2 ..."` pour compatibilité avec le système de filtrage existant (JS).
  - Les images générées sont nommées avec accents et espaces, cohérents avec la convention existante.
- **SOURCES** : Assets projet fournis par l'utilisateur dans `assets/project/`.
- **ÉTAT DU SYSTÈME** :
  - ✅ 15 cartes de projets au total (12 BUT1 + 3 BUT2).
  - ✅ Filtres : Tous | BUT1 | BUT2 | Data | Web | ML/IA | Visualisation.
  - ⚠️  À faire : Remplacer `YOUR_FORM_ID` dans le formulaire Formspree par le vrai identifiant.
  - ⚠️  Les images générées pour BUT2 sont des mockups IA — les remplacer par de vraies captures si disponibles.

- **[SESSION_11] - 2026-05-02 17:22**
- **CHANGEMENTS** :
  - Ajout de la **Card 16** manquante : projet CEA – Analyse territoriale (Vendée).
  - Génération d'une image de preview (mockup IA) et copie dans `assets/img/CEA Territoire Vendée.png`.
  - Fichier source : `assets/project/project_a_rendre.docx`.
- **LOGIQUE TECHNIQUE** : Carte BUT2 avec `data-category="BUT2 data viz"` et tags QGIS/Territoire/CEA.
- **ÉTAT DU SYSTÈME** :
  - ✅ 16 cartes de projets au total (12 BUT1 + 4 BUT2).
  - ✅ BUT2 : Dashboard Shiny | Base de données | SAE Dev | CEA Vendée.

- **[SESSION_12] - 2026-05-03 15:00**
- **CHANGEMENTS** : Conteneurisation du projet PortfolioV2 avec Docker.
- **LOGIQUE TECHNIQUE** : 
  - Création d'un `Dockerfile` (nginx:alpine) pour la diffusion statique.
  - Création de `docker-compose.yml` (port 8080) pour l'orchestration locale.
  - Création de `.dockerignore` pour filtrer les fichiers de développement.
- **SOURCES** : Documentation officielle Docker / Nginx
- **ÉTAT DU SYSTÈME** :
  - ✅ Projet prêt à être exécuté dans un conteneur via `docker-compose up -d`.

- **[SESSION_13] - 2026-05-03 15:05**
- **CHANGEMENTS** : Création d'un workflow GitHub Actions (`docker-publish.yml`) pour la publication automatique.
- **LOGIQUE TECHNIQUE** : 
  - Se déclenche automatiquement lors d'un `git push` sur la branche `main`.
  - Compile l'image Docker à partir du `Dockerfile`.
  - Pousse l'image vers le GitHub Container Registry (`ghcr.io`).
  - Utilise le `GITHUB_TOKEN` natif (si le dépôt est en privé, le package docker sera privé).
- **SOURCES** : Documentation Github Actions & Docker
- **ÉTAT DU SYSTÈME** :
  - ✅ CI/CD en place. L'image sera construite et publiée au prochain push.
