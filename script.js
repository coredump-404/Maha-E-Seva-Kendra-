// ========================================
// UTILITY FUNCTIONS
// ========================================

// Safe Lucide Icons Initialization
function safeInitIcons() {
  if (typeof lucide !== 'undefined') {
    try {
      lucide.createIcons();
    } catch (error) {
      console.error('Failed to initialize Lucide icons:', error);
    }
  }
}

// Debounce function for search
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Toast Notification
function showNotification(message, type = 'info') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  
  toast.textContent = message;
  toast.className = 'toast show';
  
  if (type === 'error') {
    toast.classList.add('error');
  } else if (type === 'success') {
    toast.classList.add('success');
  }
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// ========================================
// INITIALIZE LUCIDE ICONS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  safeInitIcons();
});

// ========================================
// MOBILE MENU TOGGLE
// ========================================
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('show');
    });
  });
}

// ========================================
// SERVICE DATA - INDIVIDUAL FOR EACH SERVICE
// ========================================
const serviceData = {
  patidar: {
    title: 'पतिदार प्रमाणपत्र',
    expectedTime: '7-10 दिवस',
    documents: [
      'आधार कार्ड',
      '7/12 उतारा',
      'मालकी हक्काचे दस्तऐवज',
      'फेरफार नोंदणी',
      'पासपोर्ट साईझ फोटो (2)',
      'रेशन कार्ड'
    ]
  },
  
  ownership: {
    title: 'मालकीचे प्रमाणपत्र',
    expectedTime: '7-10 दिवस',
    documents: [
      'आधार कार्ड',
      '7/12 उतारा',
      'मालमत्ता कर पावती',
      'विद्युत बिल / पाणी बिल',
      'पासपोर्ट साईझ फोटो (2)',
      'रेशन कार्ड'
    ]
  },
  
  landless: {
    title: 'भूमिहीन प्रमाणपत्र',
    expectedTime: '7-10 दिवस',
    documents: [
      'आधार कार्ड',
      'रेशन कार्ड',
      'उत्पन्नाचा दाखला',
      'पत्त्याचा पुरावा',
      'पासपोर्ट साईझ फोटो (2)',
      'शपथपत्र'
    ]
  },
  
  residential: {
    title: 'रहिवासी दाखला',
    expectedTime: '5-7 दिवस',
    documents: [
      'आधार कार्ड',
      'रेशन कार्ड',
      'विद्युत बिल (3 महिन्यांचे)',
      'मालकी हक्काचे दस्तऐवज / भाडे करार',
      'पासपोर्ट साईझ फोटो (2)',
      'पॅन कार्ड'
    ]
  },
  
  nationality: {
    title: 'राष्ट्रीयत्व प्रमाणपत्र',
    expectedTime: '10-15 दिवस',
    documents: [
      'आधार कार्ड',
      'जन्म दाखला',
      'शाळा सोडल्याचा दाखला',
      'पासपोर्ट (असल्यास)',
      'पासपोर्ट साईझ फोटो (2)',
      'रेशन कार्ड',
      'मतदार ओळखपत्र'
    ]
  },
  
  unavailable_land: {
    title: 'अपलब्ध भूधारक प्रमाणपत्र',
    expectedTime: '7-10 दिवस',
    documents: [
      'आधार कार्ड',
      '7/12 उतारा',
      'मूळ धारकाचे मृत्यू प्रमाणपत्र',
      'वारसा प्रमाणपत्र',
      'पासपोर्ट साईझ फोटो (2)',
      'रेशन कार्ड'
    ]
  },
  
  farmer: {
    title: 'शेतकरी असल्याचे प्रमाणपत्र',
    expectedTime: '7-10 दिवस',
    documents: [
      'आधार कार्ड',
      '7/12 उतारा',
      '8-अ उतारा',
      'शेती पिकाचा तपशील',
      'पासपोर्ट साईझ फोटो (2)',
      'रेशन कार्ड'
    ]
  },
  
  shravanbal: {
    title: 'श्रवणबाळ निराधार योजना',
    expectedTime: '15-20 दिवस',
    documents: [
      'आधार कार्ड',
      'रेशन कार्ड',
      'वयाचा पुरावा (60+ वर्षे)',
      'उत्पन्नाचा दाखला',
      'बँक पासबुकची प्रत',
      'पासपोर्ट साईझ फोटो (2)',
      'पत्त्याचा पुरावा'
    ]
  },
  
  sanjay_gandhi: {
    title: 'संजय गांधी निराधार योजना',
    expectedTime: '15-20 दिवस',
    documents: [
      'आधार कार्ड',
      'रेशन कार्ड',
      'अपंगत्वाचे प्रमाणपत्र (40%+)',
      'उत्पन्नाचा दाखला',
      'बँक पासबुकची प्रत',
      'पासपोर्ट साईझ फोटो (2)',
      'वैद्यकीय प्रमाणपत्र'
    ]
  },
  
  ews_affidavit: {
    title: 'EWS शपथपत्र प्रमाणपत्र',
    expectedTime: '5-7 दिवस',
    documents: [
      'आधार कार्ड',
      'रेशन कार्ड',
      'उत्पन्नाचा दाखला',
      'मालमत्ता दाखला',
      'पासपोर्ट साईझ फोटो (2)',
      'पॅन कार्ड',
      '₹100 स्टॅम्प पेपर'
    ]
  },
  
  ews: {
    title: 'EWS प्रमाणपत्र',
    expectedTime: '7-10 दिवस',
    documents: [
      'आधार कार्ड',
      'रेशन कार्ड',
      'उत्पन्नाचा दाखला (वार्षिक ₹8 लाखांपेक्षा कमी)',
      'मालमत्ता दाखला',
      '7/12 उतारा',
      'बँक स्टेटमेंट (6 महिन्यांचे)',
      'पासपोर्ट साईझ फोटो (2)'
    ]
  },
  
  ept: {
    title: 'EPT चे प्रमाणपत्र',
    expectedTime: '7-10 दिवस',
    documents: [
      'आधार कार्ड',
      'रेशन कार्ड',
      'शैक्षणिक प्रमाणपत्रे',
      'उत्पन्नाचा दाखला',
      'पासपोर्ट साईझ फोटो (2)',
      'जात प्रमाणपत्र',
      'जात वैधता प्रमाणपत्र'
    ]
  },
  
  non_criminal: {
    title: 'नॉन क्रिमिनल प्रमाणपत्र',
    expectedTime: '15-21 दिवस',
    documents: [
      'आधार कार्ड',
      'पॅन कार्ड',
      'रेशन कार्ड',
      'पासपोर्ट साईझ फोटो (4)',
      'पत्त्याचा पुरावा (विद्युत बिल)',
      'पोलीस पडताळणी अर्ज',
      'जन्म दाखला'
    ]
  },
  
  caste: {
    title: 'जात प्रमाणपत्र',
    expectedTime: '10-15 दिवस',
    documents: [
      'आधार कार्ड',
      'रेशन कार्ड',
      'जात प्रमाणपत्र (जुने - वडिलांचे)',
      'शाळा सोडल्याचा दाखला',
      'पासपोर्ट साईझ फोटो (2)',
      'जन्म दाखला',
      'पत्त्याचा पुरावा'
    ]
  },
  
  central_caste: {
    title: 'केंद्रीय जात प्रमाणपत्र',
    expectedTime: '15-21 दिवस',
    documents: [
      'आधार कार्ड',
      'राज्य जात प्रमाणपत्र',
      'जात वैधता प्रमाणपत्र',
      'शाळा सोडल्याचा दाखला',
      'पासपोर्ट साईझ फोटो (2)',
      'जन्म दाखला',
      'पॅन कार्ड'
    ]
  }
};

// ========================================
// SERVICE SEARCH FUNCTIONALITY
// ========================================
const searchInput = document.getElementById('searchServices');
const serviceCards = document.querySelectorAll('.service-card');

if (searchInput && serviceCards.length > 0) {
  const performSearch = (searchTerm) => {
    serviceCards.forEach(card => {
      const titleEl = card.querySelector('.service-title');
      const keywords = card.getAttribute('data-keywords');
      
      if (!titleEl) return;
      
      const title = titleEl.textContent.toLowerCase();
      const keywordText = keywords ? keywords.toLowerCase() : '';
      
      if (title.includes(searchTerm) || keywordText.includes(searchTerm)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  };

  const debouncedSearch = debounce((e) => {
    const searchTerm = e.target.value.toLowerCase().trim();
    performSearch(searchTerm);
  }, 300);

  searchInput.addEventListener('input', debouncedSearch);
}

// ========================================
// FAQ ACCORDION
// ========================================
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;
    if (!faqItem) return;
    
    const isActive = faqItem.classList.contains('active');
    
    // Close all other FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('active');
    });
    
    // Toggle current FAQ
    if (!isActive) {
      faqItem.classList.add('active');
    }
    
    // Reinitialize icons after DOM changes
    safeInitIcons();
  });
});

// ========================================
// WIZARD FUNCTIONALITY
// ========================================
let currentStep = 1;
let selectedService = null;
let selectedServiceData = null;

// Wizard Elements
const wizardModal = document.getElementById('wizardModal');
const closeWizard = document.getElementById('closeWizard');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const wizardTitle = document.getElementById('wizardTitle');
const documentList = document.getElementById('documentList');

// Service Cards Click Event
if (serviceCards.length > 0) {
  serviceCards.forEach(card => {
    card.addEventListener('click', () => {
      const service = card.getAttribute('data-service');
      if (service) {
        openWizard(service);
      }
    });
  });
}

// Open Wizard
function openWizard(service) {
  if (!serviceData[service]) {
    showNotification('या सेवेसाठी माहिती उपलब्ध नाही', 'error');
    return;
  }
  
  if (!wizardModal || !wizardTitle || !documentList) {
    console.error('Wizard elements not found');
    return;
  }
  
  selectedService = service;
  selectedServiceData = serviceData[service];
  wizardTitle.textContent = selectedServiceData.title;
  
  // Load Documents
  documentList.innerHTML = '';
  selectedServiceData.documents.forEach(doc => {
    const li = document.createElement('li');
    li.className = 'document-item';
    li.innerHTML = `
      <i data-lucide="file-check"></i>
      <span>${doc}</span>
    `;
    documentList.appendChild(li);
  });

  wizardModal.classList.add('active');
  document.body.style.overflow = 'hidden';
  safeInitIcons();
}

// Close Wizard
if (closeWizard) {
  closeWizard.addEventListener('click', () => {
    closeWizardModal();
  });
}

// Close on outside click
if (wizardModal) {
  wizardModal.addEventListener('click', (e) => {
    if (e.target === wizardModal) {
      closeWizardModal();
    }
  });
}

function closeWizardModal() {
  if (!wizardModal) return;
  
  wizardModal.classList.remove('active');
  document.body.style.overflow = 'auto';
  resetWizard();
}

// Next Button
if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    if (currentStep === 2) {
      // Validate form
      const fullNameEl = document.getElementById('fullName');
      const mobileEl = document.getElementById('mobile');
      const addressEl = document.getElementById('address');

      if (!fullNameEl || !mobileEl || !addressEl) {
        showNotification('फॉर्म एलिमेंट्स उपलब्ध नाहीत', 'error');
        console.error('Form elements not found');
        return;
      }

      const fullName = fullNameEl.value.trim();
      const mobile = mobileEl.value.trim();
      const address = addressEl.value.trim();

      if (!fullName || !mobile || !address) 
      {
        showNotification('कृपया सर्व आवश्यक माहिती भरा', 'error');
        return;
      }

      // Indian mobile number validation (s10 digits)
      if (!/^\d{10}$/.test(mobile)) 
      {
          showNotification('कृपया 10 अंकी मोबाईल नंबर टाका', 'error');
        return;
      }


      // Show confirmation
      const confirmServiceEl = document.getElementById('confirmService');
      const confirmNameEl = document.getElementById('confirmName');
      const confirmMobileEl = document.getElementById('confirmMobile');
      const confirmAddressEl = document.getElementById('confirmAddress');

      if (confirmServiceEl && selectedServiceData) {
        confirmServiceEl.textContent = selectedServiceData.title;
      }
      if (confirmNameEl) confirmNameEl.textContent = fullName;
      if (confirmMobileEl) confirmMobileEl.textContent = mobile;
      if (confirmAddressEl) confirmAddressEl.textContent = address;
    }

    if (currentStep < 3) {
      currentStep++;
      updateWizard();
    }
  });
}

// Previous Button
if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    if (currentStep > 1) {
      currentStep--;
      updateWizard();
    }
  });
}

// Submit Button - Send via WhatsApp
if (submitBtn) {
  submitBtn.addEventListener('click', () => {
    const fullNameEl = document.getElementById('fullName');
    const mobileEl = document.getElementById('mobile');
    const addressEl = document.getElementById('address');

    if (!fullNameEl || !mobileEl || !addressEl || !selectedServiceData) {
      showNotification('माहिती उपलब्ध नाही', 'error');
      return;
    }

    const fullName = fullNameEl.value.trim();
    const mobile = mobileEl.value.trim();
    const address = addressEl.value.trim();
    
    // Generate reference number
    const refNumber = 'MES' + Date.now().toString().slice(-8);
    const refNumberEl = document.getElementById('referenceNumber');
    const expectedTimeEl = document.getElementById('expectedTime');
    
    if (refNumberEl) refNumberEl.textContent = refNumber;
    if (expectedTimeEl) expectedTimeEl.textContent = selectedServiceData.expectedTime;
    
    // Create WhatsApp message
    const whatsappMsg = `🔔 *नवीन अर्ज*

📋 *सेवा:* ${selectedServiceData.title}
👤 *नाव:* ${fullName}
📱 *मोबाईल:* ${mobile}
📍 *पत्ता:* ${address}

कृपया आवश्यक दस्तऐवज तयार ठेवा:
${selectedServiceData.documents.map((doc, i) => `${i + 1}. ${doc}`).join('\n')}`;

    // Open WhatsApp
    const whatsappURL = `https://wa.me/919067185465?text=${encodeURIComponent(whatsappMsg)}`;
    
    try {
      window.open(whatsappURL, '_blank');
      showNotification('WhatsApp वर पाठवत आहे...', 'success');
    } catch (error) {
      showNotification('WhatsApp उघडण्यात त्रुटी झाली', 'error');
      console.error('Failed to open WhatsApp:', error);
      return;
    }
    
    // Show success message
    currentStep = 4;
    updateWizard();
    
    // Auto close after 8 seconds
    setTimeout(() => {
      closeWizardModal();
    }, 8000);
  });
}

// Update Wizard
function updateWizard() {
  // Update steps
  document.querySelectorAll('.wizard-step').forEach(step => {
    step.classList.remove('active');
  });
  
  const currentStepEl = document.querySelector(`.wizard-step[data-step="${currentStep}"]`);
  if (currentStepEl) {
    currentStepEl.classList.add('active');
  }

  // Update progress
  document.querySelectorAll('.progress-step').forEach(step => {
    const stepNum = parseInt(step.getAttribute('data-step'));
    step.classList.remove('active', 'completed');
    if (stepNum === currentStep) {
      step.classList.add('active');
    } else if (stepNum < currentStep) {
      step.classList.add('completed');
    }
  });

  // Update buttons
  if (prevBtn) {
    prevBtn.style.display = currentStep > 1 && currentStep < 4 ? 'inline-flex' : 'none';
  }
  if (nextBtn) {
    nextBtn.style.display = currentStep < 3 ? 'inline-flex' : 'none';
  }
  if (submitBtn) {
    submitBtn.style.display = currentStep === 3 ? 'inline-flex' : 'none';
  }

  safeInitIcons();
}

// Reset Wizard
function resetWizard() {
  currentStep = 1;
  selectedService = null;
  selectedServiceData = null;
  updateWizard();
  
  const personalInfoForm = document.getElementById('personalInfoForm');
  if (personalInfoForm) {
    personalInfoForm.reset();
  }
}

// ========================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ========================================
// FORM INPUT VALIDATION
// ========================================
const mobileInput = document.getElementById('mobile');
if (mobileInput) {
  mobileInput.addEventListener('input', (e) => {
    // Only allow numbers and limit to 10 digits
    e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
  });
}

// ========================================
// INITIALIZE ON PAGE LOAD
// ========================================
window.addEventListener('load', () => {
  // Initialize Lucide icons again after all content is loaded
  safeInitIcons();
  
  // Add animation to hero stats on scroll
  const observerOptions = {
    threshold: 0.5
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.stat-item, .service-card, .process-step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
  });
});