function result(){



    let inputvalue=document.getElementById('inputData').value;



    let displayHeading=document.getElementById('text');

    displayHeading.innerHTML=inputvalue;

    displayHeading.style.color="red"
    document.getElementsByTagName('body')[0].style.backgroundColor="green";
}
let paraBKG=document.getElementById('para');
function colorChange(){
    paraBKG.style.backgroundColor="blue"
}
paraBKG.addEventListener('mouseout', colorChange);
