const addButton=document.querySelector('#add');
  
const updateLocalSData=()=>{
    const textAreaData=document.querySelectorAll('textarea');
    const notes=[];

    textAreaData.forEach((el)=>{
        return notes.push(el.value);
    })
    localStorage.setItem('key',JSON.stringify(notes));
}


const addNewnote=(text='')=>{
    const note=document.createElement('div');
    note.classList.add('note');
    const htmlData =`
    <div class="operation">
     <button class="edit"><i class="fas fa-edit"></i></button>
     <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

   <div class="main ${text? '': 'hidden'}"></div>
   <textarea class="${text?'hidden' : ''}"></textarea>`;

   note.insertAdjacentHTML('afterbegin',htmlData);
//geting the references
const editBtn=note.querySelector('.edit');
const delBtn=note.querySelector('.delete');
const mainDiv=note.querySelector('.main');
const textarea=note.querySelector('textarea');

//delete note

delBtn.addEventListener('click',()=>{
    note.remove();
    updateLocalSData();
});
//toggle using elit btn

textarea.value=text;
mainDiv.innerHTML=text;

editBtn.addEventListener('click',()=>{
    mainDiv.classList.toggle('hidden');
    textarea.classList.toggle('hidden');
})

textarea.addEventListener('change',(event)=>{
     const value=event.target.value;
     mainDiv.innerHTML=value;

     updateLocalSData();
})
//it appends a node as the last child of a node
   document.body.appendChild(note);
}
//getting data back from local storage
const notes1=JSON.parse(localStorage.getItem('key'));
if(notes1){
    notes1.forEach((note)=>addNewnote(note));
};
addButton.addEventListener('click',()=>addNewnote());