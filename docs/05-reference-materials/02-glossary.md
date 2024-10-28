---
sidebar_position: 2
---

# Glossary

<details>  
<summary>**Variable**</summary>  
<div>  
<div>A **variable** is the basic building block of a user experience. It is the thing you want to change, test, and improve upon. It can be anything from a button to the entire layout of a page. To get the most out of ezbot, you should focus your variables on a single change – like the text in one button – rather than making several changes in one variable. This will allow ezbot to explore the most combinations.  </div>  
</div>
</details>

<details>  
<summary>**Variation**</summary>  
<div>  
<div>Each variable can have different values you want to test. Imagine these as possibilities or choices. A **variation** an option for a change made on one variable. For example, if your variable is "button color," you might have variations like red, blue, and green. The more variations you explore, the more freedom ezbot has to explore.</div>  
</div>
</details>

<details>  
<summary>**Attribute**</summary>  
<div>  
<div>These are like extra clues about your users that help ezbot personalize their experiences. This can be as simple as telling us “this user is a paying customer” or “this user isn’t logged in”. You can also share things like known audience(s) they belong to, purchase history, or whether they’re in a beta group. </div>  
<br/>  
<details>  
<summary>  
**Examples**
</summary>  
<div>
<ul>
  <li>**User Type:** existing_customer</li>
  <li>**User Status:** logged_in</li>
  <li>**User Group:** beta_testers</li>
</ul>
</div>  
</details>  
</div>  
</details>

<details>  
<summary>**Reward**</summary>  
<div>  
<div>A reward is like sending us a thumbs-up to a user experience. Whenever your users take an action you want them to (like buying something or adding an item to their cart), we need a signal to understand how each combination of variations is performing. You can learn more about [how to pick the best reward for your use case here](/get-started/strategize) and [how to setup rewards here.](/get-started/project-setup)</div>  
<br/>  
<details>  
<summary>  
**Example Predictions Response**
</summary>  
```json
{
  "holdback": false,
  "predictions": [
    {
      "key": "hero_headline",
      "type": "basic",
      "version": "0.1",
      "value": "Automated Experimentation with AI",
      "config": null
    },
    {
      "key": "hero_cta",
      "type": "basic",
      "version": "0.1",
      "value": "Check It Out",
      "config": null
    }
  ]
}
```
</details>  
</div>  
</details>

<details>  
<summary>**Prediction**</summary>  
<div>  
<p>ezbot personalizes your UX like a master chef crafting the perfect dish. By subtly changing elements like button colors, text, or layouts (think: ingredients!), ezbot tests different combinations ("recipes") to see what resonates with each user. When you initialize our code, it creates a unique session ID and requests a personalized "recipe" or set of variable predictions for each visitor. Simply integrate these suggestions into your code to deliver an optimized & personalized experience for everyone who visits your site. Predictions are automatically consumed if using our [Visual Editor](REPLACE_URL) and `makeVisualChanges()`</p>
</div>
</details>

<details>  
<summary>**Holdback**</summary>  
<div>  
<div>This is like a control group in a science experiment. We compare how users in the optimized group performs compared to the holdback group. The optimized group shows both the default variations and the variations you are testing. The holdback groups only shows the default variations. </div>
<br/>  
<div>Having a holdback group helps us measure the relative impact of your experimentation efforts. You control how much traffic goes to the holdback group (e.g., 20%) either to balance risk or maximize your potential ROI from ezbot. See more about how to decide on your holdback percentage in [here.](/get-started/project-setup) </div>  
</div>
</details>

<details>  
<summary>**Checkpoint**</summary>  
<div>  
<div>Think of a **checkpoint** as what our model for your project knows at any point in time. Soon, you'll be able to go "back in time" to previous checkpoints.</div>  
</div>
</details>

<details>  
<summary>**Project**</summary>  
<div>  
<div>Each **organization** can have multiple **projects** with an active subscription. **Projects** contain variables, variations, attributes, and project settings (like holdback percentage). Each project has one ezbot model, and data is kept separate by project.</div>  
</div>
</details>

<details>  
<summary>**Organization**</summary>  
<div>  
<div>The **organization** is the account type that paid for and manages the subscription. **Organizations** can have up to five users and multiple projects.</div>  
</div>
</details>

<details>  
<summary>**User Account**</summary>  
<div>  
<div>The **user account** is each ezbot user's login credentials. In order to use ezbot, **user accounts** should be associated with an **organization** that has an active subscription.</div>  
</div> 
</details>
