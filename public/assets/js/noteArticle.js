document.addEventListener('DOMContentLoaded', () => {
    let elems = document.querySelectorAll('.modal');
    let instance = M.Modal.init(elems);
});



//Fetch post method here

const createNote = () => {
    const notes = document.getElementsByClassName('makeNote')
    
    Array.from(notes).forEach(note => {
        note.addEventListener('click', () => {
            console.log(note)
          
          

       
    })
})

}

const saveNoteEvent = () => {
    document.getElementById('saveNoteEvent').addEventListener('click', () => {
        console.log('add happened')
        let title = document.querySelector('#title').value
        let body = document.querySelector('#body').value
        console.log(title)
        console.log(body)

        fetch('/note', {
            method: 'POST',
        }).then(result => {
            console.log(result)
        }).catch(err => console.log(err))
    })
}

createNote()
saveNoteEvent()