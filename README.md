# Assignment 8

### Name Of My Project And Live Site Link

- Project Name: Gadget Haven
- [Live Link](https://wwwgadgetheaven.netlify.app/)

### Attach Requirement Document Link

- [Requirement Document](https://drive.google.com/file/d/1u2DKA6ypW8Ojk-2SE8UclrD5tx1skiaH/view?usp=sharing)

### List of React Fundamental concepts used in the project

1. JSX (JavaScript XML)
2. Components (Functional and Class-based)
3. Props (Data passing between components)
4. State (Managing component data)
5. useState Hook (Managing state in functional components)
6. useEffect Hook (Handling side effects and data fetching)
7. Context API (Managing global state)
8. React Router (Routing between pages)
9. Event Handling (User interactions)
10. Conditional Rendering (Displaying elements based on conditions)
11. useLocation Hook (Accessing location information in React Router)
12. useNavigate Hook (Navigating programmatically between routes)
13. LocalStorage (Persisting data across sessions)
14. React Toast Notifications (Displaying toast messages)

### What you have used for handling and managing data (context API/local storage)

- For handling and managing data, LocalStorage is used to persist the shopping cart and wishlist data across page reloads and sessions.

### Here are 5 features of your GadgetHeaven e-commerce website:
1. Structured Navigation and User-Friendly Interface: The website features a well-organized navigation bar with key sections like the logo, brand name, dashboard, and stats. Active routes are indicated, and the design includes attractive banners, category sidebars, and a grid layout for product cards, making the site easy to navigate.

2. Product Details and Wishlist Functionality: Each product has a detailed page displaying essential information such as the name, price, description, specifications, and rating. Users can add items to their shopping cart or wishlist with one-click buttons, and the wishlist prevents duplicate entries.

3. Shopping Cart and Wishlist Management: The website allows users to manage both a shopping cart and wishlist through a dedicated dashboard page. The cart can be sorted by price, and users can easily view the total price of cart items. Additionally, the system uses Context API for smooth data management and optional LocalStorage for persistence.

4. Interactive Sorting and Filtering Options: The website includes functionality for filtering gadgets by categories like computers, phones, and chargers. Users can also sort items by price in the cart and explore new routes that enhance the site's utility and provide a more personalized experience.

5. Dynamic User Interaction and Notifications: Features such as toasts for adding items to the cart or wishlist, a modal for successful purchases, and custom navigation (using hooks like useLocation() and useNavigate()) improve user interaction and experience. Additionally, the site ensures seamless performance by handling edge cases and preventing errors during reloads.