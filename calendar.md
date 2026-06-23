---
layout: default
---

# 2026 Schedule

This page details the weekly schedule for the 2026 NeuroHackademy.

[Jump to Week 2.](#week-2)

## Week 1

Week 1 of the course consists primarily of lectures and tutorials. Participants
will also be assigned groups for a mini-project ("Week 1 Group Projects") that
will be explained on Tuesday.

<div class="week-row">
  {% for day in site.data.schedule.events.week1 %}
    <div class="day-col">
      <p class="day-name">{{day[0]}}</p>
      {% for ev in day[1] %}
        {% if ev.title %}
          <div class="event-cell eventstyle-{{ev.style}}"
               style="height: {{ev.minutes | times: 2.5}}px">
            <p class="event-time">{{ev.time}}</p>
            <p class="event-title">
              {% if ev.youtube_url %}<a href="{{ev.youtube_url}}">{% endif %}
              {{ev.title}}
              {% if ev.youtube_url %}</a>{% endif %}
              </p>
            {% if ev.speakers %}
              <p class="event-speakers">{{ev.speakers | join: '</p><p class="event-speakers">'}}</p>
              {% endif %}
            {% if ev.alt %}
              <p class="event-altsep">&mdash;OR&mdash;</p>
              <p class="event-title">
                {% if ev.alt.youtube_url %}<a href="{{ev.alt.youtube_url}}">{% endif %}
                {{ev.alt.title}}
                {% if ev.alt.youtube_url %}</a>{% endif %}
                </p>
              {% if ev.alt.speakers %}
                <p class="event-speakers">{{ev.alt.speakers | join: '</p><p class="event-speakers">'}}</p>
                {% endif %}
              {% endif %}
            </div>
          {% else %}
            <div class="event-emptycell" style="height: {{ev.minutes | times: 2.5}}px">&nbsp;</div>
          {% endif %}
        {% endfor %}
      </div>
    {% endfor %}
  </div>

## Week 2

<div class="week-row">
  {% for day in site.data.schedule.events.week2 %}
    <div class="day-col">
      <p class="day-name">{{day[0]}}</p>
      {% for ev in day[1] %}
        {% if ev.title %}
          <div class="event-cell eventstyle-{{ev.style}}"
               style="height: {{ev.minutes | times: 2.5}}px">
            <p class="event-time">{{ev.time}}</p>
            <p class="event-title">
              {% if ev.youtube_url %}<a href="{{ev.youtube_url}}">{% endif %}
              {{ev.title}}
              {% if ev.youtube_url %}</a>{% endif %}
              </p>
            {% if ev.speakers %}
              <p class="event-speakers">{{ev.speakers | join: '</p><p class="event-speakers">'}}</p>
              {% endif %}
            {% if ev.alt %}
              <p class="event-altsep">&mdash;OR&mdash;</p>
              <p class="event-title">
                {% if ev.alt.youtube_url %}<a href="{{ev.alt.youtube_url}}">{% endif %}
                {{ev.alt.title}}
                {% if ev.alt.youtube_url %}</a>{% endif %}
                </p>
              {% if ev.alt.speakers %}
                <p class="event-speakers">{{ev.alt.speakers | join: '</p><p class="event-speakers">'}}</p>
                {% endif %}
              {% endif %}
            </div>
          {% else %}
            <div class="event-emptycell" style="height: {{ev.minutes | times: 2.5}}px">&nbsp;</div>
          {% endif %}
        {% endfor %}
      </div>
    {% endfor %}
  </div>

