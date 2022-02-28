# MyVoice APP

### About the project

Create a plataform where users are able to communicates besides talking, selecting words or pictures to represent what it is in their minds. The APP will be able to display the thoughts through voice speaker as well.

### Why do people benefit?

There are many reasons why a person may not be able to communicate using speech. They may have a developmental disability which has affected the development of speech. They may have an acquired disorder that has affected the person’s ability to speak.

## Details

This repo included the following files as template:

- a single, simple API endpoint (`/api/v1/fruits`)
- a single React component (`<App />`)
- an example database module (`server/db/fruits.js`)
- an API client module (`client/apis/fruits.js`)
- configuration for Jest and testing library
- configuration for server-side debugging in VS Code
- a single client-side test (`client/components/App.test.js`)

## It's Gerard and his comments!

What a great application to build. My daughter is non-verbal, so I'll give you
10 free points up front. Overall it works pretty well, with lots of
functionality. I went into a category and got stuck! Can you get out?

I've left `TODO` comments in the code, and I made some changes in Item.jsx (you
don't have to keep these, they're just an example)

Since we navigate into (and out of?) categories, it's a great use-case for
react-router. I naturally want to use my back button and it doesn't work.

Love that you're using Chakra for accessibility! I love that you've got
speech synthesis!

You've got very good test coverage on your reducers/actions, I'd love to see
a test for your components to assert something like:

> When I click on this item, the sound is played
