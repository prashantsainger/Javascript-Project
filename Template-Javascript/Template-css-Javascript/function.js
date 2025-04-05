function head(title = "blog function", css = "style.css") {
    document.write(`<!DOCTYPE html>
    <html lang="en"
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <link rel="stylesheet" href="${css}">
    </head>
    <body>
        <div class="head">${title}</div>`);
}

function nav() {
    document.write(` <div class="nav">
    <ul>
        <li><a href="index.html">home</a></li>
        <li><a href="page-1.html">administration</a></li>
        <li><a href="page-2.html">admission</a></li>
        <li><a href="page-3.html">academic</a></li>
        <li><a href="page-4.html">service</a></li>
        <li><a href="page-5.html">about</a></li>
    </ul>
</div>
<div class="mid">`);

}


function post(count) {
    read = 1;
    do {
        document.write(`
                <img src="pic1.jpg">
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, sapiente.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolores ducimus rem ipsa nisi sunt, veniam
            nulla placeat illum fugit dolore autem cum commodi saepe quibusdam officia id atque quia.
            Quo ut magni sunt veritatis labore dolorum, voluptatem est culpa natus provident illum fugit
            necessitatibus pariatur similique praesentium libero sapiente facere perferendis quos temporibus minus
            qui. Ab et illo ea.Porro accusantium tenetur quia reiciendis quam similique facilis cumque earum dolorum. Optio u
              </p>`);
        read++;
    }
    while (read <= count)
}



function aside(count)

{
    read = 1;
    do {
        document.write(`
            <marquee>
            we are one school for campus ☺ &nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;
            we are one school for campus ☺ &nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;
            we are one school for campus ☺ &nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp
            </marquee>
            <video src="sample.mp4"  controls poster="download.jpg" ></video>
              <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rem assumenda hic odio aperiam obcaecati
            facilis? At alias atque ad ab, omnis unde animi, id nisi distinctio nemo soluta quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rem assumenda hic odio aperiam obcaecati
            facilis? At alias atque ad ab, omnis unde animi, id nisi distinctio nemo soluta quis.</h5>`

        );
        read++;
    }
    while (read <= count)
}






function footer() {
    document.write(`
        </div>
        <div class="footer">
            <h4>copyrite &copy; 2024</h4>
        </div>
         </body>
         </html>`);

}

// -----------------only css method- end----------------------