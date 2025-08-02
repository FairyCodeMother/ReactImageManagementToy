# Image Manager

**Assignment:**

A designer gives you this mockup. Your objective is to create a React Application (SPA) CRUD app that can do the following:
- Upload images and store them using an API
- Search for images by name using an input box and the API
- List all uploaded images
- Delete single image
- Style the page to your liking
- Your application should be written in TypeScript.
    - You do not need to worry about authentication or any kind of user management.
- You are welcome to mock the API or write a real one (Node preferred).
  - Used mock apis
- You should only allow images to be uploaded.
- You may use any kind of state management, or none, if you see fit.
    - React
- For scaffolding, feel free to use Next.js or CRA, as we will not judge you on your webpack config.
    - Next.js
- You are also welcome to use any UI library, such as AntD, Material UI, etc..
    - Only Tailwind
- Your application should not require additional dependencies to be installed on a local machine
- 
It should be able to be brought up with the following two (2) commands:
```
npm i
npm start
```

---

## Project Notes

CRUD SPA for image files using React, TS, Next.js

### Day 1:

**Design:** Notes, sketches, app design (storage needs, components, variable names, etc)
  - Used a pre-existing toy app (not an image manager, but has nav buttons in a header bar) from my personal code as reference for the division of labor and styling
  - Used a palette generator for the color scheme
  - Used my personal reference material and Google search for syntax/grammar
  - Friend recommended lucide-react

*Time: ~6 hours*

### Day 2:

**Implementation:** Began with Next.js scaffold (TS, Tailwind, App Router)
    - Decided to stick with simplicity: only use Tailwind
    - Turned off AI but kept autocomplete on
    - Began with updating the default Next.js page consuming a blank ImageManagement container
    - Make the empty `component` files that I will need and the blank `lin` file that will hold my mock apis
    - Started with getting basic functionality working in ImageManagement file
    - Get the mock api functionality working for fetch/upload/delete
    - Break into components: upload, search, topbar, image card, image grid
    - Styling styling change my mind styling styling move styling into global

*Time: ~10 hours*

**Documentation/Finishing:** Update this README
    - Assignment text
    - Convert my inline comments/notes into AC, steps, etc
    - Code review and cleanup

*Time: ~3 hours*

---

### Acceptance Criteria
1. [x] Must start with only commands:
    ```bash
    npm i
    npm start
    ```
2. [X] Create/upload new image
    - [x] Only image files allowed
    - [X] Sends new image to API: `mockAddImageApi`
    - [X] Refreshes the page on upload
3. [X] Fetch all images
    - [X] API: `actionFetchAllImages`
    - [X] Populates the landing page
4. [X] Fetch image by `name`
    - [X] Sends `name` to API: `actionFetchImageByName`
5. [X] Delete an image
   - [X] API: `deleteImage`

### Personal notes:

I hope it was okay for me to use my toy projects as references as I worked on this. I used a lot of boilerplate and defaults, too.
I think I left some old artifacts in the code that I missed in cleanup but my eyes are tired.

I left the comments so you can follow my thought processes.

I didn't get to add as much validation as I normally would, or notifications to the user (upload successful, etc). I would have liked to flesh out the APIs more, maybe make them real endpoints that could be hit but that would have pulled me to create more storage, seed images, etc and that would have taken too muth time.
I've also never implemented a test suite from scratch and would have enjoyed getting that going.
I would also spend more time exploring UI libraries to see what I could have used (I'm used to working from prescribed style libaries).
Thank you for the fun, and realistic, assessment project!
