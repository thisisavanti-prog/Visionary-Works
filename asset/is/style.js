// Smooth scroll navigation
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if(target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Simple particle effect (background)
window.onload = function() {
  const bgVisual = document.querySelector('.bg-visual');
  if(bgVisual) {
    let canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    bgVisual.appendChild(canvas);

    let ctx = canvas.getContext('2d');
    let particles = [];
    for(let i=0; i<40; i++) {
      particles.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        r: Math.random()*2.5+1.2,
        d: Math.random()*canvas.width,
        color: `rgba(0,240,255,${Math.random()*.6+.3})`
      });
    }
    function drawParticles() {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      for(let i=0; i<particles.length; i++) {
        let p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, false);
        ctx.fillStyle = p.color;
        ctx.shadowColor = '#00f0ff';
        ctx.shadowBlur = 8;
        ctx.fill();
        // Animate movement
        p.x += Math.sin(i+p.d/100)*0.3;
        p.y += Math.cos(i+p.d/120)*0.2;
        // Wrap around screen
        if(p.x>canvas.width) p.x=0;
        if(p.x<0) p.x=canvas.width;
        if(p.y>canvas.height) p.y=0;
        if(p.y<0) p.y=canvas.height;
      }
      requestAnimationFrame(drawParticles);
    }
    drawParticles();
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }
};

// Contact form animation (optional placeholder, non-functional)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  this.querySelector('.send-btn').textContent = 'Sent!';
  setTimeout(() => {
    this.querySelector('.send-btn').textContent = 'Send Message';
    this.reset();
  }, 1800);
});
