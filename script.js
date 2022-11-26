
function checkScore() {
    const score = document.getElementsByName("score");

    for (let i in score) 
        if (score[i].checked)
            document.querySelector(".ratingText").innerHTML = `You selected ${score[i].value} out of 5`
      }


const scoreResultDiv = document.querySelector('.scoreResult')

function submitScore(event) {
    event.preventDefault();

    document.querySelector('.giveScore').setAttribute("hidden", "");
    scoreResultDiv.classList.remove("hidden");
}

