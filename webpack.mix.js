let mix = require("laravel-mix");

mix.js("src/scripts/app.js", "build/scripts").setPublicPath("build");
mix.postCss("src/styles/main.css", "build/styles", [
  require("postcss-for"),
  require("postcss-custom-properties")
]).options({
  processCssUrls: false
});

mix.copyDirectory('src/images', 'build/images');