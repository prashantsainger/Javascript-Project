function head(title = "Demo Page", css = "style.css") {
    document.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="${css}">
    </head>
    <body>
    <div class="head">
        <a href="./">${title}</a>
    </div>`);
}

function nav() {
    document.write(`
    <div class="nav">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="page-1.html">Page 1</a></li>
            <li><a href="page-2.html">Page 2</a></li>
            <li><a href="page-3.html">Page 3</a></li>
            <li><a href="page-4.html">Page 4</a></li>
            <li><a href="page-5.html">Page 5</a></li>
        </ul>
    </div>
    <div class="mid">`);
}





function post(count) {
    start = 1;
    do {
        document.write(`
        <div class="post">
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, qui.</h1>
                
        </div>`);
        start++;
    }
    while (start <= count);
}










function aside() {
    document.write(`
    <h3>Aside Section</h3>`);
}

function footer() {
    document.write(`
    </div>
    <div class="footer">
    <h4>Copyright &copy; 2024 site name</h4>
    </div>
    </body>
    </html>`);
}