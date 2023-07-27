let a = ''; // Первое число
let b = ''; // Второе число
let sign = '';  //Операция
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/', '%', '+/-', 'ln', 'log', '√', 'Х²', 'X³'];



//Экран
const out = document.querySelector( '.calc-screen p');

function clearAll () {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = '0';
}


function plusMin() {
    a = (-a);
    sign = '';
    finish = false;
    out.textContent = a;
    console.log('success')
}

// document.querySelector('.ac').onclick = clearAll();
// document.querySelector('.plus-minus').onclick = plusMin();

document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('btnc')) return;
    if(event.target.classList.contains('ac')) clearAll();
    if(event.target.classList.contains('plus-minus')) plusMin();


    out.textContent = '';
    const key = event.target.textContent;

    //0 - 9
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            out.textContent = a;
        }else if (a!=='' && b!=='' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.log(a, b, sign);
        return;
    }

    //+ - / X
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(a, b, sign);
        return;
    }
    // =
    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case "+":
                a = ((+a) + (+b));
                break;
            case "-":
                a = (a - b);
                break;
            case "X":
                a = (a * b);
                break;
            case "/":
                if (b === '0') {
                    out.textContent = 'Ошибка';
                    a ='';
                    b = '';
                    sign = '';
                    return;
                }
                a = (a / b);
                break;
            case "%":
                a = (b / 100) * a;
                break;

            case "Х²":
                a = (a * a);
                break;

            case "X³":
                a = (a * a * a);
                break;

            case "√":
                a = Math.sqrt(a, 2);
                break;

            case "sin":
                a = Math.sin(a);
                break;

            case "ln":
                a = Math.log(a, Math.exp(1));
                break;
        }
        finish = true;
        out.textContent = a;

    }
}