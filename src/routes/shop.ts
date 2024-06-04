import express, { Request, Response, NextFunction } from 'express';
import { products } from './admin';

const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
});

export { router };
