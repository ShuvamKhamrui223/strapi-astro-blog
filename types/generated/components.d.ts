import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksFeatureCardList extends Struct.ComponentSchema {
  collectionName: 'components_blocks_feature_card_lists';
  info: {
    description: '';
    displayName: 'feature card list';
  };
  attributes: {
    featureCardList: Schema.Attribute.Component<'layout.features', false>;
  };
}

export interface BlocksFoundingPartner extends Struct.ComponentSchema {
  collectionName: 'components_blocks_founding_partners';
  info: {
    displayName: 'founding partner';
  };
  attributes: {
    bio: Schema.Attribute.RichText;
    designation: Schema.Attribute.String;
    name: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'founding partner name'>;
    partnerSocialLinks: Schema.Attribute.Component<'shared.social-links', true>;
    profilePicture: Schema.Attribute.Media<'images'>;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    description: '';
    displayName: 'hero';
  };
  attributes: {
    heroCTAButton: Schema.Attribute.Component<'common.link', false>;
    heroDescription: Schema.Attribute.Text;
    heroImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    heroTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'this is hero title'>;
  };
}

export interface BlocksOurStory extends Struct.ComponentSchema {
  collectionName: 'components_blocks_our_stories';
  info: {
    displayName: 'our story';
  };
  attributes: {
    donationAmount: Schema.Attribute.BigInteger;
    foundingYear: Schema.Attribute.Integer;
    missionBio: Schema.Attribute.Text;
    missionHeading: Schema.Attribute.String;
    sorySubHeading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'story sub heading'>;
    storyBannerImage: Schema.Attribute.Media<'images'>;
    storyDescription: Schema.Attribute.Text;
    storyHeading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'story main heading'>;
  };
}

export interface BlocksVolunteerBanner extends Struct.ComponentSchema {
  collectionName: 'components_blocks_volunteer_banners';
  info: {
    displayName: 'volunteer banner';
  };
  attributes: {
    bannerTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'this is banner title'>;
    becomeVolunteerButton: Schema.Attribute.Component<'common.link', false>;
    makeDonationLink: Schema.Attribute.Component<'common.link', false>;
  };
}

export interface CommonLink extends Struct.ComponentSchema {
  collectionName: 'components_common_links';
  info: {
    description: '';
    displayName: 'link';
    icon: 'link';
  };
  attributes: {
    isButton: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isExternal: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    linkHref: Schema.Attribute.String;
    linkText: Schema.Attribute.String;
    style: Schema.Attribute.Enumeration<['filled', 'blank', 'outlined']>;
  };
}

export interface CommonLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_common_logo_links';
  info: {
    description: '';
    displayName: 'logo Link';
    icon: 'bulletList';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    logoHref: Schema.Attribute.String;
    logoImage: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.String & Schema.Attribute.DefaultTo<'subtitle'>;
  };
}

export interface LayoutBanner extends Struct.ComponentSchema {
  collectionName: 'components_layout_banners';
  info: {
    displayName: 'banner';
  };
  attributes: {
    bannerDescription: Schema.Attribute.Text;
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.Component<'common.link', false>;
  };
}

export interface LayoutFeatures extends Struct.ComponentSchema {
  collectionName: 'components_layout_features';
  info: {
    description: '';
    displayName: 'features';
  };
  attributes: {
    featureCards: Schema.Attribute.Component<'shared.feature-card', true>;
    featuresSectionHeading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'this is what we deliver'>;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    description: '';
    displayName: 'footer';
  };
  attributes: {
    contactInfo: Schema.Attribute.Component<'shared.contact-info', false>;
    copyrightMsg: Schema.Attribute.String;
    footerLogo: Schema.Attribute.Media<'images'>;
    quickLinks: Schema.Attribute.Component<'common.link', true>;
    socialLinkIcons: Schema.Attribute.Component<'shared.social-links', true>;
  };
}

export interface LayoutTopNav extends Struct.ComponentSchema {
  collectionName: 'components_layout_top_navs';
  info: {
    description: '';
    displayName: 'header';
  };
  attributes: {
    CTAButton: Schema.Attribute.Component<'common.link', false>;
    link: Schema.Attribute.Component<'common.link', true>;
    logoLink: Schema.Attribute.Component<'common.logo-link', false>;
  };
}

export interface SharedContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_infos';
  info: {
    description: '';
    displayName: 'contact info';
  };
  attributes: {
    directionButton: Schema.Attribute.Component<'common.link', false>;
    heading: Schema.Attribute.String;
    text: Schema.Attribute.Component<'shared.text-with-icon', true>;
  };
}

export interface SharedFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_feature_cards';
  info: {
    displayName: 'feature card';
  };
  attributes: {
    featureImage: Schema.Attribute.Media<'images'>;
    featureTitle: Schema.Attribute.String;
  };
}

export interface SharedSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'social links';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedTextWithIcon extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_with_icons';
  info: {
    description: '';
    displayName: 'text with icon';
  };
  attributes: {
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    text: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'text goes here'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.feature-card-list': BlocksFeatureCardList;
      'blocks.founding-partner': BlocksFoundingPartner;
      'blocks.hero': BlocksHero;
      'blocks.our-story': BlocksOurStory;
      'blocks.volunteer-banner': BlocksVolunteerBanner;
      'common.link': CommonLink;
      'common.logo-link': CommonLogoLink;
      'layout.banner': LayoutBanner;
      'layout.features': LayoutFeatures;
      'layout.footer': LayoutFooter;
      'layout.top-nav': LayoutTopNav;
      'shared.contact-info': SharedContactInfo;
      'shared.feature-card': SharedFeatureCard;
      'shared.social-links': SharedSocialLinks;
      'shared.text-with-icon': SharedTextWithIcon;
    }
  }
}
