const math = window.math;

var racunaj = document.getElementById("racunaj");
var ispis = document.getElementById("rezultat");
var trigger;

function solve(){

    try{
        equation1 = document.getElementById("jednadzba1").value;
        equation2 = document.getElementById("jednadzba2").value;

        x = document.getElementById("tockaX").value;
        y = document.getElementById("tockaY").value;
        
        equation1 = equation1.replace(/x/g, "*" + x);
        equation1 = equation1.replace(/y/g, "*" + y);
        
        equation2 = equation2.replace(/x/g, "*" + x);
        equation2 = equation2.replace(/y/g, "*" + y);

        let result1 = math.evaluate(equation1);
        let result2 = math.evaluate(equation2);

        if(result1 == true && result2 == true){
            localStorage.setItem("rezultat", "1");
        }else {
            if(result1 !== undefined && result2 !== undefined){
                localStorage.setItem("rezultat", "0");
            }else{
                throw new error("Nešto nisi upisao!");
            }
        }
        trigger = false;
    } catch(error){
        alert('Upisao si krivo jednadzbu/tocku');
        trigger = true;
    }
    
}

racunaj.addEventListener("submit", function(event){

    event.preventDefault();
   
    solve();

    var pohrana = localStorage.getItem("rezultat");

    if(pohrana && !trigger){
        let str = JSON.parse(pohrana);
        ispis.style.visibility = "visible";
        
        if(str === 1){
            ispis.innerHTML = "Točka se nalazi u području dopustivosti."
        }else{
            ispis.innerHTML = "Točka se ne nalazi u području dopustivosti."
        }
    }else{
        ispis.style.visibility = "hidden";
    }
});