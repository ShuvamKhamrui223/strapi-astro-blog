/**
 * `articles` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
  authors: {
    populate: {
      profilePic: { fields: ["url"] }
    }
  }, categories: true, cover_image: { fields: ["url", "alternativeText"] }
}
export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate
    strapi.log.info('In articles middleware.');

    await next();
  };
};
