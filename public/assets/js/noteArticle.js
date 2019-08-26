document.addEventListener('DOMContentLoaded', () => {
    let elems = document.querySelectorAll('.modal');
    let instance = M.Modal.init(elems);
});



//Fetch post method here

const createNote = () => {
    const notes = document.getElementsByClassName('makeNote')
    
    Array.from(notes).forEach(note => {
        note.addEventListener('click', (e) => {
            console.log(note)
            console.log(e.currentTarget.getAttribute('data-id'))
            saveNoteEvent(e.currentTarget.getAttribute('data-id'))
          

       
    })
})

}

const saveNoteEvent = (id) => {
    document.getElementById('saveNoteEvent').addEventListener('click', (e) => {
        console.log('add happened')

       
        const note = {
            _id: id,
            title: document.querySelector('#title').value,
            body: document.querySelector('#body').value
        }
      
        console.log(note._id)

        fetch('/note', {
            method: 'POST',
            body:JSON.stringify(note),
            headers: {
                'Content-Type' : 'application/json'
            }
        }).then(result => {
            console.log(result)
        }).catch(err => console.log(err))
    })
}

createNote()
