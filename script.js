const body= document.querySelector('body')
const buttonarray= document.querySelectorAll('button')

buttonarray.forEach(function (b){
    b.addEventListener('click', function (e){
        if(e.target.id=== 'grey')
            body.style.backgroundColor=e.target.id

    })
})