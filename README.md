# IT ACADEMY SP6 REACT BASIC


###### PROJECT DEMO URL :
<hr>

### THE EXERCICE:
CreatE a REACT website from scratch, including all the necessary steps from components to props.

### LEVEL 1:

```Exercice 1.```

- Install Node.js
- Install a REACT template from:
https://github.com/monteserin/react-template
- Open the project with VSCODE
- Understant the project structure :
  -  Node_modules folder
  - Src folder
  - Readme.md
  - Package.json
  - Gitignore
- Install the project dependencies
- Run the project
  

### LEVEL 2:

```Exercice 2.```

Create a component and import it into the main App component.
- Create the component Book.js
- Copy this code and complete it to return the text "Viatge a la lluna”:

export default () => {

    ????

}

-Complete the App.js component:

import Book from './book'; 

export default () => { 

    return ( 

        <div> 

            ????

        </div> 

      );

};

### LEVEL 3:

```Exercice 3.```

Instead of hardcoding (typing directly) the value of the component inside it, we will pass it as close from the App component.
The result should remain the same. The only thing that will change is the implementation of the code.

### LEVEL 4:

```Exercice 4.```
Create a JSON file with all the books. Therefore, import this file into our application and go through it with a .map structure.

[

    { 

         "title": "Viatge a la lluna", 

          "author": "Julio Verne" 

     }, 

     { 

         "title": "El metge", 

         "author": "Noah Gordon" 

     }

 ]

