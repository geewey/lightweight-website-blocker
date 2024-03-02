# Lightweight Website Blocker

This Chrome extension blocks a list of user-specified domains. The motivation was to create a tool to help me focus while also learning about Chrome Manifest V3.

Built with JavaScript, HTML, CSS, Puppeteer, and Jest.

Initial list of blocked sites is defined in `INITIAL_SITES_TO_BLOCK` at `background.js`.

# How to run locally

1. `git clone` this repo to a local directory
2. Navigate to [chrome://extensions](chrome://extensions) on the Chrome browser
3. Toggle on "Developer mode"
4. Click on "Load unpacked" and in the popup, navigate to the folder where this repo was saved and select the root folder
5. Once the extension is loaded, it should be displayed under "All extensions"
6. Locate and pin the extension
7. Click on the extension, and add a new URL, formatted as domain.com (ex: espn.com or youtube.com)
9. Navigate to the domain - it should be blocked

For any questions, refer to instructions on the Google Chrome page, [Load an unpacked extension](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked).
