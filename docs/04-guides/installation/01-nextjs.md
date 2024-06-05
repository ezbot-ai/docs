---
sidebar_position: 1
sidebar_label: Next.js
tags: [rewards]
---

# Next.js

We support Next.js with our JavaScript SDK. To get started, you'll need to install the SDK and initialize it in your Next.js project.

The Javascript SDK supports in-code experimentation and our Visual Editor. To get started, create a component that you'll later use in a top-level component, such as a layout.

## Installation

To install the SDK, run the following command in your Next.js project:

```bash
npm install @ezbot-ai/javascript-sdk
```

In a top-level component such as a layout, initialize ezbot. This will ensure that ezbot is initialized on every page. `"use client"` (client-side rendering) is necessary because a session id is created on the client and the tracking occurs client-side. Use the React Hook `useEffect` to initialize ezbot. If you're using `"use strict"` (Strict Mode), you'll need to use a ref to prevent multiple initializations in your development environment. Strict Mode does not affect production.

### Top-level Initialization

Make sure to initialize ezbot on every page for tracking purposes. You can do this in a top-level component such as a layout.

```js
"use strict"
"use client"
import { initEzbot, startActivityTracking, trackPageView, trackRewardEvent, makeVisualChanges } from "@ezbot-ai/javascript-sdk";
import { useEffect, useRef } from "react";
// ... other imports

export default function ComponentName({

  const ezbotInit = useRef(false);
  useEffect(() => {
    if (ezbotInit.current) {
      return;
    }
    initEzbot({{your_project_id}});
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
    ezbotInit.current = true;
  }, []);

  return (
    <div>
      {/* your component */}
    </div>
  )
})
```

### Reward Tracking From a Component

```js
"use client"
import { trackRewardEvent } from "@ezbot-ai/javascript-sdk";

export default function ComponentName({

  function handleClick() {
    trackRewardEvent({
        key: {{name_of_your_reward}},
        reward: 1,
        rewardUnits: "count",
    });
  }

  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  )
})
```

### Using Predictions

Change your user's experience based on the predictions made by ezbot.

Below is just an example. After initializing ezbot, you can use the `window.ezbot.predictions` object to access the predictions.

#### Example Predictions Response

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

#### In a Component

```js
"use client"
import { trackRewardEvent } from "@ezbot-ai/javascript-sdk";
import { useEffect, useState } from 'react';

export default function ComponentName({

  const ctaText = useState("your fallback value");

  useEffect(() => {
    const predictions = window.ezbot.predictions;
    if (predictions) {
      // Use the predictions to change the user experience
      predictions.find(prediction => prediction.key === 'ctaText') {
        ctaText.current = prediction.value;
      }
    }
  });

  return (
    <button >
      {{ctaText}}
    </button>
  )
})
```

### Configuration Options

- **startActivityTracking**: Optional. This function tracks how long users are on each page of your website. Soon, you will be able to use activity data to score sessions in ezbot. It takes an object with two properties:
  - **minimumVisitLength**: The minimum time in seconds that a user must be on the page to begin measuring their activity.
  - **heartbeatDelay**: How often ezbot should check if the user is still on the page (in seconds).
- **trackPageView**: Recommended. Sends a `pageViewed` event to ezbot. Call this when a new page is loaded. For Single Page Applications (SPAs), call this after a routing change. You can now use these events as rewards in ezbot. Learn more about rewards in the [next section](/get-started/rewards).
- **trackRewardEvent**: Optional. Use this function for sending ezbot custom events that ezbot can use to improve the quality of our recommendations. It takes an object with three properties:
  - **key**: The string name of your reward.
  - **reward**: The reward value. Use 1 for the currently supported binary reward strategy.
  - **rewardUnits**: The type of reward units. We only support one type of rewardUnits today: `"count"`, but eventually, you'll be able to choose between `"count"`, `"dollars"`, and more.
- **makeVisualChanges:** Optional. This enables ezbot to apply visual changes from the visual editor to your site. Call this when a new page is loaded. For Single Page Applications (SPAs), call this after a routing change.

Learn about other options for sending reward signals to ezbot in the [Rewards Section](/get-started/rewards).
