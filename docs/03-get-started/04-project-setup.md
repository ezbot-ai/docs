---
sidebar_position: 4
---

# Project Setup

## Create a Project

After [signing up, creating an organization, and starting a subscription](./02-sign-up.md), your next step is to create a project.

Each **organization** can have multiple **projects**. **Projects** contain **variables**, **variations**, **attributes**, and **settings** like the **holdback percentage**. Projects help organize your data within a specific scope, separate from other data. For best results with ezbot, use as few projects as possible.

## Holdback Percentage

The holdback percentage is the portion of traffic that receives only default values. ezbot uses this holdback traffic to compare the performance of your variations against the default values. The ideal holdback percentage depends on your organization's goals. Consider the following when determining a holdback percentage:

- **Risk Aversion:** A higher holdback percentage means less traffic is exposed to variations, reducing the risk of negative outcomes.
- **Number of Variations Tested:** The more variations you test, the more traffic you need to test them. A lower holdback percentage may be necessary to ensure each variation receives enough traffic.
- **Amount of Traffic Not in Holdback:** The more traffic you have, the more you can afford to hold back. If you have a lot of traffic, you can afford to hold back more.

:::tip

Start with a holdback percentage that you're comfortable with. You can always adjust it later. Once you have confidence in ezbot, we recommend a holdback percentage of 5-10%.

:::
