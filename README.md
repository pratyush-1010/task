Create a new repository on github.
Open your react app and open new terminal on that app
type the following commands one-by-one on the terminal and press enter:
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/username/repo-name.git
git push --set-upstream origin master
Now your project is uploaded on Github
Next step is to delpoy your project
To deploy your project do the following steps:
Install gh-pages : npm i gh-pages --save-dev
Add Homepage to your package.json file :  "homepage": "https://username.github.io/repo-name",
Add deploy and predeploy to scripts in package.json :  "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
If your are using React-Router-Dom you need to add basename to your router: <Router basename="/repo-name"></Router>
And the final step :npm run deploy
Now You have to run the project by going to the github repository->Actions->Pages build and Deployment->Click on the link 
This is how you upload and deploy your project on github
