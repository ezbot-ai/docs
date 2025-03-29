---
sidebar_position: 3
sidebar_label: Google Tag Manager
---

# Google Tag Manager

[Google Tag Manager (GTM)](https://tagmanager.google.com) is a free tag management system that allows users to quickly and easily add third-party code known as tags to their website or mobile app from a web-based user interface. These snippets of code are called tags. Once GTM has been added to a website, users can safely and easily deploy analytics and measurement tags from a web-based UI without having to modify and deploy code directly.

## Why Use Google Tag Manager for Deploying 3rd Party Code?

- **Ease of Use:** GTM provides a user-friendly interface that allows marketers, analysts, and developers to add and update tags without needing to write or deploy code. This reduces the dependency on development cycles and speeds up the deployment process.
- **Centralized Management:** GTM centralizes the management of all tags in one place. This makes it easier to manage and update tags across multiple websites or apps from a single interface.

- **Version Control:** GTM includes built-in version control, allowing users to create and manage different versions of their tag configurations. This makes it easy to roll back to a previous version if something goes wrong.

- **Testing and Debugging:** GTM provides built-in tools for testing and debugging tags before they are published. This helps ensure that tags are working correctly and do not negatively impact the website or app.

- **Flexibility:** GTM supports a wide range of tag types, including Google Analytics, AdWords, and custom HTML tags. This flexibility allows users to deploy virtually any type of third-party code.

- **Improved Performance:** By managing tags through GTM, users can reduce the number of requests made by their website, potentially improving load times and overall performance.

- **Security:** GTM allows users to control which tags are deployed and when, reducing the risk of unauthorized or malicious code being added to the site.

Overall, Google Tag Manager simplifies the process of deploying and managing third-party code, making it an essential tool for many organizations looking to streamline their tag management processes.

## GTM Installation

1. Open [Google Tag Manager](https://tagmanager.google.com) and go to the **Workspace** in which you'd like to install ezbot.

2. Click on **Tags** in the left-hand panel and select **New** in the top right of the card.

3. Click **Tag Configuration** and select **Custom HTML**.

4. Edit the script below to match your website. Replace the `99` with your project ID, and set up a reward function. An example is provided below.

5. Paste your edited version of the script below into the **Custom HTML Tag** field.

6. Click **Triggering** and select the **All Pages** trigger, to load ezbot on all pages or wherever necessary.

7. Click **Save** and, from the **Workspace View**, click **Submit** to publish your changes. _Optionally,_ you may preview the new tag on your website before publishing by clicking **Preview** before **Submit.**

## Install the Tracker & Track a Reward

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
