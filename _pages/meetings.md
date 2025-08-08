---
layout: splash
title: "Burlington Meetings & Groups"
permalink: /meetings/
nav_order: 2
classes: full-width
---
<div class="page-title-with-icon">
  <img src="/assets/images/rd-icons/rd-black-ring.webp" alt="Recovery Dharma Black Ring" width="60" height="60" loading="lazy">
  <h1>RD Meetings &amp; Meditation Groups</h1>
</div>
  This page lists local Recovery Dharma meetings and meditation groups in Vermont, providing key details such as time, type, town, and address. Whether you are new to Recovery Dharma or an experienced practitioner, these gatherings offer valuable opportunities for connection, mindfulness, and recovery support throughout the community.

<hr class="zen-divider">    

{% for meeting in site.data.meetings %}
<div class="zen-meeting-block">
  <h3 class="zen-meeting-title">{{ meeting.name }}</h3>
  <div class="zen-meeting-details">
    <p>📅 <strong>Date &amp; Time:</strong> {{ meeting.time }}</p>
    <p>🧘 <strong>Type:</strong> {{ meeting.type }}</p>
    <p>🌆 <strong>Town:</strong> {{ meeting.town }}</p>
    <p>📍 <strong>Address:</strong> <a href="https://www.google.com/maps/search/?api=1&query={{ meeting.address | uri_escape }}" target="_blank" rel="noopener noreferrer">{{ meeting.address }}</a></p>
  </div>
</div>
<hr class="zen-divider">
{% endfor %}