<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link rel="stylesheet" href="/elements/css/docs.css">
  </head>
  <body>
    <header class="pe-header pe-header--fixed">
      <section class="pe-header__section">
        <a href="//elements" class="pe-header__brand">Pearson Elements</a>
      </section>
      <section class="pe-header__section pe-header__section--right">
        <nav class="pe-header__nav">
          <ul class="pe-header__nav-items">
            <li class="pe-header__nav-item  ">
              <a href="/elements/getting-started">Getting Started</a>
            </li>
            <li class="pe-header__nav-item  ">
              <a href="/elements/elements">Elements</a>
            </li>
            <li class="pe-header__nav-item">
              <a href="https://github.com/pearson-higher-ed/elements/">
                <span class="d-github-mark--light d-header-github-link"></span>
                <span class="pe-sr-only">Elements on GitHub</span>
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
    module.exports = function (value) {
  return value.toLowerCase().replace(/\s+/g, '-');
};

    <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
  </body>
</html>