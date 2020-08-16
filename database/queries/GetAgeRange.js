const Artist = require("../models/artist");

/**
 * Finds the lowest and highest age of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max ages, like { min: 16, max: 45 }.
 */
module.exports = () => {
  const minQuery = Artist.findOne({})
    .sort({ age: 1 })
    .select("age")
    .then((user) => user.age);
  const maxQuery = Artist.findOne({})
    .sort({ age: -1 })
    .select("age")
    .then((user) => user.age);

  return Promise.all([minQuery, maxQuery]).then((result) => {
    return { min: result[0], max: result[1] };
  });
};
