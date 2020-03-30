let btn = {
    inputVal : document.getElementById('values'),
    result : document.getElementById('result'),
    btnAdd : document.getElementById('btnAdd'),
    btnSub : document.getElementById('btnSub'),
    btnMult : document.getElementById('btnMult'),
    btnDiv: document.getElementById('btnDiv'),
    btnSquare : document.getElementById('btnSquare'),
    btnMod : document.getElementById('btnMod'),
    btnEqual : document.getElementById('btnEqual'),
    btnCE : document.getElementById('btnCE'),
    btnC : document.getElementById('btnC')
}

let btnFunct = {
    addition : () => {
        btn.inputVal.value += "+";
    },
    subtract : () => {
        btn.inputVal.value += "-";
    },
    multiply : () => {
        btn.inputVal.value += "*";
    },
    divide : () => {
        btn.inputVal.value += "÷";
    },
    percentage : () => {
        btn.inputVal.value += "*.";
    },
    squareRoot : () => {
        var power = btn.inputVal.value = Math.pow(btn.inputVal.value,2);
        result.innerHTML = power;
    },
    
    equals : () => {
        result.innerHTML = eval(btn.inputVal.value);
        btn.inputVal.value = eval(btn.inputVal.value);
    },
    btnClear : () => {
        btn.inputVal.value = "";
        result.innerHTML = "";
    },

}


btn.btnAdd.addEventListener('click', btnFunct.addition);
btn.btnSub.addEventListener('click', btnFunct.subtract);
btn.btnMult.addEventListener('click', btnFunct.multiply);
btn.btnDiv.addEventListener('click', btnFunct.divide);
btn.btnMod.addEventListener('click', btnFunct.percentage);
btn.btnSquare.addEventListener('click', btnFunct.squareRoot);
btn.btnEqual.addEventListener('click', btnFunct.equals);
btn.btnCE.addEventListener('click', btnFunct.btnClear);
