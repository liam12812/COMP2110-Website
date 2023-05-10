This is Saeed's widget.
My widget is going to be displaying the upcoming Australian public holidays amalgamated with the public holidays of a range of other countries.
My plan is to use the following website: <https://date.nager.at> to identify the variety of public holidays for the different countries of my choice.
I also plan on having the widget contain an array of holidays to be diplayed for the user depending on which country they choose.
My widget is going to have a list of countries , that once chosen , the user will be able to effectively view their upcoming public holidays.
--> I started the widget by outlining the different functions that i needed
--> I was able to create all the functions and fetch the data required from the url provided
--> I also implemeted a function at the bottom "Usercountrychange" that is triggered when the user changes countries to be able to retrieve th upcoming public holidays selected.
--> I kept encountering an error with my widget that resulted in all the public holidays of the chosen country being selected.
--> I was able to reach a solution by filtering out the data of public holidays that were less than the current data to be able to only display what is required: Upcoming public holidays of selected country.