---
sidebar_position: 3
tags: [rewards]
---

# Strategize

## What Do You Want to Change?

It's time to think about what changes you want to make to your website or app. Ask yourself the following questions to brainstorm:

- Are there aspects of your site that people have complained about?
- Is something on your website hard to find or too small to notice?
- What do you want people to see first, second, and third on your website?
- You can also draw inspiration from other websites with similar goals. What do you like and dislike about these sites?

Anything you want to try changing becomes a **variable**: the basic unit of website changes for ezbot. For example, if you want to change the color of a button from black to red or blue, then button color is the **variable**, and each color is a **variation**.

## What Do You Know About Your Users?

Our JavaScript Snippet and SDK automatically collect basic information about your users, such as their IP address, User Agent (device type), and other browser data. We use this information as attributes to deliver tailored experiences to your users.

You can improve the predictive power of our model by sending custom attributes about your users, such as whether they've previously made a purchase.

:::warning

Do not send Personally Identifiable Information (PII) or sensitive information to ezbot. This includes names, physical addresses, email addresses, phone numbers, or attributes that could indicate protected class status, such as race or socio-economic status. We do not need this information to optimize your website or app, and sending it violates our terms of service.

:::

## What Do You Want to Optimize For?

You can optimize your website or app for various goals, including:

- **Conversions:** Getting users to take specific actions, like signing up for a newsletter or making a purchase.
- **Engagement:** Keeping users on your site longer or encouraging them to visit more pages.
- **Revenue:** Increasing the amount of money users spend.

:::tip

Currently, ezbot supports a **Binary Reward Strategy.** This means all sessions are scored 0 if no reward signal is received, and 1 if any reward signal is received. If multiple reward signals are sent during a session, the session will still be scored as 1.

For now, we recommend choosing one primary goal to optimize for. If you have multiple goals, consider creating separate projects for each goal.

:::

## How Do You Want to Use ezbot?

You can use ezbot in two ways:

- **Visual Editor:** Ideal for non-technical users, this tool allows you to create and run experiments on your website without writing any code.
- **In-code:** Developers can use our JavaScript Browser SDK to integrate ezbot’s powerful optimization engine directly into their stack.

:::tip

**Both implementations are powered by the same platform and can be used together.** For instance, you might find it quicker and easier to use the Visual Editor for a quick messaging test rather than involving an engineer to implement a new variable in your code. To use the Visual Editor, just install the JavaScript Snippet or browser SDK. For more details, check out the [get started section.](/category/get-started/)

:::
