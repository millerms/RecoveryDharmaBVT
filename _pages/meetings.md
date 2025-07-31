---
layout: single
title: "Meetings"
permalink: /meetings/
nav_order: 2
---
## Recovery Dharma Meetings and Meditation Groups in Vermont


## Recovery Dharma Meetings and Meditation Groups in Vermont

{% for meeting in site.data.meetings %}
### {{ meeting.name }}
- **Date & Time:** {{ meeting.time }}
- **Type:** {{ meeting.type }}
- **Address:** {{ meeting.address }}

---
{% endfor %}

<!-- You can embed a Google Calendar here if desired -->
<!-- <iframe src="YOUR_GOOGLE_CALENDAR_URL" width="100%" height="600"></iframe> -->