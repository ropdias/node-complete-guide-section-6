import express, { Request, Response, NextFunction } from 'express';

const router = express.Router();

interface Product {
  title: string;
}

const products: Product[] = [];

// /admin/add-product => GET
router.get(
  '/add-product',
  (req: Request, res: Response, next: NextFunction) => {
    res.render('add-product', {
      pageTitle: 'Add product',
      path: '/admin/add-product',
      activeAddProduct: true,
      productCSS: true,
      formsCSS: true,
    });
    // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  }
);

// /admin/add-product => POST
router.post(
  '/add-product',
  (req: Request, res: Response, next: NextFunction) => {
    products.push({ title: req.body.title });
    res.redirect('/');
  }
);

export { router, products };
