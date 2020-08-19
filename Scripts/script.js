
// Elements
const inputElements = document.querySelectorAll('.input');

// Focus function
function focusFunction() {
  let parent = this.parentNode.parentNode;
  parent.classList.add('focus');
}

function unfocusFunction() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove('focus');
  }
}

// Focus Event listener
inputElements.forEach(input => {
  input.addEventListener('focus', focusFunction);
  input.addEventListener('blur', unfocusFunction);
})