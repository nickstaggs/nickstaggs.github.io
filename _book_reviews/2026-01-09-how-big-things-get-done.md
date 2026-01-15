---
layout: default
title:  "How Big Things Get Done"
date:   2026-01-09 13:29:23 -0400
stars: 4
summary: '"How Big Things Get Done" details a lot of great advice on how to tackle projects from home renovations to building skyscrapers but comes off a bit hokey at times.'
---

## {{ page.title }}
#### {{ page.date | date: "%-d %B %Y" }}


<div>
{% assign empty_stars = 5 | minus: page.stars %}
{% for _ in (1..page.stars) %}
<span>&#9733;</span>
{% endfor %}
{% for _ in (1..empty_stars) %}
<span>&#9734;</span>
{% endfor %}
</div>

---

**How Big Things Get Done: The Surprising Factors That Determine the Fate of Every Project, from Home Renovations to Space Exploration, and Everything in Between**\
*Bent Flyvbjerg and Dan Gardner*\
Currency, 2023\
ISBN: 978-0-593-23951-3

---

A largely enjoyable and quick read (only 184 pages if you don't include the intro or the coda) that provides a lot of practical advice for how to approach and execute projects. Some sections of the book that really resonated with me and will hopefully change how I think about projects in the future include think from right to left and what's your lego. My only real criticisms of the book would be that some of the anecdotes that accompanied the broader themes seemed overly contrived and his use of the term *phronesis* seems a little hand-wavy.

Outlined below are the main __ for completing projects according to the book.

1. Think slow, act fast
    - Most project don't take long enough to plan and rush the implementation which ironically leads to slow and labored progress.
    - The delivery phase of a project is where you are most vulnerable to project overruns and black swan events that blow up time and cost estimates.
        - Swift delivery reduces the time the project is vulnerable to risk.
    - Most big project types have fat tailed risks, or in other words when they fail, they fail spectacularly.
        - The James Webb Space Telescope was seven years late and 450 percent over budget .
2. Think from right to left
    - What is the goal?
    - Why are we doing this?
    - The project is how the goal is achieved.
    - There might be multiple different projects that achieve the goal but which one solves the why?
3. Iteration is a key to great planning
    - Experiri is the latin root for both experiment and experience.
        - A great plan maximizes both.
    - "Planning is iteration and learning before you deliver at full scale."
4. Experience is a key to great planning
    - Use tried and true methods and technologies.
    - Rely on leaders that have done similar projects.
5. Your project is not unique
    - Use reference class forecasting to estimate time and cost.
    - Your project fits with in some kind of reference class from which you collect data from to make estimates.
    - Use the reference class to find out common risks to mitigate during planning.
6. Modularity or what's your lego
    - Find the smallest piece that can be broken off to be repeated over and over again.
        - A room in a school.
        - A floor of a building.
        - The foundation, tower, head and blades of a wind turbine.


One of the recommendations that I really want to affect my own way of doing things is think from right to left. This idea really opens up the possibilities for what can and should be built. I find myself a lot of times closing off my thinking a bit by starting a project with wanting to build X. There is always an implied goal and reason why I am doing it but starting with those first, explicitly, will definitely allow me to be more creative because it won't corner me into a single solution. I have, actually, already started using this idea as evidenced by the goals in my [2026 Update](/blog/2026-update.html). <Add Something additional about the goals>


What's your lego was another fascinating idea but I wonder how it applies to software. Microservices seems to be a logical lego, all of the ancillary concerns (like observability, security and scalability) to the actual function of the service are taken care of by some process.
