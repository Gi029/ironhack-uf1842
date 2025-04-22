
function calcularTip() {

       let bill = Number(document.getElementById("bill-amount").value);
       let tip = Number(document.getElementById("percentage-tip").value); 

      // Calcular el total de la cuenta en el campo Total
       let totalTip = bill * (tip / 100);
       document.getElementById("tip-amount").value = totalTip.toFixed(2);

       let total = bill + totalTip;
       document.getElementById("total").value = total.toFixed(2); // Mostrar total
}

     // Asociar un evento click al botón "Calculate"
document.getElementById("calculate").addEventListener("click", calcularTip);






