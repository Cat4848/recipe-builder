export default function rootLayout(css: string, js: string) {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Zero One Recipe Builder" />
        <link rel="stylesheet" href="${css}">
        <link rel="stylesheet" href="/css/global.css">
        <title>Zero One Recipe Builder</title>
      </head>
      <body>
        <div id="root"></div>
        <script type="module" src="${js}"></script>
      </body>
    </html>
  `;
}
