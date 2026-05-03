document.getElementById('logon').addEventListener('submit', checkForm);
function checkForm(event){
    event.preventDefault();
    var el = document.getElementById('logon');
    var name = el.login.value;
    var pass = el.pass.value;
    console.log(name + pass);
    alert('Всё ок')
    window.location='mainmenu.html';
    return false;
}
