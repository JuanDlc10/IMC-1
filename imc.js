"use strict";
var IMC = /** @class */ (function () {
    function IMC() {
        this.peso = 0;
        this.estatura = 0;
        this.estaturaMts = 0;
        this.estadoPeso = "";
    }
    IMC.prototype.calcularIMC = function () {
        var peso = document.getElementById("peso").value;
        this.peso = parseFloat(peso);
        var estatura = document.getElementById("est").value;
        this.estatura = parseFloat(estatura);
        this.estaturaMts = this.estatura / 100;
        return peso / (this.estaturaMts * this.estaturaMts);
    };
    IMC.prototype.nivelPeso = function () {
        this.calcularIMC();
        if (this.calcularIMC() < 18.5) {
            this.estadoPeso = "Bajo de peso".toString();
        }
        else if (this.calcularIMC() >= 18.5 && this.calcularIMC() <= 24.9) {
            this.estadoPeso = "Peso normal".toString();
        }
        else if (this.calcularIMC() >= 25 && this.calcularIMC() <= 29.9) {
            this.estadoPeso = "Sobrepeso".toString();
        }
        else if (this.calcularIMC() > 30) {
            this.estadoPeso = "Obesidad".toString();
        }
        document.getElementById("estadoPeso").value = this.estadoPeso;
    };
    IMC.prototype.asignar = function () {
        document.getElementById("IMC").value = this.calcularIMC().toFixed(3).toString();
    };
    IMC.prototype.limpiar = function () {
        document.getElementById("peso").value = "";
        document.getElementById("est").value = "";
        document.getElementById("IMC").value = "";
        document.getElementById("estadoPeso").value = "";
    };
    return IMC;
}());
var calculo = new IMC();
function calcular() {
    calculo.calcularIMC();
    calculo.asignar();
    calculo.nivelPeso();
}
function limpiarCampos() {
    calculo.limpiar();
}
