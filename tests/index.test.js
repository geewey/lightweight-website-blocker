const puppeteer = require("puppeteer");

const EXTENSION_PATH = "../chrome-extension-website-blocker";
// double-check this value - ID of the extension in the Chrome Web Store
const EXTENSION_ID = "cfjfcaooomnpocpndljgpcbfabjclpnn";

let browser;

beforeAll(async () => {
  browser = await puppeteer.launch({
    // Set to 'new' to hide Chrome if running as part of an automated build.
    headless: false,
    args: [
      `--disable-extensions-except=${EXTENSION_PATH}`,
      `--load-extension=${EXTENSION_PATH}`,
    ],
  });
});

afterAll(async () => {
  await browser.close();
  browser = undefined;
});

describe("Basic e2e tests", () => {
  test("the preset URLs are visible on the Chrome extension popup", async () => {
    const page = await browser.newPage();

    // Mock chrome.runtime.sendMessage to return sites synchronously
    await page.evaluateOnNewDocument(() => {
      const originalSendMessage = chrome.runtime.sendMessage;
      chrome.runtime.sendMessage = function (message, callback) {
        if (message.action === "getSites") {
          callback({
            sites: ["espn.com", "youtube.com"],
          });
        } else {
          originalSendMessage(message, callback);
        }
      };
    });

    await page.goto(`chrome-extension://${EXTENSION_ID}/popup/popup.html`);

    // Wait for the popup to load and initialize
    await page.waitForSelector("#blockedSitesList li", { timeout: 1000 });

    const list = await page.$("#blockedSitesList");
    const children = await list.$$("li");

    expect(children.length).toBe(2);
  }, 1000);

  test("the preset URLS are stored in Chrome storage", async () => {
    const workerTarget = await browser.waitForTarget(
      (target) => target.type() === "service_worker"
    );

    const worker = await workerTarget.worker();

    const value = await worker.evaluate(() => {
      return new Promise((resolve) => {
        chrome.storage.sync.get(["blockedSites"], function (result) {
          resolve(result.blockedSites);
        });
      });
    });

    expect(value.length).toBe(6);
  });
});
