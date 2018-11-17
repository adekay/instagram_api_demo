
# Read me
This is my implementation of the application for the code exercise stage of the paystack front end developer role as requested.

## About
This application is built using the [jQuery](https://jquery.com/) 3.3.1 library and [bootstrap 4](https://getbootstrap.com/) framework as dependencies, and written with HTML5, CSS3 and JavaScript.

### note
To run this application, you require an [InstagramAPI](https://www.instagram.com/developer/) access token with a public_content scope. There is currently a placeholder where the acess token should be and its value is currently a none functional string for security reasons. therefore the application will not work properly till the placeholder is replaced with a valid access token.

### warning
Do not commit API access token to a repository.

## Setup
1 Download file from This repository
2 Open the public folder in the downloaded application folder
3 Open the index.html file on a text editor
4 Scroll down towards the very end of the index file and find the code that looks like this:

```javascript
var  API_DETAILS = {
	url:  '*******************************************************',
	access_token:  'ADD INSTAGRAM API ACCESS TOKEN HERE',
	get  ***() {
		return  ********* ********** ******* *********;
	}
};
```
5 Replace the _ADD INSTAGRAM API ACCESS TOKEN HERE_ string with your InstagramAPI Access Token and save the file.

Now you are ready to run the application.

## Run Application
To run the website, simply open the index.html file on your web browser.

## License
MIT Licence.
