document.querySelector("#tip-form").addEventListener("click",function(event){
    event.preventDefault()})

document.querySelector('#tip-form').onchange = function(){
    let bill = document.getElementById('billAmt').value
    let tip = document.getElementById('customRange1').value
    let noPeople = document.getElementById('noPeople').value


    document.getElementById('tipOutput').innerHTML = `${tip}%`;

    let tipAmt = bill * tip/100
    document.getElementById('tipAmt').innerHTML = Math.round(tipAmt)

    let totalPeople = parseFloat(noPeople) * 8 / 100 * tipAmt
    console.log(totalPeople);

    let totalAmt = parseFloat(tipAmt) + parseFloat(bill) + parseFloat(totalPeople)
 
    document.getElementById('totalAmt').innerHTML= Math.round(totalAmt)

    document.getElementById('tipPer').innerHTML= Math.round(totalPeople)

    if (tip <= 15){
        document.getElementById('rating').innerHTML="Poor tip"
    } else if (tip <= 25) {
        document.getElementById('rating').innerHTML="Average tip"
    } else if (tip <= 40) {
        document.getElementById('rating').innerHTML="Good tip"
    }else if (tip <= 70) {
        document.getElementById('rating').innerHTML="Excellent tip"
    }
    else if (tip <= 100) {
        document.getElementById('rating').innerHTML="Unbelievable tip"
    }




}

