console.log("Je suis la console !");
function bienvenu(){
    alert("😎 Je suis un message dans une fenêtre pop-up 🐱‍🏍");
}

//création d'un tableau vide 
// var mesPWDs = [];

// function pushPwd(pwd){
//     mesPWDs.push(pwd);
//     //La taille du tableau est modifiée dynamiquement avec chaque ajout d'élément.
// }

// function incrementerDuree() 
// {
// let durees=document.getElementsByClassName("duree")
// if(durees.length!=0) 
//     {Array.prototype.forEach.call(durees, function(dureeElement) 
//         {
//             //si le mot de passe n'est pas expiré(60 seconds)
//             if(parseInt(dureeElement.textContent)<60){
//                 let valeur=parseInt(dureeElement.textContent);dureeElement.textContent=valeur+1;
//             }
//             //sinon si égal à 60, grise la police
//             else if(parseInt(dureeElement.textContent)==60){
//                 dureeElement.style.color="grey";
//                 // remplace les éléments de la colonne mot de passe généré parle mot "expiré"
//                 dureeElement.parentNode.childNodes[4].textContent="Expiré";
                
//             }
//         });
//     }
// }

//fonction qui écrit dans la console le format de la date de naissance
function clearProfiles(){
    var test = document.getElementById("date1").value;
    console.log("La date de naissanceest "+test);
    document.loveTester.reset();
}

function calculerCompatibiliteDates(dateNaissance1, dateNaissance2) {
    if (!dateNaissance1 || !dateNaissance2) {
      return "-";
    }
  
    const signesAstrologiques = [
      "Bélier", "Taureau", "Gémeaux", "Cancer", "Lion", "Vierge",
      "Balance", "Scorpion", "Sagittaire", "Capricorne", "Verseau", "Poissons"
    ];
  
    const [jour1, mois1, annee1] = dateNaissance1.split("-");
    const [jour2, mois2, annee2] = dateNaissance2.split("-");
  
    const age1 = new Date().getFullYear() - parseInt(annee1);
    const age2 = new Date().getFullYear() - parseInt(annee2);
  
    const mois1Index = parseInt(mois1) - 1;
    const mois2Index = parseInt(mois2) - 1;
  
    const signeAstrologique1 = signesAstrologiques[mois1Index];
    const signeAstrologique2 = signesAstrologiques[mois2Index];
  
    const pourcentage = Math.abs(age1 - age2) + Math.abs(mois1Index - mois2Index) + (signeAstrologique1 === signeAstrologique2 ? 10 : 0);
    return (str(pourcentage)+" / 100");
  }

function calculerPourcentageCompatibilite(nom1, prenom1, nom2, prenom2) {
    // Convertir les noms et prénoms en lettres majuscules
    nom1 = nom1.toUpperCase();
    prenom1 = prenom1.toUpperCase();
    nom2 = nom2.toUpperCase();
    prenom2 = prenom2.toUpperCase();
  
    // Calculer la somme des valeurs ASCII des caractères des noms et prénoms
    let somme1 = calculerSommeCaracteres(nom1) + calculerSommeCaracteres(prenom1);
    let somme2 = calculerSommeCaracteres(nom2) + calculerSommeCaracteres(prenom2);
  
    // Calculer le pourcentage de compatibilité
    let pourcentage = (Math.min(somme1, somme2) / Math.max(somme1, somme2)) * 100;
  
    // Arrondir le pourcentage à deux décimales
    pourcentage = Math.round(pourcentage * 100) / 100;
  
    return pourcentage;
  }
  
  function calculerSommeCaracteres(chaine) {
    let somme = 0;
    for (let i = 0; i < chaine.length; i++) {
      somme += chaine.charCodeAt(i);
    }
    return somme;
  }

function generer(){
    console.log("Je suis dans la fonction generer");
    // a. Créez la variable duree dans laquelle sera stocké un nouvel élément td.
    var duree = document.createElement('td');
    
    // b. Utilisez la méthode « classList » afin d’ajouter un attribut « class » à l’élément créé.
    duree.classList.add('duree');
    
    // c. Initialisez la valeur du champ duree à 0.
    duree.textContent = "0";
    
    var monformulaire = document.forms.loveTester;
    console.log("Voici le formulaire"+monformulaire);
    console.log("Voici le nom1"+monformulaire.elements["nom1"].value);
    //vérifie les noms et prénoms du formulaire sont saisis
    if ((monformulaire.elements["nom1"].value == "") || (monformulaire.elements["prenom1"].value == "") || (monformulaire.elements["nom2"].value == "") || (monformulaire.elements["prenom2"].value == "")) {
        alert("Veuillez saisir les noms et prénoms des deux personnes à tester");
        return false;
    }
    else { 
        //récupère les noms et prénoms du formulaire
        let prenom1=monformulaire.elements["prenom1"].value;
        let nom1=monformulaire.elements["nom1"].value;
        let prenom2=monformulaire.elements["prenom2"].value;
        let nom2=monformulaire.elements["nom2"].value;
        let pourcentageNoms=calculerPourcentageCompatibilite(nom1, prenom1, nom2, prenom2);
        //si un champ contient des caractère spéciaux, affiche un message d'erreur
        if((contient_carspecial(prenom1))||(contient_carspecial(nom1))||(contient_carspecial(prenom2))||(contient_carspecial(nom2))){
            alert("Veuillez saisir uniquement des lettres");
            return false;
        }
    }
    console.log("Voici le pourcentage"+pourcentage);
    //vérifie si d'autres champs sont remplis
    c2 = calculerCompatibiliteDates(document.getElementById("date1").value, document.getElementById("date2").value);
    
    var data_list=[pourcentageNoms,c2,"-","-","-","-"];
    // ajout des éléments au tableau
    var newLine = document.createElement("tr");
    var pourcentNom = document.createElement("td");
    var pourcentDate = document.createElement("td");
    var pourcentCat = document.createElement("td");
    var pourcenCulture = document.createElement("td");
    var total = document.createElement("td");
    pourcentNom.textContent = data_list[0];
    pourcentDate.textContent = data_list[1];
    pourcentCat.textContent = data_list[2];
    pourcenCulture.textContent = data_list[3];
    total.textContent = sum(data_list);
    
    newLine.append(pourcentNom, pourcentDate, pourcentCat, pourcenCulture, total);

    var monTableau = document.getElementById("montab");
    monTableau.appendChild(newLine);
  
}

function contient_carspecial(str) {
    const specialChars = /[%!&*^()#$:0123456789]/;
    return specialChars.test(str);
}

document.addEventListener("DOMContentLoaded", function() 
{
    document.querySelector('#addtest').addEventListener('submit',function(e){
        //vérifie si au moins le nom et le prénom du formulaire est cochée
        if((document.getElementById("prenom2"))){
        alert("Veuillez entrer un prenom");
            e.preventDefault();
        }
        else{
            generer();
        }
    });
});

function supprimer() {
    if (confirm("Confirmez-vous la suppression de tous les mots de passe générés ?"))
    {
        document.loveTester.submit();
        //supprime toutes les lignes du tableau, sauf la première
        var table = document.getElementById("montab");
        var rowCount = table.rows.length;
        table.shift();
}
}

function chiffres_casinos(){
    // à implémenter, un délai avant de voir les chiffres s'afficher, et un effet de défilement des chiffres pendant quelques secondes
    //surement un eventlistener sur le bouton
    return false;   
}

// setInterval(console.log("La value est : "+(document.forms["loveTester"].elements["nom1"])), 1000);