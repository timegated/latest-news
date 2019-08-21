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
            document.getElementById('articles').style = 'display:none';
        } else {
            console.log('error')
        }
    })

})