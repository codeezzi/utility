
### TLDR of contributing.md:

- Ensure that no one is working on (or already completed) the tool you want to work on.
- Use descriptive commit messages
- You can create an issue for the tool you want to claim and work on
- You can only use javascript.
- After completing the tool add it to the navbar of the index.html file
- **FOLLOW THE DIRECTORY STRUCTURE AND NAMING CONVENTION**
- **UPDATE THE `README.md` FILE AS YOU WORK ON A NEW TOOL**


## Contributing Guidelines

### Follow the theme design/ Follow the design of `index.html` file.

### Folders and Files
- Please make sure your folder is in any one of the Folder `conversionTools`,`mathmeticlaTools`,`financeTools` or `dailyUseTools`. For example if you want to work on length conversion tool then place your folder in the `conversionTools` folder. The list for tools with their respective folder is mentioned above 
- The name of your folder should be the name o the tool you are working on for example: if you want to work on length conversion tool, Then name your folder would be `length`.
- Under your folder name your files as follows. For length conversion tool the files would be `length.html`, `length.css`,`length.js`
- At the end link your files properly
- Add your name to the footer of your tool's html you are working on. For example if you are working on length conversion tool then  
add your name in the footer of `lenght.html`.
- `Add navbar` in your tool's HTML file you can `copy the navbar from index.html`
- `Add screenShot` of your Tool in PR Message and in your Tool's Folder.

### Opening Issues
When you open an issue, please make sure the Tool is not already implemented. 
Opened Issues by existing Problem will be closed & PR made to this Issue marked as **spam**
The Contributor who opened an issue will be assigned/prefered to the issue. If there is no PR within about 7 Days the issue will be assigned to another Contributor.

### Pull Requests
- Only Pull Requests **joined with an Issue** and matching the **naming-conventions** (See Folders and Files) will be merged!
- If there is no Issue joined in the PR your PR will be labled as **spam** and closed.
- If your code don't passes the Checks your PR will be labled as **"invalid"** and the Issue stays open for the next PR!
- If your PR doesn't follow the Contributing Guidelines of this Repository it will be also marked as **spam** and closed!

## Getting Started
* Fork this repository (Click the Fork button, top right of this page)
* Clone your fork down to your local machine
```markdown
git clone https://github.com/your-username/utility.git
```
* Comment to the Issue you want to work on - so I can assign you to it OR create a new Issue.
* Create a branch for a new feature
```markdown
git checkout -b feature/branch-name
```
* Or if its a bugfix to a file
```markdown
git checkout -b bugfix/branch-name
```
* Make your changes (choose from the Tasks above!)
* Commit and Push
```markdown
git add .
git commit -m 'commit message'
git push origin branch-name
```
* Create a New Pull Request from your forked repository ( Click the 'New Pull Request' Button located at the top of your repo)
* Wait for your PR review and merge approval!
* __Star this repository__ if you had fun!

## Which PR will be accepted?
* Ones you are assigned to.
* Your PR has to link the Issue.
* Your Solution must be correct.

__Thank You!__ 
