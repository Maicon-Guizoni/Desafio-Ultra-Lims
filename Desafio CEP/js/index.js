

async function consultaCep() {
    const resultado = document.querySelector('#resultado')
    const cep = document.getElementById('cep').value

    if (cep.length !== 8) {
        alert('CPF Inválido!')
        return
    }

    await fetch(`http://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json()).then(data => {
            console.log(data)
            if (data.erro) {
                alert('CPF Inexistente!')
                return
            } else {
                resultado.innerHTML = `<p class="itens">Rua: ${data.logradouro}</p>
                                   <p class="itens">Bairro: ${data.bairro}</p>
                                   <p class="itens">Cidade - UF: ${data.localidade} - ${data.uf}</p>`
                return
            }
        })


}