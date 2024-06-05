---
sidebar_position: 1
tags: [rewards]
---

# Overview

Here's an overview of the required steps to get started with ezbot.

To begin using ezbot, follow these steps:

1. **Sign Up for an ezbot Account:** Create an account at [app.ezbot.ai/sign-up](https://app.ezbot.ai/sign-up).
2. **Create an ezbot Organization:** After signing up, you'll be prompted to create an organization for your business. Any colleagues you add later will also be part of this organization.
3. **Choose an ezbot Subscription:** Select a subscription plan that suits your business needs. All plans come with a one-month free trial.
4. **Create an ezbot Project:** Once you have a subscription, create your first project within your organization. Each project has its own data and settings, including the holdback percentage, and ezbot will create a model for each project.
5. **Install ezbot:** Use the project ID to install ezbot on your website or app. You must install either the JavaScript Snippet or the Browser SDK. This will enable ezbot to start collecting data and running experiments. Additionally, it allows you to use our Visual Editor to create and manage experiments.
6. **Set Up a Reward Signal:** ezbot uses reward signals to score user sessions and optimize for your desired business outcomes. Anything can be a reward. For instance, a user getting a page, clicking a link, or checking out. To function properly, you must send at least one reward signal to ezbot as part of your installation.

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
