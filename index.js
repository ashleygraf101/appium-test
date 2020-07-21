const wdio = require("webdriverio");
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
    // app: "C:/Users/ashle/appium-test/ApiDemos-debug.apk",
    // appPackage: "io.appium.android.apis",
    appActivity: "io.saytheirnames.activity.MainActivity",
    automationName: "UiAutomator2"
  }
};

async function main () {
  const client = await wdio.remote(opts);

/** donations button */
//  //android.widget.FrameLayout[@content-desc="DONATIONS"]/android.view.ViewGroup/android.widget.TextView
/** petitions button */
//  //android.widget.FrameLayout[@content-desc="PETITIONS"]/android.view.ViewGroup/android.widget.TextView
/** about button */
//  //android.widget.FrameLayout[@content-desc="ABOUT"]/android.view.ViewGroup/android.widget.TextView
/** home button */
//  //android.widget.FrameLayout[@content-desc="HOME"]/android.view.ViewGroup/android.widget.TextView
/** profile pieces */
//  /hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.ImageView
//  /hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.TextView[1]
//  /hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.TextView[2]
/** header image */
//  /hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout/androidx.viewpager.widget.ViewPager/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.widget.FrameLayout





 await client.deleteSession();
}

main();