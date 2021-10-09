
//Punto 1
function Point1(p) {
    console.log(p);
}
Point1("Hola Daniel");
//punto 2

function point2(num1, nun2) {

    try {
        let vale1 = prompt("Valor a sumar", num1);
        let vale2 = prompt("Valor a sumar", nun2);

        if (isNaN(vale1) || isNaN(vale2)) {

            throw "no es posible realizar la operación"
        }
        console.log("Resultado de Suma ", Number(vale1) + Number(vale2))
    }
    catch (error) {
        alert("Error: " + error)
    }
}

point2()
// punto 3

function point3(num1, nun2) {

    try {

        let vale1 = prompt("Valor a Resta", num1)
        let vale2 = prompt("Valor a Resta", nun2)
        if (isNaN(vale1) || isNaN(vale2)) {
            throw "no es posible realizar la operación"
        }

        console.log("Resultado de Resta ", Number(vale1) - Number(vale2))
    }

    catch (error) {
        alert("Error: " + error)

    }
}

point3()

//Punto 4

function point4(num1, nun2) {
    try {

        let vale1 = prompt("Valor a Multiplicar", num1)
        let vale2 = prompt("Valor a Multiplicar", nun2)
        if (isNaN(vale1) || isNaN(vale2)) {
            throw "no es posible realizar la operación"
        }

        console.log("Resultado de Multiplicar ", Number(vale1) * Number(vale2))
    }
    catch (error) {

        alert("Error: " + error)
    }

}


point4()

//Punto 5

function point5(num1, nun2) {

    try {
        let vale1 = prompt("Valor a dividir", num1)
        let vale2 = prompt("Valor a dividir", nun2)
        if (isNaN(vale1) || isNaN(vale2)) {
            throw "no es posible realizar la operación"
        }
        console.log("Resultado de dividir ", Number(vale1) / Number(vale2))
    }
    catch (error) {
        alert("Error: " + error)
    }

}

point5()

//Punto 6

function point6(num1) {
    try {
        let vale1 = prompt("radio de un círculo", num1)
        let vale2 = 3.141592
        if (isNaN(vale1) || isNaN(vale2)) {
            throw "no es posible realizar la operación"
        }

        console.log("el área del círculo es ", Number(vale2) * Number(vale1) * Number(vale1))
    }
    catch (error) {
        alert("Error: " + error)
    }
}

point6()

//Punto 7

function point7(num1) {
    try {
        let vale1 = prompt("Valor en Metros", num1)
        let vale2 = 1000
        let resut = (Number(vale1) / Number(vale2)).toFixed(2)
        if (isNaN(vale1) || isNaN(vale2)) {
            throw "no es posible realizar la operación"
        }
        console.log("Equivalente en Kilómetros ", resut);
    }
    catch (error) {
        alert("Error: " + error)
    }
}
point7()

//Punto 8

function point8(num1) {

    try {
        let vale1 = prompt("grados Celsius", num1)
        let resut = ((Number(vale1) * 9 / 5) + 32).toFixed(2)
        if (isNaN(vale1) || isNaN(resut)) {
            throw "no es posible realizar la operación"
        }
        console.log("grados Fahrenheit ", resut);
    }
    catch (error) {
        alert("Error: " + error)
    }

}

point8()

//punto 9

function lists() {
    try{
    let lists1 = ([10, 4, 2, 20, 5])
    let lists2 = ([0, 0, 0, 1, 0])
    let lists3 = ([-13, 10, 9, 8, 0, 2000, -1])
    let minlists1 = Math.min(lists1)
    let maxlists1 = Math.max(lists1)
    let minlists2 = Math.min(lists2)
    let maxlists2 = Math.max(lists2)
    let minlists3 = Math.min(lists3)
    let maxlists3 = Math.max(lists3)
    if (isNaN(lists1) || isNaN(lists2) || isNaN(lists3)) {
        throw "no es posible realizar la operación"
    }
    console.log("Lita 1",minlists1,maxlists1)
    console.log("Lita 2",minlists2,maxlists2)
    console.log("Lita 3",minlists3,maxlists3)
}
catch (error) {
    alert("Error: " + error)
}
}

lists()








