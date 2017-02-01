function makePhrases() {
    var words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
    var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
    var words3 = ["process", "solution", "tipping - point", "strategy", "vision"];
    
    
    var rand1 = Math.floor(Math.random() * words1.length);
    var rand2 = Math.floor(Math.random() * words2.length);
    var rand3 = Math.floor(Math.random() * words3.length);
    
    var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
   //alart(phrase);
   //document.write(phrase);
   console.log(phrase);
}
makePhrases();
    
    

  

function bla() {
var scores = [60, 50, 60, 58, 54, 54,
            58, 50, 52, 54, 48, 69,
            34, 55, 51, 52, 44, 51,
            74, 64, 66, 55, 52, 61,
            46, 31, 57, 52, 44, 18,
            41, 53, 55, 61, 51, 44];  
    var a = scores.sort(function(a, b){return  b - a});
    console.log(scores[0]);
    console.log(a);
}

bla();







function lka() {
    var scores = [60, 50, 60, 58, 54, 54,
                58, 50, 52, 54, 48, 69,
                34, 55, 51, 52, 44, 51,
                69, 64, 66, 55, 52, 61,
                46, 31, 57, 52, 44, 18,
                41, 53, 55, 61, 51, 44];  
    var output;
    var highScore = 0;
    var i = 0;
    while (i < scores.length) {
        output = "bubble solution #" + i + " score: " + scores[i];
        console.log(output);
        i ++;
        if (scores[i] > highScore) {
            highScore = scores[i];
        }
    }
    console.log("Bubbles tests: " + scores.length);
    console.log("Highest bubble score: " + highScore );
    console.log(scores);
    
    
     var bestSolution = [];
    for (var i = 0; i < scores.length; i ++) {
        if (scores[i] == highScore) {
            bestSolution.push(i);
        }
    }
    console.log("Solution with the hightest score: " + bestSolution);
}
lka();

   






function kra()  {
    var nlo = [];
    nlo[0] = "apple";
    nlo [4] = "berry";
    console.log(nlo);
    if ( nlo[i] == undefined) {
        for (var i = 0; i< nlo.length; i ++) {
        console.log(nlo[i]);
        }
    } 
}
kra();



//найменша ціна


            
            
function less() {
    
    var costs = [.25, .27, .25, .25, .25, .25,
            .33, .31, .25, .29, .27, .22,
            .31, .25, .25, .33, .21, .25,
            .25, .25, .28, .25, .24, .22,
            .20, .25, .30, .25, .24, .25,
            .25, .25, .27, .25, .26, .29];
    var r = costs.sort(function(a, b){return a - b});
    console.log(costs[0]);
}
less();

