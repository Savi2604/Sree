const photos = [
  { src: 'assets/memory-1.jpg', caption: 'Some pictures are just pictures...\nbut somehow, this one always makes me smile.' },
  { src: 'assets/memory-2.jpg', caption: "I don't know when we became this close,\nbut I'm really glad we did." },
  { src: 'assets/memory-3.jpg', caption: 'We have had so many random conversations,\nrandom laughs and random moments...\nand somehow, those became my favourite memories.' },
  { src: 'assets/memory-4.jpg', caption: 'Looking at this picture makes me realise\nhow much we have grown together.' },
  { src: 'assets/memory-5.jpg', caption: 'These silly little moments may not mean much to anyone else,\nbut I know I will miss them someday.' },
  { src: 'assets/memory-6.jpg', caption: "Sometimes I don't even have to explain what I'm feeling.\nYou just understand." },
  { src: 'assets/memory-7.jpg', caption: "I wish I could keep some moments exactly like this forever." },
  { src: 'assets/memory-8.jpg', caption: 'And if I could choose one thing for our future,\nit would be to make many more memories like these.' }
];

const secretScreen = document.getElementById('secret-screen');
const secretCard = document.getElementById('secret-card');
const secretForm = document.getElementById('secret-form');
const secretKeyInput = document.getElementById('secret-key');
const secretError = document.getElementById('secret-error');
const siteMain = document.getElementById('site-main');
const musicWidget = document.getElementById('music-widget');
const musicToggle = document.getElementById('music-toggle');
const musicStatus = document.getElementById('music-status');
const audio = document.getElementById('memory-audio');
const photoCard = document.getElementById('photo-card');
const memoryImage = document.getElementById('memory-image');
const memoryCaption = document.getElementById('memory-caption');
const messages = document.querySelectorAll('.message-line');
const wishes = document.querySelectorAll('.wish-line');
const finalText = document.querySelectorAll('.final-text');
const finalNote = document.querySelector('.final-note');
const finalBirthday = document.querySelector('.final-birthday');
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

function showSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) return;
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  observer.observe(section);
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
  showSection('little-something');

  messages.forEach((line, index) => {
    setTimeout(() => {
      line.classList.add('visible');
      if (index === 0 || index === 1) {
        typeLine(line, line.textContent.trim(), 22);
      }
    }, 700 + index * 1100);
  });
}

function revealWishes() {
  showSection('wishes');

  wishes.forEach((line, index) => {
    setTimeout(() => {
      line.classList.add('visible');
    }, 700 + index * 1000);
  });
}

function revealFinal() {
  const finalSection = document.getElementById('final-block');
  finalSection.classList.add('visible');

  finalText.forEach((line, index) => {
    setTimeout(() => {
      line.classList.add('visible');
    }, 700 + index * 1000);
  });

  setTimeout(() => {
    const finalStrong = document.querySelector('.final-strong');
    if (finalStrong) {
      finalStrong.style.opacity = '1';
      finalStrong.style.transform = 'scale(1)';
    }
  }, 4300);

  setTimeout(() => {
    finalNote.classList.add('visible');
  }, 6200);

  setTimeout(() => {
    finalBirthday.classList.add('visible');
  }, 7600);
}

let currentPhoto = 0;
let photoTimer = null;

function showPhoto(index) {
  clearTimeout(photoTimer);

  const photo = photos[index];
  const isEven = index % 2 === 0;
  const animationClass = isEven ? 'zoom-animate' : 'slide-animate';

  photoCard.classList.remove('show', 'zoom-animate', 'slide-animate');
  void photoCard.offsetWidth;

  memoryImage.src = photo.src;
  memoryImage.alt = `Memory ${index + 1}`;
  memoryCaption.innerHTML = photo.caption.replace(/\n/g, '<br>');

  photoCard.classList.add(animationClass);
  setTimeout(() => {
    photoCard.classList.add('show');
  }, 80);

  const delay = 4400;
  photoTimer = setTimeout(() => {
    currentPhoto += 1;
    if (currentPhoto < photos.length) {
      showPhoto(currentPhoto);
    } else {
      document.getElementById('little-something').scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(revealMessages, 500);
      setTimeout(revealWishes, 9000);
      setTimeout(revealFinal, 17000);
    }
  }, delay);
}

function toggleMusic() {
  if (!audio) return;

  if (audio.paused) {
    audio.play().then(() => {
      musicStatus.textContent = 'Playing our memories...';
    }).catch(() => {
      musicStatus.textContent = 'Tap to play music';
    });
  } else {
    audio.pause();
    musicStatus.textContent = 'Music paused';
  }
}

function unlockWebsite() {
  secretScreen.classList.add('hidden');
  siteMain.classList.remove('hidden');
  siteMain.classList.add('visible');
  musicWidget.classList.remove('hidden');

  if (audio) {
    audio.volume = 0.5;
    audio.play().catch(() => {
      musicStatus.textContent = 'Tap to play music';
    });
  }

  showPhoto(0);
}

function handleSecretSubmit(event) {
  event.preventDefault();
  const key = secretKeyInput.value.trim();

  if (key === '20-08-2005') {
    secretError.textContent = '';
    unlockWebsite();
  } else {
    secretError.textContent = "Oops... that's not the key ♡ Try again.";
    secretCard.classList.remove('shake');
    void secretCard.offsetWidth;
    secretCard.classList.add('shake');
    secretKeyInput.value = '';
    secretKeyInput.focus();
  }
}

secretForm.addEventListener('submit', handleSecretSubmit);
secretKeyInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleSecretSubmit(event);
  }
});

musicToggle.addEventListener('click', toggleMusic);

createHearts();
createStars();

if (audio) {
  audio.addEventListener('play', () => {
    musicStatus.textContent = '♫ Playing our memories...';
  });

  audio.addEventListener('pause', () => {
    musicStatus.textContent = '♫ Music paused';
  });
}
