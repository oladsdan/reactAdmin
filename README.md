### Components
    first we create a navbar, sidebar sections with also styles
### libraries
    npm install react-circular-progressbar (this is used to draw a circular part at the Feature component)

    1. after importing cicularprogressbar
    2. import "react-circular-progressbar/dist/styless.css";

### charts
    .we install a libray called recharts
    1. npm install recharts

### table 
    we use the material ui library for the tables as well
    npm install @mui/x-data-grid
    this is used for the datatable components

### Applying dark mode
    create a folder called style and a file called dark.scss
    import to the app.js
    
### CONTEXT
    we create a context Api to be able to pass properties of the darkmode to enable toggle function,
    since using state seems inefficient

    we also use the USEREducer hook for the functions to use