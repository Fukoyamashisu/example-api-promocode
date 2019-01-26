import PromoCodeController from '../controller/PromoCode.controller'
import isAuthorize from '../middlewares/auth';
const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const promo = new PromoCodeController();

router.use('/create', isAuthorize)

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', promo.test);

router.post('/create',promo.create);

router.get('/:id',promo.findById);

router.put('/:id/update', promo.update);

router.delete('/:id/delete', promo.delete);

module.exports = router;
