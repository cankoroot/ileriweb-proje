document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', submitContact);
    }
});

function submitContact(event) {
    event.preventDefault();

    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    clearContactErrors();

    let isValid = true;

    if (!name || name.length < 3) {
        showContactError('contactNameError', 'Ad en az 3 karakter olmalıdır');
        isValid = false;
    }

    if (!validateEmail(email)) {
        showContactError('contactEmailError', 'Geçerli bir e-mail giriniz');
        isValid = false;
    }

    if (!subject || subject.length < 5) {
        showContactError('subjectError', 'Konu en az 5 karakter olmalıdır');
        isValid = false;
    }

    if (!message || message.length < 10) {
        showContactError('contactMessageError', 'Mesaj en az 10 karakter olmalıdır');
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    const contactMessage = {
        id: Date.now(),
        name: name,
        email: email,
        subject: subject,
        message: message,
        sentAt: new Date().toLocaleDateString('tr-TR')
    };

    let contactMessages = getFromLocalStorage('gymContactMessages') || [];
    contactMessages.push(contactMessage);
    saveToLocalStorage('gymContactMessages', contactMessages);

    const successMessage = document.getElementById('contactSuccessMessage');
    const form = document.getElementById('contactForm');

    form.style.display = 'none';
    successMessage.style.display = 'block';

    setTimeout(function () {
        form.style.display = 'block';
        successMessage.style.display = 'none';
        document.getElementById('contactForm').reset();
    }, 3000);
}

function showContactError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
    }
}

function clearContactErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.textContent = '';
    });
}

console.log('Contact.js Yüklendi');

/* cankoroot tarafından yapıldı */
