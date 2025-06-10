---
sidebar_position: 1
tags: [rewards]
---

# Overview

Here's an overview of the required steps to get started with ezbot.

To begin using ezbot, follow these steps:

1. **Book a demo:** [Get started free](https://www.ezbot.ai/pricing) to see ezbot in action on your website.
2. **Install ezbot:** Follow the in-app instructions or our docs to quickly and easily install ezbot on any website. Use the project ID to install ezbot on your website. You must install either the JavaScript Snippet or the Browser SDK. This will enable ezbot to start collecting data and running experiments. Additionally, it allows you to use our Visual Editor to create and manage experiments.
3. **Set Up a Reward Signal:** ezbot uses reward signals to score user sessions and optimize for your desired business outcomes. Anything can be a reward. For instance, a user getting a page, clicking a link, or checking out. To function properly, you must send at least one reward signal to ezbot as part of your installation.

With these steps completed, you'll be ready to start optimizing your website or app with ezbot.

:::tip

Use as few projects as possible to make the most of ezbot. For best results, keep all of your data in one project, unless you have a specific reason to separate them.

:::

:::tip

**Scoring**

Currently, ezbot supports a **Binary Reward Strategy.** This means each session is scored as follows:

- 0 if no reward signal is received for the session.
- 1 if any reward signal is received for the session.

If you send multiple reward signals during a session, it will still be scored as 1.

:::
