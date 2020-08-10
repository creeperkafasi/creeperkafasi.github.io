
var epNum = 1;
var pageNum = 1;

function episode(selector) {
    epNum = selector.options.selectedIndex + 1;
    console.log("Switched to episode " + epNum);
    document.getElementById("page").src = "episodes/"+epNum+"/1.png";
    document.getElementById("comment").src = "episodes/"+epNum+"/1c.png";
}

function prev(){
    pageNum--;
    document.getElementById("page").src = "episodes/"+epNum+"/"+pageNum+".png";
    document.getElementById("page").title = "Page " + pageNum;
}

function next(){
    pageNum++;
    document.getElementById("page").src = "episodes/"+epNum+"/"+pageNum+".png";
    document.getElementById("page").title = "Page " + pageNum;
}