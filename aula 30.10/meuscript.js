function ligar(){
    document.getElementById('carro').src = 'carro.jpg';
}

function desligar(){
    document.getElementById('carro').src = 'moto.jpg';
}

function onOff(){
    let imagem = document.getElementById('troca').src;
    console.log(imagem);
    if(imagem.includes('moto')){
        document.getElementById('troca').src = 'carro.jpg';
    }else{
        document.getElementById('troca').src = 'moto.jpg';
    }
}
