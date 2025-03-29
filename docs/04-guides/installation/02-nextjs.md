---
sidebar_position: 6
sidebar_label: Next.js
tags: [rewards]
---

# Next.js

Integrate ezbot’s JavaScript SDK into your Next.js project to leverage AI-driven experimentation directly in your code. Our SDK supports both in-code experimentation and the [Visual Editor.](../visual/00-capabilities.md)

## Install the Tracker

Install the SDK with the following command:

```bash
npm install @ezbot-ai/javascript-sdk
```

```js
"use strict";
"use client";
import {
  initEzbot,
  startActivityTracking,
  trackPageView,
  trackRewardEvent,
  makeVisualChanges,
} from "@ezbot-ai/javascript-sdk";
import { createContext, useContext, useState, useEffect, useRef } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const defaultState = {
  predictions: null,
};

const EzbotContext = createContext(defaultState);

export default function Home() {
  const ezbotInit = useRef(false);
  const [currentEzbot, setCurrentEzbot] = useState(null);

  // This is the recommended way for using ezbot predictions in a component
  useEffect(() => {
    async function ezbotInitFn() {
      if (ezbotInit.current) {
        return;
      }
      try {
        await initEzbot(0); // Replace 0 with your project ID
        startActivityTracking({
          minimumVisitLength: 5,
          heartbeatDelay: 10,
        });
        trackPageView();
        makeVisualChanges();
        ezbotInit.current = true;
        setCurrentEzbot({ predictions: window.ezbot.predictions });
        console.log("Ezbot initialized successfully");
      } catch (error) {
        console.error("Error initializing Ezbot:", error);
      }
    }
    ezbotInitFn();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <EzbotContext.Provider value={{ currentEzbot, setCurrentEzbot }}>
          <EzbotTestComponent></EzbotTestComponent>
        </EzbotContext.Provider>
      </main>
    </div>
  );
}

export function EzbotTestComponent() {
  const { currentEzbot, setCurrentEzbot } = useContext(EzbotContext);
  console.log(currentEzbot);
  if (currentEzbot !== null && currentEzbot.predictions !== null) {
    return <p>Predictions: {currentEzbot.predictions} existed.</p>;
  }

  return <p>No Predictions.</p>;
}
```

## Track a Reward

### Using a Page View Event

You can use a page view event as a reward signal in ezbot. You can learn more about using page view events as rewards [here](../../03-get-started/06-rewards.md#page-view-events).

### Using a Reward Event

To track user interactions like button clicks, use the trackRewardEvent function:

```js
"use client";
import { trackRewardEvent } from "@ezbot-ai/javascript-sdk";

export default function ComponentName() {
  function handleClick() {
    trackRewardEvent({
      key: "name_of_your_reward", // Replace with the name of your reward
      reward: 1,
      rewardUnits: "count",
    });
  }

  return <button onClick={handleClick}>Click me!</button>;
}
```

## Using Predictions in Your Components

After initializing, you can access predictions via window.ezbot.predictions or by storing them in a global state. Here’s an example prediction format:

### Example Predictions Response

```json
{
  "holdback": false,
  "predictions": [
    {
      "key": "hero_headline",
      "type": "basic",
      "version": "0.1",
      "value": "Automated Experimentation with AI",
      "config": null
    },
    {
      "key": "hero_cta",
      "type": "basic",
      "version": "0.1",
      "value": "Check It Out",
      "config": null
    }
  ]
}
```

<details>
<summary>**Configuration Options**</summary>
<div>

- **startActivityTracking**: Optional. This function tracks how long users are on each page of your website. Soon, you will be able to use activity data to score sessions in ezbot. It takes an object with two properties:
  - **minimumVisitLength**: The minimum time in seconds that a user must be on the page to begin measuring their activity.
  - **heartbeatDelay**: How often ezbot should check if the user is still on the page (in seconds).
- **trackPageView**: Recommended. Sends a `pageViewed` event to ezbot. Call this when a new page is loaded. For Single Page Applications (SPAs), call this after a routing change. You can now use these events as rewards in ezbot. Learn more about rewards in the [next section](/get-started/rewards).
- **trackRewardEvent**: Optional. Use this function for sending ezbot custom events that ezbot can use to improve the quality of our recommendations. It takes an object with three properties:
  - **key**: The string name of your reward.
  - **reward**: The reward value. Use 1 for the currently supported binary reward strategy.
  - **rewardUnits**: The type of reward units. We only support one type of rewardUnits today: `"count"`, but eventually, you'll be able to choose between `"count"`, `"dollars"`, and more.
- **makeVisualChanges:** Optional. This enables ezbot to apply visual changes from the visual editor to your site. Call this when a new page is loaded. For Single Page Applications (SPAs), call this after a routing change.
</div>
</details>

For additional options on sending rewards to ezbot, visit the [Rewards Section](/get-started/rewards).
