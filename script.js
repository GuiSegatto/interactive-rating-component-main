/* 
    Usuário irá selecionar uma numero de nota
    Usuário irá enviar a nota
    A nota escolhida será mostrada em outra tela
*/




/*  
      remover on click do html e colocar via js

*/
function checkScore() {
    const score = document.getElementsByName("score");

    for (let i in score) 
        if (score[i].checked)
            document.querySelector(".ratingText").innerHTML = `You selected ${score[i].value} out of 5`
      }





















































/* 
let score = document.getElementsByName("score"); // Irá me retornar um array(NodeList) com os valores de todos os scores
console.log(score); */


/* document.getElementsByClassName('submitButton').onclick = function() {
    let score = document.getElementsByName("score");

    for (let i = 0; i < score.lenght; i++) {
        if (score[i].checked) {
            console.log(score[i].value);
        }
    }

};
 */


