let nomes=[];

function exibirText(tag,Texto){
    let paraGra=document.querySelector(tag);
    paraGra.innerHTML=Texto ;
}

exibirText('h2','Bem vindo ao jogo do amigo secreto')



function jogoSorte(){
    let but=document.querySelector('input').value.trim();
    if(but===''){
        alert('inisra um nome');
    }else{
        nomes.push(but);
        atualizarAmi();
        limpaCAmp();
    }
}

function limpaCAmp(){

    let but1=document.querySelector('input');
    but1.value='';   
   
}

function gerarAleatorio(){
   if(nomes.length===0){
    alert('adicione nomes antes de sortear');

   }
  const indiceAleatorio=Math.floor(Math.random()* nomes.length);
  const nomeAleatorio=nomes[indiceAleatorio];
  let ebit=`o nome sortedo foi ${nomeAleatorio}`
  document.getElementById('nomeSorteado').textContent=ebit;
  document.getElementById('nomeSorteado').style.color='green';
    }
 
    function atualizarAmi(){
        document.getElementById('nomeSorteado').innerHTML=nomes.join('<br>');
    }