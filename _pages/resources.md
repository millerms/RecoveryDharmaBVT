---
layout: splash
title: "RD Resources"
permalink: /resources/
nav_order: 4
classes: [full-width, resources-page]
description: "Curated Recovery Dharma resources: meetings, the book, guided meditations, online communities, and local meditation groups in Vermont."
image: /assets/images/rd-icons/rdvt-icon.webp
header:
  overlay_color: rgba(16, 61, 45, 0.8)
  overlay_filter: "0.05"
  overlay_image: "/assets/images/vt/willoughby-fall.webp"
excerpt: "A practical collection of meetings, meditations, teachings, and local communities to support recovery and Buddhist practice."
---
<div class="zen-resources-wrapper">
  <div class="zen-resources-intro reveal reveal--up">
    <p>Recovery is not solitary. These resources can help you find community, develop a meditation practice, and explore Recovery Dharma teachings at your own pace.</p>
  </div>

  <nav class="zen-resource-jumps reveal reveal--up" aria-label="Resource categories">
    {% for section in site.data.resources.sections %}
    <a href="#{{ section.id }}">{{ section.title }}</a>
    {% endfor %}
  </nav>

  {% for section in site.data.resources.sections %}
  <section id="{{ section.id }}" class="zen-resource-section" aria-labelledby="{{ section.id }}-heading">
    <header class="zen-resource-section__header reveal reveal--up">
      <h2 id="{{ section.id }}-heading">{{ section.title }}</h2>
      <p>{{ section.description }}</p>
    </header>

    <div class="zen-resource-grid">
      {% for resource in section.resources %}
      <article class="zen-resource-card reveal reveal--up">
        <p class="zen-resource-type">{{ resource.type }}</p>
        <h3>{{ resource.title }}</h3>
        <p class="zen-resource-description">{{ resource.description }}</p>

        {% if resource.related %}
        <p class="zen-resource-related">
          <span>Related:</span>
          {% for related in resource.related %}
          <a href="{{ related.url }}" target="_blank" rel="noopener noreferrer">{{ related.title }}</a>{% unless forloop.last %}<span aria-hidden="true"> · </span>{% endunless %}
          {% endfor %}
        </p>
        {% endif %}

        <a class="zen-resource-action" href="{{ resource.url }}" target="_blank" rel="noopener noreferrer">
          {{ resource.action }}<span aria-hidden="true"> ↗</span><span class="visually-hidden"> (opens in a new tab)</span>
        </a>
      </article>
      {% endfor %}
    </div>
  </section>
  {% endfor %}

  <p class="zen-check-back reveal reveal--up">Know of another resource that belongs here? Please <a href="{{ '/contact/' | relative_url }}">get in touch</a>.</p>
</div>
