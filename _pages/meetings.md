---
layout: splash
title: "Burlington Meetings & Groups"
permalink: /meetings/
nav_order: 2
classes: full-width
---
<h1 style="margin-top: 5px;">Recovery Meetings and Other Meditations</h1>

{% for meeting in site.data.meetings %}
<div class="zen-meeting-block">
  <h3 class="zen-meeting-title">{{ meeting.name }}</h3>
  <div class="zen-meeting-details">
    <p>📅 <strong>Date &amp; Time:</strong> {{ meeting.time }}</p>
    <p>🧘 <strong>Type:</strong> {{ meeting.type }}</p>
    <p>📍 <strong>Address:</strong> <a href="https://www.google.com/maps/search/?api=1&query={{ meeting.address | uri_escape }}" target="_blank" rel="noopener noreferrer">{{ meeting.address }}</a></p>
  </div>
</div>
<hr class="zen-divider">
{% endfor %}


<!-- You can embed a Google Calendar here if desired -->
<!-- <iframe src="YOUR_GOOGLE_CALENDAR_URL" width="100%" height="600"></iframe> -->