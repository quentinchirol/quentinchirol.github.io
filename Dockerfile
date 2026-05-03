# /**
#  * @AI_SPACE
#  * @purpose : Conteneurisation du portfolio statique
#  * @logic : Utilisation de l'image Nginx minimaliste (alpine) pour servir les fichiers statiques (HTML/CSS/JS).
#  * @decisions : Alpine pour réduire la taille de l'image. Copie de tout le dossier courant vers /usr/share/nginx/html.
#  * @references : https://hub.docker.com/_/nginx
#  */

FROM nginx:alpine

# Copie des fichiers du portfolio dans le répertoire par défaut de Nginx
COPY . /usr/share/nginx/html/

# Exposition du port 80
EXPOSE 80
