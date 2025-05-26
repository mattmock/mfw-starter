export default function Layout(content) {
  return \`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>mfw App</title>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <nav>
        <a href="/">Home</a>
      </nav>
      <main>\${content}</main>
    </body>
    </html>
  \`;
}
