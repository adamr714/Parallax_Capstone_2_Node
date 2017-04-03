//Character Name
var inputBox = document.getElementById('cardName');

inputBox.onkeyup = function(){
    document.getElementById('printCardName').innerHTML = inputBox.value;
}
