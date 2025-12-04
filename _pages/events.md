---
layout: splash
title: "Upcoming Meditation Events"
permalink: /events/
nav_order: 5
classes: full-width
description: "Upcoming meditation events, workshops, and retreats related to Recovery Dharma and Buddhist practice in Vermont."
header:
  overlay_color: rgba(16, 61, 45, 0.8)
  overlay_filter: "0.05"
  overlay_image: "/assets/images/vt/mountain-sunset.webp"
excerpt: "This page lists upcoming meditation events, workshops, and retreats related to Recovery Dharma and Buddhist practices in Vermont. Joining a retreat or workshop can feel like stepping into a gentle current, let it carry you toward deeper practice and connection."
---
<div class="zen-events-wrapper">
  <p class="reveal reveal--up" style="max-width: 640px; margin: 0 auto 1.5rem auto; text-align: left;">
    Retreats, workshops, and special meditation events can offer a deeper dive than a weekly meeting. They give us time to slow down, listen to our bodies, and practice in community without rushing back to daily life. You do not need any prior experience to attend. You are welcome to show up as you are, participate at your own pace, and take what is helpful for your recovery.
  </p>
<hr class="zen-divider">

  <div id="events-table"></div>

  <p class="zen-check-back reveal reveal--up" style="text-align: left;">More events coming soon. Check back often or <a href="/contact/">get in touch</a> if you'd like to help organize!</p>
</div>
<div class="reveal reveal--up">
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
          a.rel = 'noopener noreferrer';
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
</div>

<figure class="vt-break reveal reveal--up">
  <picture>
    <source srcset="{{ '/assets/images/vt/burl-whales.webp' | relative_url }}" type="image/webp">
    <img src="{{ '/assets/images/vt/burl-whales.jpg' | relative_url }}" alt="Whale art outside of Burlington" width="6000" height="4000" loading="lazy" decoding="async">
  </picture>
</figure>
