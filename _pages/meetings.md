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
      <h2 id="what-to-expect-heading">What to Expect</h2>
      <ul>
        <li>A brief meditation to help everyone arrive and settle.</li>
        <li>Optional sharing—you never have to speak.</li>
        <li>Confidentiality and respect for everyone in the room.</li>
      </ul>
      <p><strong>Meetings are always free, and you are welcome to just listen.</strong></p>
    </section>

    <p>Many meetings aim to be accessible and trauma-informed. If you have specific needs, you are welcome to reach out ahead of time or ask when you arrive.</p>
  </div>

  {% if site.data.meetings and site.data.meetings.size > 0 %}
  <section class="zen-event-list zen-meeting-list" aria-labelledby="weekly-meetings-heading">
    <h2 id="weekly-meetings-heading">Weekly Meetings</h2>

    {% for meeting in site.data.meetings %}
    {% assign meeting_start = meeting.time | split: "–" | first %}
    <article class="zen-event-card zen-meeting-card reveal reveal--up">
      <div class="zen-event-date zen-meeting-schedule" aria-hidden="true">
        <span class="zen-event-date__month">Weekly</span>
        <span class="zen-event-date__day">{{ meeting.day | slice: 0, 3 }}</span>
        <span class="zen-event-date__year">{{ meeting_start }}{% if meeting.time contains "PM" %} PM{% else %} AM{% endif %}</span>
      </div>

      <div class="zen-event-card__body">
        <h3 class="zen-event-title">{{ meeting.name }}</h3>

        <dl class="zen-event-details">
          <div class="zen-event-detail zen-event-detail--single-line">
            <dt>When</dt>
            <dd>{{ meeting.day }}<span class="zen-event-detail__separator" aria-hidden="true"> · </span>{{ meeting.time }}</dd>
          </div>

          <div class="zen-event-detail zen-event-detail--single-line">
            <dt>Format</dt>
            <dd>{{ meeting.type }}</dd>
          </div>

          <div class="zen-event-detail">
            <dt>Where</dt>
            <dd>
              <span class="zen-event-venue">{{ meeting.town }}</span>
              <span>{{ meeting.address }}</span>
            </dd>
          </div>
        </dl>

        {% if meeting.directions %}
        <details class="zen-meeting-directions">
          <summary>Building directions</summary>
          <p>{{ meeting.directions }}</p>
        </details>
        {% endif %}

        <div class="zen-event-actions">
          <a class="zen-event-action" href="https://www.google.com/maps/search/?api=1&amp;query={{ meeting.address | uri_escape }}" target="_blank" rel="noopener noreferrer">
            Get directions<span class="visually-hidden"> to {{ meeting.name }} (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </article>
    {% endfor %}
  </section>
  {% else %}
  <div class="zen-events-empty reveal reveal--up">
    <h2>No meetings are listed right now</h2>
    <p>Please <a href="{{ '/contact/' | relative_url }}">get in touch</a> if you have questions or know of a meeting we should add.</p>
  </div>
  {% endif %}

  <p class="zen-check-back reveal reveal--up">Meeting details can change. If something here needs an update, please <a href="{{ '/contact/' | relative_url }}">get in touch</a>.</p>
</div>

<figure class="vt-break reveal reveal--up">
  <picture>
    <source srcset="{{ '/assets/images/vt/fall-mountains.webp' | relative_url }}" type="image/webp">
    <img src="{{ '/assets/images/vt/fall-mountains.JPG' | relative_url }}" alt="Trees in fall along a Vermont road" loading="lazy" decoding="async">
  </picture>
</figure>
