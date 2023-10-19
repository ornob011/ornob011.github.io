# Portfolio

This repository contains the source code for my personal portfolio website built using [Hugo](https://gohugo.io/) and the [Toha](https://github.com/hugo-toha/toha) theme.


## 📑 Table of Contents

- [Portfolio](#portfolio)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Customizing the Site](#customizing-the-site)
      - [Layouts](#layouts)
      - [Configuration](#configuration)
      - [Content](#content)
      - [Static Assets](#static-assets)
      - [Shortcodes](#shortcodes)
      - [Themes](#themes)
      - [Custom CSS and JavaScript](#custom-css-and-javascript)
  - [Deployment](#deployment)
    - [GitHub Pages](#github-pages)
    - [Netlify](#netlify)
    - [AWS Amplify](#aws-amplify)
    - [Firebase Hosting](#firebase-hosting)
  - [Contributing](#contributing)
  - [License](#license)


## Overview

This website showcases my portfolio, experiences, research interest, and more about me. Built with Hugo and the Toha theme, it provides a responsive and customizable design.

## Prerequisites

- **[Git](https://git-scm.com/)**: For cloning the repository and managing version control.
- **[Go](https://golang.org/doc/install)**: Hugo requires the Go language. Ensure you have it installed.
- **[Hugo](https://gohugo.io/getting-started/installing/)**: Essential for local development and building the static website.


## Getting Started

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/ornob011/ornob011.github.io.git
    ```

2. **Navigate to the Directory**:
    ```bash
    cd ornob011.github.io
    ```

3. **Fetch and Install Hugo's NPM Dependencies**:
    ```bash
    hugo mod npm pack
    ```

4. **Install the NPM Packages**:
    ```bash
    npm install
    ```

5. **Start the Hugo Server**:
    ```bash
    hugo server -D
    ```

6. **View in Browser**: Open a web browser and visit `http://localhost:1313`.


## Customizing the Site
### Layouts

<p align="justify">
The website's structure is determined by Hugo templates located in the <code>layouts/</code> directory. Modify these templates to reshape the site's layout.
</p>


### Configuration

<p align="justify">
Edit the <code>config.toml</code> file for configuration settings like site title, description, and base URL.
</p>

### Content

<p align="justify">
Markdown files in the <code>content/</code> directory hold your pages and blog posts. Modify these to update the site's content.
</p>


### Static Assets

<p align="justify">
Assets like images, CSS, and JavaScript are in the <code>static/</code> directory. Tweak them to change static content, styles, or site functionality.
</p>

### Shortcodes

<p align="justify">
Use Hugo shortcodes for dynamic content in Markdown files. The <code>layouts/shortcodes/</code> directory contains your website's shortcodes.
</p>

### Themes

<p align="justify">
Modify the <code>themes/</code> directory to adjust the website's aesthetics or add new themes from Hugo's theme repository.
</p>

### Custom CSS and JavaScript

<p align="justify">
For custom styles and scripts, create files in <code>static/</code> directory and link them in your templates.

_For more on customizing the [Toha](https://github.com/hugo-toha/toha) theme, see its official documentation._

## Deployment

Generate static files using:

```bash
hugo --minify
```
<p align="justify">
This command creates static files in the <code>public/</code> directory, ready for deployment to your preferred web host or server.
</p>


### GitHub Pages

<p align="justify">
Once you have committed and pushed your changes to the <code>main</code> branch of your repository, your site should be automatically deployed to GitHub Pages. If you encounter any issues, make sure that your repository is properly configured in the repository settings and that the <code>gh-pages</code> branch is set as the source for GitHub Pages.
</p>

### Netlify

<p align="justify">
If you are hosting your site on Netlify, you can connect your GitHub repository to Netlify and set up continuous deployment. Once you have set up continuous deployment, any changes you push to the <code>main</code> branch should be automatically deployed to your Netlify site.
</p>

### AWS Amplify

<p align="justify">
AWS Amplify is a cloud development platform that offers a variety of services, including hosting for static websites. To deploy your Hugo site using AWS Amplify, you can connect your GitHub repository to Amplify and set up continuous deployment. Once you have set up continuous deployment, any changes you push to the <code>main</code> branch should be automatically deployed to your Amplify site.
</p>

### Firebase Hosting

<p align="justify">
Firebase Hosting is a hosting service provided by Google. To deploy your Hugo site using Firebase Hosting, you can use the Firebase CLI to deploy your site. First, install the Firebase CLI and log in to your Firebase account. Then, navigate to your Hugo site directory and run <code>firebase init</code>. Follow the prompts to set up your Firebase project and configure your site settings. Finally, run <code>firebase deploy</code> to deploy your site to Firebase Hosting.
</p>


## Contributing
If you find any issues with the website or would like to contribute to the project, feel free to submit an issue or pull request on the [GitHub repository](https://github.com/ornob011/ornob011.github.io).


## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  

<p align="justify">
This project is licensed under the MIT License - see the <a href= "./LICENSE">LICENSE</a> file for details. 
</p>

<p align="justify">
Feel free to modify and customize this template to fit your specific needs.
</p>

<p align="justify">
MIT License

Copyright (c) 2023 Ornob Rahman
</p>