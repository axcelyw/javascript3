do {
    var num = +prompt('Введите число:')
}while(isNaN(num) || num == 0)

do {
    var power = +prompt('Введите степень:')
}while (isNaN(power)) {
    if (power == 0) {
        power = 2
    }
}


let res = 1

for (let i = 0; i < power; i++) {
    res = res * num
}

alert(res)




do {
    var num = +prompt ('Введите кол-во ступенек:')
} while (isNaN(num) || num == 0);

do { 
    var symbol = prompt('Введите символ:')
} while (symbol == '');

do {
    var final = prompt ('Введите конечный символ:')
} while (final == '');

for (let i = 0; i < num; i++) {
     final = i == 0 ? final : symbol + final
     console.log(final);
    
}