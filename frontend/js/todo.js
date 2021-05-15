function newTask(){
    const toAdd = document.getElementById("container")
    const gt = document.getElementById("task").value

    var newRow = document.createElement("div")
    var newCol1 = document.createElement("span")
    var newCol2 = document.createElement("span")
    var newCol3 = document.createElement("span")
    var newLine = document.createElement("br")
    var newLine1 = document.createElement("br")

    newCol1.innerHTML = gt
    newCol2.innerHTML = "<i class='fas fa-check-circle fa-lg'></i>"
    newCol3.innerHTML = "<i class='fas fa-trash fa-lg'></i>"

    newRow.classList.add("field")
    newCol2.classList.add("c1")
    newCol3.classList.add("c2")
    newCol1.classList.add("matter")
    
    newRow.appendChild(newCol1)
    newRow.appendChild(newCol3)
    newRow.appendChild(newCol2)
    newRow.appendChild(newLine)
    newRow.appendChild(newLine1)

    $(newCol2).click(function(){
         $(this).parent().addClass("checked")
    
    })

    $(newCol3).click(function()
    {
        $(this).parent().remove()
    })
    


    document.getElementById("container").appendChild(newRow)

    document.getElementById("task").value = ""

}


