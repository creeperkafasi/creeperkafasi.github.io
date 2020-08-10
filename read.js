
var epNum = 1;
var pageNum = 1;

function episode(selector) {
    epNum = selector.options.selectedIndex + 1;
    document.getElementById("page").src = "episodes/"+epNum+"/1.png";
    document.getElementById("comment").src = "episodes/"+epNum+"/1c.png";
    console.log("Switched to episode " + epNum);
    pageNum=0
}

function prev(){
    pageNum--;
    document.getElementById("page").src = "episodes/"+epNum+"/"+pageNum+".png";
    document.getElementById("page").title = "Page " + pageNum;
    console.log("Switched to page " + pageNum);
}

function next(){
    pageNum++;
    document.getElementById("page").src = "episodes/"+epNum+"/"+pageNum+".png";
    document.getElementById("page").title = "Page " + pageNum;
    console.log("Switched to page " + pageNum);
}

function page(input){
    pageNum = input.value;    
    document.getElementById("page").src = "episodes/"+epNum+"/"+pageNum+".png";
    document.getElementById("page").title = "Page " + pageNum;
    console.log("Switched to page " + pageNum);
}
