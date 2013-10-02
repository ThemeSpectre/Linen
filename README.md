# Linen - A Starter Theme for Ghost

**Get started making great Ghost themes with Linen!**

This is a *starter theme* for Ghost, and is not intended to be used as-is on any site or blog.

Linen is a sensible collection of default styles and templates that can be mixed, matched, removed or refactored to create a unique Ghost theme.

Linen is created and maintained by *[Theme Spectre](http://themespectre.com/linen)*

## Installation

(More detailed installation instructions coming soon, I promise)

### Prerequisites

1. Node.js
2. Ruby
3. Sass
4. Grunt


### Setup

Clone (or fork) this repository into your /content/themes/ folder in Ghost.

Run `npm install` in the linen directory to install grunt modules.

Run `grunt` to build the Sass files, or `grunt watch` when you are ready to start themeing.


### Build

To build a .zip file of your theme for distribution, run:

`grunt bundle --name=yourthemename`

The *build* folder will contain the necessary theme files, and the *dist* folder will contain a .zip file of your theme that you can distribute and use in other Ghost instances.

## Thanks To:

* Themble & Eddie Machado for the Bones framework
* HTML5 Boilerplate
* Mono Social Icon Font
* Ghost and Casper
