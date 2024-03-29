const router = require('express').Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    const dbQuery = 'SELECT * FROM "todo" ORDER BY id;';
  
    pool
      .query(dbQuery)
      .then((result) => {
        console.log('Return ToDos', result);
        res.send(result.rows);
      })
      .catch((err) => {
        console.log('ERROR:', err);
  
        res.sendStatus(500);
      });
  });

// POST
router.post('/', (req, res) => {
    const newData = req.body;
    console.log(`New ToDo: ${newData}`);
    const queryText = `INSERT INTO "todo" ("item", "due", "notes")
    VALUES
      ($1, $2, $3);`;
    const queryArgs = [
      newData.item,
      newData.due,
      newData.notes,
    ];
  
    pool
      .query(queryText, queryArgs)
      .then((result) => {
        res.sendStatus(201);
      })
      .catch((err) => {
        console.log('ERROR:', err);
  
        res.sendStatus(500);
      });
  });

// PUT
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const todoData = req.body;
    
    console.log(`Update To Do: ${todoData}`);
    
    const queryText = `UPDATE "todo" SET "completed" = $1 WHERE "id" = $2;`;
    
    pool
    .query(queryText, [todoData.completed, id])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('ERROR:', err);
      res.sendStatus(500);
    });
    });

// DELETE
router.delete('/:id', (req, res) => {
    const id = req.params.id;
  
    const queryText = 'DELETE FROM "todo" WHERE "id" = $1;';
  
    pool
  .query(queryText, [id])
  .then((result) => {
    res.sendStatus(200);
  })
  .catch((err) => {
    console.log('ERROR:', err);
    res.sendStatus(500);
  })
  });

module.exports = router;
