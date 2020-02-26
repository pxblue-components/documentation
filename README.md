# PX Blue Component Documentation
This repository holds the source code for the landing page at [pxblue-components.github.io](https://pxblue-components.github.io). It's a single-page React app that links to the separate documentation pages for each framework:
- [React](https://pxblue-components.github.io/react)
- [Angular/Ionic](https://pxblue-components.github.io/angular)
- [React Native](https://pxblue-components.github.io/react-native)

## Updating
To update the site, first clone the repository and make a feature branch:
```
git clone https://github.com/pxblue-components/documentation.git
cd documentation
git checkout -b feature/my-feature
```

Once you have made your changes, push your feature branch and make a Pull Request into the master branch.

## Deployment
Deployment of this site is handled automatically through CircleCI and GitHub Pages. Any code that is merged into the master branch will automatically be deployed to [pxblue-components.github.io](https://pxblue-components.github.io). Updates usually take effect in under a minute.