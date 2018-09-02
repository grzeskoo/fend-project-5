# Mobile Web Specialist Certification Course

_Three Stage Course Material Project - Restaurant Reviews_

## Contents

- [Mobile Web Specialist Certification Course](#mobile-web-specialist-certification-course)
  - [Contents](#contents)
  - [Introduction](#introduction)
  - [Dependencies](#dependencies)
    - [CSS](#css)
    - [JS](#js)
    - [Other](#other)
  - [Features](#features)
    - [Responsive](#responsive)
    - [Organized](#organized)
    - [Stylish](#stylish)
    - [Accessible](#accessible)
  - [Sub-Optimal](#sub-optimal)
    - [SASS](#sass)
    - [Flexbox](#flexbox)
  - [Lessons Learned](#lessons-learned)
  - [Using Locally](#using-locally)
    - [Requirements](#requirements)
    - [Using](#using)
  - [Contributing](#contributing)
- [Project Overview: Stage 1 (Original Rubric)](#project-overview-stage-1-original-rubric)
  - [Specification](#specification)
  - [What do I do from here?](#what-do-i-do-from-here)
  - [Leaflet.js and Mapbox:](#leafletjs-and-mapbox)
  - [Note about ES6](#note-about-es6)

## Introduction

The **Restaurant Reviews** project is split into several stages, of which this is the first.  The primary goal was to convert an existing webpage into a mobile-ready responsive web application ([see original rubric below](#project-overview-stage-1-original-rubric)).

## Dependencies

The majority of the code was provided by [Udacity](https://github.com/udacity/mws-restaurant-stage-1), but I've added a few other external resources.

### CSS

* [Sass](http://sass-lang.com)

### JS

* [AppCache API](https://developers.google.com/web/fundamentals/primers/service-workers/)
* [LazySizes.js](https://github.com/aFarkas/lazysizes)
* [Leaflet.js](https://leafletjs.com)

### Other

* [Google Fonts](https://fonts.google.com/)

## Features

These are the things I did well, so I'll brag about them first.

### Responsive

Responsive on devices of all sizes.

* Heavy use of flexbox to keep with modern CSS trends
* Created Sass mixin to consolidate `display` and `flex-flow` properties
* `restaurant.html` dynamically changes layout depending on device size
* Header text resizes with breakpoints
* `index.html`'s list of restaurants will span a different number of entries per row, depending on screen size
* The filters in `index.html` expand and contract with viewport
* All `img`s will always fit within their containers
* Strict use of `rem` units over `px` (in most places) to be relative to viewport

### Organized

All code is well documented and organized.

* Modules of `_*.scss` contain file info, primary, and secondary sectioning
* All colors used by `_*.scss` files are maintained within a master variable file ([_colors.scss](sass/modules/_colors.scss))

```css
$color-mono-03  : #f3f3f3;  // concrete
$color-blue-02  : #0275d8;  // science blue
```

* Most individual components contain inline comments to indicate purpose

```css
.container__list > li {
  /* Two restaurants per row */
  flex: 1 0 40%;
}
```

* `*.html` files contain major section indicators

```html
<!-- Main Content -->
<main role="main">
  <!-- Map -->
  <section class="container__map">
    ...
  </section>
</main>
```

### Stylish

Original style was maintained, with some added effects for personality.

* Subtle hover transitions for links and `index.html` restaurant cards
* `restaurant.html` will always fit the viewport height to prevent map focus point from being too low to see
* `restaurant.html` info panel (left) will contract with the viewport, but will scroll to access information and reviews
* `restaurant.html` info panel (left) has had its scrollbar styled (for webkit-enabled devices) to override ugly default

### Accessible

* Major page areas have assigned `banner`, `main`, and `contentinfo` roles
* Other components have appropriate `aria-label`s assigned
* All page components are visible on devices of every size (no `aria-hidden` labels)
* All `img`s have `alt` properties
* All `img`s use [LazySizes.js](https://github.com/aFarkas/lazysizes) to load after all other page content has loaded (to increase page load speed)
* Employs a service worker using [Google's AppCache API](https://developers.google.com/web/fundamentals/primers/service-workers/) to cache site assets for offline access

## Sub-Optimal

While the objectives were achieved, I recognize that in trying to apply all of the cool stuff I learned, a few parts are lacking and could use some attention.

### SASS

This was my first time implementing SASS/SCSS in a web project, and with all of the information there is available, it was like drinking water from a firehose.  I probably became too ambitious and tried to apply too many new things instead of keeping it simple.

In my defense, however, I *was* given code that had literally almost **twenty** (20) different colors, used `#id` tags for everything (ew), and images with sub-optimal resolutions (I mean, 800px by 600px?  Really?).

### Flexbox

While I'm most familiar with Flexbox over the alternatives (**grid**, **floats**, etc.), it was a challenge getting everything to flow correctly.

I ultimately ended up putting gigantic colored borders around my page components to visualize them (and starting from scratch more times than I can count), but I finally ended up with something I'm probably 70% proud of.

## Lessons Learned

* **Focus on structure first, then style**.  I spent way too much time tweaking the colors and effects when the layout was still broken.
* **Keep it simple**.  I already mentioned it, but I tried doing too much at once and overwhelmed myself on more than one occasion.  Sass is crazy powerful.
* **Scrollbars are hard to style**. Seriously, why does it have to be so painful?

## Using Locally

To see the magic in action, feel free to fork or clone your own copy.

### Requirements

* You'll need a way to run the server locally (I used [Python](https://www.python.org/) - see [What do I do from here?](#what-do-i-do-from-here) from the original rubric below).

### Using

1. Download or clone the repository to your local environment.
2. From a terminal, run your local Python server

```python
python -m http.server 8000
```

3. From a browser, navigate to your local server instance (i.e. `http://localhost:8000`)
4. Have fun!

## Contributing

If you've read this far then you know this was an assigned project, and as such will not be open to pull requests or contributions.

I hope you can forgive me.

---

# Project Overview: Stage 1 (Original Rubric)

For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users.

## Specification

You have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality.

## What do I do from here?

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

2. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.
3. Explore the provided code, and start making a plan to implement the required features in three areas: responsive design, accessibility and offline use.
4. Write code to implement the updates to get this site on its way to being a mobile-ready website.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

## Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write.



