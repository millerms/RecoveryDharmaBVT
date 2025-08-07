---
layout: splash
title: "Burlington Meetings & Groups"
permalink: /meetings/
nav_order: 2
classes: full-width
---
<div style="display: flex; align-items: center; gap: 0.25rem; margin-top: 1.5rem;">
  <img src="/assets/images/rd-icons/rd-black-ring.webp" alt="Recovery Dharma Black Ring" style="width: 60px; margin-bottom: 0;">
  <h1 style="margin: 0;">Recovery Meetings and Other Meditation Groups</h1>
</div>

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


<!-- You can embed a Google Calendar here if desired -->
<!-- <iframe src="YOUR_GOOGLE_CALENDAR_URL" width="100%" height="600"></iframe> -->