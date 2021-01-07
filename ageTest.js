function ageTest(age) {
    
    if (age === "" || !Number.isInteger(age)) {
        console.log("Votre age n'est valide!, Veuillez entrer un nombre .");
    }
    else if (age < 18){
        console.log("Site interdit aux mineurs.");
    }
    else {
        console.log("Vous pouvez entrer!");
    }
}