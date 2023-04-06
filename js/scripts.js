var btn = document.getElementById("pergunta-01-btn");



btn.addEventListener('click', function() {

    var caixa = document.getElementById("resposta-01");

    if(caixa.style.display === 'none') {
        caixa.style.display = 'block';
        btn.style.color = '#CCA36B';
    } else {
        caixa.style.display = 'none'; 
        btn.style.color = 'white';
    }
});

var btn2 = document.getElementById("pergunta-02-btn"); 

btn2.addEventListener("click", function() {

    var caixa2 = document.getElementById("resposta-02");

    if(caixa2.style.display === 'none') {
        caixa2.style.display = 'block';
        btn2.style.color = '#CCA36B';
    } else {
        caixa2.style.display = 'none'; 
        btn2.style.color = 'white';
    }


});


var btn01 = document.getElementById("pergunta-01-btn-1");



btn01.addEventListener('click', function() {

    var caixa = document.getElementById("resposta-01-1");

    if(caixa.style.display === 'none') {
        caixa.style.display = 'block';
        btn01.style.color = '#CCA36B';
    } else {
        caixa.style.display = 'none'; 
        btn01.style.color = 'white';
    }
});

var btn02 = document.getElementById("pergunta-02-btn-1"); 

btn02.addEventListener("click", function() {

    var caixa2 = document.getElementById("resposta-02-1");

    if(caixa2.style.display === 'none') {
        caixa2.style.display = 'block';
        btn02.style.color = '#CCA36B';
    } else {
        caixa2.style.display = 'none'; 
        btn02.style.color = 'white';
    }


});
