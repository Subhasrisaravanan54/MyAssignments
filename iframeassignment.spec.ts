import test from "@playwright/test";

test('learn iframe',async({page})=>{
    await page.goto('https://leafground.com/frame.xhtml')
    const framecount=page.frames()
    console.log(framecount.length);
    await page.waitForTimeout(3000);
    //to handle iframe using frame locator method
    const singleframe=await page.frameLocator('//iframe[@src="default.xhtml"]').locator('#Click')
    singleframe.click()
    console.log('single frame clicked')
    //nested frame
    await page.frameLocator('[src="page.xhtml"]').frameLocator('#frame2').locator('#Click').click()
    await page.waitForTimeout(3000)
    console.log('nested frame clicked')
})