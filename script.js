let btn = document.querySelector('#calc')
btn.addEventListener('click',exibirResult)

function calcular(name,peso,altura){
 
    return imc = peso / (altura * altura)
}

function pegarDados(string){
        
    let p = document.createElement('p')
    p.setAttribute('class','txtb_text')
    p.textContent = string

    return p
}


function exibirResult(){
    let name = document.getElementById('name').value
    let age = document.getElementById('age').value
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value
    let res = document.getElementsByClassName('txtb')
    let imc = pegarDados(calcular(name,peso,altura))

    if( calcular(name,peso,altura) > 0 &&  calcular(name,peso,altura) < 18.5){
        
        pegarDados(name)
        pegarDados(age)
        pegarDados(peso)
        pegarDados(altura)
        pegarDados(calcular(name,peso,altura))

        imc.textContent = `Seu índice corporal foi ${calcular(name,peso,altura).toFixed(2)} - MAGREZA`
        res[0].appendChild(pegarDados(name))
        res[1].appendChild(pegarDados(age))
        res[2].appendChild(pegarDados(altura))
        res[3].appendChild(pegarDados(peso))
        res[4].appendChild(pegarDados(imc.textContent))
    }else if( calcular(name,peso,altura) > 18.50 &&  calcular(name,peso,altura) < 24.9){
        pegarDados(name)
        pegarDados(age)
        pegarDados(peso)
        pegarDados(altura)
        pegarDados(calcular(name,peso,altura))

        imc.textContent = `Seu índice corporal foi ${calcular(name,peso,altura).toFixed(2)} - NORMAL`
        res[0].appendChild(pegarDados(name))
        res[1].appendChild(pegarDados(age))
        res[2].appendChild(pegarDados(altura))
        res[3].appendChild(pegarDados(peso))
        res[4].appendChild(pegarDados(imc.textContent))

    }else if( calcular(name,peso,altura) > 24.9 &&  calcular(name,peso,altura) < 29.90){
        pegarDados(name)
        pegarDados(age)
        pegarDados(peso)
        pegarDados(altura)
        pegarDados(calcular(name,peso,altura))

        imc.textContent = `Seu índice corporal foi ${calcular(name,peso,altura).toFixed(2)} - SOBREPESO`
        res[0].appendChild(pegarDados(name))
        res[1].appendChild(pegarDados(age))
        res[2].appendChild(pegarDados(altura))
        res[3].appendChild(pegarDados(peso))
        res[4].appendChild(pegarDados(imc.textContent))
    }else if( calcular(name,peso,altura) > 30.00 &&  calcular(name,peso,altura) < 39.90){
        pegarDados(name)
        pegarDados(age)
        pegarDados(peso)
        pegarDados(altura)
        pegarDados(calcular(name,peso,altura))

        imc.textContent = `Seu índice corporal foi ${calcular(name,peso,altura).toFixed(2)} - OBESIDADE`
        res[0].appendChild(pegarDados(name))
        res[1].appendChild(pegarDados(age))
        res[2].appendChild(pegarDados(altura))
        res[3].appendChild(pegarDados(peso))
        res[4].appendChild(pegarDados(imc.textContent))
    }else{
        pegarDados(name)
        pegarDados(age)
        pegarDados(peso)
        pegarDados(altura)
        pegarDados(calcular(name,peso,altura))

        imc.textContent = `${calcular(name,peso,altura).toFixed(2)} - OBESIDADE GRAVE`
        res[0].appendChild(pegarDados(name))
        res[1].appendChild(pegarDados(age))
        res[2].appendChild(pegarDados(altura))
        res[3].appendChild(pegarDados(peso))
        res[4].appendChild(pegarDados(imc.textContent))
    }
    alert("Dados preenchidos com Sucesso!")
}