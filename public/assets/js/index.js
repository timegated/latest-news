
const getArticles = () => {
    document.getElementById('scrapeNewArticles').addEventListener('click', () => {
        console.log('get new articles was clicked')
    
        
        fetch('/scrape/javascript', {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        }).then(response => {
            if(response) {
                console.log('data-sent')
                window.location.href = '/'
                
                
            } else {
                console.log('error')
            }
        })
    
    })
}
// getArticles()

//Update Request
//Creating an array with all objects with class name Save, adding an event listener to each ID
const saveArticle = () => {
    const articles = document.getElementsByClassName('save')
  
    Array.from(articles).forEach(article => {
      article.addEventListener('click', () => {
      
         
         let saved = {
             id: article.dataset.id,
         }
         fetch('/articles/put/' + saved.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if(response) {
                
                location.reload()
            } else {
               console.log(err)
            }
            })
        })
        
    
    })
  
}
saveArticle()


document.addEventListener('DOMContentLoaded', () => {
    let elems = document.querySelectorAll('.modal');
    let instance = M.Modal.init(elems);
});



//Fetch post method here

// const createNote = () => {
//     const notes = document.getElementsByClassName('makeNote')
    
//     Array.from(notes).forEach(note => {
//         note.addEventListener('click', () => {
//             console.log(note)
//             let title = document.getElementsByClassName('title')
//             console.log(title)
          

       
//     })
// })

// }

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


saveNoteEvent()