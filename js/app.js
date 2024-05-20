function goBack() {
    window.history.back();
}
function checkInputLength() {
    const maxLength = 20;
    const inputField = document.getElementById('artist');
    const warningMessage = document.getElementById('warningMessage');

    if (inputField.value.length > maxLength) {
        warningMessage.style.display = 'block';
    } else {
        warningMessage.style.display = 'none';
    }
}
document.querySelectorAll('.addButton').forEach((button, index) => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        this.classList.toggle('added');
        let classValue = this.classList.contains('added') ? 'added' : '';
        sessionStorage.setItem('buttonClass_' + index, classValue);
    });
});

window.addEventListener('load', function() {
    document.querySelectorAll('.addButton').forEach((button, index) => {
        let savedClass = sessionStorage.getItem('buttonClass_' + index);
        if (savedClass) {
            if (savedClass === 'added') {
                button.classList.add('added');
            } else {
                button.classList.remove('added');
            }
        }
    });
});