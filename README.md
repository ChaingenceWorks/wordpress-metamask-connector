WORDPRESS METAMASK CONNECTOR

#### Chaingence

[![LICENSE](https://img.shields.io/badge/license-MIT-lightgrey.svg)]()
[![PHP](https://img.shields.io/badge/php-darkblue.svg)](https://www.php.net/manual/de/intro-whatis.php)
[![JavaScript](https://img.shields.io/badge/javascript-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference?retiredLocale=de)
[![Wordpress](https://img.shields.io/badge/wordpress-white.svg)](https://wordpress.org/)
[![Web3.js](https://img.shields.io/badge/web3.js-lightblue.svg)](https://web3js.readthedocs.io/en/v1.10.0/)
[![METAMASK](https://img.shields.io/badge/metamask-orange.svg)](https://metamask.io/)

:construction:

```
metamask-connector/
│
├── css/
│   └── style.css
│
├── js/
│   └── metamask-connector.js
│
└──  metamask-connector.php
```


1. Including the Plugin in WordPress
Upload your plugin folder to the wp-content/plugins directory of your WordPress installation.
Activate the plugin through the WordPress admin interface.
2. Using the Shortcode
Use the [metamask_connector] shortcode in your posts or pages to display the "Connect to MetaMask" button.

or

Place the Button in Your Theme's Header
To place the button in the far right corner of the header, you'll need to edit your theme's header file (header.php), which might require a child theme to avoid losing changes on theme updates.

In your theme's header.php, add the following where you want the button:
```
<?php echo do_shortcode('[metamask_connector]'); ?>
```
