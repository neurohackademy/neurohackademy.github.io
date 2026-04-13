---
layout: splash
---

# Welcome to the Neurohackademy

**Neurohackademy is a two-week workshop in neuroimaging and data science, held
both at the [University of Washington](https://www.washington.edu/) campus in
Seattle and online each summer.**

This year’s course will be held from July 13th&ndash;24th, 2026. Applications
are [currently open](/apply) and will close on March 16th. Applicants will be
notified of their application status by April 15th.

Participants will learn about technologies used to analyze human neuroscience
data and to make analysis and results shareable and reproducible.

The first week will be devoted to hands-on lectures and open Q&A
discussions. The second week of the course will be devoted to a hackathon in
which participants form teams to implement a project based on what they've
learned and to other participant-directed activities: breakout sessions and
collaboration sessions on topics of interest.


## 2026 Instructors

{% assign allpeople = site.pages
   | where_exp: "page", "page.path contains 'people/'"
   | where_exp: "page", "page.layout == 'person'"
   | sort: "surname" %}
{% assign currentYear = 'now' | date: "%Y" | plus: 0 %}

<div class="splash-instructors">
  {% for page in allpeople %}
    {% if page.lastyear == currentYear %}
      {% assign fullname = page.forename | append: " " | append: page.surname %}
      <div class="splash-instructor-card">
        <div class="splash-instructor-card-photo">
          <img
            {% if page.image %}
              src="{{page.image}}"
              alt="The profile picture for {{fullname}}"
            {% elsif page.github %}
              src="https://github.com/{{page.github}}.png"
              alt="The GitHub profile picture for {{fullname}}"
            {% else %}
              src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
              alt="An anonymous profile picture"
              {% endif %}
            />
          </div>
          <p><a href="{{site.baseurl}}/{{page.url}}">{{fullname}}</a></p>
        </div>
      {% endif %}
    {% endfor %}
  </div>
