let dniForm = document.dniForm;
function printName() {
  console.log(dniForm.wrDniNumber.value);
}
let wrDniNumber = dniForm.wrDniNumber;
wrDniNumber.addEventListener("keypress", (ev) => {
  let caption = document.getElementById("dni_letter__caption");
  let letter = "";  
  let dniNumber = wrDniNumber.valueAsNumber;
  if (ev.key == "Enter") {
    if (!dniNumber) {
        alert("debe ser un numero sin letras " + typeof dniNumber);
      }
    if (dniNumber < 0 || dniNumber > 99999999) {
      alert("tiene que contener 8 digitos");
    } else {
      letter = calculateLetter(dniNumber);
      ev.preventDefault();
      caption.innerText = letter;
    }
  }
});
function calculateLetter(num) {
  const MODULUS = 23;
  const letters = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
  ];
  const mod = num % MODULUS;
  return letters[mod];
}
