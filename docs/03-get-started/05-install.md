---
sidebar_position: 5
---

# Installation

## via JavaScript Snippet

The easiest way to install ezbot is to use our JavaScript Snippet. The JavaScript Snippet is a small piece of code that you add to your website. It will automatically load the ezbot library and start tracking your users.

If you're using a website builder like Wix, Squarespace, or WebFlow and you don't have access or the desire to modify your source code, the JavaScript Snippet is the best way to get started.

To use the JavaScript Snippet, simply copy/paste the following code into the `<head>` tag of your website's HTML and change the values in `{{mustache syntax}}` to the values corresponding to your project.

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

### Basic Script Tag Installation

Install the following in the `<head>` tag of your website

```html
<script src="https://cdn.ezbot.ai/web-snippets/ezbot.min.js"></script>
```

Then:

```html
<script>
  await ezbot.initEzbot({{your_project_id}});
  ezbot.startActivityTracking({
      minimumVisitLength: 2,
      heartbeatDelay: 2,
  });
  ezbot.trackPageView();
  ezbot.trackRewardEvent({
      key: {{name_of_your_reward}},
      reward: 1,
      rewardUnits: "count",
  });
  ezbot.makeVisualChanges();
</script>
```

When your DOM is loaded, the ezbot library will be loaded and initialized.

#### Configuration Options

- **startActivityTracking**: Optional. This function tracks how long users are on your site. It takes an object with two properties:
  - **minimumVisitLength**: The minimum time in seconds that must have elapsed before the first heartbeat.
  - **heartbeatDelay**: How often ezbot should check if the user is still on the page (in seconds).
- **trackPageView**: Recommended. Sends a `pageViewed` event to ezbot. Call this when a new page is loaded. For SPAs, call this after a routing change. Soon, you'll be able to use these events to track how users move through your site and as rewards.
- **trackRewardEvent**: Required. Sends a reward event to ezbot to tune the model and improve the quality of the recommendations. It takes an object with three properties:
  - **key**: The string name of your reward.
  - **reward**: The reward value. Use 1 for the currently supported binary reward strategy.
  - **rewardUnits**: The type of reward units. We only support one type of rewardUnits today: `"count"`, but eventually, you'll be able to choose between `"count"`, `"dollars"`, and more.
- **makeVisualChanges:** Optional. This enables ezbot to apply visual changes from the visual editor to your site. Call this when a new page is loaded. For SPAs, call this after a routing change.

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
    <li>Requires a developer to add **variations**</li>
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
import { initEzbot } from "@ezbot-ai/javascript-sdk";
await ezbot.initEzbot({{your_project_id}});
startActivityTracking({
  minimumVisitLength: 2,
  heartbeatDelay: 2,
});
trackPageView();
trackRewardEvent({
    key: {{name_of_your_reward}},
    reward: 1,
    rewardUnits: "count",
});
makeVisualChanges();
```

#### Configuration Options

- **startActivityTracking**: Optional. This function tracks how long users are on your site. It takes an object with two properties:
  - **minimumVisitLength**: The minimum time in seconds that must have elapsed before the first heartbeat.
  - **heartbeatDelay**: How often ezbot should check if the user is still on the page (in seconds).
- **trackPageView**: Recommended. Sends a `pageViewed` event to ezbot. Call this when a new page is loaded. For SPAs, call this after a routing change. Soon, you'll be able to use these events to track how users move through your site and as rewards.
- **trackRewardEvent**: Required. Sends a reward event to ezbot to tune the model and improve the quality of the recommendations. It takes an object with three properties:
  - **key**: The string name of your reward.
  - **reward**: The reward value. Use 1 for the currently supported binary reward strategy.
  - **rewardUnits**: The type of reward units. We only support one type of rewardUnits today: `"count"`, but eventually, you'll be able to choose between `"count"`, `"dollars"`, and more.
- **makeVisualChanges:** Optional. This enables ezbot to apply visual changes from the visual editor to your site. Call this when a new page is loaded. For SPAs, call this after a routing change.

## Other Installation Options

- [React / Next.js](../guides/installation/nextjs)