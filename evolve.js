fetch('./components/header.html') .then(response => { return response.text() })
.then(data => { document.querySelector('header').innerHTML = data; });
fetch('./components/footer.html') .then(response => { return response.text() })
.then(data => { document.querySelector('footer').innerHTML = data; }); function
menu() { document.getElementById('dropdown').classList.toggle('show');
document.getElementById('menu-btn').classList.toggle('showBtn'); }
