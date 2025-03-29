---
sidebar_position: 2
sidebar_label: Basic SDK
tags: [rewards]
---

# Basic SDK Installation

If you're a developer and you want to integrate ezbot directly into your website or app, you can use our JavaScript SDK. The JavaScript SDK is a more powerful and performant way to integrate ezbot and gives you more control over how you use the platform.

## Install the Tracker

```bash
npm install @ezbot-ai/javascript-sdk
```

Use the following code to initialize ezbot and start tracking your users. Placement varies by your framework. Generally, you want it loaded in the `<head>` on every page.

```js
import {
  initEzbot,
  startActivityTracking,
  trackPageView,
  trackRewardEvent,
  makeVisualChanges,
} from "@ezbot-ai/javascript-sdk";
await initEzbot(0); // Replace 0 with your project ID
startActivityTracking({
  minimumVisitLength: 5,
  heartbeatDelay: 10,
});
trackPageView();
makeVisualChanges();
```

## Track a Reward

### Using a Page View Event

You can use a page view event as a reward signal in ezbot. You can learn more about using page view events as rewards [here](../../03-get-started/06-rewards.md#page-view-events).

### Using a Reward Event

Then, anywhere you want to track a reward event (a conversion), add the following code:

```js
if (condition) {
  // Replace with your condition
  trackRewardEvent({
    key: "name_of_your_reward", // Replace with the name of your reward
    reward: 1,
    rewardUnits: "count",
  });
}
```

<details>
<summary>**Configuration Options**</summary>

- **startActivityTracking**: Optional. This function tracks how long users are on each page of your website. Soon, you will be able to use activity data to score sessions in ezbot. It takes an object with two properties:
  - **minimumVisitLength**: The minimum time in seconds that a user must be on the page to begin measuring their activity.
  - **heartbeatDelay**: How often ezbot should check if the user is still on the page (in seconds).
- **trackPageView**: Recommended. Sends a `pageViewed` event to ezbot. Call this when a new page is loaded. For Single Page Applications (SPAs), call this after a routing change. You can now use these events as rewards in ezbot. Learn more about rewards in the [next section](/get-started/rewards).
- **trackRewardEvent**: Optional. Use this function for sending ezbot custom events that ezbot can use to improve the quality of our recommendations. It takes an object with three properties:
  - **key**: The string name of your reward.
  - **reward**: The reward value. Use 1 for the currently supported binary reward strategy.
  - **rewardUnits**: The type of reward units. We only support one type of rewardUnits today: `"count"`, but eventually, you'll be able to choose between `"count"`, `"dollars"`, and more.
- **makeVisualChanges:** Optional. This enables ezbot to apply visual changes from the visual editor to your site. Call this when a new page is loaded. For Single Page Applications (SPAs), call this after a routing change.
</details>
