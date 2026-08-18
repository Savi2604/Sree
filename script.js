const photos = [
  { src: 'assets/memory-1.jpg', caption: 'Some pictures are just pictures... 🤍\nbut somehow, this one always makes me smile.' },
  { src: 'assets/memory-2.jpg', caption: "I don't know when we became this close, 🌸\nbut I'm really glad we did." },
  { src: 'assets/memory-3.jpg', caption: 'So many random conversations, random laughs... 💫\nand somehow, those became my favourite memories.' },
  { src: 'assets/memory-4.jpg', caption: 'Looking at this makes me realise 🌷\nhow much we have grown together.' },
  { src: 'assets/memory-5.jpg', caption: 'These silly little moments may not mean much to anyone else 🥺\nbut I know I will miss them someday.' },
  { src: 'assets/memory-7.jpg', caption: "I wish I could freeze some moments exactly like this. 🕊️\nForever." },
  { src: 'assets/memory-8.jpg', caption: 'If I could choose one thing for our future... 🌙\nit would be to make many more memories like these.' },
  { src: 'assets/memory-9.jpg', caption: 'Every time I look at this, 🥹\nI remember exactly how happy I felt that day.' },
  { src: 'assets/memory-10.jpg', caption: "There are some people you meet and think,\n'I hope this person stays.' 💛\nYou are one of those people." },
  { src: 'assets/memory-11.jpg', caption: 'Some moments are too soft to put into words. 🌼\nThis is one of them.' },
  { src: 'assets/memory-12.jpg', caption: "You've seen me at my worst and stayed. 💕\nThat means more than I ever say." },
  { src: 'assets/memory-13.jpg', caption: "I don't know what I did to deserve a friend like you. 🤍\nBut I'm really glad I have you." },
  { src: 'assets/memory-14.jpg', caption: 'This little moment is living rent-free in my heart. 🩷\nAnd I never want to forget it.' },
  { src: 'assets/memory-15.jpg', caption: 'Some days feel ordinary until you look back 🌸\nand realise they were actually beautiful.' },
  { src: 'assets/memory-16.jpg', caption: 'There is something really special about people\nwho make you feel seen. ✨\nYou are one of them.' },
  { src: 'assets/memory-17.jpg', caption: 'I think about moments like these 🌷\nwhen I need a reminder of what truly matters.' },
  { src: 'assets/memory-18.jpg', caption: 'Every picture with you feels like\na page from a story I never want to end. 📖💗' },
  { src: 'assets/memory-19.jpg', caption: "You make ordinary days feel like something worth remembering. 🌙\nThank you for that." },
  { src: 'assets/memory-20.jpg', caption: 'I keep coming back to this moment 🥺🤍\nbecause it just felt so right.' },
  { src: 'assets/memory-21.jpg', caption: 'Years from now, I hope we still look at pictures like this 🌸\nand laugh about everything we have been through.' }
];

const secretScreen = document.getElementById('secret-screen');
const secretCard = document.getElementById('secret-card');
const secretForm = document.getElementById('secret-form');
const secretKeyInput = document.getElementById('secret-key');
const unlockButton = document.getElementById('unlock-button');
const secretError = document.getElementById('secret-error');
const siteMain = document.getElementById('site-main');
const musicWidget = document.getElementById('music-widget');
const musicToggle = document.getElementById('music-toggle');
const musicStatus = document.getElementById('music-status');
const audio = document.getElementById('memory-audio');
const wishes = document.querySelectorAll('.wish-line');
const finalText = document.querySelectorAll('.final-text');
const finalNotes = document.querySelectorAll('.final-note');
const secretKeyValue = '20-08-2005';

function resetLockScreen() {
  if (secretScreen) {
    secretScreen.classList.add('hidden');
    secretScreen.classList.remove('unlocking');
  }

  if (siteMain) {
    siteMain.classList.remove('hidden');
    siteMain.classList.add('visible');
  }

  if (musicWidget) {
    musicWidget.classList.remove('hidden');
  }

  if (secretError) {
    secretError.textContent = '';
    secretError.classList.remove('visible');
  }

  if (secretKeyInput) {
    secretKeyInput.value = '';
  }
}

function createHearts() {
  const hearts = document.getElementById('hearts');
  for (let i = 0; i < 18; i += 1) {
    const heart = document.createElement('span');
    heart.className = 'heart';
    heart.textContent = Math.random() > 0.5 ? '♥' : '♡';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${12 + Math.random() * 18}px`;
    heart.style.animationDuration = `${7 + Math.random() * 6}s`;
    heart.style.opacity = `${0.3 + Math.random() * 0.7}`;
    hearts.appendChild(heart);
  }
}

function createStars() {
  const stars = document.getElementById('stars');
  for (let i = 0; i < 70; i += 1) {
    const star = document.createElement('span');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    stars.appendChild(star);
  }
}

function createBackgroundLayer() {
  const background = document.getElementById('floating-background');
  if (!background) return;

  background.innerHTML = '';

  for (let i = 0; i < 15; i += 1) {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.textContent = Math.random() > 0.5 ? '♡' : '♥';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.bottom = `${-10 - Math.random() * 10}%`;
    heart.style.fontSize = `${12 + Math.random() * 16}px`;
    heart.style.opacity = `${0.2 + Math.random() * 0.5}`;
    heart.style.animationDuration = `${8 + Math.random() * 12}s`;
    heart.style.animationDelay = `${Math.random() * 6}s`;
    background.appendChild(heart);
  }

  for (let i = 0; i < 8; i += 1) {
    const butterfly = document.createElement('span');
    butterfly.className = 'floating-butterfly';
    butterfly.style.left = `${Math.random() * 100}%`;
    butterfly.style.top = `${Math.random() * 90}%`;
    butterfly.style.setProperty('--duration', `${12 + Math.random() * 12}s`);
    butterfly.style.opacity = `${0.3 + Math.random() * 0.4}`;
    butterfly.style.transform = `scale(${0.6 + Math.random() * 0.6})`;
    background.appendChild(butterfly);
  }

  const flowers = ['🌸', '🌷', '🌼', '🌺'];
  for (let i = 0; i < 10; i += 1) {
    const flower = document.createElement('span');
    flower.className = 'floating-flower';
    flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
    flower.style.left = `${Math.random() * 100}%`;
    flower.style.bottom = `${-10 - Math.random() * 10}%`;
    flower.style.fontSize = `${14 + Math.random() * 14}px`;
    flower.style.opacity = `${0.25 + Math.random() * 0.45}`;
    flower.style.animationDuration = `${10 + Math.random() * 15}s`;
    flower.style.animationDelay = `${Math.random() * 8}s`;
    background.appendChild(flower);
  }

  for (let i = 0; i < 25; i += 1) {
    const spark = document.createElement('span');
    spark.className = 'floating-spark';
    spark.style.left = `${Math.random() * 100}%`;
    spark.style.top = `${Math.random() * 100}%`;
    spark.style.setProperty('--duration', `${3 + Math.random() * 4}s`);
    spark.style.opacity = `${0.25 + Math.random() * 0.55}`;
    background.appendChild(spark);
  }
}

function renderScrapbook() {
  const photoStage = document.querySelector('.photo-stage');
  if (!photoStage) return;

  photoStage.innerHTML = '';

  photos.forEach((photo, index) => {
    const card = document.createElement('div');
    card.className = 'polaroid-card section-fade';
    
    // Stagger angle variation based on index
    const angle = (Math.sin(index) * 2.8).toFixed(1);
    card.style.setProperty('--tilt-angle', `${angle}deg`);
    
    const img = document.createElement('img');
    img.src = photo.src;
    img.alt = `Memory ${index + 1}`;
    img.loading = 'lazy';
    
    const captionContainer = document.createElement('div');
    captionContainer.className = 'polaroid-caption';
    
    const captionText = document.createElement('p');
    captionText.innerHTML = photo.caption.replace(/\n/g, '<br>');
    
    captionContainer.appendChild(captionText);
    card.appendChild(img);
    card.appendChild(captionContainer);
    photoStage.appendChild(card);
  });
}

function showSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) return;
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        if (sectionId === 'little-something') {
          revealMessages();
        } else if (sectionId === 'wishes') {
          revealWishes();
        } else if (sectionId === 'tell-you-one-thing') {
          revealTellYouOneThing();
        } else if (sectionId === 'final-block') {
          revealFinal();
        }
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  observer.observe(section);
}

function setupScrollReveal() {
  const cards = document.querySelectorAll('.polaroid-card');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  cards.forEach(card => observer.observe(card));
}

function typeLine(el, text, speed = 35) {
  el.textContent = '';
  let index = 0;

  function tick() {
    if (index < text.length) {
      el.textContent += text.charAt(index);
      index += 1;
      setTimeout(tick, speed);
    }
  }

  tick();
}

function revealMessages() {
  const littleSomethingLines = document.querySelectorAll('#little-something .message-line');
  littleSomethingLines.forEach((line, index) => {
    setTimeout(() => {
      line.classList.add('visible');
      if (index === 0 || index === 1) {
        typeLine(line, line.textContent.trim(), 22);
      }
    }, 300 + index * 1000);
  });
}

function revealWishes() {
  wishes.forEach((line, index) => {
    setTimeout(() => {
      line.classList.add('visible');
    }, 300 + index * 900);
  });
}

function revealTellYouOneThing() {
  const tellYouLines = document.querySelectorAll('#tell-you-one-thing .message-line');
  tellYouLines.forEach((line, index) => {
    setTimeout(() => {
      line.classList.add('visible');
    }, 300 + index * 900);
  });
}

function revealFinal() {
  const finalSection = document.getElementById('final-block');
  if (finalSection) {
    finalSection.classList.add('visible');
  }

  finalText.forEach((line, index) => {
    setTimeout(() => {
      line.classList.add('visible');
    }, 500 + index * 1100);
  });

  setTimeout(() => {
    const finalStrong = document.querySelector('.final-strong');
    if (finalStrong) {
      finalStrong.classList.add('visible');
    }
  }, 1100 * finalText.length + 300);

  finalNotes.forEach((note, index) => {
    setTimeout(() => {
      note.classList.add('visible');
    }, 1100 * finalText.length + 1200 + index * 700);
  });
}

function toggleMusic() {
  if (!audio) return;

  if (audio.paused) {
    audio.play().then(() => {
      musicStatus.textContent = 'Playing our memories...';
      musicToggle.classList.add('is-playing');
    }).catch(() => {
      musicStatus.textContent = 'Tap to play music';
      musicToggle.classList.remove('is-playing');
    });
  } else {
    audio.pause();
    musicStatus.textContent = 'Music paused';
    musicToggle.classList.remove('is-playing');
  }
}

function unlockWebsite() {
  if (secretScreen) {
    secretScreen.classList.add('hidden');
  }

  if (siteMain) {
    siteMain.classList.remove('hidden');
    siteMain.classList.add('visible');
  }

  if (musicWidget) {
    musicWidget.classList.remove('hidden');
  }

  if (audio) {
    audio.volume = 0.5;
    audio.play().then(() => {
      if (musicToggle) {
        musicToggle.classList.add('is-playing');
      }
      if (musicStatus) {
        musicStatus.textContent = '♫ Playing our memories...';
      }
    }).catch(() => {
      if (musicStatus) {
        musicStatus.textContent = 'Tap to play music';
      }
    });
  }

  // Smooth scroll to top of main content
  const firstSection = document.querySelector('.hero');
  if (firstSection) {
    firstSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Set up scroll observers for text sections after unlock
  setupTextSectionObservers();
  setupScrollReveal();
}

function setupTextSectionObservers() {
  const sections = [
    { id: 'album-heading-wrapper', fn: null },
    { id: 'little-something', fn: revealMessages },
    { id: 'wishes', fn: revealWishes },
    { id: 'tell-you-one-thing', fn: revealTellYouOneThing },
    { id: 'final-block', fn: revealFinal }
  ];

  sections.forEach(({ id, fn }) => {
    const el = document.getElementById(id);
    if (!el) return;
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          if (fn) fn();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    obs.observe(el);
  });
}

function handleSecretSubmit(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  if (!secretKeyInput || !secretError || !secretScreen || !secretCard) {
    return;
  }

  const key = secretKeyInput.value.trim();

  if (key === secretKeyValue) {
    secretError.textContent = '';
    secretError.classList.remove('visible');
    secretScreen.classList.add('unlocking');
    secretCard.classList.add('shake');
    setTimeout(() => {
      unlockWebsite();
    }, 320);
  } else {
    secretError.textContent = "Oops... that's not the key ♡ Try again.";
    secretError.classList.add('visible');
    secretCard.classList.remove('shake');
    void secretCard.offsetWidth;
    secretCard.classList.add('shake');
    secretKeyInput.value = '';
    secretKeyInput.focus();
  }
}

function initializeWebsite() {
  if (window.__birthdayWebsiteInitialized) {
    return;
  }

  window.__birthdayWebsiteInitialized = true;

  if (secretForm) {
    secretForm.addEventListener('submit', handleSecretSubmit);
  }

  if (unlockButton) {
    unlockButton.addEventListener('click', handleSecretSubmit);
  }

  if (secretKeyInput) {
    secretKeyInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        handleSecretSubmit(event);
      }
    });

    secretKeyInput.addEventListener('focus', () => {
      if (secretError) {
        secretError.classList.remove('visible');
      }
    });
  }

  if (musicToggle) {
    musicToggle.addEventListener('click', toggleMusic);
  }

  if (audio) {
    audio.addEventListener('play', () => {
      musicStatus.textContent = '♫ Playing our memories...';
      musicToggle.classList.add('is-playing');
    });

    audio.addEventListener('pause', () => {
      musicStatus.textContent = '♫ Music paused';
      musicToggle.classList.remove('is-playing');
    });
  }

  renderScrapbook();
  createBackgroundLayer();

  resetLockScreen();

  window.addEventListener('load', () => {
    if (secretKeyInput) {
      secretKeyInput.blur();
    }
  });
}

initializeWebsite();
createHearts();
createStars();

// Pause music when page is hidden (switching tabs/minimizing) and resume when active
document.addEventListener('visibilitychange', () => {
  if (!audio) return;
  if (document.hidden) {
    if (!audio.paused) {
      audio.pause();
      audio.wasPlayingBeforeHidden = true;
    }
  } else {
    if (audio.wasPlayingBeforeHidden) {
      audio.play().then(() => {
        musicStatus.textContent = '♫ Playing our memories...';
        musicToggle?.classList.add('is-playing');
      }).catch(() => {
        musicStatus.textContent = 'Tap to play music';
        musicToggle?.classList.remove('is-playing');
      });
      audio.wasPlayingBeforeHidden = false;
    }
  }
});
