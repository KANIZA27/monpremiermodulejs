 function getHeure(){
    const  date = new Date();
// je récupére l'heure et la stocke dans la variable "heure"
    const  heures = date.getHours();
// je récupére les minutes et les stocke dans la variable "minutes"
    const  minutes = date.getMinutes();
// je récupére les secondes et les stocke dans la variable "seconde"
    const  seconde = date.getSeconds();
    console.log(heures+":",+minutes+":",seconde); 
  
    
};

// Je vais exporter la fonction getHeur() pour la rendre accessible depui le "main.js".
export default{
    getHeure
} ;