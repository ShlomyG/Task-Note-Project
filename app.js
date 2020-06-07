var inTask = document.getElementById("yourNote");
var inDate = document.getElementById("yourDate");
var inTime = document.getElementById("yourTime");
var addTask = document.getElementById("mySubmit");
var panelNotes = document.getElementById("Panel");
var counterId =0
var NoteArr=[]

function ObjNotes(id,task,date,time){
    this.id = id
    this.task = task
    this.date = date
    this.time = time

}

window.onload =function () {
    var temp = localStorage.getItem("allNotes");
    if (!temp){return}
   else{
     NoteArr = JSON.parse(temp);
    for (var i = 0; i <NoteArr.length; i++) {
        NoteCreate(NoteArr[i].task,NoteArr[i].date,NoteArr[i].time);}
    counterId =NoteArr.length
    var span = document.querySelectorAll('span')
    for (var i = 0; i < span.length; i++) {
        span[i].id=i
    }
    
}
    

addTask.addEventListener('click',ToAddTask);

function ToAddTask(e) {   
    e.preventDefault();
  
    if (inTask.value =="" || inDate.value == "")
    {return}
 
    else{
        NoteCreate(inTask.value,inDate.value,inTime.value);
        var temp = new ObjNotes(counterId,inTask.value,inDate.value,inTime.value);
        NoteArr.push(temp)
        counterId++  
        localStorage.setItem("allNotes", JSON.stringify(NoteArr))
        }
}
}

function NoteCreate(Task,Date,Time){
    var div =document.createElement('div');
div.classList='addTask'
var span = document.createElement('span')
span.textContent = `❌`
span.setAttribute('id',counterId)
span.addEventListener('click', function()
{NoteArr.splice(span.id,1);
     div.remove();
     for (var i = 0; i < NoteArr.length; i++) {
        NoteArr[i].id = i
        document.querySelectorAll('span')[i].id = i}
    localStorage.setItem('allNotes', JSON.stringify(NoteArr))
    counterId--})
div.appendChild(span)
var pTask = document.createElement('p')
pTask.textContent = `${Task}`
div.appendChild(pTask)
var pDate = document.createElement('p')
pDate.textContent = `📅 ${Date}`
div.appendChild(pDate)
var pTime = document.createElement('p')
pTime.textContent = `⏱ ${Time}`
div.appendChild(pTime)
panelNotes.appendChild(div)}


