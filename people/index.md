---
layout: default
---

{% assign allpeople = site.pages
   | where_exp: "page", "page.path contains 'people/'"
   | where_exp: "page", "page.layout == 'person'"
   | sort: "surname" %}
{% capture allroles %}
{% for person in allpeople %}{{ person.role | strip | capitalize }} {% endfor %}
{% endcapture %}
{% assign currentYear = 'now' | date: "%Y" | plus: 0 %}

{% assign allroles = allroles
   | strip
   | split: " "
   | sort
   | uniq %}

<style>
h2 {
    line-height: 1.1em;
    margin-top: 50px;
}
</style>


# People

The Neurohackademy is made possibly by many dedicated staff who organize the
event and a community of scholars who curate and present the course content.

To view archived lectures by a particular instructor, click on their name in
the list below.


## Directors

{% for page in allpeople %}
  {% assign pagerole = page.role | capitalize %}
  {% if pagerole == 'Director' %}
    {% assign fullname = page.forename | append: " " | append: page.surname %}
<hr/>
{% include biocard.html
     fullname=fullname
     pronouns=page.pronouns
     div=page.div
     org=page.org
     email=page.email
     github=page.github
     website=page.website
     image=page.image
     url=page.url
     size='small'
     %}
    {% endif %}
  {% endfor %}
<hr/>


## {{currentYear}} Instructors

{% for page in allpeople %}
  {% assign pagerole = page.role | capitalize %}
  {% if pagerole == 'Instructor' and page.lastyear == currentYear %}
    {% assign fullname = page.forename | append: " " | append: page.surname %}
<hr/>
{% include biocard.html
     fullname=fullname
     pronouns=page.pronouns
     div=page.div
     org=page.org
     email=page.email
     github=page.github
     website=page.website
     image=page.image
     url=page.url
     size='small'
     %}
    {% endif %}
  {% endfor %}
<hr/>



## Past Instructors

{% for page in allpeople %}
  {% assign pagerole = page.role | capitalize %}
  {% if pagerole == 'Instructor' and page.lastyear != currentYear %}
    {% assign fullname = page.forename | append: " " | append: page.surname %}
<hr/>
{% include biocard.html
     fullname=fullname
     pronouns=page.pronouns
     div=page.div
     org=page.org
     email=page.email
     github=page.github
     website=page.website
     image=page.image
     url=page.url
     size='small'
     %}
    {% endif %}
  {% endfor %}
<hr/>
