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
excerpt: "This page lists upcoming meditation events, workshops, and retreats related to Recovery Dharma and Buddhist practice in Vermont. Retreats and workshops can offer more space for practice, reflection, and connection."
---
<div class="zen-events-wrapper">
  <p class="reveal reveal--up" style="max-width: 640px; margin: 0 auto 1.5rem auto; text-align: left;">
    Retreats, workshops, and special meditation events can offer more space than a weekly meeting. They give us time to slow down, practice in community, and step out of the usual pace of daily life for a while. You do not need prior experience to attend. You are welcome to show up as you are, participate at your own pace, and take what is helpful.

    The list below can take a few seconds to load depending on your device.
  </p>
<hr class="zen-divider">
<p class="reveal reveal--up" style="max-width: 640px; margin: 1rem auto; text-align: left;">Upcoming events are listed below with dates, locations, descriptions, and links for more information.</p>
<hr class="zen-divider">

  <div id="events-table"></div>

  <p class="zen-check-back reveal reveal--up" style="text-align: left;">More events will be added here as they are scheduled. You are welcome to check back or <a href="/contact/">get in touch</a> if you have questions or would like to help organize.</p>
</div>
<div class="reveal reveal--up">
<script>
  async function loadEvents() {
    const eventsRoot = document.getElementById('events-table');
    if (!eventsRoot) return;

    const renderError = (message) => {
      const error = document.createElement('p');
      error.className = 'zen-error-message';
      error.style.color = 'var(--zen-primary)';
      error.style.maxWidth = '640px';
      error.style.margin = '1rem auto';
      error.textContent = message;
      eventsRoot.appendChild(error);
    };

    function parseCSV(csv) {
      const rows = [];
      let currentCell = '';
      let currentRow = [];
      let inQuotes = false;

      const pushCell = () => {
        currentRow.push(currentCell.replace(/\r/g, '').trim());
        currentCell = '';
      };

      const pushRow = () => {
        if (currentRow.some(value => value !== '')) {
          rows.push(currentRow);
        }
        currentRow = [];
      };

      for (let i = 0; i < csv.length; i++) {
        const char = csv[i];
        if (char === '"') {
          if (inQuotes && csv[i + 1] === '"') {
            currentCell += '"';
            i++;
          } else {
            inQuotes = !inQuotes;
          }
        } else if (char === ',' && !inQuotes) {
          pushCell();
        } else if ((char === '\n' || char === '\r') && !inQuotes) {
          if (char === '\r' && csv[i + 1] === '\n') {
            i++;
          }
          pushCell();
          pushRow();
        } else {
          currentCell += char;
        }
      }

      if (currentCell.length || currentRow.length) {
        pushCell();
        pushRow();
      }

      return rows;
    }

    try {
      const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSV8x4BiaVF7wqEvXVR3jQ-pISXz9iSgrG---8pz8C6yKfux-nXejmfAfSVNu6hMQ-bnzNO0sw8-k2M/pub?output=csv');
      if (!response.ok) {
        throw new Error(`Google Sheets returned ${response.status}`);
      }
      const csvText = await response.text();
      const rows = parseCSV(csvText);
      if (!rows.length) {
        throw new Error('No event data found. Double-check the sheet publishing settings.');
      }

      const [header, ...rawData] = rows;
      const dateIndex = header.findIndex(h => h.trim().toLowerCase() === 'date');
      if (dateIndex === -1) {
        throw new Error("Missing 'Date' column in the sheet.");
      }

      const data = rawData
        .filter(row => row.some(value => value !== ''))
        .map(row => header.map((_, idx) => (row[idx] || '').trim()));

      const normalizeDate = (dateString) => {
        if (!dateString) return null;
        const cleaned = dateString
          .replace(/–|—/g, '-')
          .replace(/\b(\d+)(st|nd|rd|th)\b/gi, '$1');
        const parsed = Date.parse(cleaned);
        return Number.isNaN(parsed) ? null : new Date(parsed);
      };

      data.sort((a, b) => {
        const aDate = normalizeDate(a[dateIndex]) || new Date(0);
        const bDate = normalizeDate(b[dateIndex]) || new Date(0);
        return aDate - bDate;
      });

      if (!data.length) {
        renderError('Events will appear here as soon as they are added to the Google Sheet.');
        return;
      }

      const container = document.createElement('div');
      container.className = 'zen-event-cards grid-layout';

      data.forEach((row, i) => {
        const card = document.createElement('div');
        card.className = 'zen-event-card fade-in';
        header.forEach((h, j) => {
          if (h.trim().toLowerCase() === 'link' && row[j]) {
            const p = document.createElement('p');
            const a = document.createElement('a');
            a.href = row[j];
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.innerText = 'More Info';
            a.className = 'zen-event-link';
            const label = document.createElement('strong');
            label.style.color = 'var(--zen-primary)';
            label.style.fontWeight = 'bold';
            label.style.fontFamily = 'inherit';
            label.textContent = '🔗 Link: ';
            p.style.margin = '0.15rem 0';
            p.appendChild(label);
            p.appendChild(a);
            card.appendChild(p);
          } else if (h !== 'Link' && row[j]) {
            const p = document.createElement('p');
            const label = document.createElement('strong');
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

        container.appendChild(card);
        setTimeout(() => {
          card.style.animationDelay = `${i * 100}ms`;
        }, 0);
        const divider = document.createElement('hr');
        divider.className = 'zen-divider';
        container.appendChild(divider);
      });

      eventsRoot.appendChild(container);
    } catch (error) {
      console.error('Unable to load events', error);
      renderError('We had trouble loading events from Google Sheets. Please try again shortly.');
    }
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
