---
layout: splash
title: "RD Meetings & Groups"
permalink: /meetings/
nav_order: 2
classes: full-width
description: "Find local Recovery Dharma meetings and meditation groups across Vermont."
image: /assets/images/vt/fall-road.webp
header:
  overlay_color: rgba(16, 61, 45, 0.8)
  overlay_filter: "0.05"
  overlay_image: "/assets/images/vt/fall-road.webp"
excerpt: "This page lists local Recovery Dharma meetings and meditation groups in Vermont, providing key details such as time, type, town, and address."

---  
Showing up to a meeting can feel like a big step, so it’s worth saying: everyone is welcome here. We come together as we are, with curiosity, dignity, and a shared intention to reduce suffering. Whether you’re taking your first step toward recovery or returning to connect with friends on the path, these gatherings offer space to breathe, learn, heal, and feel less alone.

### What to Expect
{: .reveal .reveal--up }
- A brief meditation to settle the mind.
- Optional sharing - you never have to speak.
- Confidentiality and respect for everyone in the room.

Meetings are always free, and you are welcome to just listen.

Many meetings aim to be accessible and trauma‑informed. If you have specific needs, feel free to reach out or ask when you arrive.
{: .reveal .reveal--up }

<div class="zen-divider-short"></div>

{% for meeting in site.data.meetings %}
<div class="zen-meeting-block reveal reveal--up">
  <h2 class="zen-meeting-title">{{ meeting.name }}</h2>
  <div class="zen-meeting-details">
    <p>📅 <strong>Date &amp; Time:</strong> {{ meeting.time }}</p>
    <p>🧘 <strong>Type:</strong> {{ meeting.type }}</p>
    <p>🌆 <strong>Town:</strong> {{ meeting.town }}</p>
    <p>📍 <strong>Address:</strong> <a href="https://www.google.com/maps/search/?api=1&query={{ meeting.address | uri_escape }}" target="_blank" rel="noopener noreferrer">{{ meeting.address }}</a></p>
    {% if meeting.directions %}
    <p>🧭 <strong>Directions:</strong> {{ meeting.directions }}</p>
    {% endif %}
  </div>
</div>
<hr class="zen-divider">
{% endfor %}


<figure class="vt-break reveal reveal--up">
  <picture>
    <source srcset="{{ '/assets/images/vt/fall-mountains.webp' | relative_url }}" type="image/webp">
    <img src="{{ '/assets/images/vt/fall-mountains.JPG' | relative_url }}" alt="Trees in the fall by a Vermont road" loading="lazy" decoding="async">
  </picture>
</figure>