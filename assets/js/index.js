function funcCovertToDecimalNumber(){
    const input = document.getElementById("input-id").value
    let accumulator = 0
    const error = 'Вы ввели не корректное значение'

    for (let index = 0; index < input.length; index++) {
        if (input[input.length - 1 - index] !== '0' && input[input.length - 1 - index] !== '1') {
            document.getElementById("output").innerHTML = error;
            return; // Завершаем выполнение функции
        } else if (input[input.length - 1 - index] == '1') {
            accumulator += 2**index
        }
        
    }
    document.getElementById("output").innerHTML = accumulator
}

function funcConvertTOBinaryNumber() {
    const input = document.getElementById("input-id").value
    let accumulator = parseInt(input, 2)

    const binaryValue = accumulator.toString(2);

    document.getElementById("output").innerHTML = binaryValue;
}
