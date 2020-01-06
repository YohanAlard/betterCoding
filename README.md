# Le choix des technologies 
Ma plateforme doit tourner sur un serveur très light 2 cpus, 2 GB de mémoire avec une bande passante 200Mbit/s à 3$ mensuel chez Scaleway.
L'application tournera dans des containeurs applicatifs Docker, un pour le front et un autre pour le backend. Le but étant de rien installer sur l'OS hormis Docker et pouvoir changer d'hébergeur trés rapidement. 

Le frontend est écrit en react avec , plus adapté pour le net (plus light pour ma bande passante), VueJs était une autre bonne alternative. 

Le backend est écrit en python sur du django, cet outil est particuliérement adopté pour mon besoin. Light, Hotreload, ORM, fast dev, Sqlite,  interface back end autogénéré.  
J'ai choisi d'avoir un modèle relationnel plutot que du Nosql, les deux choix sont bons à mon sens, chacun présente ses avantages et inconvénients. 

NodeJs/Redis était une alternative mais je trouve le temps de développement plus long. J'expérimenterais cete solution dans une V2 probablement. -> MongoDb est exclue pour son allocation en resource. 

J'ai exclu toutes les applications JEE parce qu'une JVM est trop gourmande en ressource, chargé spring ou quarkus me prendrait la moitié de mes ressources disponbiles. JEE reste mon terrain de jeu préféré mais il n'est pas adapté à mes contraintes. 

Le gestionnaire de source est bien évidemment GIT, une branche = une feature = un commit = 1 feature. aucun merge commit hosté sur Github. 

La pic utilise les actions Github pour dérouler les tests et déployer les images docker sur Dockerhub.

La documentation est basée sur du markdown, doc as Code est un de mes principes préférés. 

l'IDE sera visal studio code. 

# UI / UX 
## Better Coding : le nom 
La premiére étape a été de choisir un nom pour le projet. 
J'aurais bien choisi Happycoding mais c'est déjà pris 

BetterCoding représente deux notions importantes à mes yeux
- coding : mon métier 
- better:  faire mieux, progresser, mon leitmotiv. 

## Color Scheme : 
Ensuite, j'ai voulu choisir une palette de couleur, l'application sera sur un fond dark (tendance 2020)
J'utilise souvent la roue chromatique d'adobe (https://color.adobe.com/fr/create), en triade ou complémentaire, 2 couleurs avec des dérivés sont bien suffisantes. 

commencons par ca :
#A2B33B- secondary dark
#EEFF87- secondary light
#7C29B3 - primary dark
#D594FF - primary light

## le contenu 
l'objectif est de me présenter et de montrer mes réalisations. 
Un format vidéo, un cv, quelques références. 

Toute le code est également disponible sous github, le processus de création et les choix y sont décrits.

Une vision à plus long terme s'impose : 
 - exposer des prototypes 
 - écrire quelques articles 
  

## la phase de gribboullage 
Une vague idée du look & feel avec un atelier papier.  
L'objectif est d'écrire une V1 rapidement, agilité first mais le prototypage papier du prototype m'a toujours fait gagné du temps. 

il en ressort une navigation classique: 
 - un header de site statique incorporant un menu.  
 - une phase de contenu 
 - un footer en V2 avec l'internationalisaiton 

Quelques catégories pour mon MVP (minimal valuable product) : 
 - un CV en mode scrolldown avec chargement asynchrone et quelques animations en Svg 
 - une zone de contact 
 - mes inspirations et citations préférés. 

Plus tard : 
 - quelques références de personne qui ont bossé avec moi. (prévoir de développer une interface de saisie)
 - une vidéo d'introduction, pas fan de mettre ma tronche sur youtube. 


# Coding phase 
Je n'ai pas encore écrit la moindre ligne de code, je vais débuter par le front avec des données bouchonnées. 
L'organisation par composant vient assez facilement : 

- header 
    - menu
- content 
    - Cv component
      - Info 
      - titre
      - objectif
      - category component (Expérience pro, formation, divers)
      - skills 
    - contacts component
      - contact component (Whatsapp, skype, linkedin, un formulaire mail)
    - mes inspirateurs
      - inspiring guy component
      - citation component


L'approche sera donc descendante (header , content ) vers les composants de plus bas niveau. 


