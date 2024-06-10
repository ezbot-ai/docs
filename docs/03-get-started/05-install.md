---
sidebar_position: 5
tags: [rewards]
---

# Web Tracker Installation

To get started with ezbot, you need to install the ezbot library on your website. The ezbot library is a small piece of code that you add to your website. It will automatically load the ezbot library and start tracking your users.

A complete installation requires two steps:

- Tracking code must be loaded on _every_ page of your website.
- You may optionally add a call to `trackRewardEvent` to optimize for a specific user action, or use [Page View Events as rewards in ezbot](/get-started/rewards#page-view-events).

## via JavaScript Snippet

The easiest way to install ezbot is to use our JavaScript Snippet. The JavaScript Snippet is a small piece of code that you add to your website. It will automatically load the ezbot library and start tracking your users.

If you're using a website builder like Wix, Squarespace, or WebFlow and you don't have access or the desire to modify your source code, the JavaScript Snippet is the best way to get started.

To use the JavaScript Snippet, simply copy/paste the following code into the `<head>` tag of your website's HTML and change the commented values to the values corresponding to your project.

If you need help installing the JavaScript Snippet, please contact us at [support@ezbot.ai](mailto:support@ezbot.ai).

<details>  
<summary>**JS Snippet Pros/Cons**</summary>  
<div> 
<p>**Pros**</p> 
<ul>
    <li>Easy to install</li>
    <li>Works with any website builder</li>
    <li>Doesn't require a developer</li>
    <li>Enables our Visual Editor</li>
</ul>
<p>**Cons**</p>   
<ul>
    <li>Only supports experimentation with our Visual Editor</li>
    <li>Limited number of visual changes supported at this time</li>
    <li>Can affect page load performance more than the JS SDK</li>
    <li>Can cause content to change after page load, though most users don't notice it</li>
</ul>
</div>  
</details>

### Basic JS Snippet Installation

Install the following in the `<head>` tag of your website

```html
<script src="https://cdn.ezbot.ai/web-snippets/ezbot.min.js"></script>
<script async>
  await ezbot.initEzbot(0); // Replace 0 with your project ID
  ezbot.startActivityTracking({
      minimumVisitLength: 2,
      heartbeatDelay: 2,
  });
  ezbot.trackPageView();
  ezbot.makeVisualChanges();
</script>
```

When the page is loaded, the ezbot library will be loaded and initialized.

:::important

Make sure the code above is loaded on **every** page of your website. This is important for tracking user activity and applying visual changes. You may want to put it in a `layout`, depending on your framework.

:::

Then, on any page where you want to track a reward event (a conversion), add the following code:

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

See the [next section](/get-started/rewards) for more information and an example reward.

#### Configuration Options

- **startActivityTracking**: Optional. This function tracks how long users are on each page of your website. Soon, you will be able to use activity data to score sessions in ezbot. It takes an object with two properties:
  - **minimumVisitLength**: The minimum time in seconds that a user must be on the page to begin measuring their activity.
  - **heartbeatDelay**: How often ezbot should check if the user is still on the page (in seconds).
- **trackPageView**: Recommended. Sends a `pageViewed` event to ezbot. Call this when a new page is loaded. For Single Page Applications (SPAs), call this after a routing change. You can now use these events as rewards in ezbot. Learn more about rewards in the [next section](/get-started/rewards).
- **trackRewardEvent**: Optional. Use this function for sending ezbot custom events that ezbot can use to improve the quality of our recommendations. It takes an object with three properties:
  - **key**: The string name of your reward.
  - **reward**: The reward value. Use 1 for the currently supported binary reward strategy.
  - **rewardUnits**: The type of reward units. We only support one type of rewardUnits today: `"count"`, but eventually, you'll be able to choose between `"count"`, `"dollars"`, and more.
- **makeVisualChanges:** Optional. This enables ezbot to apply visual changes from the visual editor to your site. Call this when a new page is loaded. For Single Page Applications (SPAs), call this after a routing change.

Learn about other options for sending reward signals to ezbot in the [next section](/get-started/rewards).

## via JavaScript SDK

If you're a developer and you want to integrate ezbot directly into your website or app, you can use our JavaScript SDK. The JavaScript SDK is a more powerful and performant way to integrate ezbot and gives you more control over how you use the platform.

<details>  
<summary>**JS SDK Pros/Cons**</summary>  
<div> 
<p>**Pros**</p> 
<ul>
    <li>Control any aspect of your frontend</li>
    <li>Most performant installation</li>
    <li>Also enables our Visual Editor</li>
</ul>
<p>**Cons**</p>   
<ul>
    <li>Requires a developer (or someone who can code) to add and use **variations** in your website or app's language.</li>
    <li>Does not support Node (server-side) yet.</li>
</ul>
</div>  
</details>

Install

```bash
npm install @ezbot-ai/javascript-sdk
```

Use the following code to initialize ezbot and start tracking your users. Placement varies by your framework. Generally, you want it loaded on every page.

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
  minimumVisitLength: 2,
  heartbeatDelay: 2,
});
trackPageView();
makeVisualChanges();
```

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

#### Configuration Options

- **startActivityTracking**: Optional. This function tracks how long users are on each page of your website. Soon, you will be able to use activity data to score sessions in ezbot. It takes an object with two properties:
  - **minimumVisitLength**: The minimum time in seconds that a user must be on the page to begin measuring their activity.
  - **heartbeatDelay**: How often ezbot should check if the user is still on the page (in seconds).
- **trackPageView**: Recommended. Sends a `pageViewed` event to ezbot. Call this when a new page is loaded. For Single Page Applications (SPAs), call this after a routing change. You can now use these events as rewards in ezbot. Learn more about rewards in the [next section](/get-started/rewards).
- **trackRewardEvent**: Optional. Use this function for sending ezbot custom events that ezbot can use to improve the quality of our recommendations. It takes an object with three properties:
  - **key**: The string name of your reward.
  - **reward**: The reward value. Use 1 for the currently supported binary reward strategy.
  - **rewardUnits**: The type of reward units. We only support one type of rewardUnits today: `"count"`, but eventually, you'll be able to choose between `"count"`, `"dollars"`, and more.
- **makeVisualChanges:** Optional. This enables ezbot to apply visual changes from the visual editor to your site. Call this when a new page is loaded. For Single Page Applications (SPAs), call this after a routing change.

Learn about other options for sending reward signals to ezbot in the [next section](/get-started/rewards).

## Other Installation Options

- [React / Next.js](/guides/installation/nextjs)
