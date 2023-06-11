//fonction qui écrit dans la console le format de la date de naissance
function clearProfiles(){
  console.log("clearProfiles");
  //clear tous les champs du formulaire
  if (document.loveTester){
    console.log("clearProfiles: document.loveTester");
    document.loveTester.reset();
  }  
  else{
    console.log("clearProfiles: document.loveTester n'existe pas");
  }
  document.loveTester.reset();
}

function calculerCompatibiliteNoms(nom1, prenom1, nom2, prenom2) {
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

  const differenceAge = Math.abs(age1 - age2);
  const differenceMois = Math.abs(mois1Index - mois2Index);
  const differenceJour = Math.abs(jour1 - jour2);

  // Calcul des scores individuels
  const scoreAge = 10 - differenceAge;
  const scoreAstrologique = (signeAstrologique1 === signeAstrologique2) ? 5 : 0;
  const scoreJour = (differenceJour <= 5) ? (5 - differenceJour) : 0;
  const scoreMois = (mois1Index === mois2Index) ? 5 : 0;

  // Calcul du pourcentage de compatibilité total
  let pourcentage = (scoreAge + scoreAstrologique + scoreJour + scoreMois) / 25 * 100;

  // Arrondir le pourcentage à deux chiffres après la virgule
  pourcentage = Math.max(0, parseFloat(pourcentage.toFixed(2)));

  return pourcentage;
}


function calculerCompatibiliteFilms() {
  // si aucune case n'est cochée on retourne "-"

  const casesForm1 = ['1', '2', '3', '4', '5']; // Identifiants des cases du premier formulaire
  const casesForm2 = ['11', '22', '33', '44', '55']; // Identifiants des cases du deuxième formulaire

  //crée la liste des cases cochées du premier formulaire
  const liste1 = casesForm1.filter(id => document.getElementById(id).checked).map(id => parseInt(id));
  //crée la liste des indexs des cases cochées du deuxième formulaire
  const liste2 = casesForm2.filter(id => document.getElementById(id).checked).map(id => parseInt(id));
  
  // si aucune case n'est cochée on retourne "-"
  if (liste1.length === 0 || liste2.length === 0) {
    return "-";
  }

  //formate la liste 2 pour ressemblerà la 1
  for (let i = 0; i < liste2.length; i++) {
    liste2[i] = liste2[i] % 10;
  }

  //compare chaque element de la liste1 avec chaque element de la liste2, augmente le compteur si les valeurs sont égales
  let compteur = 0;
  for (let i = 0; i < liste1.length; i++) {
    for (let j = 0; j < liste2.length; j++) {
      if (liste1[i] === liste2[j]) {
        compteur++;
      }
    }   
  } 
  // calcule le pourcentage, basé sur le nombre de choix communs
  let pourcentage = (compteur / Math.max(liste1.length,liste2.length))*100;
  //retourne le pourcentage arrondi à 2 chiffres après la virgule
  return Math.round(pourcentage * 100) / 100;
}

function calculerCompatibiliteCouleur(couleurUtilisateur1, temperamentUtilisateur1, couleurUtilisateur2, temperamentUtilisateur2) {
  // Calculer la différence de couleur (la distance euclidienne entre les valeurs RGB)
  console.log("tempérament:"+temperamentUtilisateur1  + "/" + temperamentUtilisateur2);
  console.log(" Tets couleurs ; couleur1:"+couleurUtilisateur1  + "/" + couleurUtilisateur2);
  if (!couleurUtilisateur1 || !temperamentUtilisateur1 || !couleurUtilisateur2 || !temperamentUtilisateur2){ 
  return "-";
  }
  function convertirHexVersRVB(couleurHex) {
    var r = parseInt(couleurHex.substring(1, 3), 16);
    var g = parseInt(couleurHex.substring(3, 5), 16);
    var b = parseInt(couleurHex.substring(5, 7), 16);
    return { r, g, b };
  }
  c1=convertirHexVersRVB(couleurUtilisateur1);
  c2=convertirHexVersRVB(couleurUtilisateur2);
  var differenceCouleur = Math.sqrt(
    Math.pow(c1.r - c2.r, 2) +
    Math.pow(c1.g - c2.g, 2) +
    Math.pow(c1.b - c2.b, 2)
  );
  // Calculer la différence de tempérament
  var differenceTemperament = Math.abs(temperamentUtilisateur1 - temperamentUtilisateur2);
  // Calculer le pourcentage de compatibilité
  var pourcentageCompatibilite = 100 - (differenceCouleur + differenceTemperament) / 2;
  //retourne le pourcentage de compatibilité arrondi à 2 chiffres après la virgule
  return Math.abs(Math.round(pourcentageCompatibilite * 100)) / 100;

}
  
function calculerCompatibiliteStr(chaine1, chaine2) {
  if (!chaine1 || !chaine2){
    return "-";
  }
  // Convertir les chaînes de caractères en ensembles de caractères uniques
  var ensemble1 = new Set(chaine1);
  var ensemble2 = new Set(chaine2);

  // Calculer l'intersection entre les ensembles
  var intersection = new Set([...ensemble1].filter(caractere => ensemble2.has(caractere)));

  // Calculer l'union des ensembles
  var union = new Set([...ensemble1, ...ensemble2]);

  // Calculer le coefficient de similarité de Jaccard
  var coefficientSimilarite = intersection.size / union.size;

  // Convertir le coefficient en pourcentage et arrondit à deux chiffres après la virgule
  var pourcentageCompatibilite = Math.round(coefficientSimilarite * 10000) / 100;
  return pourcentageCompatibilite;
}


function calculerMoyennePourcentage(data_list) {
  var sum = 0;
  var count = 0;

  for (var i = 0; i < data_list.length; i++) {
    // Vérifier si l'élément est un pourcentage valide
    if (data_list[i] != "-" && typeof data_list[i] === "number" && !isNaN(data_list[i])) {
      console.log("ajout de "+data_list[i]);
      sum += data_list[i];
    }
    else {
      count++;
    }
  }
  if (count == data_list.length){
    return "-";
  }
  // Calculer la moyenne
  var moyenne = sum / (data_list.length - count);
  //moyenne arrondie à deux chiffres après la virgule
  return Math.round(moyenne * 100) / 100;
}

function calculerSommeCaracteres(chaine) {
  let somme = 0;
  for (let i = 0; i < chaine.length; i++) {
    somme += chaine.charCodeAt(i);
  }
  return somme;
}

function generer(){
  // console.log("Je suis dans la fonction generer");
  // a. Créez la variable duree dans laquelle sera stocké un nouvel élément td.
  var duree = document.createElement('td');
  
  // b. Utilisez la méthode « classList » afin d’ajouter un attribut « class » à l’élément créé.
  duree.classList.add('duree');
  
  // c. Initialisez la valeur du champ duree à 0.
  duree.textContent = "0";
  
  var monformulaire = document.forms.loveTester;
  //vérifie les noms et prénoms du formulaire sont saisis
  if(document.getElementById("prenom1").value==""||document.getElementById("nom1").value==""||document.getElementById("prenom2").value==""||document.getElementById("nom2").value==""){
      alert("Veuillez saisir les noms et prénoms des deux personnes à tester");
      return false;
  }
  else { 
      
      //récupère les noms et prénoms du formulaire
      let prenom1=document.getElementById("prenom1").value;
      let nom1=document.getElementById("nom1").value;
      let prenom2=document.getElementById("prenom2").value;
      let nom2=document.getElementById("nom2").value;
      //si un champ contient des caractère spéciaux, affiche un message d'erreur   
      if((contient_carspecial(prenom1))||(contient_carspecial(nom1))||(contient_carspecial(prenom2))||(contient_carspecial(nom2))){
          alert("Veuillez saisir uniquement des lettres");
          return false;
      }
      var pourcentNom=calculerCompatibiliteNoms(nom1, prenom1, nom2, prenom2);
  }
  var sport1 = document.getElementById("sport1").value;
  var sport2 = document.getElementById("sport2").value;
  var musique1 = document.getElementById("musique1").value;
  var musique2 = document.getElementById("musique2").value; 
  var plat1 = document.getElementById("plat1").value;
  var plat2 = document.getElementById("plat2").value;
  var couleur1 = document.getElementById("couleur1").value;
  var couleur2 = document.getElementById("couleur2").value;
  //hoobies et culture
  var temp1 = calculerCompatibiliteStr(sport1, sport2);
  var temp2 = calculerCompatibiliteStr(musique1, musique2);
  var temp3 = calculerCompatibiliteStr(plat1, plat2);
  var temp4 = calculerCompatibiliteFilms();
  var c2 = calculerCompatibiliteDates(document.getElementById("date1").value, document.getElementById("date2").value);
  // var c3 = calculerCompatibiliteTemperament(document.getElementById("couleur1").value, document.getElementById("temperament1").value, document.getElementById("couleur2").value, document.getElementById("temperament2").value);
  var c3 = calculerCompatibiliteCouleur(couleur1, document.getElementById("temperament1").value, couleur2, document.getElementById("temperament2").value);
  var moyenneStr = calculerMoyennePourcentage([temp1, temp2, temp3, temp4]);
  
  var data_list=[pourcentNom,c2,c3,moyenneStr];
  
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

  total.textContent = calculerMoyennePourcentage(data_list);
  newLine.append(pourcentNom, pourcentDate, pourcentCat, pourcenCulture, total);
  var monTableau = document.getElementById("montab");
  monTableau.appendChild(newLine);
  document.loveTester.reset();
}

function contient_carspecial(str) {
  const specialChars = /[%!&*^()#$:0123456789]/;
  return specialChars.test(str);
}

// document.addEventListener("DOMContentLoaded", function() 
// {
//     document.querySelector('#addtest').addEventListener('submit',function(e){
//         //vérifie si au moins le nom et le prénom du formulaire est cochée
//         if((document.getElementById("prenom2"))){
//         alert("Veuillez entrer un prenom");
//             e.preventDefault();
//         }
//         else{
//             generer();
//         }
//     });
// });

function supprimer() {
  if (confirm("Supprimer les profils?"))
  {
      var table = document.getElementById("montab");
      if (table.rows.length > 1) {
        for (var i = table.rows.length - 1; i > 0; i--) {
          table.deleteRow(i);
        }
      }
  }
}

function chiffres_casinos(){
    // à implémenter, un délai avant de voir les chiffres s'afficher, et un effet de défilement des chiffres pendant quelques secondes
    //surement un eventlistener sur le bouton
    return false;   
}

