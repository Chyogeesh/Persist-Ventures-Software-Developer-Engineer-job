// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Dynamic content update for funding rounds
const fundingRounds = [
  { name: 'Pre-Seed Round', valuation: '$11,000,000', date: '07/03/24' },
  { name: 'Seed Round', valuation: '$20,000,000', date: '07/03/24' },
  { name: 'Series A Round', valuation: '$80,000,000', date: '07/03/24' },
  { name: 'Series B Round', valuation: '$230,000,000', date: '07/03/24' }
];

const roundsContainer = document.querySelector('.rounds-container');

fundingRounds.forEach(round => {
  const roundDiv = document.createElement('div');
  roundDiv.classList.add('round');
  roundDiv.innerHTML = `
    <h3>${round.name}</h3>
    <p><strong>Post-money valuation:</strong> ${round.valuation}</p>
    <p><strong>Date:</strong> ${round.date}</p>
  `;
  roundsContainer.appendChild(roundDiv);
});

// Dynamic content update for CTC breakdown
const ctcBreakdown = [
  { name: 'Pre-Seed/Angel Round', cash: '$30,000', persist: '$2,500', project: '$550,000' },
  { name: 'Seed Round', cash: '$55,000', persist: '$2,500', project: '$1,100,000' },
  { name: 'Series A Round', cash: '$100,000', persist: '$2,500', project: '$4,000,000' },
  { name: 'Series B Round', cash: '$175,000', persist: '$2,500', project: '$15,000,000' }
];

const ctcContainer = document.querySelector('.ctc-container');

ctcBreakdown.forEach(ctc => {
  const ctcDiv = document.createElement('div');
  ctcDiv.classList.add('ctc');
  ctcDiv.innerHTML = `
    <h3>${ctc.name}</h3>
    <p><strong>Cash:</strong> ${ctc.cash}</p>
    <p><strong>Persist:</strong> ${ctc.persist}</p>
    <p><strong>Project:</strong> ${ctc.project}</p>
  `;
  ctcContainer.appendChild(ctcDiv);
});

// Add animations to sections on scroll
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});
