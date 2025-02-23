function calculate() {
    function parseInput(id) {
        return parseFloat(document.getElementById(id).value.replace(",", "."));
    }

    let C = parseInput("carbon");
    let H = parseInput("hydrogen");
    let O = parseInput("oxygen");
    let N = parseInput("nitrogen");
    let S = parseInput("sulfur");
    let W = parseInput("moisture");
    let A = parseInput("ash");

    let total = C + H + O + N + S + W + A;
    if (total > 100) {
        document.getElementById("output").innerHTML = " Сума всіх компонентів не може перевищувати 100%!";
        return;
    }

    let dryMass = 100 - W;

    let combustibleMass = dryMass - A;

    let Qr = (339 * C + 1030 * H + 109 * S - 25 * (O + N)) * 0.01;

    // Вивід результатів
    document.getElementById("output").innerHTML = `
         <b>Суха маса:</b> ${dryMass.toFixed(2)}%<br>
         <b>Горюча маса:</b> ${combustibleMass.toFixed(2)}%<br>
         <b>Нижча теплота згоряння:</b> ${Qr.toFixed(2)} МДж/кг
    `;
}
