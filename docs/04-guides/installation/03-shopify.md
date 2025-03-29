---
sidebar_position: 3
sidebar_label: Shopify
---

# Shopify

[Shopify](https://www.shopify.com) is a popular e-commerce platform that allows businesses of all sizes to create and run their online stores. It provides a user-friendly interface for store management, along with various customization options through themes and apps.

## Install ezbot via Google Tag Manager

If you already have Google Tag Manager installed on your Shopify store, we recommend that you install ezbot via GTM following our [Google Tag Manager installation guide](./02-google-tag-manager.md).

## Install ezbot via Shopify Theme

1. Log in to your [Shopify Admin](https://admin.shopify.com) dashboard.

2. Go to **Online Store** > **Themes** in the left sidebar.

3. Find your active theme and click the **Actions** button, then select **Edit code** from the dropdown menu.

4. In the theme editor, locate and click on the **theme.liquid** file under the **Layout** folder. This file controls the structure of all pages in your store.

5. Edit the script below to match your website. Replace the `99` with your project ID, and set up a reward function. An example is provided below.

6. Paste your edited version of the script just before the closing `</body>` tag in the theme.liquid file. This ensures ezbot loads on all pages of your store.

7. Click **Save** to apply your changes. Your ezbot implementation is now live on your Shopify store. Please reach out to [ezbot support](mailto:support@ezbot.ai) if you need help with the installation.

## Code Snippet

The following code snippet initializes ezbot with support for changes made via our [Visual Editor](../visual/00-capabilities.md). It also tracks an ezbot reward every time an add-to-cart button is clicked. Make sure to tailor this script to match your use case.

```html
<script>
  (function () {
    // initialize ezbot
    var ezbotScript = document.createElement("script");
    ezbotScript.src = "https://cdn.ezbot.ai/web-snippets/ezbot.min.js";
    ezbotScript.onload = function () {
      // replace `99` with your project ID
      ezbot.initEzbot(99).then(function () {
        ezbot.startActivityTracking({
          minimumVisitLength: 5,
          heartbeatDelay: 10,
        });
        ezbot.trackPageView();
        ezbot.makeVisualChanges();
      });
    };
    document.head.appendChild(ezbotScript);

    // Example reward tracking code - adjust to your use case
    // Whenever the "Add to Cart" button is clicked,
    // track a reward in ezbot
    var rewardElement = document.querySelector(
      'button[type="submit"][name="add to bag"]',
    );
    if (rewardElement) {
      rewardElement.addEventListener("click", function () {
        if (typeof ezbot.trackRewardEvent === "function") {
          ezbot.trackRewardEvent({
            key: "add_to_cart_button_clicked",
            reward: 1,
            rewardUnits: "count",
          });
        } else {
          console.warn("ezbot.trackRewardEvent is not defined");
        }
      });
    }
  })();
</script>
```

:::info

If your Shopify theme uses a different selector for the "Add to Cart" button, you'll need to modify the `document.querySelector()` line to match your theme's button selector. You can find this by using your browser's inspect element feature on your add to cart button.

:::
