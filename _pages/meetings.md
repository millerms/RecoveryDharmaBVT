---
layout: single
title: "Meetings"
permalink: /meetings/
nav_order: 2
---
## Recovery Dharma Meetings and Meditation Groups in Vermont

<ul>
{% for meeting in site.data.meetings %}
  <li>
    <strong>{{ meeting.time }}</strong> – {{ meeting.name }} ({{ meeting.location }}: {{ meeting.address }})
  </li>
{% endfor %}
</ul>

<!-- You can embed a Google Calendar here if desired -->
<!-- <iframe src="YOUR_GOOGLE_CALENDAR_URL" width="100%" height="600"></iframe> -->