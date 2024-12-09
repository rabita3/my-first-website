window.onload = function() {
    alert('Welcome to my website!');
};

function greetUser() {
    var name = prompt("Enter your name:");
    if (name) {
        document.getElementById('greeting').innerText = 'Hello, ' + name + '!';
    }
}
