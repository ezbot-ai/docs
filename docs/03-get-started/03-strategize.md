---
sidebar_position: 3
---

# Strategize

## What do you want to change?

At this point, you should start thinking about what you would like to change on your website or app. You can ask yourself questions like these to brainstorm:

- Are there aspects of your site that people have complained about?
- Is something on your website hard to find or too small to notice?
- What do you want people to see first, second, and third on your website?

You can also look at other websites with similar goals to yours for inspiration. What do you like and dislike about these other websites?

Anything that you might want to try changing is going to become a **variable**: the basic unit of website changes for ezbot. For example, if you want to try changing the color of a black button to red or blue, then button color is the **variable** and each color is a **variation**.

## What do you know about your users?

Our JS Snippet and SDK automatically collect some basic information about your users, like their IP address, User Agent (device type), and other information available from the browser. We use this information as **attributes** to deliver tailored experiences to your users.

You can improve the predictive power of our model by also sending us custom **attributes** about your users, like whether they've previously made a purchase.

:::warning

Do not send Personally Identifiable Information (PII) or sensitive information to ezbot. This includes things like names, physical addresses, email addresses, phone numbers, or attributes that could indicate that they're in a protected class such as race or socio-economic status. We do not need this information to optimize your website or app, and sending us this kind of information is a violation of our terms of service.

:::

## What do you want to optimize for?

You can optimize your website or app for a variety of goals, like:

- **Conversions:** Getting users to take a specific action, like signing up for a newsletter or making a purchase.
- **Engagement:** Keeping users on your site longer or getting them to visit more pages.
- **Revenue:** Increasing the amount of money users spend.

:::tip

Because ezbot only supports a **Binary Reward Strategy** today, all sessions are scored 0 if no reward signal is received for a given session and 1 if _any_ reward signal is received for the session. If you send multiple reward signals for a session, the session will still be scored as 1.

For now, we recommend picking one primary goal to optimize for. If you have multiple goals, you can create separate projects for each goal.

:::

## How do you want to use ezbot?

You can use ezbot in two ways:

- **Visual Editor**: Perfect for non-technical users, this tool allows you to create and run experiments on your website without writing a single line of code.
- **In-code**: Developers can leverage our JS Browser SDK or REST API to integrate ezbot’s powerful optimization engine directly into their stack.

:::tip

**Both implementations are powered by the same platform and can be used together.** For instance, you might find it quicker and easier to use the Visual Editor for a quick messaging test, rather than involving an engineer to implement a new variable in your code. To use the Visual Editor, just install the JavaScript Snippet or browser SDK. For more details, check out the [get started section.](/category/get-started)

:::
