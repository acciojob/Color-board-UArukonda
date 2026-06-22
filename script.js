//your JS code here. If required.
 const colors = [
      '#e74c3c', '#c0392b', '#e67e22', '#d35400',
      '#2ecc71', '#27ae60', '#3498db', '#2980b9',
      '#9b59b6', '#8e44ad', '#1abc9c', '#e91e8c',
      '#f1c40f', '#e74c3c',
    ];

function randomColor() {
      return colors[Math.floor(Math.random() * colors.length)];
    }

const grid = document.getElementById('grid');
    for (let i = 0; i < 800; i++) {
      const box = document.createElement('div');
      box.className = 'square';

		box.addEventListener('mouseenter', () => {
        box.style.transition = 'background 0.05s ease';
        box.style.background = randomColor();
      });
 
      box.addEventListener('mouseleave', () => {
        box.style.transition = 'background 1.5s ease';
        box.style.background = '#1d1d1d';
      });
		
      grid.appendChild(box);
    }