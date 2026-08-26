import test from "@playwright/test";

test('learn alerts',async({page})=>{
    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm')
    page.on('dialog',async(alert)=>{
        const alertmessage=alert.message()
        console.log(alertmessage)
        const alerttype=alert.type()
        console.log(alerttype)
        await alert.accept()
       
    })
    const frame = page.frameLocator('#iframeResult')
    await frame.locator("//button[text()='Try it']").click()
     await page.waitForTimeout(3000)
})
