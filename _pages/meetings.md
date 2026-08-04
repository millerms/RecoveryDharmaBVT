---
layout: splash
title: "RD Meetings & Groups"
permalink: /meetings/
nav_order: 2
classes: [full-width, meetings-page]
description: "Find local Recovery Dharma meetings and meditation groups across Vermont."
image: /assets/images/vt/fall-road.webp
header:
  overlay_color: rgba(16, 61, 45, 0.8)
  overlay_filter: "0.05"
  overlay_image: "/assets/images/vt/fall-road.webp"
excerpt: "Local Recovery Dharma meetings offer meditation, optional sharing, and supportive community. Everyone is welcome and meetings are always free."
---
<div class="zen-meetings-wrapper">
  <div class="zen-meetings-intro reveal reveal--up">
    <p>Showing up to a meeting can feel like a big step, so it is worth saying clearly: everyone is welcome here. Whether you are taking a first step toward recovery or returning to reconnect, these gatherings offer space to pause, listen, learn, and feel less alone.</p>

    <section class="zen-meeting-expect" aria-labelledby="what-to-expect-heading">
      <h2 id="what-to-expect-heading">What to Expect at an RD Meeting</h2>
      <ul>
        <li>A brief meditation to help everyone arrive and settle.</li>
        <li>Optional sharing-you never have to speak.</li>
        <li>Confidentiality and respect for everyone in the room.</li>
      </ul>
      <p><strong>Meetings are always free, and you are welcome to just listen.</strong></p>
    </section>

    <p>Many meetings aim to be accessible and trauma-informed. If you have specific needs, you are welcome to reach out ahead of time or ask when you arrive.</p>
  </div>

  {% if site.data.meetings and site.data.meetings.size > 0 %}
  {% assign recovery_dharma_meetings = site.data.meetings | where: "category", "recovery_dharma" %}
  {% assign local_communities = site.data.meetings | where: "category", "local_community" %}

  <section class="zen-event-list zen-meeting-list" aria-labelledby="rd-meetings-heading">
    <header class="zen-meeting-list__header reveal reveal--up">
      <h2 id="rd-meetings-heading">Recovery Dharma Meetings</h2>
      <p>Peer-led meetings centered on Buddhist-inspired recovery, meditation, and optional sharing.</p>
    </header>

    {% for meeting in recovery_dharma_meetings %}
      {% include meeting-card.html meeting=meeting %}
    {% endfor %}
  </section>

  <section class="zen-event-list zen-meeting-list" aria-labelledby="local-communities-heading">
    <header class="zen-meeting-list__header reveal reveal--up">
      <h2 id="local-communities-heading">Local Meditation Communities</h2>
      <p>These are not Recovery Dharma meetings, but they offer additional opportunities to meditate and practice in community.</p>
    </header>

    {% for meeting in local_communities %}
      {% include meeting-card.html meeting=meeting %}
    {% endfor %}
  </section>
  {% else %}
  {% endif %}

</div>

<figure class="vt-break reveal reveal--up">
  <picture>
    <source srcset="{{ '/assets/images/vt/fall-mountains.webp' | relative_url }}" type="image/webp">
    <img src="{{ '/assets/images/vt/fall-mountains.JPG' | relative_url }}" alt="Trees in fall along a Vermont road" loading="lazy" decoding="async">
  </picture>
</figure>
