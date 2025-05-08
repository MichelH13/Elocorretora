// Dados dos carros
const carInfo = [
    {
        title: "Mercedes-Benz C300 2023",
        description: "Veículo em excelente estado de conservação, único dono, revisões feitas na concessionária. Equipado com teto solar panorâmico, bancos em couro, sistema de som premium, assistente de estacionamento, câmera 360°, faróis full LED e muito mais. Venha conferir este belíssimo veículo em nossa loja!",
        year: "2023",
        km: "15.000",
        fuel: "Gasolina",
        transmission: "Automático",
        color: "Prata"
    },
    {
        title: "Toyota Hilux SRX 2022",
        description: "Picape robusta e confiável, com apenas 30.000 km rodados. Possui tração 4x4, motor diesel potente, interior espaçoso e confortável com acabamento premium. Equipada com multimídia com tela de 8 polegadas, controle de estabilidade, assistente de subida, bancos em couro e muito mais!",
        year: "2022",
        km: "30.000",
        fuel: "Diesel",
        transmission: "Automático",
        color: "Branco"
    },
    {
        title: "BMW X3 M40i 2023",
        description: "SUV esportivo de luxo com motor 3.0 turbo de 387cv. Aceleração de 0-100km/h em apenas 4,5 segundos. Interior sofisticado com acabamento premium, sistema de entretenimento de última geração, teto solar panorâmico, bancos esportivos em couro e sistema de som Harman Kardon.",
        year: "2023",
        km: "8.000",
        fuel: "Gasolina",
        transmission: "Automático",
        color: "Azul"
    },
    {
        title: "Honda Civic Touring 2022",
        description: "Sedan médio com design moderno e arrojado. Motor 1.5 turbo econômico e potente. Interior refinado com acabamento de alta qualidade, central multimídia com tela de 9 polegadas, carregador por indução, teto solar, bancos em couro e pacote completo de segurança Honda Sensing.",
        year: "2022",
        km: "22.000",
        fuel: "Flex",
        transmission: "CVT",
        color: "Cinza"
    }
];

// Elementos do DOM
const carousel = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// Índice atual do carrossel
let currentIndex = 0;

// Função para atualizar as informações do carro
function updateCarInfo(index) {
    const carTitle = document.getElementById('car-title');
    const carDescription = document.getElementById('car-description');
    const details = document.querySelectorAll('.car-detail');
    
    carTitle.textContent = carInfo[index].title;
    carDescription.textContent = carInfo[index].description;
    
    details[0].innerHTML = `<i class="fas fa-calendar"></i> Ano: ${carInfo[index].year}`;
    details[1].innerHTML = `<i class="fas fa-tachometer-alt"></i> Km: ${carInfo[index].km}`;
    details[2].innerHTML = `<i class="fas fa-gas-pump"></i> Combustível: ${carInfo[index].fuel}`;
    details[3].innerHTML = `<i class="fas fa-cogs"></i> Câmbio: ${carInfo[index].transmission}`;
    details[4].innerHTML = `<i class="fas fa-palette"></i> Cor: ${carInfo[index].color}`;
}

// Função para mostrar um slide específico
function showSlide(index) {
    if (index < 0) {
        currentIndex = items.length - 1;
    } else if (index >= items.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    
    const offset = -currentIndex * 100 + '%';
    carousel.style.transform = 'translateX(' + offset + ')';
    updateCarInfo(currentIndex);
}

// Event listeners para os botões de navegação
prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

// Mudar slide automaticamente a cada 5 segundos
setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);

// Inicializar o carrossel
document.addEventListener('DOMContentLoaded', () => {
    showSlide(0);
});