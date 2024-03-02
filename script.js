const notesContainer = document.querySelector('.notes-container');
const Creatbtn = document.querySelector('.btn');
const notes = document.querySelectorAll('.input-box');

function showNotes(){
  notesContainer.innerHTML = localStorage.getItem("notes")
}


 function updateStorage(){
  localStorage.setItem("notes" , notesContainer.innerHTML);
 }
 



Creatbtn.addEventListener("click",()=>{
 
  let inputBox = document.createElement("p");
  let img = document.createElement('img');
  
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", 'true');
  img.src = "images/delete.png"
  notesContainer.appendChild(inputBox).appendChild(img);

})

notesContainer.addEventListener("click",(e)=>{
  if(e.target.tagName === 'IMG'){
    e.target.parentElement.remove();
    updateStorage();
  }else if(e.target.tagName === 'p'){
    notes = document.querySelectorAll(".input-box");
    notes.forEach(note =>{
       note.onkeyup = function(){
        updateStorage();
       }
    })
  }
});

showNotes();

