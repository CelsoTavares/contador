function verificar(){
    var inicio1 = document.getElementById("inicio");
    var fim1 = document.getElementById("fim");
    var passo1 = document.getElementById("passo");
    var res = document.getElementById("res");


if (inicio1.value.length == 0 || fim1.value.length == 0 || passo1.value.length == 0){
    alert("[ERROR] Por favor preencher os campos abaixo.");

}else{
res.innerHTML = `Contando:`
var i = Number(inicio1.value)
var f = Number(fim1.value)
var p = Number(passo1.value)
    for (var a = i; a <= f; a += p)
    res.innerHTML += `\u{1f449}${a} `

}


}




