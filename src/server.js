  const express = require('express');
  const app = express();
  const db = require('./app/config/db.config');
  const routes = require('./app/routes/tutorial.routes');

  app.use(express.json());
  app.use('/api', routes);

  app.listen(4099, () => {
      console.log('Server running on port 4099');
  });
