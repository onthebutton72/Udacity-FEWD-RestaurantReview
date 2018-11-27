# Restaurant Reviews - Udacity Project Stage 1

## Table of Contents

* [Overview](#overview)
* [Running](#running)
* [Features](#features)

## Overview

Incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. Add a service worker to begin the process of creating a seamless offline experience for your users.

## Running

Open the index.html file in your browser.  Resize the browser window or use the developer tools to display the various viewports.

## Features

Responsive design is seperated into three files:
1. small.css (max width 599px)
2. medium.css (min width 600px and max width 799px)
3. large.css (min width 800px)

Additional javascript added to tag elements for styling.

Accessibility is achieved using several strategies:
1. The use of tabIndex to move from critical elements in an orderly fashion
2. The use of aria roles and labels to correctly name interactive elements (buttons, etc)
3. Additional javascript to add roles where html is not static

A service worker was added to provide caching of content
