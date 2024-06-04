import path from 'path';
import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import { router as adminRoutes } from './routes/admin';
import { router as shopRoutes } from './routes/shop';

const app = express();

app.set('view engine', 'ejs');
// The default is process.cwd() [main directory where you called this command] and /views
// But you can set any folder you want here to search for the views
app.set('views', 'src/views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render('404', { pageTitle: 'Page Not Found', path: '404' });
});

app.listen(3000);
