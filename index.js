const wdio = require("webdriverio");
var By = require('webdriverio').By;
var assert = require('assert');

const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: "Android",
    platformVersion: "10",
    deviceName: "Android Emulator",
    // must be absolute path
    app: "C:/Users/ashle/say-their-names-android/app/build/outputs/apk/debug/app-debug.apk",
    appPackage: "io.saytheirnames.android",
    appActivity: "io.saytheirnames.activity.MainActivity",
    automationName: "UiAutomator2"
  }
};

async function main () {
  const client = await wdio.remote(opts);
  const field = await client.$("android.widget.TextView");
  const value = await field.getText();
  assert.equal(value,"SAY THEIR NAMES");

  const field1 = await client.$('//*[@content-desc="DONATIONS"]/android.view.ViewGroup/android.widget.TextView');
  const value1 = await field1.getText();
  assert.equal(value1,"DONATIONS");

  const field2 = await client.$('//*[@content-desc="PETITIONS"]/android.view.ViewGroup/android.widget.TextView');
  const value2 = await field2.getText();
  assert.equal(value2,"PETITIONS");

  const field3 = await client.$('//*[@content-desc="ABOUT"]/android.view.ViewGroup/android.widget.TextView');
  const value3 = await field3.getText();
  assert.equal(value3,"ABOUT");

  const field4 = await client.$('//*[@content-desc="HOME"]/android.view.ViewGroup/android.widget.TextView');
  const value4 = await field4.getText();
  assert.equal(value4,"HOME");

  await client.deleteSession();
}

main();