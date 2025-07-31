// Curseur personnalisé
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Effet hover sur les éléments interactifs
document.querySelectorAll('a, button, .project-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('hovered');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('hovered');
  });
});

// Effet magnetic sur les boutons
const magneticBtns = document.querySelectorAll('.magnetic');
magneticBtns.forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const angle = Math.atan2(y - centerY, x - centerX) * 180 / Math.PI;
    
    gsap.to(btn, {
      x: (x - centerX) * 0.3,
      y: (y - centerY) * 0.3,
      rotate: angle * 0.05,
      duration: 0.5
    });
  });

  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, {
      x: 0,
      y: 0,
      rotate: 0,
      duration: 0.5
    });
  });
});

// Animation pour la section hero
gsap.from(".hero-text", {
  x: -50,
  opacity: 0,
  duration: 1,
  delay: 0.3
});

gsap.from(".hero-image", {
  x: 50,
  opacity: 0,
  duration: 1,
  delay: 0.6
});

gsap.from(".hero-badge", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  ease: "elastic.out(1, 0.5)"
});
// Animation des barres de compétences avec couleurs
const skillBars = document.querySelectorAll('.skill-bar');
skillBars.forEach(bar => {
  const level = bar.getAttribute('data-level');
  const color = bar.getAttribute('data-color');
  const progress = bar.querySelector('.skill-progress');
  progress.style.width = level;
  progress.style.backgroundColor = color;
});

const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', () => {
    const submitBtn = form.querySelector('.btn-submit span');
    if (submitBtn) {
      submitBtn.textContent = 'Envoi...';
    }
  });
}



// Animation au scroll
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('section').forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Animation supplémentaire pour le badge
gsap.from(".hero-badge", {
  scale: 0.8,
  duration: 1,
  ease: "elastic.out(1, 0.5)"
});

// Données de la galerie
const galleryData = {
  'gestion-stock': {
    title: 'Application de Gestion de Stock',
    description: 'Système complet de gestion des stocks avec suivi des entrées/sorties, alertes de seuil et reporting.',
    technologies: ['Laravel', 'PostgreSQL', 'Bootstrap', 'JavaScript'],
    images: [
      'images/projects/stock-1.JPG',
      'images/projects/stock-2.JPG',
      'images/projects/stock-3.JPG',
      'images/projects/stock-4.JPG',
      'images/projects/stock-5.JPG',
      'images/projects/stock-6.JPG',
      'images/projects/stock-7.JPG',
      'images/projects/stock-8.JPG',
      'images/projects/stock-9.JPG',
      'images/projects/stock-10.JPG',
      'images/projects/stock-11.JPG',
      'images/projects/stock-12.JPG',
      'images/projects/stock-13.JPG',
      'images/projects/stock-14.JPG'
    ]
  },
  'caisses-sociales': {
    title: 'Gestion des Caisses Sociales',
    description: 'Plateforme de gestion des cotisations sociales pour associations avec suivi des membres et historiques.',
    technologies: ['Laravel', 'MySQL', 'JavaScript', 'Chart.js'],
    images: [
      'images/projects/caisse-1.JPG',
      'images/projects/caisse-2.JPG',
      'images/projects/caisse-3.JPG',
      'images/projects/caisse-4.JPG',
      'images/projects/caisse-5.JPG',
      'images/projects/caisse-6.JPG',
      'images/projects/caisse-7.JPG'
    ]
  },
  'gestion-recettes': {
    title: 'Gestion des Recettes',
    description: 'Application web pour la gestion des recettes financières avec intégration de paiement en ligne.',
    technologies: ['Laravel', 'MySQL', 'Vue.js', 'Stripe API'],
    images: [
      'images/projects/recettes-1.JPG',
      'images/projects/recettes-2.JPG',
      'images/projects/recettes-3.JPG'
    ]
  },
  'bibliotheque': {
    title: 'Gestion de Bibliothèque',
    description: 'Système de gestion de bibliothèque avec catalogue en ligne, gestion des prêts et des retours.',
    technologies: ['PHP', 'MySQL', 'jQuery', 'Bootstrap'],
    images: [
      'images/projects/biblio-1.JPG',
      'images/projects/biblio-2.JPG',
      'images/projects/biblio-3.JPG',
      'images/projects/biblio-4.JPG',
      'images/projects/biblio-5.JPG',
      'images/projects/biblio-6.JPG'
    ]
  },
  'plantainpro': {
    title: 'cite de plantain pro',
    description: 'Système de gestion de bibliothèque avec catalogue en ligne, gestion des prêts et des retours.',
    technologies: ['PHP', 'MySQL', 'jQuery', 'Bootstrap'],
    images: [
      'images/projects/plantain-1.JPG',
      'images/projects/plantain-2.JPG',
      'images/projects/plantain-3.JPG',
      'images/projects/plantain-4.JPG',
      'images/projects/plantain-5.JPG',
      'images/projects/plantain-6.JPG'
    ]
  }
};

// Gestion de la modale
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalTechnologies = document.getElementById("modal-technologies");
const mainImage = document.getElementById("main-image");
const thumbnailContainer = document.querySelector(".thumbnail-container");
const closeModal = document.querySelector(".close-modal");

// Ouvrir la modale
function openModal(projectId) {
  const project = galleryData[projectId];
  if (!project) return;
  
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  
  // Mettre à jour les informations du projet
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  
  // Afficher les technologies
  modalTechnologies.innerHTML = '';
  project.technologies.forEach(tech => {
    const techBadge = document.createElement('span');
    techBadge.className = 'tech-badge';
    techBadge.textContent = tech;
    modalTechnologies.appendChild(techBadge);
  });
  
  // Vider les miniatures précédentes
  thumbnailContainer.innerHTML = '';
  
  // Ajouter les images
  project.images.forEach((imgSrc, index) => {
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = `Screenshot ${index + 1}`;
    img.classList.add('thumbnail');
    
    img.addEventListener('click', () => {
      mainImage.src = imgSrc;
    });
    
    thumbnailContainer.appendChild(img);
  });
  
  // Afficher la première image par défaut
  if (project.images.length > 0) {
    mainImage.src = project.images[0];
  }
}

// Fermer la modale
function closeModalFunc() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

closeModal.addEventListener('click', closeModalFunc);

// Fermer en cliquant en dehors
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModalFunc();
  }
});

// Mettre à jour les liens "Détails"
document.querySelectorAll('.project-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const projectId = link.closest('.project-card').dataset.projectId;
    if (projectId) {
      openModal(projectId);
    }
  });
});