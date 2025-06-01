const BasePage = require('./BasePage');

class SearchResultsPage extends BasePage {
    get searchResults() { return $$('[data-test="product"]'); }
    get noResultsMessage() { return $('[data-test="no-results"]'); }
    get searchQuery() { return $('[data-test="search-query"]'); }
    get resultCount() { return $('[data-test="search-result-count"]'); }
    get productTitles() { return $$('[data-test="product-title"]'); }
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

    async areResultsRelevant(searchTerm) {
        try {
            const productTitles = await this.productTitles;
            if (productTitles.length === 0) return false;

            // Check if at least one product title contains the search term
            for (let title of productTitles) {
                const titleText = await title.getText();
                if (titleText.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return true;
                }
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    async getFirstResultTitle() {
        try {
            const firstTitle = await this.productTitles[0];
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