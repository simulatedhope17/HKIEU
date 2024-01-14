Project Description:

This project aims to create a functioning website for a university, using html to structure the website, css for design and javascript to improve functionality. The project includes three main pages: Program Page, Visit Page, and Apply Page. Additionally, an external JavaScript file is used to simulate server actions.

The Program Page displays promotional messages for different college programs. A random message is picked on page load and displayed in a promotion information block. The messages rotate every 3 seconds. The page also includes a default video that switches to another video continuously.

The Visit Page includes a reservation form. When the form is submitted, it checks for empty fields and displays an error message if any are found. It also validates the number of visitors and displays a warning if an invalid number is entered. If there are no errors, the page calls a server simulation function to reserve a spot and displays a success or failure message.

The Apply Page focuses on major applications. It allows users to choose and rank majors. The page includes a table that updates dynamically as majors are chosen. Users can add majors, and the table displays a success message with the chosen major and rank. Duplicate majors or ranks are not allowed.
Features
Program Page: Displays promotional messages for different college programs. The messages rotate every 3 seconds. The page also includes a default video that switches to another video continuously.

Visit Page: Includes a reservation form. It validates the form for empty fields and displays an error message if any are found. It also validates the number of visitors and displays a warning if an invalid number is entered. If there are no errors, the page calls a server simulation function to reserve a spot and displays a success or failure message.

Apply Page: Allows users to choose and rank majors. The page includes a table that updates dynamically as majors are chosen. Users can add majors, and the table displays a success message with the chosen major and rank. Duplicate majors or ranks are not allowed.

Project Structure:

index.html: Redirects to Home Page HTML file.
html/:home.html: Home page HTML file.
html/:visit.html: Visit Page HTML file.
html/:apply.html: Apply Page HTML file.
html/: Directory containing HTML files.
css/: Directory containing CSS files.
js/: Directory containing JavaScript files.
img/: Directory containing Image files.


Usage
Program Page: Open index.html in a web browser to view the promotional messages and videos.

Visit Page: Open visit.html in a web browser to make reservations and check the status.

Apply Page: Open apply.html in a web browser to select and rank majors.

Credits
cw3cs2204.js: External JavaScript file used for server simulation. (Source: https://personal.cs.cityu.edu.hk/~cs2204/2023/cw3cs2204.js)
