<div align="center">
  <img alt="Logo" src="https://raw.githubusercontent.com/PictureElement/developer-portfolio/master/images/logo@2x.png">
</div>
<h1 align="center">
  developer-portfolio
</h1>
<p align="center">
  A single-page personal portfolio for <a href="https://www.msof.me/" target="_blank">www.msof.me</a> based on Google Material Design guidelines. To view a live demo, <a href="https://pictureelement.github.io/developer-portfolio/" target="_blank">click here</a>
</p>

![demo](https://raw.githubusercontent.com/PictureElement/developer-portfolio/master/images/demo.png)

## Setup

Simply fork the repo and run `npm install` in order to get all the Gulp dev dependencies. Next, run `gulp watch` to build the project and start live reloading on localhost:3000. At this point, the page is ready to go and you can begin to add your own information and make any needed changes.

## Features

* Strictly based on Google Material Design guidelines
* Gulp-ready (compiles Sass file, minifies CSS and JS, live reloading with Browsersync)
* Responsive web design
* Styling can be done through simple variable edits
* Sunburst chart for displaying skills
* Scroll animations
* GDPR-ready

## Customization

### Styling

In general, most styles on the page are based off the definitions of variables in the VARIABLES section in the `sass/developerportfolio.scss` file.

```SCSS
// Define font families
$font-stack-logotype: 'Abril Fatface', cursive;
$font-stack-primary: 'Raleway', sans-serif;
$font-stack-secondary: 'Montserrat', sans-serif;

// Spacing
$section-spacing: 75px;

// Primary color and variants
$primary: #2196f3;
$primary-dark: #0069c0;

// Secondary color
$secondary: #9c27b0;

// "On" colors for primary and secondary colors and variants
$on-primary: #000;
$on-primary-dark: #fff;
$on-secondary: #fff;

// Background color
$background: #f5f5f5;

// Surface color
$surface: #fff;

// "On" colors for surface 
$on-surface-primary: rgba(0,0,0,0.87);
$on-surface-secondary: rgba(0,0,0,0.54);
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

## License

You can fork this repo is completely free. Code released under the [MIT](LICENSE) license.
