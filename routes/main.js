__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html');
});

router.get('/config', (req, res) => {
    const config = {
        status: true,
        result: {
            prefix : '/',
            namabot: 'Fanz-AI',
            namaowner: 'FanzOffc',
            instagram: '-',
            youtube : '-'
        }
    }
    res.json(config);
});

// Tambahkan router.post
router.post('/submit', (req, res) => {
    // Logika tambahan jika diperlukan
    res.sendFile(__path + '/views/index.html'); // Kirim file HTML yang sama
});

module.exports = router;
