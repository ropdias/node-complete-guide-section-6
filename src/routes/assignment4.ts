import express, { Request, Response, NextFunction } from 'express';

const router = express.Router();

interface User {
  user: string;
}

const users: User[] = [];

// / => GET
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.render('assignment4', {
    pageTitle: 'Enter your name',
    path: '/',
  });
});

// /add-user => POST
router.post('/add-user', (req: Request, res: Response, next: NextFunction) => {
  users.push({ user: req.body.user });
  res.redirect('/users');
});

// /users => GET
router.get('/users', (req: Request, res: Response, next: NextFunction) => {
  res.render('assignment4-users', {
    users: users,
    pageTitle: 'Users',
    path: '/users',
  });
});

export { router };
