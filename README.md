# Palindroma - Pari/Dispari
---


## Palidroma
- Chiedere all’utente di inserire una parola
- Creare una funzione per capire se la parola inserita è palindroma

---

## Pari e Dispari
- L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
- Sommiamo i due numeri
- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
- Dichiariamo chi ha vinto.

---
## Procedimento "PAROLA PALINDROMA"

- Chiedo all' utente tramite un prompt di inserire una parola e la salvo in una var.
- `splitto [.split("")]` le singole lettere della parola e le inserisco in una `nuova var.` che mi sarà utile per il confronto.
- adesso la `nuova var` contiene un array di singole lettere.
- Inverto l'ordine delle lettere della `nuova var` utilizzando il metodo `.reverse()`
- "Ricostruisco la parola" con il `metodo .join("") `
- Confronto la prima var. con la seconda per vedere se sono uguali.
- Se `true` la parola è palindroma, se `false` non lo è.
---
## Procedimento "PARI/DISPARI"  

- Con una select intercetto la `previsione` dell'utente.
- recupero il dato da lui fornito all'interno di un `input-text`
- genero un numero randomico da 1 a 5 assegnandolo al "computer"
- Sommo i numeri ottenuti
- Verifico se il numero corrisponde alla previsione dell'utente e fornisco un feedback.
