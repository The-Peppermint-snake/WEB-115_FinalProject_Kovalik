# Cookie Clicker
**WEB-115 Final Project Proposal**
Student: Beatrice Kovalik | Repo: `WEB-115_FinalProject_Kovalik`

---

## Overview

This is a web app that lets users click their way to riches. This cookie clicker app will use local storage to save the users progress letting them pick up where they left off. The user will get more cookies the more they click and this will let them buy even better cookies. Once the user gains enough cookies a popup shop will be displayed where the user can choose one out of the 3 randomly selected items to buy.

The target user is anyone who wants a quick hit of dopamine and likes to do repetitive tasks.

---

## Features

- Create a new game
- All games are saved in `localStorage` so they page can still refresh
- Users can reset a game to start over
-Users gain items that they can see in their inventory
	-items add benefits such as multipliers
-music/sounds?

---

## Core Requirements Coverage

| Requirement | Implementation |
|---|---|

If Statements & Loops
When the click gives more than a certain amount of cookies a special sound will play. I will also use if statements to show the store to buy the inventory items when the player gains enough money.
loops will be used to laod in the images of the inventory items
Event Listeners
event listeners on the cookie add the cookies to the users inventory on every click
DOM element creation
Inventory items will be created and added under an inventory div. 
Classes
An inventory item class will allow for me to add lots of inventory items that can be displayed in the users inventory and add benefits because they will all be set up similarly and need common functions like adding multipliers and having a display.
interval functions
will be used with the cursers that auto click after x amount of time

---

## DLC — Additional Topics

### JSON & Local Storage
Local storage will allow the page to be refreshed without all of the progress being lost.
---

## Tech Stack

- HTML, CSS, Vanilla JavaScript
- `localStorage` for saving progress
- VS Code + GitHub


