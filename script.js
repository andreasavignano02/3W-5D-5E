

function scriviIlNumero (Numero){
    document.getElementById('barraCalcolatrice').value += Numero
}


function vedereRisultato()  {
        let risultato = eval(document.getElementById('barraCalcolatrice').value)

        document.getElementById('barraCalcolatrice').value = risultato
}


function Cancellare() {
    document.getElementById('barraCalcolatrice').placeholder = '0'
    document.getElementById('barraCalcolatrice').value = ''
  }

function cambiamentoDiErrore (){
    
}


