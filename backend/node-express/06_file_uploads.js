/**
 * --form (-F) option for form data.
 * @ operator with a filename tells curl to send that file.
 *
 * curl -i -H "Expect: " -F 'album_cover=@oranges.jpg' \
 * -F albumid=italy2012 http://localhost:8080/uptest
 */


const express = require('express'),
    morgan = require('morgan'),
    multer = require('multer');

const upload = multer({ dest: "ul/" });

const app = express().use(morgan('dev'));

app.post('/uptest', upload.single("album_cover"), (req, res) => {
    console.log("BODY: " + JSON.stringify(req.body, 0, 2));
    console.log("FILE: " + JSON.stringify(req.file, 0, 2));

    if (!req.file || req.file.fieldname != 'album_cover') {
        res.end("Hunh. Did you send a file?\n\n");
    } else {
        res.end("You have asked to set the album cover for "
                    + req.body.albumid + " to '"
                    + req.file.originalname + "'\n\n");
    }
});

app.listen(8080);
