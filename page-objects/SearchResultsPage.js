const BasePage = require('./BasePage');

class SearchResultsPage extends BasePage {
  get searchResults() {
    return $$('[data-test="product"]');
  }
  get pagination() {
    return $('[class="pagination"]');
  }

  async getProductNames() {
    try {
      const elements = await $$('[data-test="product-name"]');
      if (!elements || elements.length === 0) {
        return [];
      }

      const names = [];
      for (const el of elements) {
        names.push(await el.getText());
      }
      return names;
    } catch (error) {
      return [];
    }
  }

  async getSearchResults() {
    try {
      const results = await this.searchResults;
      return results;
    } catch (error) {
      return [];
    }
  }
}

module.exports = new SearchResultsPage();
