* For this repo normally git clone [link]

### Note :
The UI design is Basic and minimal . Similarly, React is used to build the website instead of Next js (as mentioned),  Due to the time limitation and I am familiar with Nextjs but not much than basic

`Certainly! Let's go through the code step by step to explain its functionality and how it works:`

### Importing dependencies and components:
`import React, { useState } from 'react'; `
`import Header from './components/Header'; `
`import Movie from './components/Movies'; `
`import movies from './movie.json'; `

* The code imports the necessary dependencies, such as React and useState, which is a React Hook for managing state.
* It also imports the Header and Movie components from their respective files.
* The movies variable is imported from a JSON file, which contains an array of movie data.

### App component and state management:
` function App() {`
`   const [searchTerm, setSearchTerm] = useState('');`
`   // ...`
` }`

` The App component is a functional component that serves as the main component for the application.`
` It initializes a state variable searchTerm using the useState hook, with an initial value of an empty string.`
` The setSearchTerm function is used to update the value of the searchTerm state variable.`

### Rendering the UI:

` return (`
`   <div className="App text-center min-h-screen bg-gradient-to-r from-black to-black"> `
`     <nav className="backdrop-blur-sm flex z-50 gap-36 fixed w-full"> `
`       <Header /> `
`       {/* ... */} `
`     </nav> `
`     {/* ... */} `
`     <div className="main flex justify-between flex-wrap p-[14px] gap-5 pt-24"> `
`       {/* ... */} `
`     </div> `
`   </div> `
` ); `


* The return statement defines the JSX code to be rendered.
* The root div element has the class App and some styling classes.
* Inside the root div, a nav element is added to contain the Header component and the search input field.
* The Header component is rendered within the nav element.
* The search input field is rendered as an input element within the nav element, with styling classes for appearance.
* The main movie container is rendered within a div element with the class main, and it is styled with flexbox and padding.

### Filtering and mapping movies:

`{movies `
`  .filter((e) => { `
`    if (searchTerm === '') { `
`      return true; `
`    } else if (e.Title.toLowerCase().includes(searchTerm.toLowerCase())) { `
`      return true; `
`    } `
`    return false; `
`  }) `
`  .map((e, i) => ( `
`    <Movie key={i} title={e.Title} img={e.Poster} /> `
`  ))}  `

* The movies array is filtered based on the searchTerm value.
* The filter function checks if the searchTerm is empty. If so, it returns true for all movies, meaning all movies will be included.
* If the searchTerm is not empty, it checks if the lowercase movie title includes the lowercase searchTerm. If it does, it returns true, meaning the * movie will be included.
* The filtered movies are then mapped using the map function to render individual Movie components.
* Each Movie component is assigned a unique key prop using the i index value, and it is passed the title and img props from the filtered movie data.



`That's a high-level overview of the code. It sets up the basic structure of the application, including the header, search`
