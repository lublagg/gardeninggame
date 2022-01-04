const { db } = require("./server/db/index.js");
const app = require("./server/index.js");

// is server running?
const port = process.env.PORT || 5500; // this can be very useful if you deploy to Heroku!

db.sync() // sync our database
  .then(() => {
    console.log("db synced!");
    app.listen(port, () => console.log(`listening on port ${port}`));
  });
