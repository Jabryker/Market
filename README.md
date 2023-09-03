## Marketplace Project

Welcome to the **Marketplace** project! This web application is built using React and TypeScript to create an interactive online marketplace experience. The project follows the principles of **Atomic Design** for structuring components and embraces a variety of modern tools and libraries for seamless development.

### Features

- User authentication through Google OAuth using `@react-oauth/google` and `react-google-oauth`.
- Stylish UI components powered by `antd` and `react-bootstrap` for responsive design.
- Data fetching and API communication managed with `axios`.
- Decoding JSON Web Tokens facilitated by `jwt-decode`.
- Efficient form handling and validation using `react-hook-form`.
- Placeholder loading visuals created with `react-content-loader`.
- Integration of icons using `react-icons` for enhanced user experience.
- Smooth navigation between pages using `react-router-dom`.
- User notifications managed through `react-toastify`.
- Monitoring application performance with `web-vitals`.
- Component organization based on Atomic Design principles.

### Project Structure

The project structure demonstrates a well-organized architecture to manage components, templates, and controllers. The `src` directory includes various folders:

- `pages`: Contains individual page components such as `MainPage`, `LoginScreen`, etc.
- `templates`: Holds template components like `BuyerRegistrationPageTemplate`, `NewsDetailsTemplate`, etc.
- `controllers`: Contains API-related logic, including authentication and data retrieval.

### Routing

The `AppRoutes` component, utilizing `useRoutes` from `react-router-dom`, handles the routing of the application. Different paths correspond to specific components, ensuring seamless navigation between pages.

### Controllers

The `controllers` directory contains modules for different aspects of the application, such as `AuthController`, `CommonController`, and `ProductController`. These modules encapsulate the logic for authentication, fetching news and articles, and managing products.

### ESLint Configuration

The project uses ESLint for maintaining code quality. The `.eslintrc` file configures linting rules for the project, ensuring consistent code style and formatting.

### Getting Started

To get started with the project:

1. Clone the repository to your local machine.
2. Install the project dependencies using `npm install`.
3. Run the project using `npm start`.

### Available Scripts

- `npm start`: Starts the development server.
- `npm build`: Builds the production-ready application.
- `npm test`: Executes tests using the testing framework.
- `npm lint`: Performs linting on the project files.
- `npm lint:fix`: Fixes linting issues automatically.

## Available Routes

The Marketplace project offers the following routes for navigation:

1. **Main Page**: The landing page of the application.

   - Route: `/`

2. **Login Screen**: Allows users to log in.

   - Route: `/login`

3. **Registration Screen**: Allows users to initiate the registration process.

   - Route: `/registration`

4. **Buyer Registration Page**: Provides a template for buyer registration.

   - Route: `/registration/buyer`

5. **Seller Registration Page**: Offers a template for seller registration.

   - Route: `/registration/seller`

6. **Password Confirmation Screen**: Enables password confirmation during registration.

   - Route: `/confirmation-password`

7. **Password Reset Screen**: Allows users to reset their password.

   - Route: `/password-reset`

8. **Product Details Screen**: Displays details of a specific product.

   - Route: `/products/:id`

9. **News Details Template**: Shows detailed information about a news item.

   - Route: `/news/:id`

10. **Useful Articles Detail Template**: Provides detailed content for useful articles.

    - Route: `/articles/:id`

11. **Basket Pages**: Displays the user's shopping cart.

    - Route: `/cart`

12. **Not Found Screen**: Displays when no route matches the user's request.

    - Route: `*` (wildcard)
