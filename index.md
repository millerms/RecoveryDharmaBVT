---
layout: splash
title: Recovery Dharma Vermont
nav_order: 1
permalink: /
---
<div class="zen-hero-banner fade-in">
  <picture>
    <source srcset="{{ '/assets/images/rd-icons/rdvt-icon.webp' | relative_url }}" type="image/webp">
    <img src="{{ '/assets/images/rd-icons/rdvt-icon.webp' | relative_url }}" alt="Recovery Dharma Vermont Icon">
  </picture>
</div>

<div style="display: flex; align-items: center; justify-content: center; flex-direction: column; text-align: center;">
    <h2 class="subtitle reveal reveal--up">Welcome to Burlington, Vermont's Page for All Things Recovery Dharma</h2>
  <p style="max-width: 500px; margin-top: 0;">
  </p>
</div>

<div style="display: flex; align-items: center; justify-content: center; flex-direction: column; text-align: center;">
<p class="intro-text reveal reveal--up">This site is a resource for those interested in Recovery Dharma. Our mission is to support recovery through Buddhist practices and community. Whether you're new to Recovery Dharma or have been practicing for years, this space is here to help you connect, learn, and heal.</p>
</div>

<hr class="zen-divider">

### What is Recovery Dharma?
{: .reveal .reveal--up }
Recovery Dharma is a peer-led, non-theistic approach to recovery that uses Buddhist principles as a foundation for healing from addiction and suffering. We believe in the power of mindfulness, meditation, community, and personal responsibility. There’s no dogma, just an invitation to investigate your own experience and walk a path of wisdom and compassion -- together.
{: .reveal .reveal--up }

Our practices are grounded in the Four Noble Truths and the Eightfold Path. This site is a hub for Vermont-based offerings and a living resource for anyone interested in this way of recovery.
{: .reveal .reveal--up }

> “This program leads to recovery from addiction to substances like alcohol and drugs and from process addictions like sex, gambling, pornography, technology, work, codependence, shopping, eating, media, self-harm, lying, stealing, and obsessive worrying.”  
> — *Recovery Dharma, p. X*
{: .reveal .reveal--up }


<div class="zen-divider"></div>

#### Explore the Site
{: .reveal .reveal--up }
Below you’ll find descriptions of the pages:
{: .reveal .reveal--up }


<div class="zen-link-list">
  <div class="zen-link-row">
    <div class="zen-link-text reveal reveal--up">
      <strong>Meetings & Groups</strong><br>
      Find local in-person Recovery Dharma meetings and other meditation groups in Burlington and beyond.
    </div>
    <a href="{{ site.baseurl }}/meetings/" class="zen-nav-button">🪷 Meetings & Groups</a>
  </div> 
  <div class="zen-link-row">
    <div class="zen-link-text reveal reveal--up">
      <strong>Buddhist Foundations</strong><br>
      Learn about Buddhism and how its teachings inform Recovery Dharma practices. We cover key concepts, meditation techniques, ethical guidelines, and links to additional resources.
    </div>
    <a href="{{ site.baseurl }}/buddhist-foundations/" class="zen-nav-button">🌱 Buddhist Foundations</a>
  </div>
  <div class="zen-link-row">
    <div class="zen-link-text reveal reveal--up">
      <strong>Resources</strong><br>
      Explore meetings, meditations, links, and other local meditation groups to deepen your understanding and practice through Recovery Dharma.
    </div>
    <a href="{{ site.baseurl }}/resources/" class="zen-nav-button">📚 Resources</a>
  </div>
  <div class="zen-link-row">
    <div class="zen-link-text reveal reveal--up">
      <strong>Events</strong><br>
      Join special meditation offerings, retreats, and group practices.
    </div>
    <a href="{{ site.baseurl }}/events/" class="zen-nav-button">🧘‍♂️ Events</a>
  </div>
  <div class="zen-link-row">
    <div class="zen-link-text reveal reveal--up">
      <strong>Contact</strong><br>
      Reach out to share an event, ask questions, or get involved.
    </div>
    <a href="{{ site.baseurl }}/contact/" class="zen-nav-button">✉️ Contact</a>
  </div>
</div>

<div class="zen-divider"></div>

<div id="rd-quote-box" class="buddhist-quote zen-quote-box quote-container reveal reveal--up">
  <div class="quote-nav" style="display: flex; gap: 1.5rem; justify-content: center;">
    <button id="prev-quote" class="quote-nav-btn" aria-label="Previous quote">←</button>
    <button id="next-quote" class="quote-nav-btn" aria-label="Next quote">→</button>
  </div>
  <blockquote id="quote-text" class="quote-text">Loading quote...</blockquote>
  <cite id="quote-author" class="quote-author"></cite>
</div>
<script src="{{ '/js/rd-quotes.js' | relative_url }}"></script>