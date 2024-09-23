function inserir(num) {
    document.getElementById('resultado').innerHTML += num;
}

function limpar() {
    document.getElementById('resultado').innerHTML = '';
}

function apagar() {
    let res = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = res.substring(0, res.length - 1);
}

function igual() {
   let res = document.getElementById('resultado').innerHTML;
   if(res) {
    document.getElementById('resultado').innerHTML = eval(res);
   }
}
