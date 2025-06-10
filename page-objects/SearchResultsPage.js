const BasePage = require('./BasePage');

class SearchResultsPage extends BasePage {
    get searchResults() { return $$('[data-test="product"]'); }
    get noResultsMessage() { return $('[data-test="no-results"]'); }
    get searchQuery() { return $('[data-test="search-query"]'); }
    get resultCount() { return $('[data-test="search-result-count"]'); }
    get productName() { return $('[data-test="product-name"]'); }
    get firstSearchResult() { return $('[data-test="product"]:first-child'); }

    async getSearchResults() {
        try {
            await browser.pause(2000); // Wait for search results to load
            const results = await this.searchResults;
            return results;
        } catch (error) {
            return [];
        }
    }

    async getResultCount() {
        try {
            const results = await this.getSearchResults();
            return results.length;
        } catch (error) {
            return 0;
        }
    }

    async hasSearchResults() {
        const resultCount = await this.getResultCount();
        return resultCount > 0;
    }

    async getIfResultsAreRelevant(searchTerm) {
        const titles = await this.productNames;
    
        if (!titles.length) return false;
    
        for (const title of titles) {
            const text = await title.getText();
            if (!text.toLowerCase().includes(searchTerm.toLowerCase())) {
                return false;
            }
        }
    
        return true;
    }
    
    

    async getFirstResultTitle() {
        try {
            const firstTitle = await this.productNames[0];
            return await firstTitle.getText();
        } catch (error) {
            return '';
        }
    }

    async clickFirstResult() {
        try {
            await this.firstSearchResult.waitForDisplayed({ timeout: 10000 });
            await this.firstSearchResult.click();
            await browser.pause(2000);
        } catch (error) {
            console.log('Could not click first search result');
        }
    }

    async isNoResultsDisplayed() {
        try {
            await this.noResultsMessage.waitForDisplayed({ timeout: 5000 });
            return true;
        } catch (error) {
            return false;
        }
    }
}

module.exports = new SearchResultsPage();