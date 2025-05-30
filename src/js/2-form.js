
let formData = {
    email: "",
    message: ""
};
const storageKey = "feedback-form-state"; 
const form = document.querySelector(".feedback-form");




const checkStorage = localStorage.getItem(storageKey);
if (checkStorage) {
    formData = JSON.parse(checkStorage);
    if (formData.email) {
       form.elements.email.value = formData.email
    }
    if (formData.message) {
        form.elements.message.value = formData.message;
    }
}



form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value.trim();
    localStorage.setItem(storageKey, JSON.stringify(formData))
});




form.addEventListener('submit', e => {
    e.preventDefault();

    if (formData.email === "" || formData.message === "") {
        alert("Fill please all fields");
        return;
    }
    console.log(formData);
    localStorage.removeItem(storageKey);
    formData = { email: '', message: '' };
    form.reset()
});

