# Lightweight Website Blocker

This Chrome extension blocks a list of user-specified domains. The initial motivation was to create a tool to help me focus while also learning about Chrome Manifest V3. However, I found this tool super helpful to prevent me from "automatically" navigating to distracting websites, so I wanted to share it with others. Built with JavaScript, HTML, CSS, Puppeteer, and Jest.

Download the free extension in the Chrome Web Store: [Lightweight Website Blocker](https://chromewebstore.google.com/detail/lightweight-website-block/pplfmhejbbkkllmobolfpmaaiiianbbp?authuser=0&hl=en)

Initial list of blocked sites is defined in `INITIAL_SITES_TO_BLOCK` at `background.js`:
- espn.com
- cnn.com
- foxnews.com
- facebook.com
- linkedin.com
- mail.google.com
- youtube.com
- instagram.com
- x.com

If this tool has helped you focus better, [please buy me a coffee =)](https://buymeacoffee.com/geewey).

# How to run locally

1. `git clone` this repo to a local directory
2. Navigate to `chrome://extensions` on the Chrome browser
3. Toggle on "Developer mode"
4. Click on "Load unpacked" and in the popup, navigate to the folder where this repo was saved and select the root folder
5. Once the extension is loaded, it should be displayed under "All extensions"
6. Locate and pin the extension
7. Click on the extension, and add a new URL, formatted as domain.com (ex: espn.com or youtube.com)
9. Navigate to the domain - it should be blocked

For any questions, refer to instructions on the Google Chrome page, [Load an unpacked extension](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked).

# Version history

### 0.0.2, updated 2025-12-05
- added additional web request resource types to block: sub_frame, script, xmlhttprequest, images ([see what this means here](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/ResourceType))
- added additional sites on initial block list: `youtube.com`, `instagram.com`, `x.com`
- updated `gmail.com` to `mail.google.com` on the initial block list
- compressed PNG logo images to reduce extension size

### 0.0.1, updated 2025-10-21
- initial release to Chrome Web Store
- users can specify website URLs to be blocked
- extension includes pre-loaded URLs