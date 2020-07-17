// Default values
function showMessage(from, text = "no text") {
    text = text || 'empty';
    console.log(from + ': ' +text);
}
let from = 'abc';
showMessage(from);

