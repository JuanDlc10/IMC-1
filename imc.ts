class IMC{
    public peso : number = 0;
    public estatura : number = 0;
    public estaturaMts : number = 0;
    public estadoPeso : string = "";
    public calcularIMC(){
        let peso : any = (<HTMLInputElement>document.getElementById("peso")).value;
        this.peso = parseFloat(peso);
        let estatura : any = (<HTMLInputElement>document.getElementById("est")).value;
        this.estatura = parseFloat(estatura);
        this.estaturaMts = this.estatura / 100
        return peso / (this.estaturaMts * this.estaturaMts)
    }
    public nivelPeso (): void{
        this.calcularIMC()
        if (this.calcularIMC() < 18.5) {
            this.estadoPeso = "Bajo de peso".toString()
        }else if(this.calcularIMC() >= 18.5 && this.calcularIMC() <= 24.9){
            this.estadoPeso = "Peso normal".toString()
        }else if(this.calcularIMC() >= 25 && this.calcularIMC() <= 29.9){
            this.estadoPeso = "Sobrepeso".toString()
        }else if(this.calcularIMC() > 30){
            this.estadoPeso = "Obesidad".toString()
        }
        (<HTMLInputElement>document.getElementById("estadoPeso")).value = this.estadoPeso;
    }
    public asignar(){
        (<HTMLInputElement>document.getElementById("IMC")).value = this.calcularIMC().toFixed(3).toString();
    }
    public limpiar(){
        (<HTMLInputElement>document.getElementById("peso")).value = "";
        (<HTMLInputElement>document.getElementById("est")).value = "";
        (<HTMLInputElement>document.getElementById("IMC")).value = "";
        (<HTMLInputElement>document.getElementById("estadoPeso")).value = "";
    }
}
let calculo = new IMC ()
function calcular (){
    calculo.calcularIMC();
    calculo.asignar();
    calculo.nivelPeso();
}
function limpiarCampos(){
    calculo.limpiar()
}