document.querySelector("#tip-form").addEventListener("click",function(event){
    event.preventDefault()})

document.querySelector('#tip-form').onchange = function(){
    let bill = document.getElementById('billAmt').value
    let tip = document.getElementById('customRange1').value
    document.getElementById('tipOutput').innerHTML = `${tip}%`;

    let tipAmt = bill * tip/100
    document.getElementById('tipAmt').innerHTML = tipAmt

    let totalAmt = parseFloat(tipAmt) + parseFloat(bill)
 
    document.getElementById('totalAmt').innerHTML= totalAmt


}
