function myFunction(){
    let text = document.getElementById("text").value;
    let newText = '';

    let arrayBeg = text.indexOf('(');
    let arrayEnd;

    while (arrayBeg !== -1) {
        newText = newText + text.substring(0, arrayBeg);
        arrayEnd = text.indexOf(')', arrayBeg + 1);

        if (arrayEnd !== -1) {
            let textInside = text.substring(arrayBeg + 1, arrayEnd);
            let reversedText = textInside.split("").reverse().join("");
            newText = newText + reversedText;
            text = text.substring(arrayEnd + 1);
            arrayBeg = text.indexOf('(');
        }
    }

    newText = newText + text;

    alert(newText);
}