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
excerpt: "This page lists local Recovery Dharma meetings and meditation groups in Vermont, providing key details such as time, type, town, and address. Walking into a meeting can feel daunting, so remember, we're all beginners here, coming together with compassion. Whether you are new to Recovery Dharma or an experienced practitioner, these gatherings offer valuable opportunities for connection, mindfulness, and recovery support throughout the community."

---  

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
    <source srcset="{{ '/assets/images/vt/tree-reflection.webp' | relative_url }}" type="image/webp">
    <img src="{{ '/assets/images/vt/tree-reflection.JPG' | relative_url }}" alt="Tree reflected on a lake in Vermont" loading="lazy" decoding="async">
  </picture>
</figure>