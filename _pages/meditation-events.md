---
layout: splash
title: "Events"
permalink: /events/
nav_order: 5
classes: full-width
---

<div class="zen-events-wrapper">
  <h1 style="display: flex; align-items: center; justify-content: center; flex-direction: column; text-align: center; margin-top: 0;">Upcoming Meditation Events</h1>
  <p class="zen-intro" style="text-align: left;">
    We're building a schedule of events to support practice, community, and recovery. Whether it's retreats, daylong sits, or special talks, this is where you'll find them. 
  </p>
<hr class="zen-divider">

  <div id="events-table"></div>

  <p class="zen-check-back" style="text-align: left;">More events coming soon. Check back often or <a href="/contact/">get in touch</a> if you'd like to help organize!</p>
</div>
<script>
  async function loadEvents() {
    const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSV8x4BiaVF7wqEvXVR3jQ-pISXz9iSgrG---8pz8C6yKfux-nXejmfAfSVNu6hMQ-bnzNO0sw8-k2M/pub?output=csv');
    const csvText = await response.text();
    function parseCSV(csv) {
      const pattern = /("([^"]|"")*"|[^,\n]+)(?=,|\n|$)/g;
      return csv.trim().split('\n').map(line => {
        const matches = line.match(pattern);
        return matches ? matches.map(cell => cell.replace(/^"|"$/g, '').replace(/""/g, '').trim()) : [];
      });
    }
    const rows = parseCSV(csvText);
    const [header, ...data] = rows;
    const dateIndex = header.findIndex(h => h.toLowerCase() === 'date');
    data.sort((a, b) => {
      const aDate = new Date(Date.parse(a[dateIndex].replace(/–|-/g, ' ').replace(/\b(\d+)(st|nd|rd|th)?\b/g, '$1')));
      const bDate = new Date(Date.parse(b[dateIndex].replace(/–|-/g, ' ').replace(/\b(\d+)(st|nd|rd|th)?\b/g, '$1')));
      return aDate - bDate;
    });

    const container = document.createElement('div');
    container.className = 'zen-event-cards grid-layout';

    data.forEach((row, i) => {
      const card = document.createElement('div');
      card.className = 'zen-event-card fade-in';
      header.forEach((h, j) => {
        if (h === 'Link' && row[j]) {
          const p = document.createElement('p');
          const a = document.createElement('a');
          a.href = row[j];
          a.target = '_blank';
          a.innerText = 'More Info';
          a.className = 'zen-event-link';
          // Label with icon
          const label = document.createElement('strong');
          label.style.color = 'var(--zen-primary)';
          label.style.fontWeight = 'bold';
          label.style.fontFamily = 'inherit';
          label.textContent = '🔗 Link: ';
          p.style.margin = '0.15rem 0';
          p.appendChild(label);
          p.appendChild(a);
          card.appendChild(p);
        } else if (h !== 'Link') {
          const p = document.createElement('p');
          const label = document.createElement('strong');
          // Choose emoji based on field
          let icon = '';
          switch (h.toLowerCase()) {
            case 'date':
              icon = '🗓️';
              break;
            case 'location':
              icon = '📍';
              break;
            case 'description':
              icon = 'ℹ️';
              break;
            default:
              icon = '';
          }
          label.textContent = icon ? `${icon} ${h}: ` : `${h}: `;
          label.style.color = 'var(--zen-primary)';
          label.style.fontWeight = 'bold';
          label.style.fontFamily = 'inherit';
          p.style.margin = '0.15rem 0';
          p.appendChild(label);
          p.appendChild(document.createTextNode(row[j]));
          card.appendChild(p);
        }
      });

      const divider = document.createElement('hr');
      divider.className = 'zen-divider';
      container.appendChild(card);
      // Animation stagger
      setTimeout(() => {
        card.style.animationDelay = `${i * 100}ms`;
      }, 0);
      container.appendChild(divider);
    });

    document.getElementById('events-table').appendChild(container);
  }

  loadEvents();
</script>