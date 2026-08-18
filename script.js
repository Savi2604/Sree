const photos = [
  { src: 'assets/memory-1.jpg', caption: 'Some pictures are just pictures... 🤍\nbut somehow, this one always makes me smile.' },
  { src: 'assets/memory-2.jpg', caption: "I don't know when we became this close, 🌸\nbut I'm really glad we did." },
  { src: 'assets/memory-3.jpg', caption: 'So many random conversations, random laughs... 💫\nand somehow, those became my favourite memories.' },
  { src: 'assets/memory-4.jpg', caption: 'Looking at this makes me realise 🌷\nhow much we have grown together.' },
  { src: 'assets/memory-5.jpg', caption: 'These silly little moments may not mean much to anyone else 🥺\nbut I know I will miss them someday.' },
  { src: 'assets/memory-6.jpg', caption: "Sometimes I don't even have to explain what I'm feeling. 💗\nYou just understand." },
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
  { src: 'assets/memory-21.jpg', caption: 'Years from now, I hope we still look at pictures like this 🌸\nand laugh about everything we have been through.' },
  { src: 'assets/memory-22.jpg', caption: 'Sometimes, the quietest moments are the ones that speak the loudest. 🕊️✨\nI am so grateful for every silent understanding we share. 🤍' },
  { src: 'assets/memory-23.jpg', caption: 'Through every season and every change, 🍂🌸\nI hope we always find our way back to laughter. 😂💗' },
  { src: 'assets/memory-24.jpg', caption: 'Just a simple reminder that you are a rare gem, Sree. 💎🌷\nNever let the world dull your beautiful sparkle. ✨' },
  { src: 'assets/memory-25.jpg', caption: "Looking back at how far we've come... 🌠\nI wouldn't trade these memories for anything in the world. 🗺️💞" },
  { src: 'assets/memory-26.jpg', caption: "Here's to the pages we've written and the chapters yet to come. 📖🥂\nMay our story only grow warmer and sweeter. 🍯🌸" }
];

const siteMain = document.getElementById('site-main');
const musicWidget = document.getElementById('music-widget');
const musicToggle = document.getElementById('music-toggle');
const musicStatus = document.getElementById('music-status');
const audio = document.getElementById('memory-audio');
const photoCard = document.getElementById('photo-card');
const memoryImage = document.getElementById('memory-image');
const memoryCaption = document.getElementById('memory-caption');
const captionBox = document.getElementById('caption-box');
const messages = document.querySelectorAll('.message-line');
const wishes = document.querySelectorAll('.wish-line');
const finalText = document.querySelectorAll('.final-text');
const finalNotes = document.querySelectorAll('.final-note');
const photoVariants = ['variant-1', 'variant-2', 'variant-3', 'variant-4', 'variant-5', 'variant-6', 'variant-7', 'variant-8'];
const captionVariants = ['variant-1', 'variant-2', 'variant-3', 'variant-4', 'variant-5', 'variant-6', 'variant-7', 'variant-8'];

function resetLockScreen() {
  if (siteMain) {
    siteMain.classList.remove('hidden');
    siteMain.classList.add('visible');
  }

  if (musicWidget) {
    musicWidget.classList.remove('hidden');
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

  for (let i = 0; i < 22; i += 1) {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.textContent = Math.random() > 0.5 ? '♡' : '♥';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.bottom = `${-12 - Math.random() * 18}%`;
    heart.style.fontSize = `${10 + Math.random() * 16}px`;
    heart.style.opacity = `${0.25 + Math.random() * 0.6}`;
    heart.style.animationDuration = `${10 + Math.random() * 18}s`;
    heart.style.animationDelay = `${Math.random() * 8}s`;
    background.appendChild(heart);
  }

  for (let i = 0; i < 10; i += 1) {
    const butterfly = document.createElement('span');
    butterfly.className = 'floating-butterfly';
    butterfly.style.left = `${Math.random() * 100}%`;
    butterfly.style.top = `${Math.random() * 95}%`;
    butterfly.style.setProperty('--duration', `${16 + Math.random() * 18}s`);
    butterfly.style.opacity = `${0.25 + Math.random() * 0.55}`;
    butterfly.style.transform = `scale(${0.7 + Math.random() * 0.7})`;
    background.appendChild(butterfly);
  }

  for (let i = 0; i < 32; i += 1) {
    const spark = document.createElement('span');
    spark.className = 'floating-spark';
    spark.style.left = `${Math.random() * 100}%`;
    spark.style.top = `${Math.random() * 100}%`;
    spark.style.setProperty('--duration', `${2 + Math.random() * 5}s`);
    spark.style.opacity = `${0.2 + Math.random() * 0.8}`;
    background.appendChild(spark);
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
  showSection('tell-you-one-thing');

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
  if (finalSection) {
    finalSection.classList.add('visible');
  }

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

  finalNotes.forEach((note, index) => {
    setTimeout(() => {
      note.classList.add('visible');
    }, 6200 + index * 600);
  });
}

let currentPhoto = 0;
let photoTimer = null;

function showPhoto(index) {
  clearTimeout(photoTimer);

  const photo = photos[index];
  const variantClass = photoVariants[index % photoVariants.length];
  const captionVariantClass = captionVariants[index % captionVariants.length];

  photoCard.classList.remove('show', 'photo-leaving', 'variant-1', 'variant-2', 'variant-3', 'variant-4', 'variant-5', 'variant-6', 'variant-7', 'variant-8');
  captionBox.classList.remove('visible', 'variant-1', 'variant-2', 'variant-3', 'variant-4', 'variant-5', 'variant-6', 'variant-7', 'variant-8');
  void photoCard.offsetWidth;

  memoryImage.src = photo.src;
  memoryImage.alt = `Memory ${index + 1}`;
  memoryCaption.innerHTML = photo.caption.replace(/\n/g, '<br>');

  photoCard.classList.add(variantClass, 'show');
  captionBox.classList.add(captionVariantClass);

  setTimeout(() => {
    captionBox.classList.add('visible');
  }, 900);

  const delay = 5200;
  photoTimer = setTimeout(() => {
    photoCard.classList.add('photo-leaving');
    captionBox.classList.remove('visible');

    setTimeout(() => {
      currentPhoto += 1;
      if (currentPhoto < photos.length) {
        showPhoto(currentPhoto);
      } else {
        document.getElementById('little-something').scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(revealMessages, 500);
        setTimeout(revealWishes, 9000);
        setTimeout(revealFinal, 17000);
      }
    }, 900);
  }, delay);
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

  // Smooth scroll to memory section then start slideshow
  const memorySec = document.querySelector('.memory-story');
  if (memorySec) {
    memorySec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  setTimeout(() => showPhoto(0), 300);
}

function initializeWebsite() {
  if (window.__birthdayWebsiteInitialized) {
    return;
  }

  window.__birthdayWebsiteInitialized = true;

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

  // Hook the hero "Open the story" button to start music + photo slideshow
  const heroButton = document.querySelector('.hero-button');
  let slideshowStarted = false;

  function startSlideshow() {
    if (slideshowStarted) return;
    slideshowStarted = true;
    unlockWebsite();
  }

  if (heroButton) {
    heroButton.addEventListener('click', (e) => {
      e.preventDefault();
      startSlideshow();
    });
  }

  // Fallback: also start when user scrolls to the memory/photo section
  const memorySec = document.querySelector('.memory-story');
  if (memorySec) {
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startSlideshow();
          scrollObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    scrollObserver.observe(memorySec);
  }

  siteMain?.classList.remove('hidden');
  siteMain?.classList.add('visible');
  musicWidget?.classList.remove('hidden');

  createBackgroundLayer();
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
