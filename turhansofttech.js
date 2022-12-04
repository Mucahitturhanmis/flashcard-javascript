
// Functions  
function bedingung() { 

   var unsereAntwort = document.getElementById("Antworten").value; 
   isNaN(unsereAntwort); 
   if(isNaN(unsereAntwort)){
   	document.getElementById("output").innerHTML = "Hey!" + unsereAntwort + "Ist keine Nummer"; 
}  else {
	if (unsereAntwort == korrekteAntwort) {
		document.getElementById("output").innerHTML = "Korrek!" + zahl1 + " + " + zahl2 + " = " + korrekteAntwort;
        } else {
        	document.getElementById("output").innerHTML = "Falsch" + zahl1  + " + "  + zahl2 + " = " + unsereAntwort;

        }

	}
}

function neuKarte() {

  document.getElementById("output").innerHTML = ""
  document.getElementById("Antworten").value = ""
  var zahl1 = Math.floor(Math.random() * 10) + 1;
  var zahl2 = Math.floor(Math.random() * 10) + 1;
  document.getElementById("demo").innerHTML = zahl1 + " + " + zahl2;
  korrekteAntwort = zahl1 + zahl2; 
}