Instructions:
Your team should write a short report on your experience working on this project. There is no hard word limit but as a guide you should be writing around 2000-3000 words. It should cover the following topics:

1. Details of your deployment and where your application can be accessed (URL).
    - https://6bddedde.comp2110-group48-portal.pages.dev/

2. What you achieved: a short (few paragraphs) description of what your group has implemented; highlight any extensions or additional work you did.



3. What did you find challenging: tell us what was hard about completing the project. This might be technical (understanding the API) or organisational (communication within the group). 

4. What was rewarding: one or two things that you were able to do that you feel contributed to your understanding of the content of this unit.

5. Andrew:
    - which widget did you choose and why?
    - I chose to do the currency conversions widget, because I liked the idea of peforming calculations with the data retrieved using the fetch command. as it turned out, no calculations were required, but that is why I chose to do it.
    - what was the most challenging part of the project for you?
    - I think the hardest part was finding time to work on it together, because I didn't want to work too late in the evenings, and everyone else was usually busy during the day.

5. Felix
    - which widget did you choose and why?
    Whilst there was a wide variety of interesting and useful widgets to select from, I chose a widget that displays different information about sun position over the course of the current day. This is vital to the blog user as it may help them plan their day, and gives the information consisely and at a glance. I chose this as my widget as it relates to the weather widget that liam was doing, creating a more connected feel to the widgets on the page. I also personally find the information it displays interesting, something people often don't think about but can come in handy when planning your days, as it is important when out and about to know what time the sun will set. Whilst the main data was simple to fetch from the API, the challenge of using location services to determine the users coordinates and include them into the url in order to gain user accurate data interested me in providing a widget that adapted to the users location without any extra input from them. This allows for easy and straight forward usage, which is an important element in any good widget design.

    - what was the most challenging part of the project for you?
    One challenging element of the project from my perspective was enabling the resizing of the website onto any display and have all elements useable and presentable at any size. It is a very time consuming process, however having that functionality is well worth it as it allows a user to access the portal from any device. However, this was not as difficult as having location services work to allow me to read the users current coordinates to a variable to use in the URL that I have to send to the API to fetch the data. This was a difficult challenge as getCurrentPosition function works asynchronously, meaning it executes not in order but works in the background whilst other code is running. This is useful as it doesn't hold up the rest of the webpage from loading when it is getting the coordinates, however I think that this aspect was not well documented, or I had missed something previous to this and should have been able to identify that the function was asynchronous. It was difficult to solve as much searching online led to the same explanation as that from mozilla and w3schools, where they always printed the variable rather than storing it anywhere outside the function, which was what I needed to do with it. This took many hours to finally figure out, and frustratingly the answer was quite simple. Instead of storing them inside the webpage code, I needed to store them on the browser itself in the sessionStorage property, which would allow the script to give them to the webpage, and then grab them once they had been found, which prevented the 'undefined' errors I had come across when previously attempted to store them in a local variable, which was easy to explain as clearly the variable was called before it could be set to the coordinates. Once this issue was sorted out, it was a simple matter of implementing the new sessionStorage variables into my fetch URL to personalise my displayed widget information.

5. Individual reflection: each team member should write one paragraph on their personal experience(include your name):
    - which widget did you choose and why?
    - what was the most challenging part of the project for you?

5. Individual reflection: each team member should write one paragraph on their personal experience(include your name):
    - which widget did you choose and why?
    - what was the most challenging part of the project for you?