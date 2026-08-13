---
layout: splash
title: "Upcoming Meditation Events"
permalink: /events/
nav_order: 3
classes: [full-width, events-page]
description: "Upcoming meditation events, workshops, and retreats related to Recovery Dharma and Buddhist practice in Vermont."
header:
  overlay_color: rgba(16, 61, 45, 0.8)
  overlay_filter: "0.05"
  overlay_image: "/assets/images/vt/mountain-sunset.webp"
excerpt: "Retreats, workshops, and special events offer time to slow down, practice in community, and connect with Buddhist teachings in Vermont."
---
<div class="zen-events-wrapper">
  <div class="zen-events-intro reveal reveal--up">
    <p>Retreats, workshops, and special meditation events offer time to slow down, practice in community, and step outside the usual pace of daily life.</p>
    <p>No prior experience is needed. You are welcome to participate at your own pace and take what is helpful.</p>
  </div>

  {% if site.data.meditation-events and site.data.meditation-events.size > 0 %}
  {% assign events_by_date = site.data.meditation-events | sort: "date" %}
  <section class="zen-event-list" aria-labelledby="upcoming-events-heading">
    <h2 id="upcoming-events-heading">Upcoming Events</h2>

    {% for event in events_by_date %}
    <article class="zen-event-card reveal reveal--up">
      <div class="zen-event-date" aria-hidden="true">
        <span class="zen-event-date__month">{{ event.date | date: "%b" }}</span>
        <span class="zen-event-date__day">{{ event.date | date: "%-d" }}{% if event.end_date %}-{{ event.end_date | date: "%-d" }}{% endif %}</span>
        <span class="zen-event-date__year">{{ event.date | date: "%Y" }}</span>
      </div>

      <div class="zen-event-card__body">
        {% if forloop.first %}<p class="zen-event-eyebrow">Next event</p>{% endif %}
        <h3 class="zen-event-title">{{ event.title }}</h3>

        <dl class="zen-event-details">
          <div class="zen-event-detail{% unless event.recurrence %} zen-event-detail--single-line{% endunless %}">
            <dt>When</dt>
            <dd>
              {% if event.end_date %}
                <time datetime="{{ event.date }}">{{ event.date | date: "%A, %B %-d" }}</time><span class="zen-event-detail__separator" aria-hidden="true">-</span><time datetime="{{ event.end_date }}">{{ event.end_date | date: "%A, %B %-d, %Y" }}</time>
              {% else %}
                <time datetime="{{ event.date }}{% if event.start_time %}T{{ event.start_time }}:00-04:00{% endif %}">
                  {{ event.date | date: "%A, %B %-d, %Y" }}{% if event.time %}<span class="zen-event-detail__separator" aria-hidden="true"> · </span>{{ event.time }}{% endif %}
                </time>
              {% endif %}
              {% if event.recurrence %}<span class="zen-event-detail__note">{{ event.recurrence }}</span>{% endif %}
            </dd>
          </div>

          <div class="zen-event-detail{% unless event.venue %} zen-event-detail--single-line{% endunless %}">
            <dt>Where</dt>
            <dd>
              {% if event.venue %}<span class="zen-event-venue">{{ event.venue }}</span>{% endif %}
              <span>{{ event.location }}</span>
            </dd>
          </div>

          {% if event.cost %}
          <div class="zen-event-detail zen-event-detail--single-line">
            <dt>Dana</dt>
            <dd>{{ event.cost }}</dd>
          </div>
          {% endif %}
        </dl>

        <p class="zen-event-description">{{ event.description }}</p>

        <div class="zen-event-actions">
          <a class="zen-event-action" href="https://www.google.com/maps/search/?api=1&amp;query={{ event.location | uri_escape }}" target="_blank" rel="noopener noreferrer">
            Get directions<span class="visually-hidden"> to {{ event.title }} (opens in a new tab)</span>
          </a>
          {% if event.url %}
          <a class="zen-event-action zen-event-action--primary" href="{{ event.url }}" target="_blank" rel="noopener noreferrer">
            Event details<span class="visually-hidden"> for {{ event.title }} (opens in a new tab)</span>
          </a>
          {% endif %}
        </div>
      </div>
    </article>
    {% endfor %}
  </section>
  {% else %}
  <div class="zen-events-empty reveal reveal--up">
    <h2>No events are scheduled right now</h2>
    <p>Please check back soon or <a href="{{ '/contact/' | relative_url }}">get in touch</a> if you would like to help organize an event.</p>
  </div>
  {% endif %}
</div>

<figure class="vt-break reveal reveal--up">
  <picture>
    <source srcset="{{ '/assets/images/vt/burl-whales.webp' | relative_url }}" type="image/webp">
    <img src="{{ '/assets/images/vt/burl-whales.jpg' | relative_url }}" alt="Whale sculptures in a field near Burlington" width="6000" height="4000" loading="lazy" decoding="async">
  </picture>
</figure>
