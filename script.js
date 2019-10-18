// Essa função retorna a diferença em segundos entre tempos.
function diffSec(time1, time2) {
    // Transformamos o primeiro tempo todo em milissegundos.
    let mili1 = (time1.getHours() * 3600000) + 
                (time1.getMinutes() * 60000) +
                (time1.getSeconds() * 1000) +
                (time1.getMilliseconds());

    // Transformamos o segundo tempo todo em milissegundos.
    let mili2 = (time2.getHours() * 3600000) + 
                (time2.getMinutes() * 60000) +
                (time2.getSeconds() * 1000) +
                (time2.getMilliseconds());

    // Fazemos a diferença.
    let res = mili2 - mili1;

    // Convertemos, arredondamos e retornamos.
    res = res/1000;
    return res.toFixed(2);

}

(function (){

    // Array para guardar os retornos.
    let result = [];

    // Primeiro vamos descobrir quantas palavras serão usadas.
    const numWords = parseInt(
            window.prompt("Informe o Número de Palavras:")
            );
    
    // Vamos fazer um laço para calcular cada palavras que
    // for utilizada.
    for (let index = 0; index < numWords; index++) {
        
        // Vamos guardar o momento que ele começou a digitar
        // a primeira palavra.
        let firstTime = new Date;

        // Esse laço ficará pedindo a palavra até que ela
        // satisfaça as condições estabelecidas.
        // -- Mínimo 9 e máximo 10000. --
        let status = false;
        let word = "";
        while (!status)
        {
            // Pedimos a palavra.
            word = window.prompt(`Informa a ${index + 1}° palavra`);

            // Verifica a condição.
            if (word.length >= 9 && word.length <= 10000)
                status = true;
            else
                alert("Tamanho Inválido!");
        }

        // Pegamos o momento que ele encerrou a digitação.
        let lastTime = new Date;

        // Calculamos a diferença.
        let diff = diffSec(firstTime, lastTime);

        // Guardamos o resultado em um array para 
        // ser exibido posteriormente.
        result[index] = [word, diff];
    }

    // Vamos informar o número de vezes.
    document.write(`Foram ${result.length} palavras: </br>`);

    // Vamos exibir para o usuário seus resultados.
    result.map((value, idx) => {
        document.write(
            `${idx + 1}. ${value[0]} - ${value[1]} segs. </br>`
        );
    })

})()