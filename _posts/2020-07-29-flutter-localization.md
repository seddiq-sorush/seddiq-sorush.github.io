---
layout: post
title: Flutter App Localization
subtitle: Internationalization of Flutter App, the easy way
gh-repo: podcoder/flutter_localization
gh-badge: [star, fork, follow]
tags: [Flutter, Localization]
comments: true
---

If your app might be deployed to users who speak another language then you’ll need to **_internationalize_** it. That means you’ll need to write the app in a way that makes it possible to **_localize_** values like text and layouts for each language or **_locale_** that the app supports. Flutter provides widgets and classes that help you internationalize your app. Flutter libraries themselves are internationalized.

Flutter App Localization is an easy task but yet a tricky one, specially when you want to change the app language without restarting the whole app, configuring _Native Components Translation_ and adding the functionality to support both **RTL** and **LTR** languages.

In this tutorial we will develop an app that supports both RTL and LTR languages, Translates Native Components like DatePicker, TimePicker and Dialogs to the selected language, and finally, persists the user’s selected language, so, next time when the user is opening the app, user’s preferred language is selected automatically.

# Demo
![Final App Demo][final demo]

Here's a useless table:

| Number | Next number | Previous number |
| :----- | :---------- | :-------------- |
| Five   | Six         | Four            |
| Ten    | Eleven      | Nine            |
| Seven  | Eight       | Six             |
| Two    | Three       | One             |

How about a yummy crepe?

![Crepe](https://s3-media3.fl.yelpcdn.com/bphoto/cQ1Yoa75m2yUFFbY2xwuqw/348s.jpg)

It can also be centered!

![Crepe](https://s3-media3.fl.yelpcdn.com/bphoto/cQ1Yoa75m2yUFFbY2xwuqw/348s.jpg){: .mx-auto.d-block :}

Here's a code chunk:

```
var foo = function(x) {
  return(x + 5);
}
foo(3)
```

And here is the same code with syntax highlighting:

```javascript
var foo = function(x) {
  return x + 5;
};
foo(3);
```

And here is the same code yet again but with line numbers:

{% highlight javascript linenos %}
var foo = function(x) {
return(x + 5);
}
foo(3)
{% endhighlight %}

## Boxes

You can add notification, warning and error boxes like this:

### Notification

{: .box-note}
**Note:** This is a notification box.

### Warning

{: .box-warning}
**Warning:** This is a warning box.

### Error

{: .box-error}
**Error:** This is an error box.


<!-- Links -->
[final demo]: https://giphy.com/gifs/flutter-localization-internationalization-Xy1wIRYAziYPRNURGv?utm_source=iframe&utm_medium=embed&utm_campaign=Embeds&utm_term=https%3A%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Fsrc%3Dhttps%3A%2F%2Fgiphy.com%2Fembed%2FXy1wIRYAziYPRNURGv%2Ftwitter%2Fiframe&%3Bdisplay_name=Giphy&%3Burl=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FXy1wIRYAziYPRNURGv%2Fgiphy.gif&%3Bimage=https%3A%2F%2Fi.giphy.com%2Fmedia%2FXy1wIRYAziYPRNURGv%2Fgiphy.gif&%3Bkey=a19fcc184b9711e1b4764040d3dc5c07&%3Btype=text%2Fhtml&%3Bschema=giphy