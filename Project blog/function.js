// -----------------only css method-----------------------

function head(title = "blog function", css = "style.css") {
    document.write(`<!DOCTYPE html>
    <html lang="en"
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        // <link rel="stylesheet" href="${css}">
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

// -----------------only table method-----------------------


// function head(title = "Blogfunction", css = "style.css") {
//     document.write(`<!DOCTYPE html>
//     <html lang="en">

//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>${title}</title>







//     </head>

//     <body>
//         <table border="0" width="100%" height="600px">
//             <tr>
//                 <td colspan="5" align="center" height="80px" bgcolor="skyblue">
//                 <h1><a href="#">${title}</a></h1>

//                 </td>`);
// }


// function nav() {
//     document.write(`  <tr align="center" height="30px">

// <td width="20%" bgcolor="lightyellow">
// <a href="Index1.html">
// home</a></td>
//     <td width="20%" bgcolor="lightblue">
// <a href="pageone.html">
// about us</a></td>
//     <td width="20%" bgcolor="whitesmoking">
// <a href="pagesecond.html">
// administration</a></td>
//     <td width="20%" bgcolor="lightyellow">
// <a href="pagethird.html">
// academic</a></td>
//     <td width="20%" bgcolor="lightblue">
// <a href="pagefourth.html">
// contact us</a></td>
// </tr>

// <tr valign="top" height="200px">
// `)
// ;
// }



// function post(count) {
//     read=1;
//     do{

//     document.write(`
//     <img src="download.jpg" width="100%" height="350px">
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere neque culpa debitis nam a veniam
//         dolore delectus
//         mollitia necessitatibus, dolores maxime iusto earum, quia fugiat quibusdam libero pariatur eos
//         perspiciatis quos
//         minima deserunt. Repellendus provident odio ipsam similique, illo itaque mollitia, nobis harum quia
//         necessitatibus
//         sit reprehenderit quo perspiciatis rem quis? Voluptate earum tempore dolore hic, fuga repellat ea?
//         Adipisci distinctio, a facilis laudantium consequatur ipsam error cupiditate excepturi possimus. Nam
//         pariatur amet maxime minima voluptatum, eaque doloribus temporibus, saepe, ad quas sequi debitis
//         autem earum soluta corrupti ipsa similique adipisci? Similique in fuga commodi error itaque quae
//         quas. Ullam!</p>
//     `
//     );
//     read++;

// }
// while(read<=count)
// }

// function aside(count) {
//     read=1;
//     do{
//     document.write(`


//     <marquee behavior="right" height="50px">welcome
//     </marquee>
//     <video src="sample.mp4" width="80%" align="center" controls loop></video>

//     <form valign="top" align="center" method="post">
//         <br><br>
//         <img src="pic1.jpg" alt="user" width="60px" height="110px">
//         <p><input type="text" name="Email" placeholder="Enter Email Id"></p>
//         <p><input type="text" name="pass" placeholder="Enter Password"></p>
//         <p><input type="submit" name="uLogin" value="Login Now"></p>
//         <a href="register.html">Create New Account</a>
//     </form>

// `
//     );
// read++;
// }
// while(read<=count)
// }

// function footer() {
//     document.write(`
//     </tr>

//     <table width="100%" border="0" height="80px" bgcolor="lightblue">

//         <tr align="center">
//             <td>
//                 <h1>Academics</h1>
//             </td>
//             <td>
//                 <h1>Policies</h1>
//             </td>
//             <td>
//                 <h1>cells</h1>
//             </td>
//             <td>
//                 <h1>Quick links</h1>
//             </td>
//             <td>
//                 <h1>Google map</h1>
//             </td>
//         </tr>
//         <tr align="center">
//             <td><a href="text.html">academic calender</a></td>
//             <td><a href="text.html">international coo[peration</a></td>
//             <td><a href="text.html">placement cell</a></td>
//             <td><a href="text.html">micosoft team</a></td>
//             <td><a href="map.html">location</a></td>
//         </tr>
//         <tr align="center">
//             <td><a href="text.html">department</a></td>
//             <td><a href="text.html">it policy</a></td>
//             <td><a href="text.html">industry consultancy cell</a></td>
//             <td><a href="text.html">download</a></td>
//         </tr>

//         <tr align="center">
//             <td> <a href="text.html">courses</a></td>
//             <td> <a href="text.html">environment policy</a></td>
//             <td> <a href="text.html">placement cells</a></td>
//             <td> <a href="text.html">department Login</a></td>
//         </tr>
//         <tr align="center">
//             <td> <a href="text.html">list of holiday</a></td>
//             <td> <a href="text.html">infrastructure</a></td>
//             <td> <a href="text.html">intellectual property</a></td>
//             <td> <a href="text.html">student Login</a></td>
//         </tr>












//         <tr>
//             <td colspan="5" align="center" bgcolor="skyblue" height="80px" width="100%">
//                 <h4>copyright &copy; ducatindia</h4>
//             </td>


//         </tr>
//     </table>  
//     </body>
//     </html>`
//     );
// }


// // -----------------only table method------end----------