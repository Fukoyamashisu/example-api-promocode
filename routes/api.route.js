import PromoCodeController from '../controller/PromoCode.controller'
const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const promo = new PromoCodeController();


router.get('/askForReduction', promo.shouldGivePromoCode);


module.exports = router;
