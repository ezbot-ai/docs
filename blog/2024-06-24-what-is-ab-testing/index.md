---
slug: what-is-ab-testing
title: What is A/B Testing?
authors:
  - haydee
image: ./coffee.png
tags:
  - ab-testing
  - experimentation
  - website
  - coffee
  - statsig
---

![Coffee](./coffee.png)

## A/B Testing: the Best Way to Improve Websites?

A/B testing has been around for nearly 20 years now, and many people have built their careers on some form of it. Large experimentation teams at companies run multivariate (A/B/C/etc) tests and tease out any potential interaction effects between experiments. Still, most of the tests run don't yield any useful information. What are A/B tests and why do people swear by them? If experimentation is so powerful, why don't teams get more information? Isn't there a better way to improve websites?

<!-- truncate -->

## Definition and Origin

The term "A/B Testing" refers to a simple experiment run to compare two variations "A" and "B" on a website or app. The idea was that you could learn something about what people preferred by showing two different versions of a page and observing the difference in behaviors on the two variations. If version A was more successful than version B, then version A was considered the winner.

Here are some examples of tests people run to learn about their users:

- You sell coffee online and are trying out two different names for your best-selling blend: 'dark & delicious' vs. 'roasty toasty.' You want to know which name sells the most coffee.
- You write for an online newspaper and you want to know which of two titles will entice more readers to click on your story, so you publish it under two different titles.
- You're running for office and are indifferent about some issue. You want to know which position will convince the most people to vote for you, so you get two focus groups and show them either position A or position B.

## How to Run and Evaluate an A/B Test

A/B tests are fundamentally simple experiments, so running one requires a little bit of expertise in experimental design and statistics. Because this is not meant to be an end-to-end guide on running A/B tests, we're just going to go over the broad strokes of A/B testing.

### Designing an Experiment

**First, you have to come up with a hypothesis to disprove.** This is counterintuitive because most hypotheses are colloquially positive: I think the sky is blue, house cats are small, and all swans are white. However, _proving_ hypotheses is _really_ hard, some say even impossible. But _disproving_ hypotheses can be a lot easier. See [all sorts of black, grey, and white swans](https://en.wikipedia.org/wiki/Swan#:~:text=The%20Northern%20Hemisphere%20species%20of,black%20swans%20are%20light%20grey.), [enormous house cats](https://qph.cf2.quoracdn.net/main-qimg-6e90f6d476a3d44c71f7629bb3b887c4-lq), and [different colored skies](https://steemit.com/sky/@kendel/4p2ccl-different-colors-of-sky).

So, the first step in designing your A/B test will be to come up with the hypothesis that you want to _disprove_. This is usually called a _null hypothesis_ because it is boring and means nothing interesting is going on and that's why you want to disprove it. From the example above: _there will be no difference in coffee sales based on the name_ (or, to put this a bit more scientifically: _coffee names will have no significant effect on sales_). If you can disprove this, then you'll have evidence that the names _do_ have an effect on sales and you can pick the name that seems to be driving sales.

**Next, you'll need to _control_ for some of the variables in your experiment.** Any of the differences between your variations A and B are going to be candidates for the effect you find, so you'll want to know exactly what is different between the two. In the example above, you'll only want to change the name of the coffee and nothing else. If you were to also change the font, the image, or some colors on the website, then you would not be able to say which of those things was causing the difference in sales. As long as you only change one thing, you'll be able to claim that any effect you find if due to that change.

### Statistical Significance

Once you have designed your simple experiment, you'll need to figure out how long to run it. Since you're trying to disprove your null hypothesis that something has no effect on something else, you'll need enough data to be fairly certain your results are accurate and not due to random chance. How much data? Well, that depends on how large your effect size is. Since you can get entire degrees in this field, this post will explain the concept of statistical significance and refer readers to other tools and guides where they might learn more.

**Statistical significance is a way of estimating how likely the relationship you found between two variables is due to random chance.** For example, if you flip a coin three times and get the same face all three times, that might seem surprising. But there is a 25% chance of that happening anytime someone flips a coin three times, so it's not that surprising that this happened:

- First Flip: 100% it lands either way.
- Second Flip: 50% chance it lands the same way.
- Third Flip: 50% chance it lands the same way.
- 1.0 x 0.5 x 0.5 = 0.25 = 25%

If you were to flip a coin 10 times and get the same face every time, that would be much more surprising. What is the probability this happened by chance (versus the alternative hypothesis that the coin is weighted)?

- 1.0 x 0.5 ^9 = 0.001953125 = 0.2% chance this just happened
- 1.0 - 0.001953125 = 0.998046875 = 99.8% chance the coin is weighted ?

The examples above are not meant as an example calculation of statistical significance, but rather a demonstration that unlikely things happen all the time and we should be able to figure out _how_ unlikely something is.

**Statistical significance is important because it lets you figure out when the trends you are seeing are real and powerful and when they are probably just due to random chance.** When you are designing an experiment, you want to pick a statistical significance level that you'll feel comfortable with. Usually people call this value the alpha and set it at 0.05 or 5% -- meaning that there is a 5% chance your results happen to be random but look like an effect. You can choose lower alphas if you want to be more certain, but you'll need more data. Or you can choose higher alphas if you don't want to be too certain, but then you risk making decisions based on noisy data.

### Figure Out Your Test Type and Sample Size

Once you know how certain you want to be (stat sig) and what null hypothesis you're trying to disprove, you can figure out what kind of statistical test to run and how much data you'll need to finish your experiment. This is all fairly tedious, and there are many good sources of information on this, so I'm not going to reinvent the wheel.

First, figure out what kind of test you'll run here: [one-tailed or two-tailed?](https://www.ncl.ac.uk/webtemplate/ask-assets/external/maths-resources/statistics/hypothesis-testing/one-tailed-and-two-tailed-tests.html#:~:text=The%20main%20difference%20between%20one,will%20have%20two%20critical%20regions.). The difference between those is whether you're looking for an effect in one direction or either direction. Next, you'll perform a power analysis to find out how many samples you'll need to get to your level of statistical significance. It's best to use a calculator [like this one](https://homepage.univie.ac.at/robin.ristl/samplesize.php) -- depending on the kind of test you're running, you'll need different information.

Once you know how many samples you'll need, you can run your experiment and know when you can evaluate the results! If you'd like to take a deeper dive into the numbers of experimental design and evaluation, check out [this brief with math and examples](https://www.indeed.com/career-advice/career-development/how-to-calculate-statistical-significance), or [this longer more in-depth blog on AB tests](https://medium.com/@jingchao-yang/a-b-testing-101-1b268d1939c4).

## How to Learn from A/B Tests

Once you've run your test and evaluated the results, you can start learning from them. There are a few ways your results might go:

1. Your experiments did not yield significant results, either because you didn't have a large enough sample size or the effect size (difference between two groups) was very small. That's ok, and you can try again with a larger sample or a new experiment.
2. You could not reject the null hypothesis because your two variations seem to have no difference in outcomes. To use our coffee example above, the name of the blend did not impact how likely anyone was to buy your coffee.
3. Your experiment resulted in a statistically significant difference in outcomes between the two groups, so you reject your null hypothesis and decide there _is_ a relationship between the change you made (coffee name) and the outcome you're measuring (sales). This usually means you should name your coffee the name that yielded the most sales, and move on to another experiment.

## The Limits of A/B Tests

As you have learned, planning, running, and evaluating an A/B test can take a lot of time and expertise. People run tests like these all the time because they want to know what people prefer. But you can only get so far asking either-or questions like these, and as you can imagine, it gets much more complicated to run multivariate test with even more variations. On top of that, it's difficult to run multiple tests on different aspects of your website at the same time because you have to control for [interaction effects](https://www.microsoft.com/en-us/research/group/experimentation-platform-exp/articles/a-b-interactions-a-call-to-relax/) and avoid [experiment cannibalization and crossover](https://www.forbes.com/sites/quora/2015/06/19/when-should-ab-testing-not-be-trusted-to-make-decisions/).

This is why large businesses that run full experimentation programs have teams of tens of people coordinating, managing, planning, and evaluating experiments all the time. But running experiments like these are only useful if you have specific questions to ask and you have enough people and traffic to answer them with a carefully controlled experiment. On top of this, most experiments don't yield results for the reasons mentioned above. For these reasons, many businesses choose not to invest in experiments because they don't know how valuable it will be if they even get answers to the questions they're asking.

## Is There A Better Way to Improve Websites?

Of course there is. While A/B testing was the best way to learn about your website and roll out better versions of it for a decade or two, its time has passed. Today, there are much more efficient reinforcement algorithms that can learn what works best on your website without needing you to plan, run, or evaluate experiments.

Companies like ezbot.ai are working to make machine learning services like this available to businesses of all sizes so that everyone can optimize their website without the cumbersone, time-consuming hassle of experimentation. By automating the A/B testing process with cutting-edge AI, ezbot.ai empowers businesses to try their ideas effortlessly and leaves the math to computers. This results in more tests, superior user experiences, and increased conversion rates. It's win-win-win!

:::tip

You can read more about how we're different from traditional A/B testing in our [docs](/introduction/benefits).

:::
