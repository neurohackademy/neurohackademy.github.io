---
layout: default
---

# 2026 Schedule

## Week 1

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
              <p class="event-speakers">{{ev.speakers | join: ", "}}</p>
              {% endif %}
            </div>
          {% else %}
            <div class="event-emptycell" style="height: {{ev.minutes | times: 2.5}}px">&nbsp;</div>
          {% endif %}
        {% endfor %}
      </div>
    {% endfor %}
  </div>

