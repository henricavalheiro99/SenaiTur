
var slide = document.getElementById('slide')
var volta = document.getElementById("volta")
var buscar = document.getElementById('buscar')

var passagens = JSON.parse(jsonpassagens)
var origem = document.getElementById('origem')
var destino = document.getElementById('destino')
var table = document.getElementById('passTable')

for(let cidade in passagens.cidades){
    let opt = document.createElement('option')
    opt.value = passagens.cidades[cidade].nome
    opt.textContent = passagens.cidades[cidade].nome
    origem.append(opt)
}
origem.addEventListener('change', ()=>{
    destino.innerHTML = '<option selected value="all">Todos</option>'
    var destinos = []
    
    if(origem.value != 'all'){
        for(let cidade in passagens.cidades){   
            if(passagens.cidades[cidade].nome == origem.value){
                for(let i=0; i<passagens.cidades[cidade].viagens.length; i++){
                    destinos.push(passagens.cidades[cidade].viagens[i].destino)
                }
            }
        }
    }
    var destinos = destinos.filter((este, i) => destinos.indexOf(este) === i);
    destinos = destinos.sort()
    for(ci of destinos){
        let opt = document.createElement('option')
        opt.value = ci
        opt.textContent = ci
        destino.append(opt)
    }
})


let i = 0
setInterval(() => {
    slide.style.backgroundImage = `url(assets/img/slide/${i}.png)`
    i++
    i > 7 ? i=0 : i=i
}, 5000);

function checkVolta(){
    var ida = document.getElementById("ida")
    var idavolta = document.getElementById('idavolta')

    if(volta.checked){
        document.querySelector('.datas div:nth-child(2)').style.opacity = '1'
        ida.classList.remove('divchecked')
        idavolta.classList.add('divchecked')
    }else{
        document.querySelector('.datas div:nth-child(2)').style.opacity = '0'
        ida.classList.add('divchecked')
        idavolta.classList.remove('divchecked')
    }
}
checkVolta()

volta.addEventListener('click', checkVolta)


for(let quant=0; quant<=5; quant++){
    document.querySelector('.cidades-desconto').innerHTML += `         
            <div style="background-image: url(assets/img/desconto/cidade${quant}.png);" class="cidade">
                <div class="details">
                    <div class="detail-box">
                        <h3>Rio de Janeiro</h3>
                        <h3>R$350,00</h3>
                        <button class="vermais">Ver Mais</button>
                    </div>
                </div>
            </div>
       `
}