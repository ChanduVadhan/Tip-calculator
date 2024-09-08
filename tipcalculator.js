function calculatetip(){
    var amount=parseFloat(document.getElementById('bill').value);
    var service=parseFloat(document.getElementById('Servicequality').value);
    var people=parseFloat(document.getElementById('NumberOfPeople').value);
    if(isNaN(amount)|| isNaN(service) || isNaN(people) ){
        alert("please enter your valid number.");
        return;
    }
    var tip=((amount*service)/100)/people;
    document.getElementById('tipamount').innerText="Tip Amount: "+ tip.toFixed(2);
}