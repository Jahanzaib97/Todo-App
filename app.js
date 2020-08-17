var list = document.getElementById("list")

function addtodo(){
    var todo_item = document.getElementById("todo-items")

    //creating li tag with text node
    var li = document.createElement("li")
    var litext = document.createTextNode(todo_item.value)
    li.appendChild(litext)

    //creating del button
    var delbtn = document.createElement("button")
    var deltext = document.createTextNode("Delete")
    delbtn.appendChild(deltext)
    li.appendChild(delbtn)
    delbtn.setAttribute("class","btn")
    delbtn.setAttribute("onclick","deleteitem(this)")

    //creating edit button
    var editbtn = document.createElement("button")
    var edittext = document.createTextNode("Edit")
    editbtn.appendChild(edittext)
    li.appendChild(editbtn)
    editbtn.setAttribute("class","btn")
    editbtn.setAttribute("onclick","edititem(this)")
    
    list.appendChild(li)
    todo_item.value = ""
    console.log(li)
}

function deleteitem(j){
    j.parentNode.remove()

}
function edititem(j){
    var edit = prompt("Enter edit value",nod)
    var nod = j.parentNode.firstChild.nodeValue
    
    j.parentNode.firstChild.nodeValue = edit

}
function deleteall(){
    list.innerHTML = ""
}