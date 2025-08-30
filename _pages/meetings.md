---
layout: splash
title: "Burlington Meetings & Groups"
permalink: /meetings/
nav_order: 2
classes: full-width
description: "Find local Recovery Dharma meetings and meditation groups across Vermont."
image: /assets/images/rd-icons/rdvt-icon.webp
---
<div class="fade-in" style="display: flex; align-items: center; justify-content: center; gap: 0.75rem; margin-top: 1.5rem; margin-bottom: 1rem;">
  <img src="{{ '/assets/images/rd-icons/rd-black-ring.webp' | relative_url }}" alt="Recovery Dharma Black Ring" style="width: 55px; height: 55px;">
  <h1 style="margin: 0;">RD Meetings &amp; Meditation Groups</h1>
</div>

This page lists local Recovery Dharma meetings and meditation groups in Vermont, providing key details such as time, type, town, and address. Walking into a meeting can feel daunting, so remember, we're all beginners here, coming together with compassion. Whether you are new to Recovery Dharma or an experienced practitioner, these gatherings offer valuable opportunities for connection, mindfulness, and recovery support throughout the community.
{: .reveal .reveal--up }

<hr class="zen-divider">    

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
