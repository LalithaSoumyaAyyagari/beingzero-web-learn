function newTask(){
    const toAdd = document.getElementById("container")
    const gt = document.getElementById("task").value

    var newRow = document.createElement("div")
    var newCol1 = document.createElement("span")
    var newCol2 = document.createElement("span")
    var newCol3 = document.createElement("span")

    newCol1.innerHTML = gt
    newCol2.innerHTML = "<i class='fas fa-check-circle fa-lg'></i>"
    newCol3.innerHTML = "<i class='fas fa-trash fa-lg'></i>"

    newRow.classList.add("field")
    newCol2.classList.add("c1")
    newCol3.classList.add("c2")

   /* newCol2.onclick(function(){
        var c = 0
        if( c == 0)
        {
            c=1
            document.parentElement.
        }
    })*/

    newRow.appendChild(newCol1)
    newRow.appendChild(newCol2)
    newRow.appendChild(newCol3)
    


    document.getElementById("container").appendChild(newRow)

    document.getElementById("task").value = ""

}


