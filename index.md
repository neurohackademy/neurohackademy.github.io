---
layout: splash
---

# Welcome to the Neurohackademy

**Neurohackademy is a two-week workshop in neuroimaging and data science, held
both at the [University of Washington](https://www.washington.edu/) campus in
Seattle and online each summer.**

Participants learn about technologies used to analyze human neuroscience data
and how to make analysis and results shareable and reproducible. The first week
of the program is devoted to hands-on lectures and open Q&A discussions. The
second week of the course is devoted mostly to a hackathon in which
participants form teams to implement a project based on what they've
learned. Other participant-directed activities sych as breakout and/or
collaboration sessions on topics of interest are also included during the
second week.

See the [2026 schedule]({{site.baseurl}}/calendar) for this year's
NeuroHackademy program and the [lecture archive]({{site.baseurl}}/archive) for
recordings of past years' lectures.


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
          <a href="{{site.baseurl}}{{page.url}}">
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
            </a>
          </div>
          <p><a href="{{site.baseurl}}{{page.url}}">{{fullname}}</a></p>
        </div>
      {% endif %}
    {% endfor %}
  </div>
