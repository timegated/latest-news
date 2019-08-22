document.getElementById('scrapeNewArticles').addEventListener('click', () => {
    // console.log('get new articles was clicked')

    // document.getElementById('articles').innerHTML = ""
    // location.reload()
    fetch('/scrape/javascript', {
        method: 'GET',
        headers: {
            'Content-Type':'application/json'
        }
    }).then(response => {
        if(response) {
            // console.log('data-sent')
            window.location.href = '/'
            
            
        } else {
            // console.log('error')
        }
    })

})

//Update Request
//Creating an array with all objects with class name Save, adding an event listener to each ID
const saveArticle = () => {
    const articles = document.getElementsByClassName('save')
    // // console.log(articles)
    Array.from(articles).forEach(article => {
      article.addEventListener('click', () => {
         
         let saved = {
             id: article.dataset.id,
         }

        // console.log(saved)
        fetch('/articles/put/' + saved.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if(response) {
                // console.log(response)
                location.reload()
            } else {
                // console.log('error')
            }
        })
    })
  })
}
saveArticle()

//Fetch post method here

const createNote = () => {
    const articles = document.getElementsByClassName('makeNote')

    Array.from(articles).forEach(article => {
        article.addEventListener('click', () => {
            // console.log('makeNote was clicked')
        })
    })
}

createNote()