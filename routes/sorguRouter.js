var express = require('express');
var router = express.Router();
const mysql = require('mysql');

// Veritabanına bağlantıyı bir kez yap
const connection = mysql.createConnection({
    host: '91.232.103.65',
    user: 'root',
    password: '44Eren44',
    database: '101m'
});

connection.connect((err) => {
    if (err) {
        console.error('Veritabanına bağlanırken hata oluştu:', err.stack);
        return;
    }
    console.log('Veritabanına başarıyla bağlanıldı');
});

// AND NUFUSIL = ?

router.post("/", (req, res) => {
    const { ad, soyad, tc, nufusil } = req.body;
    const sqlQuery = `SELECT * FROM 101m WHERE ADI = ? AND SOYADI = ? AND NUFUSIL = ?`;
    connection.query(sqlQuery, [ad, soyad, nufusil], (error, results) => {
        if (error) throw error;
  //   console.log(results[0].TC)
      // setTimeout(() => {
      //     d = results;
      // }, 5000);
      // d = results;
      setTimeout(() => {
        res.render("result", { data: results, title: "ALLAH SORGU"})
        console.log(results)
      }, 3000);
  });
});

module.exports = router;