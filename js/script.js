// bienvenue fonction
function bienvenue() {
    alert("Bienvenue sur mon site");
    setTimeout(alert("Bienvenue sur mon site"), 100);
    setInterval(bienvenue(), 5000);
}
console.log("Je suis la Console")

// Définition de la fonction generer()
function generer() {
    // Récupération de l'élément formulaire du DOM
    var monformulaire = document.forms.ajoutPWD;
    if (monformulaire.longueur.value == "") {
        alert("Veuillez saisir une longueur");
        return false;
    }
    if (monformulaire.date.value == "") {
        alert("Veuillez saisir une date");
        return false;
    }
    if (monformulaire.connexion.value == "") {
        alert("Veuillez saisir une date de connexion");
        return false;   
    }
    if (monformulaire.site.value == "") {
        alert("Veuillez saisir un site");
        return false;
    }
    if (monformulaire.elements["minuscule"].checked == false && monformulaire.elements["majuscule"].checked == false && monformulaire.elements["chiffre"].checked == false && monformulaire.elements["symbole"].checked == false) {
        alert("Veuillez sélectionner au moins un type de caractères");
        return false;
    }
        
    // Affichage de l'élément formulaire dans la console

    var l_minuscule = "abcdefghijklmnopqrstuvwxyz";
    var l_majuscule = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var l_chiffre = "0123456789";
    var l_carspecial = "%!&*^()#$:";
    var password = "";
    var listecar = "";

    // Vérification des champs sélectionnés
    if (monformulaire.elements["minuscule"].checked) {
        listecar += l_minuscule;
    }
    if (monformulaire.elements["majuscule"].checked) {
        listecar += l_majuscule;
    }
    if (monformulaire.elements["chiffre"].checked) {
        listecar += l_chiffre;
    }
    if (monformulaire.elements["symbole"].checked) {
        listecar += l_carspecial;
    }

    // Affichage de la nouvelle chaîne de caractères
    console.log("listecar =", listecar);
    for (var i = 0; i < monformulaire.longueur.value; i++) {
        var aleatoire = Math.floor(Math.random() * listecar.length);
        password+=listecar.substring(aleatoire, aleatoire+1);
    }
    console.log("mdp =", password);
    //ajout de ligne
    var newLine = document.createElement("tr");
    // Création des 5 éléments "td"
    var col1 = document.createElement("td");
    var col2 = document.createElement("td");
    var col3 = document.createElement("td");
    var col4 = document.createElement("td");
    var col5 = document.createElement("td");

    // Attribution de valeurs aux "td" créés
    col1.textContent = monformulaire.longueur.value;
    col2.textContent = monformulaire.date.value;
    col3.textContent = monformulaire.connexion.value;
    col4.textContent = monformulaire.site.value;
    col5.textContent = password;

    // Ajout des éléments "td" à l'élément "newLine"
    newLine.appendChild(col1);
    newLine.appendChild(col2);
    newLine.appendChild(col3);
    newLine.appendChild(col4);
    newLine.appendChild(col5);
    // Récupération du tableau existant dans password.html en utilisant son id
    var tableau = document.getElementById("tableau");

    // Ajout de la nouvelle ligne "newLine" au tableau existant
    tableau.appendChild(newLine);
  }
  