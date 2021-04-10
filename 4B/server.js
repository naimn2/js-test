const express = require('express');
const app = express();
const server = require('http').Server(app);
const dbCon = require('./db.config.js')
const bodyparser = require('body-parser')

app.use(bodyparser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs');
});

/**
 * API
 */

app.get('/api/writers', (req, res) => {
    dbCon.query('select * from writer', (err, rows, fields) => {
        if (err) console.log(err);
        else {
            res.send(rows);
        }
    });
});

app.get('/api/books', (req, res) => {
    dbCon.query('select * from book_tb', (err, rows, fields) => {
        if (err) console.log(err);
        else {
            res.send(rows);
        }
    });
});

app.get('/api/categories', (req, res) => {
    dbCon.query('select * from category_tb', (err, rows, fields) => {
        if (err) console.log(err);
        else {
            res.send(rows);
        }
    });
});

app.post('/api/writers/add', (req, res) => {
    const newData = req.body;
    dbCon.query(`insert into writer (name, alamat) values ("${newData.name}", "${newData.alamat}")`, (err, rows, fields) => {
        if (err) res.send({success: 'FAIL', message: err});
        else res.send({success: 'OK'});
    });
});

app.post('/api/categories/add', (req, res) => {
    const newData = req.body;
    dbCon.query(`insert into category_tb (name) values ("${newData.name}")`, (err, rows, fields) => {
        if (err) res.send({success: 'FAIL', message: err});
        else res.send({success: 'OK'});
    });
});

app.post('/api/books/add', (req, res) => {
    const newData = req.body;
    const query = `
        insert into book_tb (name, category_id, writer_id, publication_year, img) values (
            "${newData.name}", 
            ${newData.category_id}, 
            ${newData.writer_id}, 
            ${newData.publication_year}, 
            "${newData.img}")
    `
    dbCon.query(query, (err, rows, fields) => {
        if (err) res.send({success: 'FAIL', message: err});
        else res.send({success: 'OK'});
    });
});

app.put('/api/writers/update', (req, res) => {
    const newData = req.body;
    const query = `
        update writer set 
        name = "${newData.name}",
        alamat = "${newData.alamat}"
        where id = ${newData.id}
    `
    dbCon.query(query, (err, rows, fields) => {
        if (err) res.send({success: 'FAIL', message: err});
        else res.send({success: 'OK'});
    });
});

app.put('/api/categories/update', (req, res) => {
    const newData = req.body;
    const query = `
        update category_tb set 
        name = "${newData.name}"
        where id = ${newData.id}
    `
    dbCon.query(query, (err, rows, fields) => {
        if (err) res.send({success: 'FAIL', message: err});
        else res.send({success: 'OK'});
    });
});

app.put('/api/books/update', (req, res) => {
    const newData = req.body;
    const query = `
        update book_tb set 
        name = "${newData.name}",
        category_id = ${newData.category_id},
        writer_id = ${newData.writer_id},
        publication_year = ${newData.publication_year},
        img = "${newData.img}"
        where id = ${newData.id}
    `
    dbCon.query(query, (err, rows, fields) => {
        if (err) res.send({success: 'FAIL', message: err});
        else res.send({success: 'OK'});
    });
});

app.delete('/api/writers/delete', (req, res) => {
    const id = req.body.id;
    dbCon.query(`delete from writer where id = ${id}`, (err, rows, fields) => {
        if (err) res.send({success: 'FAIL', message: err});
        else res.send({success: 'OK'});
    });
});

app.delete('/api/categories/delete', (req, res) => {
    const id = req.body.id;
    dbCon.query(`delete from category_tb where id = ${id}`, (err, rows, fields) => {
        if (err) res.send({success: 'FAIL', message: err});
        else res.send({success: 'OK'});
    });
});

app.delete('/api/books/delete', (req, res) => {
    const id = req.body.id;
    dbCon.query(`delete from book_tb where id = ${id}`, (err, rows, fields) => {
        if (err) res.send({success: 'FAIL', message: err});
        else res.send({success: 'OK'});
    });
});

// app.post('/learners', (req, res) => {
//     let learner = req.body;
//     var sql = `SET @learner_id = ?;SET @learner_name = ?;SET @learner_email = ?;SET @course_Id = ?; 
//         CALL learnerAddOrEdit(@learner_id, @learner_name, @learner_email, @course_Id); `;
//     dbCon.query(sql, [learner.learner_id, learner.learner_name, learner.learner_email, learner.course_Id], (err, rows, fields) => {
//         if (!err)
//             rows.forEach(element => {
//                 if (element.constructor == Array)
//                     res.send('New Learner ID : ' + element[0].learner_id);
//             });
//         else
//             console.log(err);
//     });
// });


/**
 * Jalankan server
 */

server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});