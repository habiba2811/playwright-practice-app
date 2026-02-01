import {Page, expect} from '@playwright/test';

export class NavigationPage {

    readonly page: Page

    constructor( page: Page ){
        this.page = page
    }

    async formLayoutsPage(){
        await this.page.getByText("Form Layout").click()
    }
}