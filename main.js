// Je vais importre la fonction getHeur() qui se trouve dans le fichier le "generate.js".
import getHeure from "./generate.js"; 

// Ici, je importe la variable nom qui est déclarée dans le module "user.js"
import {nom} from "./user.js";

import{nomUtilisateur} from "./user.js";

//let nomUtilisateur = document.querySelector("#nom")
//nomUtilisateur.textContent = nom;

let nomUtilisateur1 = document.querySelector("#nom");
nomUtilisateur.textContent = nomUtilisateur;
let nomUtilisateur = document.querySelector("#prenom");
nomUtilisateur.textContent = nomUtilisateur;

/* ===== EXERCICE ====
-- dans main.js --
    2. je vais importer l'objet utilisateur
    
    -- dans index.html
    3. je vais afficher dans index.html : Nom, Prénom, village.
*/
//const heureCourant = getHeure;
//console.log(heureCourant);