# marvel-comics-task describtion
The Marvel Comics Test is a simple React application displaying characters from Iron Man's random story.

Each time the windows is refreshed in the browser the application will perform several sequential queries to get data about the favourite character, a random story and featured characters in that story. 

The page displays:

* The titile of the story
* The story's description
* A list of names and pictures of the characters that features in the story
* A description for each character
* The Marvel attribution text


# Instructions on installing and running the project
1. The Marvel-comics project make a use of Marvel API. In order to run it you will need to register on (Marvel Developer Page)[http://developer.marvel.com/docs] to get a private and public API keys. 
2. Once aquired you can clone this repository to your local environment. Simply direct to the desired directory in your command line tool and enter `git clone https://github.com/katarinarosiak/marvel-comics-test`.
3. Direct to `marvel-comics-test` directory on your terminal and install needed dependecies by running `npm install`.
4. Create `.env` file and add environmental variables. Add your Marvel public and private keys. 
```
REACT_APP_BASE_URL="http://gateway.marvel.com/"
REACT_APP_PUBLIC_KEY="your_marvel_public_key"
REACT_APP_PRIVATE_KEY="your_marvel_private_key"
```
5. Running `npm start` in your terminal will start the React application, which should automatically open in your browser. 

# Additional remarks:

- Some of the stories doesn't contain a description. For it to be more clear I have added an alternative text in a description place ("This story doesn't have a description")
- Some story titles looks more like a desciption than an actual title 
- For the visual purpose I added a description for each character 


# Specification:

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

