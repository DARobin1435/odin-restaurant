export default function() {

    let title = document.createElement("h1");
    title.innerText = "Contact Us";

    const contactForm = document.createElement("form");
    const contactFields = ['Name', 'Message'];

    contactFields.forEach(contactField => {
        let currentLabel = document.createElement("label");
        let currentInput;
        
        currentLabel.innerText = contactField;
        contactForm.appendChild(currentLabel);

        contactField.length > 4? currentInput = document.createElement("textarea"):
        currentInput = document.createElement("input"); 

        contactForm.appendChild(currentInput);
    })


    return {

        'title': title,
        'text': contactForm

    }

}