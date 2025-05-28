---
layout: page
title: Necromunda Utilities
permalink: /necromunda/
---

Lasting Injuries Roller
<head>
<script type="module" src="{{ './assets/js/dice_roller.js' | relative_url }}"></script>
</head>
<button id="injury_button">Roll for Lasting Injuries</button>
<p id="injury_output">[[   Injuries show up here   ]]</p>


<h3>Lasting Injuries Table</h3>
<Table>
    <tr>
        <td>Name</td>
        <td>D66</td>
        <td>Description</td>
    </tr>
    {% if site.data.results %}
        {% assign resultlist = site.data.results %}
        {% for entry in resultlist %}
    <tr>
        <td>{{entry.name}}</td>
        {% assign rolls = entry.Roll | split:' , ' %}
        <td>{{rolls}}</td>
        <td>{{entry.Description}}</td>
    </tr>
        
        {% endfor %}
    {% endif %}
</Table>
