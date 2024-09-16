---
slug: experimentation-paradox
title: The Experimentation Paradox
authors:
  - griffin
image: ./color-tree.jpg
tags:
  - ab-testing
  - statsig
  - mde
  - power
---

![The best user experience depends on the person](./color-tree.jpg)

**The Experimentation Paradox** refers to a core tension that I've noticed in A/B testing and conversion rate optimization (CRO). I haven't been able to find anything about it online, so the name is my own.

**It suggests that the bigger the change you make to a website or app, the less you need an experimentation tool to know if it's significantly different from a control.** On the flip side, the smaller the change, the more critical testing tools become—but it also gets harder to see statistically significant results.

<!-- truncate -->

## Why the Paradox Exists

Let's break down why the **Experimentation Paradox** exists using some basic statistics. It all comes down to three key concepts: **Minimum Detectable Effect (MDE)**, **Significance**, and **Statistical Power**.

### Key Definitions:

- **Minimum Detectable Effect (MDE)**: This is the smallest change you want to be able to detect in an A/B test. For example, if you want to know whether a 1% improvement in conversions is real, that's your MDE. Smaller MDEs require much larger sample sizes to prove that the change isn't just random.
- **Significance Level (p-value)**: This measures how likely it is that the result you're seeing is due to chance. A common threshold is **p = 0.05**, meaning you're 95% confident the result is not random. If your p-value is smaller than 0.05, the result is considered statistically significant.

- **Statistical Power**: This refers to the probability that your test will detect a real effect if one exists. A power of 80% (or 0.80) is the industry standard, meaning there's an 80% chance you'll detect a true difference when it's there. Higher power requires larger sample sizes but gives you more confidence in the result.

### Key Assumptions for Following Examples

- A baseline conversion rate of **5%**, meaning 5% of users trigger the metric you're tracking.
- We're using a **one-sided test**, which reduces the sample size required.
- We want a **95% significance level** (p = 0.05) and **80% statistical power**.

Now, let's run power analyses to predict how large a sample we need to detect different effect sizes. We'll look at three scenarios, each with a different Minimum Detectable Effect (MDE):

### Examples

#### 1% Minimum Detectable Effect (MDE)

You'd expect an effect size this small on something like whether a slightly more purple shade of blue is better for your links than a blueier shade of blue.

To detect if version B improves conversions by just 1% over version A, you'd need approximately **2.3 million users** in both the treatment group (B) and control group (A), for a total of **4.7 million**.

This is a massive sample size, and very few websites have the traffic to support such a test.

#### 10% Minimum Detectable Effect (MDE)

You'd expect an effect size like this for a feature-level change, such as whether or not you're showing a payment method as an option during checkout.

If you're trying to detect a 10% lift in conversion rates, the sample size drops dramatically. You'd need around **23,500 users** in each group (A and B), for a total of **47,000**.

Increasing the MDE by a factor of 10 reduces the sample size by **100x**.

#### 50% Minimum Detectable Effect (MDE)

Now, if you're looking for a 50% improvement, the sample size shrinks even more. You'd need around **940 users** in each group, totaling **1,880** users.

Again, increasing the MDE by a factor of 5 reduces the sample size by **25x**.

### The Takeaway

Here's the key insight: as your MDE gets smaller, the sample size required grows exponentially. Reducing the MDE by a factor of X requires a sample size that's **X² larger**. This is why detecting small changes requires much more traffic and longer testing periods—creating the tension in the Experimentation Paradox.

## The Nature of Big Changes

When you make a large, sweeping change to a website—like redesigning the entire layout or rebranding the user experience—the differences in user behavior are often immediate and obvious. For example:

- **Scenario 1: Complete Site Redesign** – A retailer decides to overhaul their entire website, moving from a minimalist design to a visually rich one with more images and videos. In this case, you don't need an A/B test to recognize that conversions either spike (due to better product displays) or plummet (because the site becomes too overwhelming).

- **Scenario 2: Radical Pricing Strategy Shift** – A subscription service cuts prices by 50% or offers a new "freemium" model. The impact on sign-ups is likely so noticeable that basic tracking tools suffice to measure the effect, without needing complex testing methods.

In these cases, it's easy to see how massive the impact is using free tools like Google Analytics, and testing tools might feel unnecessary. This is the heart of the paradox: **the larger the change, the less reliant you are on rigorous testing to prove its effectiveness**—the results tend to be obvious.

## The Subtlety of Small Changes

Small changes, on the other hand, are where testing tools truly shine—but they also introduce greater complexity. When you tweak a headline, change the color of a button, or adjust the wording of a call-to-action, the effects are often too subtle to detect without data-driven methods. Here's where the **paradox** deepens:

- **Scenario 3: Button Color Change** – Imagine an e-commerce store experimenting with changing the "Add to Cart" button from blue to green. The change is unlikely to cause an instant, massive shift in conversions. However, over time and with enough traffic, the data might reveal that one color performs slightly better than the other.

- **Scenario 4: Testing Two Product Headlines** – A retailer swaps out the headline on a product page from "Our Best-Selling Running Shoes" to "Comfort & Performance in Every Step." Both headlines might work, but without a proper A/B test, it's impossible to say which one resonates more with customers.

Here, the **experimentation tool becomes indispensable** because you're looking for nuanced differences in user behavior—differences that wouldn't be visible without tracking the conversion rate across thousands of interactions.

## The Tension in Resources

This paradox is compounded by the fact that **smaller changes often require more resources** to find significant results. To understand how users react to a button color change, you need:

1. **Statistical Significance** – Since the impact is smaller, you need more traffic to show that the variation isn't just due to chance.
2. **Time/Patience** – Testing small changes takes time, especially for low-traffic sites. You might need to run the test for weeks or even months to get reliable data.
3. **Sophisticated Tools** – Tools like ezbot or A/B testing platforms are crucial to automating the collection, analysis, and reporting of these subtle shifts.

**On the other hand, large changes require fewer resources to measure, but often carry higher risk.** If a total redesign fails, it can lead to sharp drops in conversions—making A/B testing still valuable as a **"safety net"** to test changes before rolling them out to all users. Whether you're using a feature flag-based tool, or simply a CMS, the ability to revert– and revert quickly– is an important part of experimentation.

## The Sweet Spot for Testing

The paradox highlights that **the most valuable experimentation often lies between these extremes**. Mid-range changes—those that are not radical overhauls but that still could affect users—are ideal candidates for testing:

- **Scenario 5: Product Page Layouts** – Testing different product page layouts, including image placement, calls-to-action, and other features, can reveal impactful insights without needing the extreme risk of a full-site redesign.
- **Scenario 6: Checkout Flow Changes** – Simplifying the checkout process systematically can lead to incremental but powerful increases in conversion, but only if tested properly.

## Beating the Paradox

For users of traditional A/B testing tools, the Experimentation Paradox can be a real challenge. Small changes are often harder to measure and require more traffic, time, and resources to find statistically significant results. But with ezbot, this paradox matters less—and here's why:

1. **Continuous Optimization:** Unlike traditional tools, ezbot uses AI to continuously optimize user experiences. This means that instead of running one test at a time, you can test multiple variations simultaneously, across different user segments. So even small changes are quickly analyzed and optimized in real time, reducing the need for extensive traffic or long testing periods.
2. **Efficiency with Less Traffic:** One of the biggest hurdles in testing small changes is waiting for enough traffic to reach statistical significance. **ezbot works with up to 10X less traffic than traditional A/B testing tools,** which means you get insights faster, even on low-traffic pages. You can make subtle tweaks—like changing button colors or headlines—and see results without the long wait.
3. **Automated Learning:** ezbot's AI automatically adjusts to the winning variations, continuously improving user experiences without the need for manual intervention. This means you don't need to worry about the complexities of small changes—ezbot will find the best combinations for you.
4. **Broader Testing Scope:** Traditional A/B testing tools often focus on one change at a time, which limits how much you can learn from your tests. With ezbot, you can test across the entire user journey—from checkout flows to product pages—while its AI learns and applies improvements to optimize the whole experience.

ezbot minimizes the friction caused by the Experimentation Paradox. Whether you're making small tweaks or large changes, **ezbot's AI ensures you capture as much value as possible while minimizing risk and complexity, helping you achieve meaningful improvements without getting stuck in the waiting game.**
