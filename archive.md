---
layout: default
---

# Archived Neurohackademy Lectures

This page contains an archive of all the Neurohackademy lectures and
presentations throughout the years. When available, embedded videos of lectures
can be expanded by clicking on the arrows below.

The videos displayed can be filtered using the selection options at the top of
the page. To search for archived lectures by Neurohackademy instructor, visit
that instructor's page in the [people section]({{site.baseurl}}/people/).

We try to make all Neurohackademy lectures available to the
public. Unvortunately, technical issues over the years have resulted in a
number of videos improperly recorded, so videos are not available for all
sessions.


## Filters

<!-- Here we have the filters panel.
  --> 
<hr/>
<div class="cc-sel-panel">
  <!-- The year selection -->
  <div class="cc-sel-maindiv">
    <p class="cc-sel-rowlbl">Year:</p>
    <div class="cc-sel-optsdiv">
      <label style="cc-sel-checkbox-label">
        <input type="checkbox"
               name="cc-sel-year"
               value="none">
        None
        </label>
      {% for y in site.data.calendar reversed %}
      <label style="cc-sel-checkbox-label">
          <input type="checkbox"
                 name="cc-sel-year"
                 value="{{y[0]}}">
          {{y[0]}}
          </label>
        {% endfor %}
      <label style="cc-sel-checkbox-label">
        <input type="checkbox"
               name="cc-sel-year"
               value="all">
        All
        </label>
      </div>
    </div>
  <hr/>
  <!-- The has video selection -->
  <div class="cc-sel-maindiv">
    <p class="cc-sel-rowlbl">Has Video?</p>
    <form class="cc-sel-optsdiv" id="cc-sel-hasvideo-optsdiv">
      <label style="cc-sel-checkbox-label">
        <input type="radio"
               name="cc-sel-hasvideo"
               id="cc-sel-hasvideo-yes">
        Yes
        </label>
      <label style="cc-sel-checkbox-label">
        <input type="radio"
               name="cc-sel-hasvideo"
               id="cc-sel-hasvideo-no">
        No
        </label>
      <label style="cc-sel-checkbox-label">
        <input type="radio"
               name="cc-sel-hasvideo"
               id="cc-sel-hasvideo-either"
               checked>
        Either
        </label>
      </form>
    </div>
  </div>
<hr/>


<!-- Here we have the list of events.
  --> 
<div class="cc-list">
  {% for y in site.data.calendar %}
    <div class="cc-year-div" id="cc-year-div-{{y[0]}}">
      <h2 class="cc-year-h2">{{y[0]}}</h2>
      {% for w in y[1].events %}
        {% assign weekno=w[0] | slice: 4 %}
        <div class="cc-week-div" id="cc-week-div-{{y[0]}}-{{weekno}}">
          <h3 class="cc-week-h3">Week {{weekno}}</h3>
          {% for d in w[1] %}
            {% for ev in d[1] %}
              {% assign year=y[0] %}
              {% assign week=w[0] %}
              {% assign day=d[0] %}
              {% assign speakers=ev.speakers | join: ", " %}
              {% include ccrow.html
                   year=year
                   week=week
                   day=day
                   time=ev.time
                   title=ev.title
                   speakers=speakers
                   youtube_url=ev.youtube_url
                   %}
              {% endfor %}
            {% endfor %}
          </div>
        {% endfor %}
      </div>
    {% endfor %}
  </div>

<script>
  {% include ccexpand.js %}
  </script>
<script>
  {% include ccfilter.js %}
  </script>
      
