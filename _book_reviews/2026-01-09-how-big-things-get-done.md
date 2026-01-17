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

A largely enjoyable and quick read (only 184 pages if you don't include the intro or the coda) that provides a lot of practical advice for how to approach and execute projects. Anyone who is involved in project planning and delivery will find a great deal of value in this book. Some ideas from the book that really resonated with me include think from right to left and what's your lego. My only real criticism of the book would be that some of the anecdotes that accompanied the broader themes seemed overly contrived.

Outlined below are my main takeaways from the book for completing projects on time and on budget.

1. Think slow, act fast
    - Most projects don't take long enough to plan and rush the implementation which ironically leads to slow and labored progress.
    - The delivery phase of a project is where you are most vulnerable to project overruns and black swan events that blow up time and cost estimates.
        - Swift delivery reduces the time the project is vulnerable.
    - Most big project types have fat-tailed risks, or in other words when they fail, they fail spectacularly.
        - According to the book, the James Webb Space Telescope was seven years late and 450 percent over budget.
2. Think from right to left
    - What is the goal?
    - Why are we doing this?
    - The project is how the goal is achieved.
    - There might be multiple different projects that achieve the goal but which one solves the why?
3. Iteration is a key to great planning
    - Experiri is the Latin root for both experiment and experience.
        - A great plan maximizes both.
    - "Planning is iteration and learning before you deliver at full scale."
4. Experience is a key to great planning
    - Use tried and true methods and technologies.
    - Rely on leaders that have done similar projects.
5. Your project is not unique
    - Use reference class forecasting to estimate time and cost.
    - Your project fits within some kind of reference class from which you collect data to make estimates.
    - Use the reference class to find out common risks to mitigate during planning.
6. Modularity or what's your lego
    - Find the smallest piece that can be broken off to be repeated over and over again.
        - A room in a school.
        - A floor of a building.
        - The foundation, tower, head and blades of a wind turbine.


The first of these ideas that I want to affect my own way of doing things is to think from right to left. It really opens up the possibilities for what can and should be built. I sometimes close off my thinking by starting a project with the desire to build X. Starting with the underlying goal, instead, will allow me to be more creative as it won't corner me into a single solution. I have actually already started using this idea as evidenced by the goals in my [2026 Update](/blog/2026-update.html). I created these goals by first starting with a broad intention, before deciding on specific goals that would best accomplish it.


What's your lego was another fascinating idea that can massively improve the delivery of projects. A failed nuclear project in Japan, Monju, was detailed for why projects need to be modularized. Monju was thought of as "one huge thing" rather than many small repeatable chunks which severely limited the ability to iterate. Software projects often suffer from this same affliction. One possible unit of breakdown is the microservice. Microservices can serve as a logical lego in some contexts, as many ancillary concerns (like observability, security and scalability) to the actual function of the service are standardized rather than being reinvented for each service. That said, selecting an appropriate building block is crucial to the success of a project. Microservices tend to be a good lego for only a small subsection of web-based applications. This contrasts with something like a solar farm, which is modular down to the individual solar cell, a structure that holds true for all solar farms. The takeaway for me is that “what’s your lego” is not a property of the domain but of the project itself. Even within the same category of work, identifying the right repeatable unit requires deliberate thought about constraints, goals, and delivery context rather than assuming a standard building block applies.


At times this book loses its shine when it starts flirting with "How to Win Friends and Influence People" type anecdote territory. If you have never read it, "How to Win Friends and Influence People" is a self-help book written by Dale Carnegie that has some of the most corny and overly artificial anecdotes to back up its main ideas. There are a couple places where "How Big Things Get Done" comes close but none closer than its telling of how Terminal 5 came to be at Heathrow. That whole chapter, in particular, was very heavy on team spirit fluff and light on practical, universal advice on how to get a team all on the same page. There was mention of how great the toilets were and a description of how a "short fused" owner of a steel company almost derailed the build but not much in the way of how to build a team. Only an implication of needing to align incentives and a brief mention of psychological safety but not a clear cut description of how to apply these things within projects that was present within the rest of the book. 


Overall, I thought "How Big Things Get Done" was a good read. Lots of empirically based advice on how to deliver projects on time and on budget. A little overdone and on the nose anecdotes are the only thing that separates it from being a great book. 4/5 stars.