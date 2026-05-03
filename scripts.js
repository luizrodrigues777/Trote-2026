function calcular(){
    // JS é uma linguagem não tipada (sem tipo de dados)
    // Number() é uma função que converte texto em número

    /* recupera valores de itens avulsos */

    // recupera o valor informado no elemento com id qtdeArroz
    let qtdeArroz = Number(document.getElementById("qtdeArroz").value)
    // recupera o valor informado no elemento com id qtdeFeijao
    let qtdeFeijao = Number(document.getElementById("qtdeFeijao").value)
    // recupera o valor informado no elemento com id qtdeOleo
    let qtdeOleo = Number(document.getElementById("qtdeOleo").value)
    // recupera o valor informado no elemento com id qtdeMacarrao
    let qtdeMacarrao = Number(document.getElementById("qtdeMacarrao").value)
    // calcula o valor total de pontos dos itens avulsos
    let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeOleo * 4) + (qtdeMacarrao * 2)

    // calcula o valor total das metas
    // recupera a cor da equipe
    let cor = document.getElementById("cor").value
    let metaKit // declara meta de kit alimentação
   
    if (cor == "amarela"){
        metaKit = 54
    }
    else if (cor == "cinza"){
        metaKit = 51
    }
    else if (cor == "laranha"){
        metaKit = 21
    }
    else if (cor == "marron"){
        metaKit = 88
    }
    else if (cor == "preta"){
        metaKit = 60
    }
    if (cor == "amarela"){
    metaKit = 54
    }
    else if (cor == "cinza"){
    metaKit = 51
    }
    else if (cor == "laranja"){
    metaKit = 21
    }
    else if (cor == "marron"){
    metaKit = 88
    }
    else if (cor == "preta"){
    metaKit = 60
    }
    // calcula meta do suplemento e do leite
    let metaSuplemento // declaração meta de suplemento
    let metaLeite = metaKit // meta do leite é a meta do kit
    if (metaKit % 2 == 0) {// par
        metaSuplemento = metaKit / 2
    }
    else { // ímpar
        metaSuplemento = (metaKit / 2) + 0.5
    }
    // calcula a meta da doação de sangue
    let metaSangue = metaSuplemento
    // calcula pontuação do kit de alimentação
    let kitAlimentacao = Number(document.getElementById("kitAlimentacao").value)
    if (kitAlimentacao >= metaKit) {
        pontos = pontos + 5000 // já garantimos 5000
        if (kitAlimentacao > metaKit){
            // ganhamos 83.33 a mais de ponto por itens que ultrapassaram 60
            pontos = pontos + (kitAlimentacao - metaKit) * (5000/metaKit)
        }
    }
    else {
        pontos = pontos + kitAlimentacao * (5000 / metaKit)
    }
    // cacula pontuação do suplemento
    let qtdeLatas = Number(document.getElementById("qtdeLatas").value)
    if (qtdeLatas >= metaSuplemento){
        pontos = pontos + 5000
        if (qtdeLatas > metaSuplemento){
            pontos = pontos + (qtdeLatas - metaSuplemento) * (5000/metaSuplemento)
        }
    }
    else  {
        pontos = pontos + (qtdeLatas * (5000/metaSuplemento))
    }
    // calcula pontuação do leite
    let qtdeLeite = Number(document.getElementById("qtdeLeites").value)
    if (qtdeLeite >= metaLeite){
    pontos = pontos + 5000
    if (qtdeLeite> metaLeite){
        pontos = pontos + (qtdeLeite - metaLeite) * (5000/metaLeite)
    }
    }
    else  {
        pontos = pontos + (qtdeLeite * (5000/metaLeite))
    }
    // calcula pontuação do sangue
    let qtdeDoacao = Number(document.getElementById("qtdeDoacoes").value)
    if (qtdeDoacao >= metaSangue){
    pontos = pontos + 5000
    if (qtdeDoacao > metaSangue){
        pontos = pontos + (qtdeDoacao - metaSangue) * (5000/metaSangue)
    }
    }
    else  {
        pontos = pontos + (qtdeDoacao * (5000/metaSangue))
    }
    // vamos exibir o resultado para o usuário
    document.getElementById("resultado").innerText = "Pontuação total: " + pontos.toFixed(2) + " pontos"
}