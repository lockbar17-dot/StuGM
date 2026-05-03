const butt = document.getElementById('morebut');
const creat = document.getElementById('create');
const btcr = document.getElementById('farm');
butt.addEventListener('click',opens);
btcr.addEventListener('submit',createforum);
function createforum(event){
    let cont = document.getElementById('pp');
    event.preventDefault();
    const namecr = document.getElementById('name');
    let forumcr = document.createElement('a');
    forumcr.className='dd';
    forumcr.innerHTML=namecr.value;
    cont.appendChild(forumcr);
    forumcr.href='';
    creat.style.display = 'none';

}
function opens(){
    if (creat.style.display === 'block') {
    creat.style.display = 'none';
    } else {
        creat.style.display = 'block';
    }
    
}

