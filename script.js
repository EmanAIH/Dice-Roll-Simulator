document.querySelector("#rollBtn").addEventListener("click",function(){
    const sides = document.querySelector("#sides").value;
    if (sides< 2|| isNaN(sides)){
        alert("Please enter 2 or greater for sides");
        return;
    }
    const  result = Math.floor(Math.random()* sides + 1);
    document.querySelector(".result").textContent = `The random number is ${result}`;
} )

