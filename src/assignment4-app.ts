import path from 'path';

import express from 'express';
import bodyParser from 'body-parser';
import { router as assignmentRoutes } from './routes/assignment4';

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(assignmentRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found', path: '404' });
});

app.listen(3000);
