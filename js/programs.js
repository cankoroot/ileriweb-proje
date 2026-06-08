const programs = [
    {
        id: 1,
        name: 'Kardiyovaskül Antrenmanı',
        category: 'cardio',
        duration: '45 Dakika',
        description: 'Kalp sağlığı ve dayanıklılığı artırmak için tasarlanmış yüksek enerji antrenmanı.',
        details: 'Koşu bandında interval antrenmanlar, bisiklet ve eliptik makineler kullanılarak yapılır. Kalori yakımı 400-600 kcal arasındadır.',
        difficulty: 'Orta'
    },
    {
        id: 2,
        name: 'Kuvvet Antrenmanı',
        category: 'strength',
        duration: '60 Dakika',
        description: 'Kas kütlesini artırmak ve vücut şekillendirmesi için ağırlık egzersizleri.',
        details: 'Dumbbell, barbell ve makineler kullanılarak bütün vücut kas gruplarına çalışılır. Profesyonel antrenörün rehberliğinde.',
        difficulty: 'Zor'
    },
    {
        id: 3,
        name: 'Yoga Seansı',
        category: 'flexibility',
        duration: '50 Dakika',
        description: 'Zihin ve beden dengesini sağlayan Hatha Yoga dersi.',
        details: 'Ruh haline, rahatlamaya ve esnekliğe odaklanan temel pozisyonlar öğretilir.',
        difficulty: 'Kolay'
    },
    {
        id: 4,
        name: 'Zumba Dansı',
        category: 'cardio',
        duration: '55 Dakika',
        description: 'Latin müziklerine eşlik eden eğlenceli grup dans antrenmanı.',
        details: 'Eğlendirirken kalori yakmanın harika yolu. Grup ortamında motivasyon ve sosyalleşme sağlanır.',
        difficulty: 'Orta'
    },
    {
        id: 5,
        name: 'Pilates Kursu',
        category: 'flexibility',
        duration: '45 Dakika',
        description: 'Çekirdek kuvvetini ve esnekliği geliştiren mat pilates.',
        details: 'Kontrollü hareketlerle karın, sırt ve pelvis kas grupları çalışılır. Şekillendirme ve postür düzeltmesi.',
        difficulty: 'Kolay'
    },
    {
        id: 6,
        name: 'Cross Training',
        category: 'strength',
        duration: '50 Dakika',
        description: 'Farklı egzersizleri birleştirerek kondisyon ve güç geliştirme.',
        details: 'Ağırlıklar, çalışkan halkalar, ve bodyweight antrenmanlar kombinasyonu. Hem güç hem kardiyo çalışması.',
        difficulty: 'Zor'
    },
    {
        id: 7,
        name: 'Meditasyon & Rahatlama',
        category: 'flexibility',
        duration: '30 Dakika',
        description: 'Stres yönetimi ve zihinsel berraklık için meditasyon seansı.',
        details: 'Rehberli meditasyon, derin nefes alma teknikleri ve progresif kas gevşetme egzersizleri.',
        difficulty: 'Kolay'
    },
    {
        id: 8,
        name: 'Spin Bikes - Bisiklet',
        category: 'cardio',
        duration: '45 Dakika',
        description: 'Müzikle eşlenen statik bisiklet grup antrenmanı.',
        details: 'Yüksek enerjili grup seansında motivasyon ve dirençli antrenman ile maksimum kalori yakımı.',
        difficulty: 'Zor'
    }
];

let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', function () {
    displayPrograms(programs);
});

function displayPrograms(programsToDisplay) {
    const programsGrid = document.getElementById('programsGrid');
    if (!programsGrid) return;

    if (programsToDisplay.length === 0) {
        programsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">Bu kategoride program bulunmamaktadır.</p>';
        return;
    }

    programsGrid.innerHTML = programsToDisplay.map(program => `
        <div class="program-card" onclick="showProgramDetails(${program.id})">
            <div class="program-card-header">
                <h3>${program.name}</h3>
            </div>
            <div class="program-card-body">
                <p class="program-duration">⏱️ ${program.duration}</p>
                <p class="program-description">${program.description}</p>
                <button class="btn btn-primary" style="cursor: pointer;">Ayrıntıları Gör</button>
            </div>
        </div>
    `).join('');
}

function filterPrograms(category) {
    currentFilter = category;

    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(category === 'all' ? 'tümü' : category)) {
            btn.classList.add('active');
        }
    });

    let filtered = programs;
    if (category !== 'all') {
        filtered = programs.filter(p => p.category === category);
    }

    displayPrograms(filtered);
}

function showProgramDetails(programId) {
    const program = programs.find(p => p.id === programId);
    if (!program) return;

    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div style="text-align: center;">
            <h2 style="color: var(--secondary-color); margin-bottom: 1rem;">${program.name}</h2>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem; background-color: #f5f5f5; padding: 1rem; border-radius: 8px;">
                <div>
                    <p style="color: #666; font-size: 0.9rem;">SÜRESİ</p>
                    <p style="font-weight: bold; font-size: 1.2rem;">${program.duration}</p>
                </div>
                <div>
                    <p style="color: #666; font-size: 0.9rem;">ZORLUĞu</p>
                    <p style="font-weight: bold; font-size: 1.2rem;">${program.difficulty}</p>
                </div>
            </div>

            <h3 style="color: var(--secondary-color); margin-bottom: 1rem;">Program Açıklaması</h3>
            <p style="color: #555; line-height: 1.6; margin-bottom: 2rem; text-align: left;">${program.details}</p>

            <div style="display: flex; gap: 1rem; justify-content: center;">
                <button class="btn btn-primary" onclick="addToCart('${program.name}', 0)">Favori Ekle</button>
                <button class="btn btn-secondary" onclick="closeModal()">Kapat</button>
            </div>
        </div>
    `;

    openModal('programModal');
}

console.log('Programs.js Yüklendi');

/* cankoroot tarafından yapıldı */
