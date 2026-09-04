import test from "@playwright/test";
import leadlogin from '../../data/leaddata.json'
//test.describe.serial('running serial mode',()=>{
for(let datalogin of leadlogin)
{
test(`learn to create lead using json ${datalogin.firstName}`,async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/main')
    //username
    await page.locator('#username').fill('democsr2')
    //password
    await page.getByRole('textbox',{name:"Password"}).fill('crmsfa')
    //login
    await page.locator('[class="decorativeSubmit"]').click()
    //click CRM/SFA
    await page.getByRole('link',{name:"CRM/SFA"}).click()
    //click leads
    await page.locator("//a[text()='Leads']").click()
    //create lead
    await page.locator("//a[text()='Create Lead']").click()
    //fill mandatory fields
    await page.locator('#createLeadForm_companyName').fill(datalogin.companyName)
    await page.locator('#createLeadForm_firstName').fill(datalogin.firstName)
    await page.locator('[id="createLeadForm_lastName"]').fill(datalogin.lastName)
    //dropdown-source
    await page.locator('[name="dataSourceId"]').selectOption({label:datalogin.source});
    //Marketing Campaign - select using value
    //await page.locator('#createLeadForm_marketingCampaignId').selectOption({value:datalogin["Marketing Campaign"]})
    //count and print
    const marketingdropdown= page.locator('#createLeadForm_marketingCampaignId')
    const marketingcount=await marketingdropdown.count()
    console.log('count of:',marketingcount);
    for(let i=0; i< marketingcount;i++)
    {
     console.log(await marketingdropdown.nth(i).allTextContents());

    }
    //industry
    await page.locator('#createLeadForm_industryEnumId').selectOption({ index: 6 })
    //currency
    await page.locator('#createLeadForm_currencyUomId').selectOption({label:datalogin["Preferred Currency"]})
    //select country
    await page.locator('[id="createLeadForm_generalCountryGeoId"]').selectOption({label:datalogin.Country})
    //select state,count and print values
    //await page.locator('#createLeadForm_generalStateProvinceGeoId').selectOption({value:datalogin.State});
    
    await page.waitForTimeout(3000)
    //await stateoptions.selectOption({label:'California'});

    //get all options
    const optionscount= page.locator('#createLeadForm_generalStateProvinceGeoId')
    const count=await optionscount.count();
    console.log('count of state is',count);
    for(let i=0;i<count;i++)
    {
       console.log(await optionscount.nth(i).allInnerTexts());
    }
//create lead
 await page.locator('[name="submitButton"]').click()
    
})

}
