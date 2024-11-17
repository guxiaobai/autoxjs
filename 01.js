auto.waitFor()


// com.tencent.mm
// com.tencent.mm.ui.LauncherUI
app.launchApp("微信")

// waitForActivity('com.tencent.mm.ui.LauncherUI')

// while(!click("我"));

sleep(1000)

while(!click("通讯录"));
sleep(1000)
click(863,121,928,186)
sleep(1000)
setText("guxiaobai")
text('guxiaobai').findOne().click()

// while(true){
//   scrollUp()
//   sleep(1000)
//   scrollDown()
//   sleep(1000)
// }

