const parolaInserita = prompt("inserisci una parola palindroma");

const arrayLettere = parolaInserita.split("");

arrayLettere.reverse();


const parolaNew = arrayLettere.join('');


if (parolaInserita == parolaNew) {
  console.log("Parola palindroma")
  document.querySelector("h1").innerHTML = `Parola palindroma`

}else {
  console.warn("Non palindroma")
  document.querySelector("h1").innerHTML = `Parola non palindroma`
}
