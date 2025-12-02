let mix = require("laravel-mix");

mix.js("src/scripts/app.js", "build/scripts").setPublicPath("build");
mix.postCss("src/styles/main.css", "build/styles", [
  require("postcss-custom-properties")
]).options({
  processCssUrls: false
});

mix.copyDirectory('src/assets/images', 'build/images');
mix.copyDirectory('src/assets/favicon', 'build/favicon');