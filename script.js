// ===== Menu Data =====
const menuItems = [
  {
    id: 'latte',
    name: "Signature Latte",
    price: "¥550",
    image: "images/latte.png",
    description: "Smooth espresso with creamy steamed milk",
    longDescription: "Our signature latte is crafted with premium espresso and perfectly steamed milk. The rich, smooth flavor profile has been compared to the finest coffee shops in Australia. Each cup is made with care and attention to detail.",
    popular: true,
    category: "coffee",
    tags: ["coffee", "popular"]
  },
  {
    id: 'matcha',
    name: "Matcha Latte",
    price: "¥600",
    image: "images/matcha.png",
    description: "Premium Uji Kyoto matcha blended with silky milk",
    longDescription: "Experience the best matcha in Japan, sourced directly from Uji, Kyoto. This premium grade matcha is whisked to perfection and blended with creamy milk for a smooth, authentic taste that has delighted customers from around the world.",
    popular: true,
    category: "coffee",
    tags: ["matcha", "popular"]
  },
  {
    id: 'pour-over',
    name: "Pour-Over Coffee",
    price: "¥650",
    image: "images/pour-over-coffee.png",
    description: "Single-origin beans, hand-poured for perfection",
    longDescription: "Join our pour-over coffee workshop and learn the art of hand-poured coffee. Our expert baristas guide you through the process using single-origin beans from Ethiopia, Honduras, Colombia, and Nicaragua. Available in multiple languages.",
    popular: false,
    category: "coffee",
    tags: ["coffee", "specialty"]
  },
  {
    id: 'smores-hot-chocolate',
    name: "S'more Hot Chocolate",
    price: "¥650",
    image: "images/buat-kopi-itu-menjadi-lebih-aestetic.jpeg",
    description: "Rich hot chocolate with s'mores toppings",
    longDescription: "A decadent treat featuring rich, velvety hot chocolate topped with toasted marshmallow and graham cracker crumbs. Perfect for a cozy afternoon treat.",
    popular: false,
    category: "coffee",
    tags: ["dessert", "drinks"]
  },
  {
    id: 'waffle',
    name: "Belgian Waffle",
    price: "¥500",
    image: "images/waffle.png",
    description: "Freshly baked waffle with whipped cream",
    longDescription: "Our freshly baked Belgian waffles are a customer favorite. Served with fluffy whipped cream and your choice of seasonal fruits or chocolate drizzle. The perfect balance of crispy on the outside and soft on the inside.",
    popular: true,
    category: "dessert",
    tags: ["dessert", "popular"]
  },
  {
    id: 'madeleine',
    name: "Madeleine",
    price: "¥400",
    image: "images/Madeleine.jpg",
    description: "Classic French shell-shaped cake",
    longDescription: "Delicate, buttery madeleines freshly baked throughout the day. These classic French shell-shaped cakes are light, airy, and perfect with a cup of coffee or tea.",
    popular: false,
    category: "dessert",
    tags: ["dessert", "bakery"]
  },
  {
    id: 'carbonara',
    name: "Spaghetti Carbonara",
    price: "¥1,200",
    image: "images/spageti-carbonara.avif",
    description: "Classic Italian pasta with creamy sauce",
    longDescription: "A customer favorite! Our carbonara features perfectly al dente spaghetti tossed in a rich, creamy sauce with crispy bacon bits and parmesan cheese. Highly recommended by our regulars as 'absolutely delicious'.",
    popular: true,
    category: "lunch",
    tags: ["pasta", "lunch", "popular"]
  },
  {
    id: 'bolognese',
    name: "Spaghetti Bolognese",
    price: "¥1,200",
    image: "images/pasta.png",
    description: "Hearty meat sauce with al dente pasta",
    longDescription: "Our bolognese features a rich, slow-cooked meat sauce that has earned praise from professional chefs. The pasta is cooked perfectly al dente, and the sauce is seasoned to perfection with herbs and spices.",
    popular: false,
    category: "lunch",
    tags: ["pasta", "lunch"]
  },
  {
    id: 'lunch-set-pasta',
    name: "Lunch Set - Tomato Spagetti",
    price: "¥1,000",
    image: "images/spageti tomato (launch-set).png",
    description: "Express lunch with pasta and drink",
    longDescription: "Our express lunch set available from 11:00 AM to 3:00 PM. Choose from our selection of pasta dishes served with your choice of included drink. Perfect for a quick, satisfying midday meal.",
    popular: false,
    category: "lunch",
    tags: ["lunch", "set"]
  },
  {
    id: 'lunch-set-rice',
    name: "Lunch Set - Mussel Spagetti",
    price: "¥1,000",
    image: "images/Mussel pasta (launch-set).png",
    description: "Express lunch with rice bowl and drink",
    longDescription: "A hearty rice bowl topped with fresh ingredients and a perfectly cooked egg. Includes your choice of drink. Available during our express lunch hours (11:00 AM - 3:00 PM).",
    popular: false,
    category: "lunch",
    tags: ["lunch", "set"]
  },
  
  {
    id: 'ethiopia-gede',
    name: "Ethiopia Gede G2",
    price: "¥4,950",
    image: "images/buat-secangkir-kopi-ethiopia-gede-g2-di-sebuah-mej.jpeg",
    description: "Single-origin coffee beans from Ethiopia",
    longDescription: "Premium single-origin beans from Ethiopia's renowned Gede region. Known for their bright, fruity notes and floral aroma. Perfect for pour-over or French press brewing.",
    popular: false,
    category: "beans",
    tags: ["beans", "specialty"],
    origin: "Ethiopia"
  },
  {
    id: 'colombia-flower',
    name: "Colombia Flower Moon Night",
    price: "¥3,200",
    image: "images/buat-secangkir-kopi-colombia-flower-moon-night-di-.jpeg",
    description: "Specialty beans from Colombia",
    longDescription: "A unique Colombian variety with notes of chocolate and caramel. These carefully processed beans offer a smooth, balanced cup with a hint of fruitiness.",
    popular: false,
    category: "beans",
    tags: ["beans", "specialty"],
    origin: "Colombia"
  },
  {
    id: 'ethiopia-kochere',
    name: "Ethiopia Kochere Natural",
    price: "¥3,500",
    image: "images/secangkir-kopi-ethiopia-kochere-natural-di-meja-in.jpeg",
    description: "Natural processed Ethiopian beans",
    longDescription: "Natural processed beans from the Kochere region of Ethiopia. Expect bold berry notes, wine-like complexity, and a syrupy body. A favorite among coffee enthusiasts.",
    popular: false,
    category: "beans",
    tags: ["beans", "specialty"],
    origin: "Ethiopia"
  }
];

// ===== Gallery Data =====
const galleryImages = [
  {
    src: "images/space-1.png",
    alt: "Awakening Cafe Interior",
    title: "Cafe Interior",
    subtitle: "Warm and inviting atmosphere"
  },
  {
    src: "images/space-2.png",
    alt: "Awakening Cafe Seating",
    title: "Seating Area",
    subtitle: "Perfect for work or relaxation"
  },
  {
    src: "images/space-3.png",
    alt: "Awakening Cafe Counter",
    title: "Coffee Counter",
    subtitle: "Where the magic happens"
  },
  {
    src: "images/space-4.png",
    alt: "Awakening Cafe Space",
    title: "Cozy Corner",
    subtitle: "A peaceful retreat in Tokyo"
  }
];

// ===== DOM Elements =====
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const heroBg = document.getElementById('heroBg');
const heroContent = document.getElementById('heroContent');
const menuGrid = document.getElementById('menuGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('menuModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');
const galleryModal = document.getElementById('galleryModal');
const galleryModalBackdrop = document.getElementById('galleryModalBackdrop');
const galleryModalClose = document.getElementById('galleryModalClose');
const galleryItems = document.querySelectorAll('.gallery-item');

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initParallax();
  initCounters();
  initFadeInAnimations();
  init3DTilt();
  renderMenuItems('all');
  initMenuFilters();
  initMenuModal();
  initGalleryModal();
});

// ===== Navigation =====
function initNavigation() {
  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });

  // Close mobile menu when clicking links
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  });
}

// ===== Parallax Effect =====
function initParallax() {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    // Hero background parallax
    if (heroBg) {
      heroBg.style.transform = `translateY(${scrollY * 0.3}px)`;
    }
    
    // Hero content fade out
    if (heroContent) {
      const opacity = Math.max(0, 1 - scrollY / 300);
      const scale = 1 + (scrollY / 300) * 0.1;
      heroContent.style.opacity = opacity;
      heroContent.style.transform = `scale(${scale})`;
    }
  });
}

// ===== Animated Counters =====
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseFloat(counter.dataset.target);
        const isDecimal = target % 1 !== 0;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            counter.textContent = isDecimal ? target.toFixed(1) : target;
            clearInterval(timer);
          } else {
            counter.textContent = isDecimal ? current.toFixed(1) : Math.floor(current);
          }
        }, duration / steps);

        counterObserver.unobserve(counter);
      }
    });
  }, observerOptions);

  counters.forEach(counter => {
    counterObserver.observe(counter);
  });
}

// ===== Fade In Animations =====
function initFadeInAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay * 100);
        fadeObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach(element => {
    fadeObserver.observe(element);
  });
}

// ===== 3D Tilt Effect =====
function init3DTilt() {
  const tiltCards = document.querySelectorAll('.tilt-card');

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -10;
      const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
  });
}

// ===== Menu Rendering =====
function renderMenuItems(filter) {
  let filteredItems = menuItems;
  
  if (filter !== 'all') {
    filteredItems = menuItems.filter(item => 
      item.category === filter || item.tags.includes(filter)
    );
  }

  menuGrid.innerHTML = filteredItems.map((item, index) => `
    <div class="menu-item fade-in visible" data-id="${item.id}" style="animation-delay: ${index * 0.05}s">
      <div class="menu-item-image">
        <img src="${item.image}" alt="${item.name}">
        ${item.popular ? `
          <div class="menu-item-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            Popular
          </div>
        ` : ''}
        ${item.origin ? `<div class="menu-item-origin">${item.origin}</div>` : ''}
      </div>
      <div class="menu-item-content">
        <div class="menu-item-header">
          <h3 class="menu-item-name">${item.name}</h3>
          <span class="menu-item-price">${item.price}</span>
        </div>
        <p class="menu-item-description">${item.description}</p>
        <div class="menu-item-cta">
          Click for details
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </div>
      </div>
    </div>
  `).join('');

  // Re-add click listeners
  document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
      const id = item.dataset.id;
      const menuItem = menuItems.find(m => m.id === id);
      if (menuItem) {
        openMenuModal(menuItem);
      }
    });
  });
}

// ===== Menu Filters =====
function initMenuFilters() {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.dataset.filter;
      renderMenuItems(filter);
    });
  });
}

// ===== Menu Modal =====
function initMenuModal() {
  modalBackdrop.addEventListener('click', closeMenuModal);
  modalClose.addEventListener('click', closeMenuModal);
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenuModal();
      closeGalleryModal();
    }
  });
}

function openMenuModal(item) {
  document.getElementById('modalImg').src = item.image;
  document.getElementById('modalImg').alt = item.name;
  document.getElementById('modalTitle').textContent = item.name;
  document.getElementById('modalPrice').textContent = item.price;
  document.getElementById('modalDescription').textContent = item.longDescription;
  
  const badge = document.getElementById('modalBadge');
  if (item.popular) {
    badge.classList.add('show');
  } else {
    badge.classList.remove('show');
  }
  
  const origin = document.getElementById('modalOrigin');
  if (item.origin) {
    origin.textContent = `Origin: ${item.origin}`;
    origin.style.display = 'block';
  } else {
    origin.style.display = 'none';
  }
  
  const tagsContainer = document.getElementById('modalTags');
  tagsContainer.innerHTML = item.tags.map(tag => 
    `<span class="modal-tag">${tag}</span>`
  ).join('');
  
  modal.classList.add('active');
  document.body.classList.add('modal-open');
}

function closeMenuModal() {
  modal.classList.remove('active');
  document.body.classList.remove('modal-open');
}

// ===== Gallery Modal =====
function initGalleryModal() {
  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      openGalleryModal(index);
    });
  });

  galleryModalBackdrop.addEventListener('click', closeGalleryModal);
  galleryModalClose.addEventListener('click', closeGalleryModal);
}

function openGalleryModal(index) {
  const image = galleryImages[index];
  document.getElementById('galleryModalImg').src = image.src;
  document.getElementById('galleryModalImg').alt = image.alt;
  document.getElementById('galleryModalTitle').textContent = image.title;
  document.getElementById('galleryModalSubtitle').textContent = image.subtitle;
  
  galleryModal.classList.add('active');
  document.body.classList.add('modal-open');
}

function closeGalleryModal() {
  galleryModal.classList.remove('active');
  document.body.classList.remove('modal-open');
}

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});
