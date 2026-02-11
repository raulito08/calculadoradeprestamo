const montoInput = document.getElementById("monto");

montoInput.addEventListener("input", function () {
    let valor = this.value.replace(/,/g, "");
    if (isNaN(valor)) return;
    this.value = Number(valor).toLocaleString("en-US");
});

document.getElementById("calcular").onclick = function () {

    let monto = document.getElementById("monto").value.replace(/,/g,"");
    let interesAnual = document.getElementById("interes").value;
    let meses = document.getElementById("meses").value;

    monto = parseFloat(monto);
    interesAnual = parseFloat(interesAnual);
    meses = parseInt(meses);

    if (isNaN(monto) || isNaN(interesAnual) || isNaN(meses) || meses <= 0){
        alert("Ingrese valores válidos");
        return;
    }

    let tasaMensual = (interesAnual / 100) / 12;

    let cuotaMensual = (monto * tasaMensual) /
        (1 - Math.pow(1 + tasaMensual, -meses));

   let totalPagado = cuotaMensual * meses;
let totalInteres = totalPagado - monto;

cuotaMensual = Math.round(cuotaMensual * 100) / 100;
totalInteres = Math.round(totalInteres * 100) / 100;


    document.getElementById("lbl_total").innerHTML =
    "Cuota Mensual: <span class='numero'>RD$ " +
    cuotaMensual.toLocaleString("en-US",{minimumFractionDigits:2}) +
    "</span>";

    document.getElementById("lbl_TotalInteres").innerHTML =
    "Total Interés Pagado: <span class='numero'>RD$ " +
    totalInteres.toLocaleString("en-US",{minimumFractionDigits:2}) +
    "</span>";

    document.getElementById("resultado").classList.remove("d-none");
};
