# Spotify Search

## Overview
Spotify search is a react project I developed using Spotify's API to retrieve a list of search results for a given search term.

### Deployed site
[Visit the deployed site here.](https://spotify-search-2d1d9.web.app/)

## Responsive Testing

[Am I Responsive](http://ami.responsivedesign.is/#) is a useful tool I use to test if my project is responsive across multiple device types. See screenshot below.

![Spotify search - Am I Responsive](./src/images/Screenshot%202022-04-14%20at%2013.15.03.png)

## UX
### Business Goals
- To authenticate a user and login to their spotify account
- To provide a list of relevant artists, songs and playlists 
- Create an app with a design similar to Spotify to create a seamless experience for the user

### User Stories
- To navigate to the users desired artist, song or playlist as efficiently as possible
- To be inspired to find new music related to the search term provided

## Functional Features

- **Login screen** - When the user visits the site for the first time, they'll see a login button to redirect them to a spotify login page. The user is then redirected back to the app with a token which is stored in the browser's local storage. If the user ends their session and later returns to the site, the token will be retrieved from the local storage to avoid having to authenticate their device again.
- **Header** - The header contains a login/logout and a search component. 
    - **Login** - The login/logout components state is managed by the authentication status. 
    - **Search** - The search component contains a form with an input type text, which when submitted makes the API call to Spotify, passing the user's search term as a parameter. The response is stored in a redux store for use in the results component.
- **Results Section** - The results section contains a filter and listings component. 
    - **Filter** - The filter component allows the user to display results by artist, album or playlist. A useState hook is used to control the selected filter option which is passed up the component tree to the listings component to amend the output.
    - **listings** - The listings component makes use of the map method to iterate over the object array retrieved from Spotify's API.

## Technologies Used

### Operating system
- macOS

### Version Control
- Git
- GitHub

### Languages
- HTML
- SCSS
- Javascript

### Frameworks
- React JS
- Redux
- Axios

## Design Features

I wanted to create a seamless experience for the user whilst they navigated between this application and Spotify's. Below are a few design features which have been extracted from Spotify's website to achieve this.

- **Buttons** - The key characteristics Spotify uses in their design are, the border radius, letter spacing and use of all upper case lettering. The focus selector has also been styled to replicate the outline animation on click.
- **Typography** - Spotify use the Helvetica font family which has been use to style all header and body text in this application. Headings also have a slight adjustment to the letter spacing as well.
- **Colours** - The predominant colours used by Spotify are black, white and green(#1ed760). On Spotify's web player one of the most distinctive design features is the use of a background gradient. I've replicated this in the background of the listings component as well.

## Further Development

- **Web Playback SDK** - At the moment, this application navigates users over to Spotify to listen to music. The next phase of development would implement the Spotify Web Playback SDK to allow users to play music within this app without needing to leave.

- **Personalised playlists** - I'd like to add a My Account section where the user can add selected songs too in order to curate a personalised playlist.
