---
sidebar_position: 3
---

# Getting Started

## Sign Up and Create or Join an Organization

First you will want to go to app.ezbot.ai and create a new user account.
![ezbot signup](../img/ezbot_signup.png)
If you already have an account, simply sign in.
![ezbot signup](../img/ezbot_signin.png)

Next, you will be directed to either create a new organization or join an existing organization. If you were invited to join ezbot by an organization, you will see it as an option to join. If not, you will be directed to create an organization.

—_Please bear with us while we update the pictures in this section to reflect the most up-to-date user interface._—

To create an organization, you will need to start a subscription through stripe. There are monthly and annual prices. Once you have filled out your payment and organization information on Stripe, you will be directed back to the onboarding flow.

## What Do You Want To Change?

At this point, you should start thinking about what you would like to change on your website. You can ask yourself questions like these to brainstorm:

- Are there aspects of your site that people have complained about?
- Is something on your website hard to find or too small to notice?
- What do you want people to see first, second, and third on your website?

You can also look at other websites with similar goals to yours for inspiration. What do you like and dislike about these other websites?

Anything you see that you might want to try changing is going to become a **variable**: the basic unit of website changes for ezbot. For example, if you want to try changing the color of a button, this will become a **variable**.

## What Kinds of Users Visit Your Site?

We want to encourage people to think about the sorts of people that visit their websites and what information they might have on those people. These are called **attributes**, and there is more on them in the next section.

## Create or Work on Projects

Then, you will be able to create a project. If you joined an existing organization, you will also be able to see their existing projects.

Users are free to use the app.ezbot.ai or access ezbot through our REST API.

If you'd like to use the visual (WYSIWYS) editor, you will need to install ezbot in one of the following ways.

1. You can either install a JavaScript Snippet
2. Or you can install the node SDK

If you want to use the REST API directly, you do not need to install anything.

Then, you will want to set up your reward function and choose an optimization strategy.

## Choose Project Settings

We currently support two configuration options:

1. Holdback percentage: the percentage of traffic that should receive only default values.
2. Optimization Strategy: How we should use your reward events in our optimization

Once you have set your reward function and chosen your optimization strategy, you'll be able to create variables and attributes.

# Choose an Optimization Strategy

We currently have two ways to optimize:

- **Total Reward:** We add up all of your "reward signals" (for example: total purchase amounts) to see which variations drive the most value.
- **Reward Count:** We count the number of times users perform the desired action(s) (for example: adds-to-cart events or newsletter signups) to determine which variations are most effective.

Choose the strategy that best aligns with your goals (e.g., maximizing sales vs. increasing user engagement).

![ezbot menu](../img/ezbot_app_menu.png)
