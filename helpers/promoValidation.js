import moment from 'moment';
import axios from 'axios';

export const isRestrictionExist = (restrictions) => !!restrictions;

/**
 *
 * @param age
 * @param rules
 * @returns {boolean}
 */
export const isUserValidAge = (age, rules = []) => {
  if (!rules.length) {
    return true;
  }

  return !rules.map(rule => {
    if (rule.eq) {
      return age !== Number(rule.eq);
    }
    return age < rule.min && age > rule.max;
  }).includes(false);
};

/**
 *
 * @param date
 * @returns {boolean}
 */
export const isValidDate = (date = {}) => {
  if (!date.min || !date.max) {
    return false;
  }
  return moment().isBetween(date.min, date.max, 'year');
};

/**
 *
 * @param town
 * @param weather
 * @returns {*}
 */
const isWeatherIsClearToday = async (town, weather = {}) => {
  if (!weather.temp && !weather.state) {
    return false;
  }

  const res = axios.post(`api.openweathermap.org/data/2.5/weather?q=${town}&appid=${process.env.API_KEY_WEATHER}`);

  const { data } = res;
  // currently not implemented if call to api.openweather fail
  /*if(res.data.code !== 200){

  }*/

};

