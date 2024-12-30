const visor = document.getElementById("Visor")
let n1,n2, ops
function adicionarAoVisor(n)
{
    n = String(n)
    visor.value += n
}
function blur()
{
    visor.blur()
}
function adicionandoOperacao(simbolo)
{
    if (visor.value == "" & simbolo == '-')
    {
        visor.value += '-'
        return true
    }
    else if(visor.value == "" || visor.value == '-')
    { 
        alert("Selecione o primeiro numero antes da operação")
        return false
    }   
    n1 = parseFloat(visor.value)
    visor.value = ""
    ops = simbolo
}
function resolvendoConta()
{
    if (!n1)
    {
        return false
    }else if (visor.value == "")
    {
        alert("Escreva outro número para efetuar a conta!")
        return false
    }
    n2 = parseFloat(visor.value)
    switch(ops)
    {
        case '+':
            visor.value = n1+n2
        break
        case '*':
            visor.value = n1*n2
        break
        case '/':
            visor.value = n1/n2
        break
        case '-':
            visor.value = n1-n2
        break
    } 
}
function limpa()
{
    n1 = 0
    n2= 0
    ops = ""
    visor.value = ""
}




