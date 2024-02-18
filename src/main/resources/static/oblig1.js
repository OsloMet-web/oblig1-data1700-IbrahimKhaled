let kundene = [];
function kjop() {

    const kunde = {
        film: document.getElementById("velg").value,
        antall: document.getElementById("antall").value,
        fornavn: document.getElementById("fornavn").value,
        etternavn: document.getElementById("etternavn").value,
        telefonnr: document.getElementById("telefon").value,
        epost: document.getElementById("email").value
    };


    if (kunde.antall == ""){
        document.getElementById("antall1").innerHTML = "Må skrive noe inn i antall";
        return;
    }
    if (kunde.fornavn == ""){
        document.getElementById("fornavn1").innerHTML ="Må skrive noe inn i fornavn";
        return;
    }
    if (kunde.etternavn == ""){
        document.getElementById("etternavn1").innerHTML = "Må skrive noe inn i etternavn";
        return;}
    if (kunde.telefonnr == ""){
        document.getElementById("telefon1").innerHTML = "Må skrive noe inn i telefonnr";
        return;}
    if (kunde.epost == ""){
        document.getElementById("email1").innerHTML = "Må skrive noe inn i epost";
        return;}
    else{
        kundene.push(kunde);
        let ut = "<table><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr>";
        for (let p of kundene) {

            ut +="<tr><td> "+ p.film + "</td><td> " + p.antall + "</td><td> " + p.fornavn + "</td><td> " + p.etternavn + "</td><td> " + p.telefonnr + "</td><td> " + p.epost+"</td></tr> ";
        }
        +"</table>"

        document.getElementById("resultat").innerHTML = ut;

        document.getElementById("velg").value = "";
        document.getElementById("antall").value = "";
        document.getElementById("fornavn").value = "";
        document.getElementById("etternavn").value  = "";
        document.getElementById("telefon").value = "";
        document.getElementById("email").value = "";

        document.getElementById("antall1").innerHTML ="";
        document.getElementById("fornavn1").innerHTML ="";
        document.getElementById("etternavn1").innerHTML ="";
        document.getElementById("telefon1").innerHTML ="";
        document.getElementById("email1").innerHTML ="";

    }



};
function slett() {
    kundene = [];
    document.getElementById("resultat").innerHTML = "";

    document.getElementById("antall1").innerHTML ="";
    document.getElementById("fornavn1").innerHTML ="";
    document.getElementById("etternavn1").innerHTML ="";
    document.getElementById("telefon1").innerHTML ="";
    document.getElementById("email1").innerHTML ="";

};
