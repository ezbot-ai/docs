---
sidebar_position: 1
sidebar_label: Basic Snippet
tags: [rewards]
---

# Basic Snippet Installation

A complete installation requires two steps:

1. Tracking code must be loaded on _every_ page of your website.
2. You must call _either_ call `trackRewardEvent` to optimize for a specific user action, or use [Page View Events as rewards in ezbot](../../03-get-started/06-rewards.md#page-view-events).

## Install the Tracker

Install the following in the `<head>` tag of your website:

```html
<script src="https://cdn.ezbot.ai/web-snippets/ezbot.min.js"></script>
<script async>
  await ezbot.initEzbot(0); // Replace 0 with your project ID
  ezbot.startActivityTracking({
      minimumVisitLength: 5,
      heartbeatDelay: 10,
  });
  ezbot.trackPageView();
  ezbot.makeVisualChanges();
</script>
```

When the page is loaded, the ezbot library will be loaded and initialized.

:::important

Make sure the code above is loaded on **every** page of your website. This is important for tracking user activity and applying visual changes. You may want to put it in a `layout`, depending on your framework.

:::

## Track a Reward

### Using a Page View Event

You can use a page view event as a reward signal in ezbot. You can learn more about using page view events as rewards [here](../../03-get-started/06-rewards.md#page-view-events).

### Using a Reward Event

Then, on any page where you want to track a reward event (a conversion), place the following as close to the end of your `<body>` tag as possible:

```html
<script async>
  if (condition) {
    // Replace with your condition
    ezbot.trackRewardEvent({
      key: "some_reward_key", // Replace with the name of your reward
      reward: 1,
      rewardUnits: "count",
    });
  }
</script>
```

<details>
<summary>**Configuration Options**</summary>

- **startActivityTracking**: Optional. This function tracks how long users are on each page of your website. Soon, you will be able to use activity data to score sessions in ezbot. It takes an object with two properties:
  - **minimumVisitLength**: The minimum time in seconds that a user must be on the page to begin measuring their activity page scroll depth activity.
  - **heartbeatDelay**: How often ezbot should check if the user is still on the page (in seconds) after the minimum visit length.
- **trackPageView**: Recommended. Sends a `pageViewed` event to ezbot. Call this when a new page is loaded. For Single Page Applications (SPAs), call this after a routing change. You can now use these events as rewards in ezbot. Learn more about rewards in the [next section](/get-started/rewards).
- **trackRewardEvent**: Optional. Use this function for sending ezbot custom events that ezbot can use to improve the quality of our recommendations. It takes an object with three properties:
  - **key**: The string name of your reward.
  - **reward**: The reward value. Use 1 for the currently supported binary reward strategy.
  - **rewardUnits**: The type of reward units. We only support one type of rewardUnits today: `"count"`, but eventually, you'll be able to choose between `"count"`, `"dollars"`, and more.
- **makeVisualChanges:** Optional. This enables ezbot to apply visual changes from the visual editor to your site. Call this when a new page is loaded. For Single Page Applications (SPAs), call this after a routing change.

Learn about other options for sending reward signals to ezbot in the [next section](/get-started/rewards).

</details>
