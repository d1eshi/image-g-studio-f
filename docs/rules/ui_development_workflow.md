# UI Development Workflow

This document outlines the standards and practices for developing UI components in this project.

## 1. Component-Based Architecture

The UI is built using a component-based architecture. Each distinct piece of the interface is a "component," which encapsulates its own HTML structure, styling, and JavaScript logic.

-   **Location:** Components are located in the `src/components/` directory.
-   **Structure:** Each component should have its own JavaScript file (e.g., `MyComponent.js`).
-   **Modularity:** Components should be self-contained and reusable where possible. They interact with the rest of the application through a centralized state management system.

## 2. Styling with Tailwind CSS

We use **Tailwind CSS** for styling. This is a utility-first CSS framework that allows us to build complex designs without writing custom CSS.

-   **No Custom CSS Files:** Instead of writing CSS in separate files (like `MyComponent.css`), you apply utility classes directly in the HTML structure within your component's JavaScript file.
-   **Configuration:** The Tailwind configuration is in `tailwind.config.js`. If you need to extend the default theme (e.g., add custom colors or fonts), you should do it there.
-   **Main CSS File:** The main entry point for Tailwind is `src/styles/input.css`. You should not need to edit this file unless you are adding custom base styles or new Tailwind layers.

## 3. Development Workflow

1.  **Create a Component:** When creating a new UI feature, start by creating a new JavaScript file for your component in `src/components/`.
2.  **Build the HTML Structure:** Define the HTML for your component. This can be done within the component's JavaScript file, for example, by returning a string of HTML or creating DOM elements.
3.  **Apply Styles:** Use Tailwind's utility classes to style the HTML.
4.  **Add Logic:** Implement the component's behavior in its JavaScript file.
5.  **Manage State:** For any state that needs to be shared across components, use the central state management module in `src/state/appState.js`.
6.  **Compile CSS:** While developing, run the `watch:css` script to automatically re-compile your CSS every time you make a change to a file.
    ```bash
    bun run watch:css
    ```
7.  **Production Build:** Before committing, run the `build:css` script to create a minified version of the CSS for production.
    ```bash
    bun run build:css
    ```

## Example Component (`src/components/HelloWorld.js`)

```javascript
// Manages the state and rendering of the HelloWorld component
export function HelloWorldComponent(element) {
  const render = () => {
    // Use Tailwind classes directly for styling
    element.innerHTML = `
      <div class="p-4 bg-blue-100 border border-blue-400 rounded-lg">
        <h1 class="text-2xl font-bold text-blue-800">Hello, World!</h1>
        <p class="text-gray-700">This is an example component.</p>
      </div>
    `;
  };

  // Initial render
  render();
}
```
