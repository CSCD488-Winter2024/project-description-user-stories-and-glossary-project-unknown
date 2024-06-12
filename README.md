Donut Parade

Project Summary: 
  Creating an employee and user-friendly website for DonutParade, where customers can place orders for carry-out/curbside and employees can edit inventory.

  Additional information about the project
    
Installation:
  Prerequisites
  - VS Code to run the program

  Add-ons
  - Latest version of React
    Purpose: React is required to run/edit/change the website

  Installation Process
  - cd DonutParade [this takes you to the working directory]
  - npm install [this installs the latest version and React and needed dependencies]
  - npm run dev [view live changes]

Functionality:
  We can't think of many functionalities that we have to explain at this point. However, we will revisit them.

Known Problems:
  Databases
  - We are currently having issues with finding a good Database that is able to store all inventory needed. Some of the Databases we have looked at that are free are very limited, so we are just looking at all our possibilities.

  Merge Conflicts
  - We haven't had any merge conflicts yet but they can occur. We are following some rules to avoid conflicts such as branching out and working in small parts, and always having pull requests so that every team member can review it.

Additional Documentation:
  Tehe 💀

	Developers Documentation:
 
1. Obtaining Source Code

A. Access the Repository:
- Visit the Donutparade repository on GitHub: https://github.com/CSCD488-Winter2024/project-description-user-stories-and-glossary-project-unknown.

B. Fork the Repository:
- Click the "Fork" button at the top right corner of the repository page. This will create a copy of the repository under your GitHub account.

C. Clone the Repository:
- You can either clone your forked repository using Git or download the zip file. To clone using Git, open your terminal or command prompt and run the following command:
	[ git clone https://github.com/your-username/donutparade.git ]
- Alternatively, to download the repository as a zip file, click the "Code" button on the repository page and select "Download ZIP". Extract the downloaded zip file to your desired location.

D. Set Up Your Development Environment:
Using GitHub Codespaces:
- Navigate to your forked repository on GitHub.
- Click the "Code" button and then select "Codespaces".
- Create a new Codespace on your branch. This will open an online development environment with the repository pre-loaded.
Using a Local IDE:
- Open your terminal or command prompt.
- Navigate to the directory where you cloned or extracted the repository:
	[ cd DonutParade ]

E. Install Dependencies:
- Before you start coding, ensure all project dependencies are installed. Run the following command in your terminal:
	[ npm install ]

F. Once the dependencies are installed, you are ready to begin coding. 


2. Directory Structure:

‘public/ ’: Contains static assets like vite.svg.
‘src/’: Contains all the React components, pages, scripts, and styles.
‘assets/’: Contains images, styles, and other asset files.
‘components/’: Contains reusable React components like the header and footer of the website
‘pages/’: Contains React components for each page.
‘scripts/’: Contains script files like Firebase configurations.
‘styles/’: Contains CSS and styling files.
‘App.jsx’: Main application component, linking of pages
‘index.css’: Global styles for the website.
‘.gitignore’: Specifies files to be ignored by Git.
‘package.json’: Contains project metadata and dependencies.
‘README.md’: Project description and basic instructions.

3. Building Software:

A. To build the software, follow these steps:
- Ensure you have React.js and npm installed. If not, download and install them from the command line.
- Install the project dependencies:
	[ npm install ]

B. Start the development server: 
	[ npm run dev ] 
	This will start the application in development mode. Open http://localhost:3000 to view it in the browser.

4. Building Final Project:

A. Ensure Code Stability:
Before creating a production build, make sure all code is in a stable state:
- Ensure that all features are implemented and tested.
- Verify that there are no critical bugs.
- Commit and push all changes to your GitHub repository.

B. Create a product build.
	[ npm run build ]
- To deploy the final website we will use Netlify, so these are instructions for Netlify deployment, however, it can be used for other hosting services.
- On the command line, make sure you are in the DonutParade (cd DonutParade)
  
C. Install Netlify on the CLI
	[ npm i netlify-cli -g ]
 
D. Deploy website
	[ netlify deploy ]
E. Confirm Deployment
- Once the deployment is complete, Netlify will provide a URL for your live site. Open this     URL in your browser to verify that your website is running correctly.
