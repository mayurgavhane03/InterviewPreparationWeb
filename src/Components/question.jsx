 
const ReactInterviewQuestion = {
  TrafficLight: `You are tasked with building a simple traffic light component using React. -The traffic light should consist of three lights: red, yellow, and green.
   The lights should switch from green to yellow to red after predetermined intervals and loop indefinitely. Each light should be lit for the following durations: Red light: 4000ms, Yellow light: 500ms, Green light: 3000ms.
    Your task is to implement a React component that represents the traffic light and switches between these colors based on the specified intervals. Additionally, you should style the traffic light to make it visually appealing. 
    You can use CSS or any other styling method of your choice.`,
  
  Counter: `Your task is to build a React component named Counter for a simple counter application. The component should display a number and enable users to interact with it using buttons. Your implementation should meet the following criteria 

  - Initially, the counter should display zero.
  - Users should be able to increment or decrement the counter value by clicking on buttons labeled 'Previous' and 'Next' respectively.
  - Provide an input field labeled 'Step' where users can specify the increment or decrement step value. This value determines how much the counter changes with each click.
  - Include another input field labeled 'Increment Limit' where users can set a maximum value for the counter. If the counter exceeds this limit upon incrementing, prevent further increments and display an alert message stating that the number is too large.
  - Ensure the user interface is visually appealing, with proper spacing, alignment, and clear labeling for input fields and buttons.
  - Consider accessibility to ensure all users can interact with the component effectively.
  - Implement the Counter component using functional components and React hooks for state management.
  - Add comments to your code to explain the functionality of each component part.
  - Develop the Counter component to meet these specifications, and provide the code along with any additional explanations or considerations you think are necessary.      `,
  BuildFileExplorer :  ` 
  You are tasked with building an Explorer component using React. The Explorer should mimic the functionality of file explorers like those found in VS Code or Windows Explorer. The Explorer component should consist of a tree structure with folders and files.
  
  Your task is to implement a React component that represents the Explorer and allows users to navigate through folders and view files. Additionally, you should style the Explorer to make it visually appealing.
  
  Requirements:
  1. Use React to create a component called Explorer.
  2. The Explorer component should display a tree structure with folders and files.
  3. Users should be able to expand and collapse folders to view their contents.
  4. Clicking on a file should open it or trigger an action (such as displaying its contents).
  5. Ensure that the Explorer supports nested folders (folders within folders).
  6. Style the Explorer to make it visually appealing. You can use CSS or any other styling method of your choice.
  7. Provide basic functionality like creating, renaming, deleting folders and files (optional, but encouraged for enhanced user experience).
  8. Ensure smooth navigation and interaction within the Explorer component.
  
  Example:
  Here's how the Explorer component should behave:
  - Initially, the Explorer displays a root folder with its contents.
  - Users can expand or collapse folders by clicking on them.
  - Clicking on a file opens it or performs an action associated with it.
  - Users can perform basic file management actions like creating, renaming, or deleting folders and files (optional, but encouraged).
  - The Explorer provides a visually appealing and intuitive user interface for navigating through folders and viewing files.
  
    `
};

export default ReactInterviewQuestion;
