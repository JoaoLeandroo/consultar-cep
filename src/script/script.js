
const button = document.querySelector(".entrada-dados button")

button.addEventListener("click", function() {
    let cep = document.querySelector(".entrada-dados input")
    
    if(cep.value === ''){
        alert("campo vazio")
    }else{
        fetch(`https://viacep.com.br/ws/${cep.value}/json`)
        .then((item) => item.json())
        .then((json) => {

            if(json.cep === undefined) {
                alert("CEP NAO LOCALIZADO X")
            }else{
                alert(`
                Cep: ${json.cep}
                Rua: ${json.logradouro}
                Bairro: ${json.bairro}
                Localidade: ${json.localidade}
                Uf: ${json.uf}
                DDD: ${json.ddd}
            `)
            }

        })
        .catch(() => {
            alert("CEP NAO LOCALIZADO")
        })

    }

    cep.value = ''

})

