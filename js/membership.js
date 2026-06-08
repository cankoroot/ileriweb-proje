document.addEventListener('DOMContentLoaded', function () {
    const membershipForm = document.getElementById('membershipForm');
    if (membershipForm) {
        membershipForm.addEventListener('submit', submitMembership);
    }
    updateCartDisplay();
});

function submitMembership(event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const age = document.getElementById('age').value;
    const packageSelect = document.getElementById('packageSelect').value;
    const message = document.getElementById('message').value;
    const agreement = document.getElementById('agreement').checked;

    clearErrors();

    let isValid = true;

    if (!fullname || fullname.length < 3) {
        showError('fullnameError', 'Ad Soyad en az 3 karakter olmalıdır');
        isValid = false;
    }

    if (!validateEmail(email)) {
        showError('emailError', 'Geçerli bir e-mail giriniz');
        isValid = false;
    }

    if (!validatePhone(phone)) {
        showError('phoneError', 'Geçerli bir telefon numarası giriniz (en az 10 hane)');
        isValid = false;
    }

    if (age < 18 || age > 120) {
        showError('ageError', 'Yaş 18 ile 120 arasında olmalıdır');
        isValid = false;
    }

    if (!packageSelect) {
        showError('packageError', 'Lütfen bir paket seçiniz');
        isValid = false;
    }

    if (!agreement) {
        showError('agreementError', 'Şartları kabul etmelisiniz');
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    const membership = {
        id: Date.now(),
        fullname: fullname,
        email: email,
        phone: phone,
        age: age,
        package: packageSelect,
        message: message,
        registeredAt: new Date().toLocaleDateString('tr-TR'),
        status: 'Beklemede'
    };

    let memberships = getFromLocalStorage('gymMemberships') || [];
    memberships.push(membership);
    saveToLocalStorage('gymMemberships', memberships);

    clearCart();

    const successMessage = document.getElementById('successMessage');
    const form = document.getElementById('membershipForm');

    form.style.display = 'none';
    successMessage.style.display = 'block';

    setTimeout(function () {
        form.style.display = 'block';
        successMessage.style.display = 'none';
        document.getElementById('membershipForm').reset();
    }, 3000);
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
    }
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.textContent = '';
    });
}

console.log('Membership.js Yüklendi');

/* cankoroot tarafından yapıldı */
