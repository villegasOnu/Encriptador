let text = document.getElementById('text');
let encrypt = document.getElementById('encrypt');
let decrypt = document.getElementById('decrypt');
let result = document.getElementById('result');
let copy = document.getElementById('copy');

function isUpperCase(str) {
    str = str.trim();
    if(str.length == 0) return false;
}

text.addEventListener('keyup', () => {
    let str = text.value;

    if(str.length == 0) {
        result.innerHTML = `<strong>Ningún mensaje fue encontrado</strong> <br>
        ingresa el texto que desees encriptar o desencriptar`;    }
});

copy.addEventListener('click', () => {
    let str = result.innerHTML;
    if(str.length == 0) {
        alert('No hay nada que copiar');
    } else {
        let copyText = document.createElement('textarea');
        copyText.value = str;
        document.body.appendChild(copyText);
        copyText.select();
        document.execCommand('copy');
        document.body.removeChild(copyText);
        alert('Texto copiado');
    }
});
    

encrypt.addEventListener('click', () => {
    let key = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat",
    }
    let str = text.value;
    let res = '';
    for(let i = 0; i < str.length; i++) {
        if(key[str[i]]) {
            res += key[str[i]];
        } else {
            res += str[i];
        }
    }
    result.innerHTML = res;
});

decrypt.addEventListener('click', () => {
    let key = {
        ai: "a",
        enter: "e",
        imes: "i",
        ober: "o",
        ufat: "u",
    }
    let str = text.value;
    let res = '';

    let arr = str.split(' ');

    for(let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let newWord = '';
        for (j = 0; j < word.length; j++) {
        for (let vocale in key) {
            if(word.includes(vocale)) {
                newWord = word.replace(vocale, key[vocale]);
                word = newWord;
            } 
            }
        }
        if(newWord.length > 0) {
            arr[i] = newWord;
        }
    }

    res = arr.join(' ');

    
    result.innerHTML = res;
});
