# marvel-comics

Specification: 
The Comics Test
Your task is to generate an HTML page that lists the characters from a
Marvel-story.
Using the Marvel API [http://developer.marvel.com/docs], pick a random story
featuring your favourite character (perhaps The Hulk?). Generate an HTML page
with the following characteristics:
* The story's description
* A list of names and pictures of the characters that features in the story
* The Marvel attribution text
We are not too fussy about the layout or design of the generated HTML
page, but the HTML itself should be well-formatted.
You should supply instructions on how to install and run your project.
The result of your test should be delivered on a repository on Github, Bitbucket or similar.

- generate HTML page that lists characters from a Marvel-story 
- pick a random story for a chosen character
- the HTML page: 
	- The title of the story (assumtion)
	- picture and name of the fav char (assumtion) 
	- The story descibtion
	- Featured characters:
		- pictures, names 
		- marvel attribution text 

R:
- well formatted HTML 
- supply instructions (documentation)
- github

Additionally:
- pagination
- add tests* (??)
- search character by name 

Assumtions:
- give instructions for the user to create an account on Marvel.com
- user needs to get own key to send requsts
- add .env file
-  



API:
docs: 
https://developer.marvel.com/documentation/

endpoint:
http(s)://gateway.marvel.com/

- fetch of lists of characters to get an id of the character
data.results.name = "Iron Man"

- pick a random story 
- 


- need to pre-authorized the website URL (API access panel)
-  
