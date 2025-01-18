const formData = {
    email: "",
    message: ""
}


const form = document.querySelector('.feedback-form')

const getFormInfo = () => {
    try {
        const lData = localStorage.getItem("feedback-form-state")
        if(lData) {
            const parsedInfo = JSON.parse(lData)
            formData.email = parsedInfo.email || ""
            formData.message = parsedInfo.message || ""

            form.elements.email.value = formData.email;
            form.elements.message.value = formData.message;
        }
    }
    catch(error) {
        console.log('Error reading info from lstr')
    }
}

getFormInfo()

const handleInput = (event) => {
    if(event.target.name) {
        const {name, value} = event.target;
        formData[name] = value.trim()
        localStorage.setItem("feedback-form-state", JSON.stringify(formData))
    }
}


const handleSubmit = (event) => {
    event.preventDefault()

    if(!formData.email || !formData.message) {
        alert("Fill please all fields")
        return;
    }

    console.log("Info:", formData)

    localStorage.removeItem("feedback-form-state")
    formData.email = ""
    formData.message = ""

    form.elements.email.value = ""
    form.elements.message.value = ""
    form.reset()
}

form.addEventListener('input', handleInput)
form.addEventListener('submit', handleSubmit)