var addbutton =document.getElementById("addtask")
var taskinput =document.getElementById("taskinput")
var tasklist =document.getElementById("tasklist")
loadtasks();
function addtask(){
var task = taskinput.value.trim();
if (task){

    createtastelement(task);
    taskinput.value = '';
}else{
    alert("Please enter a task!");

}
}
addbutton.addEventListener("click",addtask);
function createtastelement (task){
var listitem = document.createElement("li");
listitem.textContent=task;

var deletebutton=document.createElement("button");
deletebutton.textContent="Delete";

deletebutton.className="DeleteTask";
listitem.appendChild(deletebutton);
tasklist.appendChild(listitem);


deletebutton.addEventListener("click",function(){
tasklist.removeChild(listitem);
savetasks();
});


}
function savetasks(){
let tasks = [];
tasklist.querySelectorAll("li").forEach(function(item){
tasks.push(item.textContent.replace("Delete",'').trim);
});
localStorage.setItem("tasks", JSON .stringify(tasks));
}
function loadtasks(){
var tasks =JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach(createtastelement);
}