const trainers = [
    {
        id: 1,
        name: 'Ahmet Yılmaz',
        specialty: 'Kuvvet Antrenmanı & Bodybuilding',
        experience: '12 Yıl',
        description: 'Uluslararası sertifikalı antrenör, binlerce kişinin vücut şekillendirmesine yardımcı olmuştur.',
        rating: 4.9,
        sessions: 156
    },
    {
        id: 2,
        name: 'Fatma Demir',
        specialty: 'Yoga & Meditasyon',
        experience: '8 Yıl',
        description: 'Sakin ve motive edici tarzıyla, öğrencilerini zihinsel ve fiziksel barış bulmasında yardımcı olur.',
        rating: 4.8,
        sessions: 128
    },
    {
        id: 3,
        name: 'Mustafa Kara',
        specialty: 'Kardiyovaskül & HIIT',
        experience: '10 Yıl',
        description: 'Enerjik ve motive edici antrenör, dayanıklılık ve çabuk sonuç verir.',
        rating: 4.7,
        sessions: 142
    },
    {
        id: 4,
        name: 'Ayşe Yüksel',
        specialty: 'Pilates & Esneklik',
        experience: '7 Yıl',
        description: 'Detaylı ve dikkatli tarzı ile postür düzeltmesi ve çekirdek güç geliştirmede uzman.',
        rating: 4.9,
        sessions: 135
    },
    {
        id: 5,
        name: 'Emre Aydın',
        specialty: 'Spor Beslenme & Koçluk',
        experience: '9 Yıl',
        description: 'Antrenman ve beslenme programlarını birleştirerek bütünsel yaklaşım sunmaktadır.',
        rating: 4.8,
        sessions: 118
    },
    {
        id: 6,
        name: 'Zeynep Şahin',
        specialty: 'Zumba & Grup Dansları',
        experience: '6 Yıl',
        description: 'Canlı ve eğlenceli ortamda, katılımcıları dans etmeyi ve hareketi sevdirmektedir.',
        rating: 4.7,
        sessions: 146
    }
];

let selectedTrainerId = null;

document.addEventListener('DOMContentLoaded', function () {
    displayTrainers();
});

function displayTrainers() {
    const trainersGrid = document.getElementById('trainersGrid');
    if (!trainersGrid) return;

    trainersGrid.innerHTML = trainers.map(trainer => `
        <div class="trainer-card" onclick="showTrainerDetails(${trainer.id})">
            <div class="trainer-avatar">${trainer.emoji || '💪'}</div>
            <div class="trainer-info">
                <h3>${trainer.name}</h3>
                <p class="trainer-specialty">${trainer.specialty}</p>
                <p>${trainer.experience} Deneyim</p>
                <div style="margin-bottom: 1rem;">
                    <span style="color: var(--primary-color); font-size: 1.1rem;">⭐ ${trainer.rating}</span>
                    <span style="color: #999; font-size: 0.85rem;">(${trainer.sessions} ders)</span>
                </div>
                <button class="btn btn-primary" style="cursor: pointer;">Detaylar</button>
            </div>
        </div>
    `).join('');
}

function showTrainerDetails(trainerId) {
    const trainer = trainers.find(t => t.id === trainerId);
    if (!trainer) return;

    selectedTrainerId = trainerId;

    const modalBody = document.getElementById('trainerModalBody');
    modalBody.innerHTML = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <div style="font-size: 4rem; margin-bottom: 1rem;">${trainer.emoji || '💪'}</div>
            <h2 style="color: var(--secondary-color); margin-bottom: 0.5rem;">${trainer.name}</h2>
            <p style="color: var(--primary-color); font-weight: 600; margin-bottom: 1rem;">${trainer.specialty}</p>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; margin-bottom: 2rem; background-color: #f5f5f5; padding: 1rem; border-radius: 8px;">
                <div>
                    <p style="color: #666; font-size: 0.9rem;">DENEYİM</p>
                    <p style="font-weight: bold; font-size: 1.1rem;">${trainer.experience}</p>
                </div>
                <div>
                    <p style="color: #666; font-size: 0.9rem;">PUAN</p>
                    <p style="font-weight: bold; font-size: 1.1rem;">⭐ ${trainer.rating}</p>
                </div>
                <div>
                    <p style="color: #666; font-size: 0.9rem;">TAMAMLANAN</p>
                    <p style="font-weight: bold; font-size: 1.1rem;">${trainer.sessions} Ders</p>
                </div>
            </div>

            <h3 style="color: var(--secondary-color); margin-bottom: 1rem;">Hakkında</h3>
            <p style="color: #555; line-height: 1.6; text-align: left;">${trainer.description}</p>
        </div>
    `;

    openModal('trainerModal');
}

function bookAppointment(event) {
    event.preventDefault();

    const name = document.getElementById('appointmentName').value;
    const email = document.getElementById('appointmentEmail').value;
    const date = document.getElementById('appointmentDate').value;

    if (!name || !email || !date) {
        alert('Lütfen tüm alanları doldurunuz.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Lütfen geçerli bir e-mail adresi giriniz.');
        return;
    }

    const trainer = trainers.find(t => t.id === selectedTrainerId);
    const appointment = {
        id: Date.now(),
        trainerId: selectedTrainerId,
        trainerName: trainer.name,
        name: name,
        email: email,
        date: date,
        bookedAt: new Date().toLocaleDateString('tr-TR')
    };

    let appointments = getFromLocalStorage('gymAppointments') || [];
    appointments.push(appointment);
    saveToLocalStorage('gymAppointments', appointments);

    alert(`Randevu başarıyla alındı!\nAntrenör: ${trainer.name}\nTarih: ${date}`);

    document.getElementById('appointmentForm').reset();
    closeTrainerModal();
}

console.log('Trainers.js Yüklendi');

/* cankoroot tarafından yapıldı */
