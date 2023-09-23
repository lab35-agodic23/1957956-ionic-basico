
let gastos= []
tpgasto=document.getElementById('gasto');
monto=document.getElementById('monto');

function guardar(){

    gasto=tpgasto.value + ":$" + monto.value
    gastos.push(gasto)
    console.log(gastos)

}