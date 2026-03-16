# PeriodiCastle

## Sorting Elements into The Four Houses of Chemistry

### Favicon: 

![Favicon](assets/proposal/Favicon.png)

---

### Description:

PeriodiCastle is a whimsical and study-friendly website that transforms the periodic table into a Harry Potter-style design. Each 
element is “sorted” into one of the four Houses of Chemistry — Gryffindor (s-block), Slytherin (p-block), Hufflepuff (d-block), or 
Ravenclaw (f-block), in order to aid students and learners alike in remembering the structure of the blocks, the trends, and their 
respective properties. Users can hover on an element to reveal information about it or even use a sorting hat feature to classify an 
element by name, symbol, or property. After learning, they may also challenge themselves in Quiz Mode.

Beyond the name, PeriodiCastle focuses on clear information propagation, accessible User Interface (UI), and modular JavaScript (JS) for search, sorting, and quizzes. Other unique features include audio toggles that let users play either the Harry Potter theme song or the Periodic Table song while studying, and a Lumos switch offering light/dark mode for comfort.

---

### Webpage Breakdown:
* **Home:** This will contain the periodic table itself which would be designed with a Harry Potter theme. Above it, there will be a short description of the website itself, while below, there will be paragraphs regarding the history of the periodic table, but presented in a “Harry Potter-like” way.
* **P1 (Gryffindor):** This part will contain all the elements that are part of the Gryffindor house (s-block). There will also be fun facts about the elements and the people known for discovering them. This would be the same for all houses.
* **P2 (Slytherin):** Similar to Gryffindor, but for Slytherin (p-block).
* **P3 (Hufflepuff):** Similar to Gryffindor, but for Hufflepuff (d-block).
* **P4 (Ravenclaw):** Similar to Gryffindor, but for Ravenclaw (f-block).
* **P5 (Sorting Hat):** This will be a search engine, wherein if you provide an element’s name, symbol, or other properties/information about the element, it will show you what house it belongs to. 
* **P6 (O.W.L.s):** O.W.L.s stands for the Ordinary Wizarding Levels which are a series of exams taken by Hogwarts students. This page can be used by students to study with various modes (Block Sort, Trends, Identify Element, and House Rapid-Fire). There’ll also be other features such as timers, scoring, streaks, and a review sheet with explanations.
* **P7 (Chamber of Secrets):** This is more of a creative page (wikipedia-like) with short articles about chemistry seen in the Harry Potter world. For instance, there could be one about acids or bases in potion analogies or one about the chemistry they used for props. 
* **P8 (About Us):** This will be a simple Harry Potter-themed about us page.
* **P9 (Maurauder's Map):** To visually represent the site’s structure, PeriodiCastle features an interactive navigation map inspired by the Marauder’s Map. Displayed as a standalone page, it connects all major sections using circles over a parchment background. The navigation for this would be found in the footer of all pages.
* **P10 (References):** All references used for the making of the website will be compiled here.


**Other Notes**
1. The header will contain the favicon, name of the website, navigation bar, as well as a button with a unique feature which would switch between light and dark mode. This button is labeled as "Lumos".
2. The footer will have social media links on the left, a hyperlink to the Maurauder's Map in the center, and sources and copyright notices on the right.

---

> Various webpages will make use of JS to make our website more interactive and creative. For one, we have the Sorting Hat, where certain inputs will cause different outputs through a decision statement. Another use for it would be for the O.W.L.s page, wherein JS script will be used for the quiz itself, as well as other unique features. JS will also be consistently used on all pages for the dropdown in the header of the houses, along with the switching from light to dark mode.

---

### Wireframe/Webpage Design:
**Home Page** (updated)
![Home Page](assets/proposal/Home Page.png)

**House Pages (Gryffindor)**
![Houses](assets/proposal/Houses.png)

**Sorting Hat**
![Sorting Hat](assets/proposal/Sorting Hat.png)

**O.W.L.s**
![O.W.L.s](assets/proposal/O.W.L.s.png)

**Chamber of Secrets** (updated)
![Chamber of Secrets](assets/proposal/Chamber of Secrets.png)

**Maurauders Map**
![Maurauders Map](assets/proposal/Maurauders Map.png)

**Q2 Live Preview:** 
[View the website here](https://avieszha.github.io/WDProjRubidiumLustreReyes/design.html)

---

# Q3 Project Proposal Update

## Final Title: PeriodiCastle

## Features
* Works on both phone and laptop
* Available in both light and dark mode, which could be altered in the website itself
* Can play the Harry Potter theme song or Periodic Table song while browsing through the webpages
* Allows users to **create, view, update, and delete profile data** using localStorage

## Details
* We will use HTML forms for users to create personalized profiles on our website.
* This data will be saved on the user’s computer by localStorage.
* The website will retrieve and display stored data on the Home Page and Chamber of Secrets Page.
* Users will also be able to **update their saved information or delete their profile data**, demonstrating full **CRUD (Create, Read, Update, Delete)** functionality using localStorage.

## Definition of Done
* Every page can successfully switch from dark to light mode, and vice versa.
* The Harry Potter theme song and Periodic Table song can play smoothly.
* The website features various cool attributes brought by HTML, CSS, and JS.
* Users can **create, read, update, and delete stored profile data** using localStorage.
* The magic of Chemistry is brought to life by the website.
* The website satisfies our inner potterheads!

___

## Design and Narrative of the HTML Form

The website will include a Sign-Up/Profile Setup HTML form that would enable users to create personalized profiles on the website. The form is meant to obtain basic information, which would be used to customize the contents and design of the website.

In the registration page, users will be required to enter details like their username, house in Hogwarts, and theme preference, whether light or dark. Submission of these details will help the website recognize returning users and customize the site based on their choices.

When submitted, the data will be stored on the user's computer using **localStorage**, allowing information to remain available even after the browser is closed.

Users will also be able to **edit their saved profile information**, such as their username, house, or theme preference. When changes are submitted, the updated information will overwrite the previous data stored in localStorage.

Additionally, users may choose to **delete or reset their saved profile**, which removes the stored data from localStorage and returns the website to its default state.

Through these features, the website demonstrates a complete **CRUD (Create, Read, Update, Delete)** process for managing user data.

## Webpage 1: Registration / Profile Setup Page (Create)

This newly created webpage will have the HTML sign-up form. The users can enter their information and submit the form. Once submitted, the details will be validated and stored in localStorage. The primary use of this page is to **create and store user data** for later use throughout the website.

![Registration](assets/proposal/Registration.png)

## Webpage 2: Profile Dashboard (Home Page) (Read / Update / Delete)

The Great Hall of Elements will be edited to retrieve user data saved in localStorage through the Sign-Up form. Once the page loads, the site will display a personalized welcome message, including the user’s saved username and Hogwarts house. The page will also display the selected theme (either light or dark).

This page will also include options that allow users to:

* **Edit Profile (Update)** – modify saved username, house, or theme
* **Delete / Reset Profile (Delete)** – remove stored profile data from localStorage

![Home Page](assets/proposal/Home Page.png)

## Webpage 3: Recommended Content Page (Chamber of Secrets)

The enchanted library will also retrieve saved user data. This webpage will show personalized content based on a user's house at Hogwarts. A message saying **"Recommended for [username]"** will be displayed.

If the user updates their profile information, the recommended content will also change accordingly when the page reloads.

![Chamber of Secrets](assets/proposal/Chamber of Secrets.png)