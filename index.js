let words = [
    {
        "inputs": 8,
        "category": "Animals",
        "word1": "pangolin"
    },
    {
        "inputs": 5,
        "category": "Furniture",
        "word1": "table"
    },
    {
        "inputs": 5,
        "category": "Plants",
        "word1": "basil"
    },
    {
        "inputs": 8,
        "category": "Technology",
        "word1": "keyboard"
    }

]

$(document).ready(function () {
    guessing();
})

function guessing() {
    const word = words[Math.floor(Math.random() * words.length)];
    $("#blanks").empty();
    for (let i = 0; i < word.inputs; i++) {
        let input_html = `<span class="fill_blanks" id="input_${i}">_</span>`
        $("#blanks").append(input_html)
    }
    $("#category").html(word.category)
    var gameOver=false
    $(".clickable").click(function () {
        var correct = false;      
        let id = $(this).attr("id");
        var life = parseInt($("#life").text())
        for (var i = 0; i < word.word1.length; i++) {
            if (word.word1.charAt(i).toLowerCase() == id) {

               if (life > 0 && ($(".fill_blanks").eq(i).html() == "_" || $(".fill_blanks").eq(i).html() == id)) {

                    $(".fill_blanks").eq(i).html(id);
                    correct = true;
                    if ($("#blanks").text() === word.word1.toLowerCase()) {
                        $("#result").text("You Win!")
                        correct = true;
                        gameOver=true
                    }
                }                
            }
         }
       
        if (life > 0 && correct!=true && gameOver!=true) {           
            life = life - 1
            $("#life").text(life)
        }
        else if (life == 0) {
            $("#result").text("You Lose! Please try again.")
        }
    })
}