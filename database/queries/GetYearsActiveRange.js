const Artist = require("../models/artist");

/**
 * Finds the lowest and highest yearsActive of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max yearsActive, like { min: 0, max: 14 }.
 */
module.exports = () => {
  //return Promise.resolve({ min: 10, max: 14 }).then((res) => res);

  const minQuery = Artist.findOne({})
    .sort({ yearsActive: 1 })
    .select("yearsActive")
    .then((user) => user.yearsActive);

  const maxQuery = Artist.findOne({})
    .sort({ yearsActive: -1 })
    .select("yearsActive")
    .then((user) => user.yearsActive);

  return Promise.all([minQuery, maxQuery]).then((result) => {
    return { min: result[0], max: result[1] };
  });
};
