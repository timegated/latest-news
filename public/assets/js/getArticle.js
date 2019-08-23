
const getArticles = () => {
    document.getElementById('scrapeNewArticles').addEventListener('click', () => {
        console.log('get new articles was clicked')
    
        
        fetch('/scrape/javascript', {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        }).then(response => {
            console.log(response)
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


