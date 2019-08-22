
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
getArticles()

//Update Request
//Creating an array with all objects with class name Save, adding an event listener to each ID
const saveArticle = () => {
    const articles = document.getElementsByClassName('save')
    // console.log(articles)
    Array.from(articles).forEach(article => {
      article.addEventListener('click', () => {
         
         let saved = {
             id: article.dataset.id,
         }

        console.log(saved)
    
    })
  })
}
saveArticle()

//Fetch post method here

const createNote = () => {
    const notes = document.getElementsByClassName('makeNote')

    Array.from(notes).forEach(note => {
        note.addEventListener('click', () => {
            
        fetch('/articles/put/' + saved.id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if(response) {
                
                location.reload()
            } else {
               
            }
            })
        })
    })
}

createNote()