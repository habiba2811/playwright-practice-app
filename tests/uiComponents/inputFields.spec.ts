import { test, expect } from '@playwright/test';

test.beforeEach( async ({page}) => {
    await page.goto('/')
})

test.describe('Ui Components - Input Fields', ()=> {
    test.beforeEach( async ({page}) => {
        await page.getByText('Input').click()
  })
         
   test('Input Fields', async ({page})=> {

        // // InputText 
        const defaultInput= page.getByRole('textbox', { name: 'Default' });
        await defaultInput.fill('John');
        await expect(defaultInput).toHaveValue('John');
        const disabledInput= page.getByRole('textbox', { name: 'Disabled' });
        await expect(disabledInput).toBeDisabled();
        const invalidInput= page.getByRole('textbox', { name: 'Invalid' });
        await invalidInput.fill('Doe');
        await expect(invalidInput).toHaveValue('Doe');

        // Icons
        const iconsSection = page.locator('.card', { hasText: 'Icons' });
        const userName = iconsSection.getByPlaceholder('Username');
        await userName.fill('John')
        await expect(userName).toHaveValue('John')
        await expect(page.locator('.pi.pi-user.p-inputicon')).toBeVisible()
        const Search= page.getByRole('textbox', { name: 'Search' }); 
        await Search.fill('Playwright')
        await expect(Search).toHaveValue('Playwright')
        await expect(page.locator('.pi.pi-search.p-inputicon')).toBeVisible()

        // Float Label
        const floatUserName = page.locator('#username');
        await floatUserName.fill('Doe');
        await expect(floatUserName).toHaveValue('Doe');

        // Textarea
        const textArea= page.getByPlaceholder('Your Message') 
        await textArea.fill('blahblahblahblahblahblahblahblahblahblahhblahblahblahblahblahhblahblahblah')
        await expect(textArea).toHaveValue('blahblahblahblahblahblahblahblahblahblahhblahblahblahblahblahhblahblahblah');

        //AutoComplete
        const autoComplete= page.getByRole('combobox', { name: 'Search'})
        await autoComplete.click();
        await autoComplete.fill('Ge');
        await page.getByRole('option', { name: 'Germany'}).click()
        await page.locator('button.p-autocomplete-dropdown').click()
        await page.getByRole('option', { name: 'Spain'}).click()
        const germanyOption = page.getByRole('option', { name: 'Germany' });
        const spainOption = page.getByRole('option', { name: 'Spain' });
        await expect(germanyOption).toBeVisible();
        await expect(spainOption).toBeVisible();
        await spainOption.getByRole('button', { name: 'Remove' }).click();
        await expect(spainOption).toHaveCount(0);

        // DatePicker
        const dateSection = page.locator('.card', { hasText: 'DatePicker' })
        const dateButton = dateSection.getByRole('button', { name: 'Choose Date' })
        const dateInput = dateSection.locator('p-datepicker').getByRole('combobox')
        await dateButton.click()
        await page.getByRole('gridcell', { name: '20' }).click()
        await expect(dateInput).not.toHaveValue('')

        // InputNumber
        const incrementButton= page.locator('[data-pc-section="incrementbuttonicon"]') 
        const decrementbutton= page.locator('[data-pc-section="decrementbuttonicon"]')
        await incrementButton.click()
        await incrementButton.click()
        await decrementbutton.click()

        // Slider
        const slider = page.locator('[data-pc-section="handle"][role="slider"]')
        await slider.focus()
        for (let i = 0; i < 10; i++) {
        await slider.press('ArrowRight')}
        await expect(slider).toHaveAttribute('aria-valuenow', '60');

        // Ratings
        const ratingIcon  =page.locator('.p-rating-icon.p-rating-off-icon.p-icon[data-pc-section="offIcon"]')
        await ratingIcon.nth(1).click()
        const onStars = page.locator('.p-rating-icon.p-rating-on-icon');
        await expect(onStars).toHaveCount(2);

        // Knob
        const knob= page.locator('svg[role="slider"]')
        await knob.focus()
        for (let i = 0; i < 20; i++) {
        await knob.press('ArrowLeft')}
        await expect(page.locator('.p-knob-text')).toHaveText('30%')

        // ColorPicker
        const colorTrigger = page.locator('.p-colorpicker-preview[data-pc-section="input"]');
        await colorTrigger.click();
        const panel = page.locator('.p-colorpicker-panel');
        await expect(panel).toBeVisible();
        const colorBox = panel.locator('[data-pc-section="color"]');
        const box = await colorBox.boundingBox();
        if (!box) throw new Error('Color box not visible');
        await page.mouse.click(box.x + 20, box.y + 20);




   })
})