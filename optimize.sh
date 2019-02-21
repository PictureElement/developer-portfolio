#!/bin/bash

# Create docs directory for GitHub pages
rm -r docs
mkdir docs

# Remove unused CSS. Create docs/css/purestyles.css
grunt purifycss

# Replace all special comments with normal comments (/*! to /*)
perl -0pi -e 's/\/\*\!/\/\*/g' docs/css/purestyles.css

# Minify docs/purestyles.css. Create docs/css/purestyles.min.css
grunt cssmin

# Minify site.js. Create docs/js/site.min.js
grunt uglify

# Copy index.html to docs.
# Copy all the minified javascript files to docs/js.
grunt copy

# In docs/index.html, replace all stylesheet references with a single reference to purestyles.min.css.
perl -0pi -e 's/    <!-- Import main styles -->\n    <link rel="stylesheet" href="css\/main.css">\n    <!-- Import FontAwesome -->\n    <link rel="stylesheet" href="css\/all.css">/    <link rel="stylesheet" href="css\/purestyles.min.css">/' docs/index.html

# In docs/index.html, update the reference to the site's main javascript file
perl -0pi -e 's/    <script src="js\/site.js" defer><\/script>/    <script src="js\/site.min.js" defer><\/script>/' docs/index.html

# Extract & inline critical-path CSS from docs/index.html
grunt critical

# Minify docs/index.html
grunt htmlmin

# Copy other necessary assets
cp -a src/webfonts/. docs/webfonts/
cp -a src/media/. docs/media/
cp src/CNAME docs/
