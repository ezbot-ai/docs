---
sidebar_position: 1
---

# Overview

To get started with ezbot, you'll need the following:

1. **An ezbot user account:** Sign up for an ezbot account at [app.ezbot.ai/sign-up](https://app.ezbot.ai/sign-up).
2. **An ezbot organization:** After signing up for an account, you'll be prompted to create an organization for your business. If you later choose to add colleagues to your account, they will also be part of this organization.
3. **An ezbot subscription:** After creating an organization, you'll need to subscribe to an ezbot plan. You can choose from a variety of plans based on your business needs. All plans come with a one-month free trial.
4. **An ezbot project:** After starting a subscription, you'll be prompted to create your first project within your organization. ezbot data and settings like holdback percentage are project-scoped, meaning that we'll create a model for each of your projects.
5. **ezbot installed:** After your project is created, use the project id to install ezbot on your website or app. Install either the Javascript Snippet or the Browser SDK to start optimizing your website or app. Installing either of these will allow ezbot to start collecting data and running experiments on your website or app. They will also enable you to use our Visual Editor to create and manage experiments.
6. **A reward signal:** ezbot uses reward signals to score your user sessions and optimize for your desired business outcomes. For ezbot to work, you must send at least one reward signal to ezbot as part of your installation. Optionally, you can send reward signals to ezbot from a backend services via our REST API.

With these five things, you'll be ready to start optimizing your website or app with ezbot.

:::tip

Use as few projects as possible to make the most of ezbot. For best results, keep all of your data in one project, unless you have a specific reason to separate them.

:::

:::tip

Because ezbot only supports a **Binary Reward Strategy** today, all sessions are scored 0 if no reward signal is received for a given session and 1 if _any_ reward signal is received for the session. If you send multiple reward signals for a session, the session will still be scored as 1.

:::
