const text = document.getElementById('text');
const encrypt = document.getElementById('encrypt');
const decrypt = document.getElementById('decrypt');
const result = document.getElementById('result');
const copy = document.getElementById('copy');

function isUpperCase(str) {
    let reg = /[A-Z]/;
    return reg.test(str);
}

function haveAccent(str) {
    let reg = /[áéíóúÁÉÍÓÚ]/;
    return reg.test(str);
}

text.addEventListener('keyup', () => {
    let str = text.value;

    if(str.length == 0) {
        result.innerHTML = `<strong>Ningún mensaje fue encontrado</strong> <br>
        ingresa el texto que desees encriptar o desencriptar`;
    }
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
    let isUpper = isUpperCase(str);

    if(isUpper) {
        alert('El texto no puede contener mayúsculas');
        return;
    }

    let haveAcc = haveAccent(str);

    if(haveAcc) {
        alert('El texto no puede contener acentos');
        return;
    }

    let res = '';
    for(let word of str) {
        if(key[word]) {
            res += key[word];
        } else {
            res += word;
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
        for (let vocale in key) {
            if(word.includes(vocale)) {
                newWord = word.replace(vocale, key[vocale]);
                word = newWord;
            } 
        }
        if(newWord.length > 0) {
            arr[i] = newWord;
        }
    }

    res = arr.join(' ');

    
    result.innerHTML = res;
});
