// Je vais importre la fonction getHeur() qui se trouve dans le fichier le "generate.js".
import getHeure from "./generate.js"; 

// Ici, je importe la variable nom qui est déclarée dans le module "user.js"
import {nom} from "./user.js";


// je importer l'objet utilisateur
import {Utilisateur} from "./user.js";

let nomUtilisateur = document.querySelector("#nom")
nomUtilisateur.textContent = nom;

// Ici; je vais affichier mon span qui est "nomutilisateur".
let elementSpanNom = document.querySelector("#nomutilisateur");
elementSpanNom.textContent = Utilisateur.nom;

// Ici, je vais affichier mon span qui est "prénomutilisateur".
let elementSpanPrenom = document.querySelector("#prenomutilisateur");
elementSpanPrenom.textContent = Utilisateur.prenom;

//Ici, je vais affichier mon span qui est "villageutilisateur".
let elementSpanVillage = document.querySelector("#villageutilisateur");
elementSpanVillage.textContent = Utilisateur.village;

/* ===== EXERCICE ====
-- dans main.js --
    2. je vais importer l'objet utilisateur
    
    -- dans index.html
    3. je vais afficher dans index.html : Nom, Prénom, village.
*/
//const heureCourant = getHeure;
//console.log(heureCourant);