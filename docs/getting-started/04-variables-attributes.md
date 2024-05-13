---
sidebar_position: 4
---

# Variables and Attributes

## Implement Code

See our README at [https://github.com/ezbot-ai/javascript-sdk](https://github.com/ezbot-ai/javascript-sdk)

### How to Create a Variable

1. Use our Admin UI: Click the "Variable" tool on the left-hand toolbar after logging in.
2. Start a new variable: Click "Create Variable" to begin.
3. Provide the following details:

- Human-readable name: A descriptive name for easy understanding (e.g., "Home Page Cart Button Color").
- Variable key: A unique identifier for reference in your code (e.g., "home_cart_button_color").
- Default value: The value users in the holdback group will receive (e.g., "blue").
- Allowed values: A comma-separated list of possible variations for ezbot to explore (e.g., "red", "green", "black").

4. Use in code: Implement ezbot's predicted value for this variable in your code to control the corresponding feature or element.

### How to Create an Attribute

1. Use our Admin UI: Click the "Attribute" tool on the left-hand toolbar.
2. Start a new attribute: Click "Create Attribute" to begin.
3. Provide details:

- Human-readable name: A descriptive name for easy understanding (e.g., "Type of Customer").
- Attribute key: A unique identifier for reference in your code (e.g., "type_of_customer").

5. Send values in code: When requesting predictions, send Ezbot a value under this attribute key to provide context for personalization. Ezbot will handle the rest.
