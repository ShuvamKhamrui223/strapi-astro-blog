/**
 * `landing-page` middleware
 */

import type { Core } from "@strapi/strapi";
const populate = {
  blocks: {
    on: {
      "blocks.hero": {
        populate: {
          heroImage: { fields: ["url", "alternativeText"] },
          heroCTAButton: true,
        },
      },
      "blocks.feature-card-list": {
        populate: {
          featureCardList: {
            populate: {
              featureCards: {
                populate: {
                  featureImage: {
                    fields: ["url", "alternativeText", "documentId"],
                  },
                },
              },
            },
          },
        },
      },
      "blocks.our-story": {
        populate: { storyBannerImage: { fields: ["url", "alternativeText"] } },
      },
      "blocks.founding-partner": {
        populate: {
          profilePicture: { fields: ["url", "alternativeText"] },
          partnerSocialLinks: { populate: { icon: { fields: ["url", "alternativeText"] } } },

        },
      },
      "blocks.volunteer-banner": {
        populate: { becomeVolunteerButton: true, makeDonationLink: true },
      },
    },
  },
};
export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate;
    strapi.log.info("In landing-page middleware.");

    await next();
  };
};
