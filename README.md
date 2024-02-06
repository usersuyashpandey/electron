### Installation Steps for Xecta Apps

    Prerequisites
    Before you begin, ensure you have the following installed:

    Node.js (LTS version) || (18 and above)
    npm (version 6 or higher)
    Git

# Cloning the Repository

    Clone the Xecta Apps repository to your local machine using the following command:
    git clone https://github.com/XectaDigitalLab/xectaApps.git

# Navigate to the project directory:

    cd xectaApps

# Installing Dependencies

    Within the project directory, install the required dependencies using npm:
    npm install

# Running the Application

    To start the development server and run the application locally, use the following command:
    npm start
    The application will launch, and you can view it in Electron app.

    The application also runs on web for the react app and to run it, use the following command:
    npm run start:both
    This command will run web and electron app simultaneously or you can choose to open just the react app by using command:
    npm run start:web

# Building the Project

    To build the project for production, use the following command:

# npm run package

    This will create a distributable package for your operating system.

# Troubleshooting

    If you encounter any issues during installation, please check the following:
    => Ensure that all dependencies are correctly installed.
    => Verify that your environment meets the prerequisites.
    => Look for error messages in the console and consult the Electron documentation or community resources for solutions.

## Note: This project is built on Electron (desktop application framework), React (JavaScript library for building user interfaces), and Vite (React-specific build tool).
