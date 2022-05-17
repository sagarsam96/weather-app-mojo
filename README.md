Documentation:

*1.Requirements: Modern Browser.
Best UI experience with half browser screen.

*2. Architecture:
    App.js control whole app, has three states which control the query, location, background Image.

    All functionalites are divided into components
    1. Fetching of Data from two APIs is within fetching.js file
    2. Styling is done with Styled.components and whole styling is withing the component Styled.js with all sections divided.
    3. Rendering Image and Background via both named jsx components
    4. Footer contains instruction for the end user.

    Data flow: App.js to fetching.js then fetched data updates the states in App.js then that data is rendered via the named components by passing states as props to them.