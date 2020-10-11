<h1 align="center"> UTILITY </h1>

<p align="center">
  <img src="assets/img/utility-1.png" />
</p>

[![Created Badge](https://badges.pufler.dev/created/codeezzi/utility)](https://badges.pufler.dev) [![Updated Badge](https://badges.pufler.dev/updated/codeezzi/utility)](https://badges.pufler.dev) [![GitHub contributors](https://img.shields.io/github/contributors/codeezzi/utility.svg)](https://GitHub.com/codeezzi/utility/contributors/) [![GitHub pull-requests](https://img.shields.io/github/issues-pr/codeezzi/utility.svg)](https://GitHub.com/codeezzi/utility/pull/) [![GitHub pull-requests closed](https://img.shields.io/github/issues-pr-closed/codeezzi/utility.svg)](https://github.com/codeezzi/utility/pulls?q=is%3Apr+is%3Aclosed) [![GitHub issues](https://img.shields.io/github/issues/codeezzi/utility.svg)](https://GitHub.com/codeezzi/utility/issues/) [![GitHub issues-closed](https://img.shields.io/github/issues-closed/codeezzi/utility.svg)](https://GitHub.com/codeezzi/utility/issues?q=is%3Aissue+is%3Aclosed) [![Visits Badge](https://badges.pufler.dev/visits/codeezzi/utility)](https://badges.pufler.dev) [![Commits Badge](https://badges.pufler.dev/commits/monthly/shubham2704)](https://badges.pufler.dev)

Utility is meant to be a simple easy to use unit conversion website plus bunch of utility tools. This will be a static website made completly from HTML,CSS and Javascript or any other Frontend Framwork.

`Tools marked with ☑ are already completed`

---

**Note: Please Don't Make Any Changes In `index.html` AND `contributors.html`**

---

**Note: Please read [CONTRIBUTING.md](CONTRIBUTING.md) before making any pull requests**

---

## Types of Tools to be Added

- [Conversion tools](#Conversion-tools)
- [Mathmetical Tools](#Mathmetical-Tools)
- [Finance Tools](#Finance-Tools)
- [Daily Use Tools](#Daily-Use-Tools)


### [Conversion tools](conversionTools)
- [x] [Temperture](conversionTools/temperture/temperture.html)
- [x] [Length](conversionTools/length)
- [ ] [weight]
- [ ] [speed]
- [ ] [currency]
- [ ] [time]
- [ ] [area]
- [x] [fuel](conversionTools/fuelEfficiency/fuel.html)
- [ ] [pressure]
- [ ] [energy]
- [ ] [current]
- [ ] [force]
- [ ] [sound]
- [ ] [frequency]
- [x] [image](conversionTools/image)
- [ ] [radiation]
- [ ] [resistence]
- [ ] [power]
- [ ] [flow]
- [x] [angle](conversionTools/Angle_Conversion)
- [ ] [magnet]
- [ ] [viscosity]
- [x] [torque](conversionTools/Torque/torque.html)
- [x] [density](conversionTools/density)
- [ ] [conductance]
- [ ] [inductance]
- [ ] [capacitence]
- [ ] [heat density]
- [ ] [surface tension]
- [ ] [resolution]
- [ ] [charge]

### [Mathmetical Tools](mathmeticalTools)
- [ ] [number base]
- [ ] [number series]
- [ ] [roman numericals]
- [ ] [ratio]
- [ ] [propotions]
- [ ] [decimal to fraction]
- [ ] [quadratic equations]
- [ ] [cubic equations]
- [ ] [GCD]
- [ ] [LCM]
- [ ] [expression evaluator]
- [ ] [area]
- [ ] [volume]
- [ ] [surface area]
- [ ] [parameter]
- [ ] [binary]
- [x] [percentage calculator](mathematicalTools/percentageCalculator/percentageCalculator.html)

### [Finance Tools](financeTools)
- [ ] [intrest calculator]
- [x] [compound interest calculator](financeTools/compound-interest-calculator)
- [ ] [return or investment calculator]
- [ ] [stock return calculator]
- [x] [retirement calculator](financeTools/retirementcalaculator/index.html)
- [x] [mortage calculator](financeTools/mortgageCalculator)
- [x] [EMI calculator](financeTools/emiCalculator)
- [x] [service tax calculator](financeTools/service-txt-calculator)
- [x] [discount calculator](financeTools/discountcalculator)
- [ ] [loan calculator]
- [ ] [fixed deposit calculator]

### [Daily Use Tools](dailyUseTools)
- [ ] [compass]
- [ ] [morse convertor]
- [ ] [scientific calculator]
- [ ] [jwelery price]
- [ ] [fuel cost]
- [ ] [time zone]
- [ ] [password generator]
- [x] [BMI](dailyUseTools/bmicalculator/bmi-calculator.html)

*Feel free to suggest if important tools are missing.*

---


### TLDR of [contributing.md](CONTRIBUTING.md):

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
- At the end link your files properly and also link your tool's
html file to the navbar of the `index.html`
- Add your name to the footer of your tool's html you are working on. For example if you are working on length conversion tool then
add your name in the footer of `lenght.html`.

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
