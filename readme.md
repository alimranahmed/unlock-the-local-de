# Unlock The Local.de
[thelocal.de](https://www.thelocal.de/) is a great english newspaper for Germany but most of it's articles are restricted non-member visitor. This Chrome extension enables to read member-only content without being member.


### How it works
Everytime you load an article of [thelocal.de](https://www.thelocal.de/), it blocks the article page and shows a popup/modal to become a member. As this modal is being shown by JS, this can be bypassed by disabling the js for this site. So, this extension disable/enable javascript specifically for this newsite whenever the extension icon is clicked. Not other site is affected. 


### Important
This extension works at the date of **19th May 2023**

*It might not work if the popup showing mechanism changed from js to server side content-rendering*


### Installation:
1. Download/Clone this Chrome extension project
2. Go to [chrome://extensions/](chrome://extensions/)
3. Click on Load Unpack and select the downloaded folder
4. See this extension is installed in chrome


### Usages
1. Go to [thelocal.de](https://www.thelocal.de/) newspaper home page
2. Open any article in new page
3. Immediately after loading the article page, click on the the local icon to disable js.
4. Now, the js is disabled for [thelocal.de](https://www.thelocal.de), so it won't show the memebership popup


### Understanding the Code
`manifext.js` fail load `background.js` file that can enable or disable js execution. After enabling or disabling, it triggers an event. That event is linstened in `content.js` file. Where we are reloading the page.


**Note:** The extension icon will toggle the javascript execution in [thelocal.de](https://www.thelocal.de)