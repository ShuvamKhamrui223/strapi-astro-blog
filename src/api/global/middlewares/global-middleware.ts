/**
 * `global-middleware` middleware
 */

import type { Core } from "@strapi/strapi";

const populate = {
  banner: {
    populate: {
      link: true,
    },
  },
  header: {
    populate: {
      logoLink: {
        populate: {
          logoImage: {
            fields: ["url", "alternativeText"]
          }
        }
      },
      link: true,
      CTAButton: true,
    },
  },
  footer: {
    populate: {
      contactInfo: {
        populate: {
          directionButton: true,
          text: true,
        },
      },
      quickLinks: true,
      footerLogo: {
        fields: ["alternativeText", "url"],
      },
    },
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    console.log("query ", ctx.query);
    ctx.query.populate = populate;
    strapi.log.info("In global-middleware middleware.");

    await next();
  };
};
