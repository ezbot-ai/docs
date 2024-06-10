import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "ezbot.ai Documentation",
  tagline: "Put your optimization on autopilot",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.ezbot.ai",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  deploymentBranch: "gh-pages",
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ezbot-ai", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
          onInlineTags: "throw",
          editUrl: "https://github.com/ezbot-ai/docs/tree/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "G-89DRR8H8DD",
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        docsRouteBasePath: "/",
        indexBlog: false, // Turn when when we have a blog
      },
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: "img/social-card.jpg",
    navbar: {
      // title: "ezbot.ai",
      logo: {
        alt: "ezbot.ai logo",
        src: "img/logo.svg",
        srcDark: "img/logo-dark.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        // { to: "/blog", label: "Blog", position: "left" },
        // {
        //   href: "https://ezbot.ai/pricing.html",
        //   position: "right",
        //   html: "<span class='navbar__item navbar__link badge badge--info'>Pricing</span>",
        //   class: "navbar-button",
        // },
        // {
        //   href: "https://app.ezbot.ai/sign-up",
        //   position: "right",
        //   html: "<span class='navbar__item navbar__link badge badge--primary'>Free Trial</span>",
        //   class: "navbar-button",
        // },
        {
          href: "https://ezbot.ai/pricing.html",
          position: "right",
          label: "Pricing",
        },
        {
          href: "https://app.ezbot.ai/sign-up",
          position: "right",
          label: "Free Trial",
        },
        // {
        //   href: "https://github.com/ezbot-ai/docs",
        //   label: "GitHub",
        //   position: "right",
        // },
        // {
        //   type: "docsVersionDropdown", // Turn me on if we have multiple versions
        // },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Legal",
          items: [
            {
              html: "<a href='#' onclick='window.displayPreferenceModal();return false;' id='termly-consent-preferences' class='footer__link-item'>Consent Preferences</a>",
            },
            {
              label: "Privacy Policy",
              href: "https://app.termly.io/document/privacy-policy/399bfe57-580d-4feb-bf4f-91c34aca91d0",
            },
            {
              label: "Terms and Conditions",
              href: "https://app.termly.io/document/terms-of-service/fe66e8d4-698a-449d-9147-b1a324e29e1f",
            },
            {
              label: "Cookie Policy",
              href: "https://app.termly.io/document/cookie-policy/0a7414ae-9889-4b74-a15f-d2c83f7e1710",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} EZBOT AI COMPANY. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  clientModules: [require.resolve("./src/js/_termly.js")],
};

export default config;
