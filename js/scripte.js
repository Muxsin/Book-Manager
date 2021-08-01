var item = document.getElementsByClassName('item');

for(let i = 0; i < item.length; i++) {
    item[i].addEventListener('mouseover', function() {
        if(item[i].parentElement.classList[0] !== 'projects') {
            item[i].children[0].children[0].children[0].classList.add('fill');
            item[i].children[0].children[2].children[0].classList.remove('not-fill');
            item[i].children[0].children[2].children[0].classList.add('fill');
        } else if(item[i].parentElement.classList[0] === 'projects') {
            item[i].children[0].classList.add('fill');
        }
    })
}

for(let i = 0; i < item.length; i++) {
    item[i].addEventListener('mouseout', function() {
        if(item[i].parentElement.classList[0] !== 'projects') {
            item[i].children[0].children[0].children[0].classList.remove('fill');
            item[i].children[0].children[2].children[0].classList.remove('fill');
            item[i].children[0].children[2].children[0].classList.add('not-fill');
        }
        else if(item[i].parentElement.classList[0] === 'projects') {
            item[i].children[0].classList.remove('fill');
        }
    })
}