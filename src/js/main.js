// --- KARUZELA W HERO ---
function setupHeroCarousel() {
  const slides = document.querySelectorAll('.hero-carousel .slide');
  let currentSlide = 0;

  if (slides.length === 0) return;

  // Funkcja zmieniająca slajdy
  function nextSlide() {
    // Ukrywamy obecny slajd
    slides[currentSlide].classList.remove('active');

    // Obliczamy indeks następnego slajdu
    currentSlide = (currentSlide + 1) % slides.length;

    // Pokazujemy nowy slajd
    slides[currentSlide].classList.add('active');
  }

  // Zmieniaj slajd co 5 sekund
  setInterval(nextSlide, 3000);
}

// --- PŁYNNE PRZEWIJANIE DO FORMULARZA ---
// Ta funkcja zostanie wywołana przez przyciski z atrybutem onclick="scrollToForm()"
window.scrollToForm = function () {
  const formSection = document.getElementById('contact-form'); // Upewnij się, że Twoja sekcja z formularzem ma to ID
  if (formSection) {
    formSection.scrollIntoView({ behavior: 'smooth' });
  } else {
    // Jeśli nie masz jeszcze sekcji formularza, przewiń na sam dół strony
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
};

// Inicjalizacja po załadowaniu strony
document.addEventListener('DOMContentLoaded', () => {
  setupHeroCarousel();

  // Obsługa przycisków "Kup teraz", które nie mają onclick w HTML
  const buyButtons = document.querySelectorAll('.buy-now, .cta');
  buyButtons.forEach((button) => {
    button.addEventListener('click', () => {
      window.scrollToForm();
    });
  });
});

const form = document.getElementById('adoption-form');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Zatrzymuje przeładowanie strony

    // Zbieranie danych (do podglądu w konsoli)
    const formData = new FormData(form);
    console.log('Dane wysyłki:', Object.fromEntries(formData));

    // Efekt wizualny po wysłaniu
    form.innerHTML = `
      <div style="text-align: center; padding: 40px 0;">
        <h3 style="color: #ff914d;">Dziękujemy, Miau! 🐾</h3>
        <p>Twoje zgłoszenie zostało wysłane. Nasz projektant odezwie się w ciągu 24h.</p>
      </div>
    `;
  });
}
