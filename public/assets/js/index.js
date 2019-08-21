const show = element => element.style.display = 'block';
const hide = element => element.style.display = 'none';
const toggle = element => {
    if(window.getComputedStyle(element).display === 'block') {
        hide(element)
        return;
    }
    show(element)
}
document.getElementById('javascript').addEventListener('click', function(event) {
    if(!event.target.classList.contains('toggle')) return;

    event.preventDefault();

    const content = document.querySelector(event.target.hash)

    if(!content) return;

    toggle(content);
    // console.log('this is clicked')
    // fetch('/scrape/javascript', {
    //     method: 'GET',
    //     header: {
    //         'Content-Type': 'image/jpeg'
    //     }
    // }).then(response => {
    //     if(response) {
    //         console.log('data-sent')
    //     } else {
    //         console.log('error')
    //     }
    // })
}, false)

document.getElementById('scrapeNewArticles').addEventListener('click', () => {
    console.log('get new articles was clicked')
})