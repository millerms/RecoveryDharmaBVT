---
layout: single
title: "Burlington Meetings & Groups"
permalink: /meetings/
nav_order: 2
classes: full-width
---
## Recovery Dharma Meetings and Meditation Groups in Burlington, VT

{% for meeting in site.data.meetings %}
### {{ meeting.name }}
- **Date & Time:** {{ meeting.time }}
- **Type:** {{ meeting.type }}
- **Address:** {{ meeting.address }}

<hr class="zen-divider">
{% endfor %}


<!-- You can embed a Google Calendar here if desired -->
<!-- <iframe src="YOUR_GOOGLE_CALENDAR_URL" width="100%" height="600"></iframe> -->