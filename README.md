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
![Home Page](<assets/proposal/Home Page.png>)

**House Pages (Gryffindor)**
![Houses](assets/proposal/Houses.png)

**Sorting Hat**
![Sorting Hat](<assets/proposal/Sorting Hat.png>)

**O.W.L.s**
![O.W.L.s](assets/proposal/O.W.L.s.png)

**Chamber of Secrets** (updated)
![Chamber of Secrets](<assets/proposal/Chamber of Secrets.png>)

**Maurauders Map**
![Maurauders Map](<assets/proposal/Maurauders Map.png>)

**Q2 Live Preview:** 
[View the website here](https://avieszha.github.io/WDProjRubidiumLustreReyes/design.html)

---

# Q3 Project Proposal Update

## Final Title: PeriodiCastle

## Features
* Works on both phone and laptop
* Available in both light and dark mode, which could be altered in the website itslef
* Can play the Harry Potter theme song or Periodic Table song while browsing through the webpages

## Details
* We will use HTML forms for users to create personalized profiles on our website.
* This data will be saved on the user’s computer by localStorage.
* We will show the data we collect on the Home Page and Chamber of Secrets Page. See more info at the next part regarding the HTML form.

## Definition of Done
* Every page can successfully switch from dark to light mode, and vice versa.
* The Harry Potter theme song and Periodic Table song can play smoothly.
* The website features various cool attributes brought by HTML, CSS, and JS.
* The magic of Chemistry is brought to life by the websire.
* The website satisfies our inner potterheads!

___

## Design and Narrative of the HTML Form

The website will include a Sign-Up/Profile Setup HTML form that would enable users to create personalized profiles on the website. The form is meant to obtain basic information, which would be used to customize the contents and design of the website.

In the registration page, users will be required to enter details like their username, house in Hogwarts, and theme preference, whether light or dark. Submission of these details will help the website recognize those who are using the website again, and customize it based on their choices.

When submitted, the data will be stored on the user's computer, using localStorage, a function that the browser uses to store information that can still be accessible after the browser is closed. This eliminates the function of the database, while still allowing the storage and retrieval of user preferences.

Such data will then be accessed by other web-pages on the site to offer personal details like welcome messages, house details, recommended content, and preferred theme settings. In this way, the HTML form is the foundation for developing personalized features across multiple web pages. 

## Webpage 1: Registration / Profile Setup Page (New Page)

This newly created webpage will have the HTML sign-up form. The users can enter their information and submit the form. Once submitted, the details will be validated and stored in localStorage. The primary use of this page is to collect and store user data for later use throughout the website.

![Registration](<assets/proposal/Registration.png>)

## Webpage 2: Profile Dashboard (Home Page)

The Great Hall of Elements, will be edited to retrieve user data that was saved in localStorage through the Sign-Up form. Once the page loads, the site will use the stored data to display a personalized welcome message, including the user’s saved username and Hogwarts house. The page will also display the selected theme (either light or dark).

![Home Page](<assets/proposal/Home Page.png>)

## Webpage 3: Recommended Content Page (Chamber of Secrets)

The enchanted library will also be modified to use the saved user data.This webpage will show personalized content based on a user's house at Hogwarts. A message saying "Recommended for [username]" would be shown.

![Chamber of Secrets](<assets/proposal/Chamber of Secrets.png>)

---

# FINAL MODIFICATION PROPOSAL

## Purpose of the Final Modification

For the final modification of PeriodiCastle, we will expand the profile system that we previously introduced. Earlier in the project, users were able to create a profile using the registration form, and the website could display the saved information on different pages. However, once the data was saved, the user could not change or remove it anymore.

Because of this, the final modification will allow users to **update or remove the data that is stored on their device using localStorage**. This improvement makes the profile system more flexible and allows users to manage their saved information more easily. With this update, the website will demonstrate the full **CRUD process (Create, Read, Update, Delete)** for the stored profile data.

---

## Design and Narrative: Updating and Removing Stored Data

When a user fills out the registration form, information such as their **username, Hogwarts house, and theme preference** will be saved in the browser using **localStorage**. This allows the website to remember the user’s preferences even if the page is refreshed or opened again later.

The saved data will then be used across the website to personalize the user experience. For example, the Home Page will show a welcome message using the saved username, and the Chamber of Secrets page can display recommended content depending on the user’s selected house.

### Updating Stored Data

To allow users to change their information, the **Home Page will also function as a Profile Dashboard**. On this page, there will be an **Edit Profile** button.

When the user selects the Edit Profile option, the profile form will appear again with the user’s current information already filled in. The user can then modify details such as:

- Username  
- Hogwarts house  
- Theme preference  

Once the updated form is submitted, the new values will **replace the previous data stored in localStorage**. The page will then display the updated information so the changes are visible to the user.

This allows users to adjust their saved preferences without needing to recreate their profile.

### Removing Stored Data

Users will also have the option to completely remove their stored profile information through a **Delete / Reset Profile** button on the Profile Dashboard.

When this button is clicked:

1. The stored profile information will be **removed from localStorage**.
2. Personalized information such as the welcome message and theme preference will disappear.
3. The website will return to its **default state**, as if no profile had been created.

This feature ensures that users have full control over the information that the website stores on their device.

---

## Updated Wireframes for the Final Modification

To support the update and delete features described above, the wireframes of the website will also be updated. These wireframes show how the new profile management features will appear on existing pages.

### Updated Home Page (Profile Dashboard): Update and Delete

The Home Page will now include profile management controls. In addition to displaying the periodic table and welcome message, the page will include:

- A welcome message displaying the saved username  
- Display of the user's Hogwarts house  
- Display of the selected theme  
- An **Edit Profile** button that allows the user to update their saved information  
- A **Delete / Reset Profile** button that removes the stored data  

These additions allow users to directly interact with the information stored in localStorage.

![Updated Home Page Wireframe](assets/proposal/updated-home-wireframe.png)

---

### Edit Profile Form (Update Feature)

When the user clicks the **Edit Profile** button, the a short profile form will appear below, where the user can modify their existing information such as their username, Hogwarts house, or theme preference.

After submitting the form, the updated values will **overwrite the previous data stored in localStorage**, and the website will display the new information.

![Edit Profile Wireframe](assets/proposal/edit-profile-wireframe.png)

---

## Project Repository Submission

This project proposal, including the design narrative and updated wireframes, is included in the **README.md file of our GitHub project repository**, as required. The GitHub repository link will be submitted in **KHub** so that the teacher can access and review the project files.