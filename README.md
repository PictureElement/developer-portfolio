<h1 align="center">
  developer-portfolio
</h1>
<p align="center">
  A single-page personal portfolio for <a href="https://www.msof.me/" target="_blank">www.msof.me</a> based on Google Material Design guidelines. To view a live demo, <a href="https://pictureelement.github.io/developer-portfolio/" target="_blank">click here</a>
</p>

![demo-1](https://raw.githubusercontent.com/PictureElement/developer-portfolio/master/images/demo-1.png)
![demo-2](https://raw.githubusercontent.com/PictureElement/developer-portfolio/master/images/demo-2.png)

## Setup

Simply fork the repo and run `npm install` in order to get all the Gulp dev dependencies. Next, run `gulp watch` to build the project and start live reloading on localhost:3000. At this point, the page is ready to go and you can begin to add your own information and make any needed changes.

## Features

* Based on Google Material Design guidelines
* Gulp-ready (compiles Sass file, minifies CSS and JS, live reloading with Browsersync)
* Responsive web design
* Styling can be done through simple variable edits
* Sunburst chart for displaying skills
* Scroll animations
* Light and dark theme demos

## Customization

### Personal logo

The template supports two types of personal logos, a logomark (default) and a logotype.
You can choose either one by commenting the markup of the one type you are not interested in.
The logo-related markup can be found in `index.htm` within the `<header>` tag.

Markup for the Logomark:

`<a data-aos="zoom-in" data-aos-duration="700" data-aos-once="true" class="top-bar__logo" href="."><img src="images/logo.png" srcset="images/logo.png 1x, images/logo@2x.png 2x" alt="Personal logo" draggable="false"></a>`

Markup for the Logotype:

`<a data-aos="zoom-in" data-aos-duration="700" data-aos-once="true" class="top-bar__logotype" href=".">Olivia</a>`

### Favicon

Visit [this](https://favicon.io/favicon-converter/) page, upload your desired image and generate your favicon files. Download the files and place them in the root directory of your project, replacing the default ones.

### Google Fonts

The template's default fonts are _Raleway_ (primary), _Montserrat_ (secondary) and _Abril Fatface_ (logotype).

To change the fonts modify the stylesheet link located in `index.html` (within the `<head>` tag) to request your desired web fonts. Ensure to define the new fonts in `sass/developerportfolio.scss` file as well (see _Styling_ section below).

### Styling

In general, most styles on the page are based off the definitions of variables in the _VARIABLES_ section in `sass/developerportfolio.scss` file.

```SCSS
// Define font families
$font-stack-logotype: 'Abril Fatface', cursive;
$font-stack-primary: 'Raleway', sans-serif;
$font-stack-secondary: 'Montserrat', sans-serif;

// Spacing
$section-spacing: 75px;

// Primary color
$primary: #0a192f;

// Secondary color
$secondary: #64ffda;

// Background
$background: #0a192f;

// Background secondary
$background-secondary: #403f4c;

// Surface color
$surface: #213044;

// Surface color (navigation drawer)
$surface-nav-drawer: #213044;

// "On" color for primary
$on-primary: #8892b0;

// "On" color for secondary
$on-secondary: #0a192f;

// "On" color for background
$on-background: #ccd6f6;

// "On" color for background secondary
$on-background-secondary: #ccd6f6;

// "On" color for surface (primary)
$on-surface-primary: #ccd6f6;

// "On" color for surface (secondary)
$on-surface-secondary: #8892b0;

// "On" color for surface (navigation drawer - primary)
$on-surface-nav-drawer-primary: #ccd6f6;

// "On" color for surface (navigation drawer - secondary)
$on-surface-nav-drawer-secondary:#8892b0;

// Timeline
$timeline-color: #64ffda;

// Scrollbar
$scrollbar-color: #64ffda;

// Parallax border
$parallax-border-color: #64ffda;
```

### Skills 

To add/remove skills, simply edit the `js/config/data.json` file.

### Images

By default, the template comes with a number of images, some of which can be kept and others which act simply as placeholders and should be switched. The template contains the following:

* Personal logo (`images/logo.png`, `images/logo@2x.png`) - this is your personal logo. There are two variants that differ in resolution. The recommended sizes are 48 x 48 and 96 x 96 for `images/logo.png` and `images/logo@2x.png` respectively.

* Cover (`images/cover.jpg`) - this is the background image that is moved at a different speed than the foreground content while scrolling (parallax effect). The recommended size is 1920 x 750.

* Profile picture (`images/profile.jpg`, `images/profile@2x.jpg`) - this is the profile picture of yourself. There are two variants that differ in resolution. The recommended sizes are 415 x 415 and 830 x 830 for `images/profile.jpg` and `images/profile@2x.jpg` respectively.

* Thumbnail (`images/thumbnail.jpg`, `images/thumbnail@2x.jpg`) - this is the profile picture of yourself. There are two variants that differ in resolution. The recommended sizes are 64 x 64 and 128 x 128 for `images/thumbnail.jpg` and `images/thumbnail@2x.jpg` respectively.

* Experience image (`images/experience-0x.png`, `images/experience-0x@2x.png`) - these are the images associated with the company logo under the exprerience section. There are two variants for each image that differ in resolution. The recommended sizes are 42 x 42 and 84 x 84 for `images/experience-0x.png` and `images/experience-0x@2x.png` respectively.

* Project image (`images/project-0x.png`, `images/project-0x@2x.png`) - these are the images associated with the projects under the projects section. The recommended sizes are 540 x 406 and 1080 x 812 for `images/project-0x.png` and `images/project-0x@2x.png` respectively.

* Education image (`images/education-0x.png`, `images/education-0x@2x.png`) - these are the images associated with the schools under the education section. There are two variants for each image that differ in resolution. The recommended sizes are 42 x 42 and 84 x 84 for `images/education-0x.png` and `images/education-0x@2x.png` respectively.

### Contact Form

[Formspree](https://formspree.io/) is used to handle form submissions. It uses reCAPTCHA and a honeypot field for spam filtering.

To setup the form, just place `https://formspree.io/$YOUR_EMAIL` in the action attribute of the form and change `$YOUR_EMAIL` to the email you want submissions to be sent to. 

Once the form is configured correctly, submit it once. You should then receive an email from Formspree asking you to confirm your email address.

## License

You can fork this repo is completely free. Code released under the [MIT](LICENSE) license.
