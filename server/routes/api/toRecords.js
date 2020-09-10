const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const router = express.Router();

/******************************************* */
/******************************************* */
// Start connection to database
/******************************************* */
/******************************************* */
let db = new sqlite3.Database('devices.db', (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the devices database.');
    }
});

/******************************************* */
/******************************************* */
// GET request
/******************************************* */
/******************************************* */
router.get('/',async (req, res) => {
    // Get all devices from database
    db.all(`SELECT * FROM alldevices WHERE inout = 'Out'`, (err, row) => {
        if (err){
            console.error(err.message);
        }
        console.log(row);
        res.send(row);
    });
});
/******************************************* */
/******************************************* */
// POST request
/******************************************* */
/******************************************* */
router.post('/', (req, res) => {
    //
    //const data = await postDevice();
    db.run("INSERT INTO records SELECT * FROM alldevices,users WHERE $imei = alldevices.imei AND $attuid = users.attuid",
    {
        $imei: req.body.imei,
        $attuid: req.body.attuid
    },
    (err) => {
        if (err) {
            res.send({message: 'Error posting'});
        } else {
            res.status(201).send({message: 'Successfully checked out a device'});
        }
    }
    );
    
});
/******************************************* */
/******************************************* */
// DELETE request
/******************************************* */
/******************************************* */








module.exports = router;