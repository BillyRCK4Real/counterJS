let count = 0;


document.getElementById("down").onclick = function(){
    count=count-1
    document.getElementById("countLabel").innerHTML = count
}

document.getElementById("reset").onclick = function(){
    count=0
    document.getElementById("countLabel").innerHTML = count

}

document.getElementById("up").onclick = function(){
    count=count+1
    document.getElementById("countLabel").innerHTML = count
}
