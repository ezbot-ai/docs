---
sidebar_position: 7
sidebar_label: Cross-Domain Tracking
---

# Cross-Domain Tracking

Cross-domain tracking is a feature that allows you to track user activity and send reward events across multiple domains. This is useful for tracking user activity on multiple domains, such as a marketing website and a checkout experience on a different domain.

## Web Tracker Implementation

Initialize ezbot on both domains with the same projectId and enable cross-domain tracking. More information on the basic setup process can be found
[here](../../03-get-started/05-install.md).

### Via ezbot snippet

```html
<script>
  (function () {
    // initialize ezbot
    var ezbotScript = document.createElement("script");
    ezbotScript.src = "https://cdn.ezbot.ai/web-snippets/ezbot.min.js";
    ezbotScript.onload = function () {
      // replace `99` with your project ID
      // set a first-party userId if known, else set userId to null
      ezbot
        .initEzbot(99, userId, {
          crossDomain: {
            enabled: true,
            domains: ["domain1.com", "domain2.com"],
          },
        })
        .then(function () {
          ezbot.startActivityTracking({
            minimumVisitLength: 5,
            heartbeatDelay: 10,
          });
          ezbot.trackPageView();
          ezbot.makeVisualChanges();
        });
    };
    document.head.appendChild(ezbotScript);
  })();
</script>
```

### Via JavaScript SDK

```javascript
import {
  initEzbot,
  trackPageView,
  makeVisualChanges,
} from "@ezbot-ai/javascript-sdk";

// set a first-party userId if known, else set userId to null
// replace `99` with your project ID
initEzbot(99, userId, {
  crossDomain: {
    enabled: true,
    domains: ["domain1.com", "domain2.com"],
  },
});
startActivityTracking({
  minimumVisitLength: 5,
  heartbeatDelay: 10,
});
trackPageView();
makeVisualChanges();
```

:::important
You must send at least one event (e.g. page view, automated activity tracking, or reward event) from the ezbot tracker on the destination domain so that we can associate the data across domains.
:::

## Track a Reward

After initializing ezbot on both domains with cross-domain tracking enabled, you can send reward events from any domain as you normally would. More information on tracking rewards can be found [here](../../03-get-started/06-rewards.md).

## How It Works

Under the hood, ezbot leverages Snowplow's cross-domain tracking, which:

1. Adds a "\_sp" parameter to the querystring of outbound links that match the configured domains (aka link decoration).
2. This parameter contains the original domain user ID, click timestamp, sessionID, and userId.
3. When a user navigates to the destination page, the ezbot tracker on the destination domain will call for predictions with the original sessionId and send it to our backend with events.
4. Our enrichment process links the session data, enabling continuous user tracking across different domains.

:::info
The tracker doesn't immediately decorate all links but adds event listeners that activate when users interact with links. This ensures fresh timestamps and proper cross-domain identity preservation.
:::
