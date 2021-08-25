const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Create a record.
   *
   * @return {Object}
   */

  async find(ctx) {
    let entity = await strapi.services["active-languages"].find(ctx.request.body);
    return sanitizeEntity(entity, { model: strapi.models["active-languages"] });
  },
};