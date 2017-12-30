# Readable-React

Readable Blog - Created using ReactJS for Udacity's React Nanodegree program

## Running the App

The project uses Node.js and the Create-React-App starter.  If you do not have Node >= 6.x installed, you can download it here: [Node.js](https://nodejs.org/en/)

Once Node is installed, navigate to the directory where you want to store the app
```
git clone https://github.com/TechnicalDev/Readable-React.git

* Install and start the API server
    - `cd api-server`
    - `npm install`
    - `node server`
* In another terminal window, install and start the application
    - `cd frontend`
    - `npm install`
    - `npm start`

```
A new browser window should automatically open displaying the app.  If it doesn't, navigate to [http://localhost:3000/](http://localhost:3000/) in your browser


## Using the App

The "Readable" blog has four views:
```
Default/Main View
    Lists all available categories, which should link to a category view for that category.These links open the 
    the below mentioned "Category View".
    Lists all of the available posts.
    Has a dropdown for changing the sort method for the list to order by voteScore and order by timestamp.
    Has a button for adding a new post.This opens the below mentioned "Create View".
Category View
    Identical to the Default/Main view, but filtered to only include list of posts with the selected category.
Post Detail View
    Shows the details of a post, including: Title, Body, Author, timestamp (in user readable format), and vote score.
    Lists all of the comments for that post.
    Has buttons to edit or delete the post.Edit button open sthe belowmnetioned "Edit View".
    Has a button to add a new comment.This opens at comment form to add commnets info.
    Comments should also have controls for editing or deleting.
Create/Edit View
    Has a form to create new post or edit existing posts.
    When editing, existing data should be populated in the form.

```
Posts and comments, in all views where they are displayed, display their current score and have controls to increment or decrement the Vote Score for that post and comment. Posts  display the number of comments associated with the post.




