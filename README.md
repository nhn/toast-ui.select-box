# TOAST UI Component : Select Box
> Component that selects an option in the drop-down list.

[![GitHub release](https://img.shields.io/github/release/nhn/toast-ui.select-box.svg)](https://github.com/nhn/toast-ui.select-box/releases/latest)
[![npm](https://img.shields.io/npm/v/@toast-ui/select-box.svg)](https://www.npmjs.com/package/@toast-ui/select-box)
[![GitHub license](https://img.shields.io/github/license/nhn/toast-ui.select-box.svg)](https://github.com/nhn/toast-ui.select-box/blob/production/LICENSE)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-ff69b4.svg)](https://github.com/nhn/toast-ui.select-box/labels/help%20wanted)
[![code with hearth by NHN](https://img.shields.io/badge/%3C%2F%3E%20with%20%E2%99%A5%20by-NHN-ff1414.svg)](https://github.com/nhn)


<p><a href="https://nhn.github.io/toast-ui.select-box/latest/"><img src="https://user-images.githubusercontent.com/8615506/67446734-86bd2180-f64c-11e9-96dc-84b14d8ac378.gif" /></a></p>


## 🚩 Table of Contents

- [Collect statistics on the use of open source](#collect-statistics-on-the-use-of-open-source)
- [📙 Documents](#-documents)
- [🎨 Features](#-features)
- [🐾 Examples](#-examples)
- [💾 Install](#-install)
  - [Via Package Manager](#via-package-manager)
    - [npm](#npm)
  - [Via Contents Delivery Network (CDN)](#via-contents-delivery-network-cdn)
  - [Download Source Files](#download-source-files)
- [🔨 Usage](#-usage)
  - [HTML](#html)
  - [JavaScript](#javascript)
    - [Using namespace in browser environment](#using-namespace-in-browser-environment)
    - [Using module format in node environment](#using-module-format-in-node-environment)
- [🌏 Browser Support](#-browser-support)
- [🔧 Pull Request Steps](#-pull-request-steps)
  - [Setup](#setup)
  - [Develop](#develop)
    - [Running dev server](#running-dev-server)
    - [Running test](#running-test)
  - [Pull Request](#pull-request)
- [💬 Contributing](#-contributing)
- [🍞 TOAST UI Family](#-toast-ui-family)
- [📜 License](#-license)


## Collect statistics on the use of open source

TOAST UI SelectBox applies Google Analytics (GA) to collect statistics on the use of open source, in order to identify how widely TOAST UI SelectBox is used throughout the world.
It also serves as important index to determine the future course of projects.
`location.hostname` (e.g. > “ui.toast.com") is to be collected and the sole purpose is nothing but to measure statistics on the usage.

To disable GA, use the following `usageStatistics` option when creating the instance.

```js
const options = {
    ...
    usageStatistics: false
}
const instance = new SelectBox(container, options);
```


## 📙 Documents
* [Getting Started](https://github.com/nhn/toast-ui.select-box/blob/production/docs/getting-started.md)
  * [Group related options](https://github.com/nhn/toast-ui.select-box/blob/production/docs/getting-started.md#group-related-options)
  * [Customize the styles](https://github.com/nhn/toast-ui.select-box/blob/production/docs/getting-started.md#customize-the-styles)
  * [Use custom events](https://github.com/nhn/toast-ui.select-box/blob/production/docs/getting-started.md#use-custom-events)
* [APIs](https://nhn.github.io/toast-ui.select-box/latest)

You can also see the older versions of API page on the [releases page](https://github.com/nhn/toast-ui.select-box/releases).


## 🎨 Features
* Select an option in the drop-down list.
* Support an one-level group to group related options.
* Customize the styles using `theme` option. 
* Provide custom events.


| Basic | Item Group |
| --- | --- |
| ![select-box-basic](https://user-images.githubusercontent.com/8615506/67446761-9b99b500-f64c-11e9-83e7-78806d6cd491.gif) | ![select-box-item-group](https://user-images.githubusercontent.com/8615506/67446824-ca179000-f64c-11e9-8c1e-af93677d7945.gif) |

| Theme | Custom events |
| --- | --- |
| ![select-box-theme](https://user-images.githubusercontent.com/8615506/67446883-03e89680-f64d-11e9-97bd-871941633490.gif) | ![select-box-custom-events](https://user-images.githubusercontent.com/8615506/67446912-195dc080-f64d-11e9-99d3-ef0f1d60742e.gif) |


## 🐾 Examples
* [Basic](https://nhn.github.io/toast-ui.select-box/latest/tutorial-example01-basic) : Example of using default options.
* [Theme](https://nhn.github.io/toast-ui.select-box/latest/tutorial-example02-theme) : Example of customizing the styles.
* [Custom events](https://nhn.github.io/toast-ui.select-box/latest/tutorial-example03-custom-events) : Examples of using custom events.

More examples can be found on the left sidebar of each example page, and have fun with it.


## 💾 Install

TOAST UI products can be used by using the package manager or downloading the source directly.
However, we highly recommend using the package manager.

### Via Package Manager

TOAST UI products are registered in two package managers, [npm](https://www.npmjs.com/).
You can conveniently install it using the commands provided by each package manager.
When using npm, be sure to use it in the environment [Node.js](https://nodejs.org/ko/) is installed.

#### npm

``` sh
$ npm install --save @toast-ui/select-box # Latest version
$ npm install --save @toast-ui/select-box@<version> # Specific version
```

### Via Contents Delivery Network (CDN)

TOAST UI products are available over a CDN powered by [TOAST Cloud](https://www.toast.com).

You can use CDN as below.

```html
<link rel="stylesheet" href="https://uicdn.toast.com/select-box/latest/toastui-select-box.css">
<script src="https://uicdn.toast.com/select-box/latest/toastui-select-box.js"></script>
```

If you want to use a specific version, use the tag name instead of `latest` in the url's path.

The CDN directory has the following structure.

```
select-box/
├─ latest
│  ├─ toastui-select-box.css
│  ├─ toastui-select-box.js
│  ├─ toastui-select-box.min.css
│  ├─ toastui-select-box.min.js
├─ v1.0.0/
│  ├─ ...
```

### Download Source Files
* [Download bundle files](https://github.com/nhn/toast-ui.select-box/tree/production/dist)
* [Download all sources for each version](https://github.com/nhn/toast-ui.select-box/releases)


## 🔨 Usage

### HTML

Add the container element to create the component.

``` html
<div id="container"></div>
```

### JavaScript

This can be used by creating an instance with the constructor function.
To get the constructor function, you should import the module using one of the following ways depending on your environment.

#### Using namespace in browser environment
``` javascript
const SelectBox = tui.SelectBox;
```

#### Using module format in node environment
``` javascript
const SelectBox = require('@toast-ui/select-box'); /* CommonJS */
```

``` javascript
import SelectBox from '@toast-ui/select-box'; /* ES6 */
```

You can create an instance with [options](https://nhn.github.io/toast-ui.select-box/latest/SelectBox) and call various APIs after creating an instance.

``` javascript
const container = document.getElementById('container');

const selectBox = new SelectBox(container, {
  data: [
    {
      label: 'Fruits',
      data: [ { label: 'Apple', value: 'apple', selected: true }, { label: 'Banana', value: 'banana' } ]
    }
  ],
  ...
});

console.log(selectBox.getSelectedItem().getLabel()); // 'Apple'
```

For more information about the API, please see [here](https://nhn.github.io/toast-ui.select-box/latest/SelectBox).


## 🌏 Browser Support
| <img src="https://user-images.githubusercontent.com/1215767/34348387-a2e64588-ea4d-11e7-8267-a43365103afe.png" alt="Chrome" width="16px" height="16px" /> Chrome | <img src="https://user-images.githubusercontent.com/1215767/34348590-250b3ca2-ea4f-11e7-9efb-da953359321f.png" alt="IE" width="16px" height="16px" /> Internet Explorer | <img src="https://user-images.githubusercontent.com/1215767/34348380-93e77ae8-ea4d-11e7-8696-9a989ddbbbf5.png" alt="Edge" width="16px" height="16px" /> Edge | <img src="https://user-images.githubusercontent.com/1215767/34348394-a981f892-ea4d-11e7-9156-d128d58386b9.png" alt="Safari" width="16px" height="16px" /> Safari | <img src="https://user-images.githubusercontent.com/1215767/34348383-9e7ed492-ea4d-11e7-910c-03b39d52f496.png" alt="Firefox" width="16px" height="16px" /> Firefox |
| :---------: | :---------: | :---------: | :---------: | :---------: |
| Yes | 9+ | Yes | Yes | Yes |


## 🔧 Pull Request Steps

TOAST UI products are open source, so you can create a pull request(PR) after you fix issues.
Run npm scripts and develop yourself with the following process.

### Setup

Fork `master` branch into your personal repository.
Clone it to local computer. Install node modules.
Before starting development, you should check to haveany errors.

``` sh
$ git clone https://github.com/{your-personal-repo}/toast-ui.select-box.git
$ cd toast-ui.select-box
$ npm install
$ npm run test
```

### Develop

Let's start development!
You can see your code is reflected as soon as you saving the codes by running a server.
Don't miss adding test cases and then make green rights.

#### Running dev server

``` sh
$ npm run serve
```

#### Running test

``` sh
$ npm run test
```

### Pull Request

Before PR, check to test lastly and then check any errors.
If it has no error, commit and then push it!

For more information on PR's step, please see links of Contributing section.


## 💬 Contributing
* [Code of Conduct](https://github.com/nhn/toast-ui.select-box/blob/production/CODE_OF_CONDUCT.md)
* [Contributing guideline](https://github.com/nhn/toast-ui.select-box/blob/production/CONTRIBUTING.md)
* [Issue guideline](https://github.com/nhn/toast-ui.select-box/blob/production/docs/ISSUE_TEMPLATE.md)
* [Commit convention](https://github.com/nhn/toast-ui.select-box/blob/production/docs/COMMIT_MESSAGE_CONVENTION.md)


## 🍞 TOAST UI Family

* [TOAST UI Editor](https://github.com/nhn/tui.editor)
* [TOAST UI Calendar](https://github.com/nhn/tui.calendar)
* [TOAST UI Chart](https://github.com/nhn/tui.chart)
* [TOAST UI Image-Editor](https://github.com/nhn/tui.image-editor)
* [TOAST UI Grid](https://github.com/nhn/tui.grid)
* [TOAST UI Components](https://github.com/nhn)


## 📜 License

This software is licensed under the [MIT](https://github.com/nhn/toast-ui.select-box/blob/production/LICENSE) © [NHN](https://github.com/nhn).
