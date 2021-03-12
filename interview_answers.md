# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

    The differences is that a stateful component holds state(s) that can be dynamically changed based on functional events. Functional components are just components that hold no state at all.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

    componentWillMount function will be called after the initial render once the client recieves data from the server and before data is displayed. componentWillUpdate is called before rendering.

3. Define stateful logic.

    stateful logic is code that uses state in a component and in custom hooks its the use of more than one state hook to make a reusable logical hook for that component with it's own values. 

4. What are the three step of creating a successful test? What is done in each phase?

    First step is Arrange, where I will set up the component with render.
    Next step is to Act where I will interact with the code as if I'm the user. As the tester I will get the element I will need to test and create a userEvent for what I will want to do. Last step is to Assert and in this step I will check to see if what I did is working or breaking the code. For example if I'm clicking on the submit button I can test to see if another component is rendered by using a expect assertion.