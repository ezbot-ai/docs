---
sidebar_position: 6
---

# Your First Optimization

Congratulations on creating your first project! Now that you've set up your project and variations, it's time to start your first optimization.

Your next steps vary, depending on your installation. If you installed the JavaScript Snippet or the JS Browser SDK and are using the Visual Editor, you can start making visual changes to your website without writing any code. If you prefer to use ezbot predictions in your code to make changes, you'll need to create a basic variable and use predictions in your code to make changes.

## Create a Variable

### Basic Variables

Basic variables are the simplest type of variable to create, but they must be used in your code.

To create a Basic variable, click on the **Variables** tab in the left-hand menu. Then, click the **Create Variable** button.

#### Anatomy of a Basic Variable

1. **Human Readable Name**: Give your variable a name that is easy to understand.
2. **Variable Key**: The key is the name of the variable that you will use in your code. **It should be all lowercase and contain no spaces.**
3. **Add Allowed Values**: Add the values that you want to test. For example, if you want to test different button colors, you could add "red," "blue," and "green" as allowed values. For now, all allowed values should be strings.
4. **Default Value**: Choose the default value for your variable. This value will be served exclusively for this variable for users in the holdback group. It will also be explored for users in the optimized group.

## Visual Variables

Visual Variables can created using the visual editor or by clicking on the **Variables** tab in the left-hand menu, followed by the the **Create Variable**, and finally by selecting **Visual Variable**.

### Visual Editor

The visual editor allows you to make visual changes to your website without writing any code. You can change text, style, links, images, and more. The full list of supported visual changes can be found below. To use the Visual Editor, you must first install the JavaScript Snippet or Node SDK and use `makeVisualChanges()` in your code.

![Visual Editor](../img/visual_editor2.png)

To use the Visual Editor, click on the **Visual Editor** tab in the left-hand menu. Then, type in the URL of your website. From there, it's point and click.

:::tip

You can set the default URL for your Visual Editor in your project settings.

:::

#### Modes

The Visual Editor has two modes: **interactive** and **ezbot**. In **interactive mode**, you can interact with your website as if you were a user. This is helpful for navigating to other pages to add or edit visual changes. In **ezbot mode**, when you click on an element on your website, the element will be highlighted and you can make visual changes to it.

#### Highlighting

When highlighting is enabled, elements on your website that have visual changes and the active element you clicked on will be highlighted in the Visual Editor. You can enable or disable ezbot highlighting by clicking the **Highlight** button in the toolbar of the Visual Editor.

#### Shuffle

When shuffle is enabled, ezbot will randomly shuffle through the variations of your visual variables to show you how different combinations will look. It's a helpful way to demo ezbot's capabilities without having to wait for users to visit your site.

### Currently Supported Visual Changes

For easy visual changes, we currently support:

- **Text**: Change the text of an element.
- **Style**: Change the style of an element.
- **Href**: Change a link url.
- **Src**: Change an image source.
- **Font Size**: Change the font size of an element.
- **Font Color**: Change the font color of an element.
- **Background Color**: Change the background color of an element.
- **Visibility**: Show or hide an element.

And for ezbot users comfortable with HTML, CSS, and JavaScript, the following changes are also supported:

- **Set Inner HTML**: Change the inner HTML of an element.
- **Set Outer HTML**: Change the outer HTML of an element.
- **Set Attribute**: Change the HTML attribute of an element.

If you'd like to see another visual change supported, please reach out to [support@ezbot.ai](mailto:support@ezbot.ai).
