import PromoCode from '../models/PromoCode.model';
import { isUserValidAge, isValidDate } from '../helpers/promoValidation';

class PromoCodeController {

  test(req, res, next) {
    res.send('Greetings from the Test controller!');
  };

  create(req, res, next){
    let promoCode = new PromoCode(
      {
        name: req.body.name,
        advantage: req.body.advantage
      }
    );

    promoCode.save(function (err) {
      if (err) {
        return next(err);
      }
      res.send('Product Created successfully')
    })
  }

  findById(req, res, next) {
    PromoCode.findById(req.params.id, (err, product) => {
      if (err) return next(err);
      res.send(product);
    })
  };

  update(req, res, next) {
    PromoCode.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, promo) => {
      if (err) return next(err);
      res.send('Product udpated.');
    });
  };

  delete(req, res, next) {
    PromoCode.findByIdAndRemove(req.params.id, (err) => {
      if (err) return next(err);
      res.send('Deleted successfully!');
    })
  };

  shouldGivePromoCode(req,res){
    const { weather, age, date ,name } = req.body;

    PromoCode.findOne({ name }, (err, res) => {

    })

  }
}

export default PromoCodeController;
