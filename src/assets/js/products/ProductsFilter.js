export default class ProductsFilter {
    element;
    subElements = {};
    SUB_ELEMENT_SHOW_ITEMS_COUNT;
    handleSubElements = () => {
        for (const [key, value] of Object.entries(this.subElements)) {
            const item = this.subElements[key];

            this.appendSubElementExpandButton(item);
            this.bindSubElementEvents(item);
        }
    };
    handleClick = (e) => {
        const back = e.target.closest('.header .back');

        if (back) {
            e.preventDefault();
            this.element.classList.remove('modal-show');
        }
    };
    handleSubElementClick = (e) => {
        const expandBtn = e.target.closest('[data-filter-expand="true"]');

        if (expandBtn) {
            this.toggleSubElementExpand(expandBtn);
        }
    };

    constructor(id, config = {}) {
        const {
            showItems
        } = config;

        this.element = document.getElementById(id);
        this.SUB_ELEMENT_SHOW_ITEMS_COUNT = showItems;
    }

    init() {
        if (!this.element) return;

        this.subElements = this.getSubElements(this.element);
        this.handleSubElements();
        this.bindEvents();
    }

    bindEvents() {
        this.element.addEventListener("click", this.handleClick);
    }

    bindSubElementEvents(item) {
        item.addEventListener("click", this.handleSubElementClick);
    }

    showExcerpt(content, show = true) {
        if (this.SUB_ELEMENT_SHOW_ITEMS_COUNT < 1) return;

        const itemHeight = content.firstElementChild.clientHeight;

        if (show) {
            content.style.height = `${itemHeight * this.SUB_ELEMENT_SHOW_ITEMS_COUNT}px`;
            return;
        }
        content.removeAttribute('style');
    }

    appendSubElementExpandButton(item) {
        if (this.SUB_ELEMENT_SHOW_ITEMS_COUNT < 1) return;

        const itemContent = item.querySelector('.products-filter-content');

        if (itemContent?.childElementCount > this.SUB_ELEMENT_SHOW_ITEMS_COUNT) {
            const expandBtn = item.querySelector('[data-filter-expand="true"]');

            this.showExcerpt(itemContent)
            expandBtn?.closest('.hidden').classList.remove('hidden');
        }
    }

    toggleSubElementExpand(item) {
        const parent = item.closest('[data-filter-element]');
        const itemContent = parent.querySelector('.products-filter-content');
        const itemContentIsExpanded = itemContent?.classList.contains('products-filter-content-expand')

        itemContent?.classList.toggle('products-filter-content-expand');

        if (!itemContentIsExpanded) {
            this.showExcerpt(itemContent, false);
            item.innerText = "See Less";
        } else {
            this.showExcerpt(itemContent, true);
            item.innerText = "See More";
        }
    }

    getSubElements(element) {
        const result = {};
        const elements = element.querySelectorAll('[data-filter-element]');

        for (const subElement of elements) {
            const name = subElement.dataset.filterElement;

            result[name] = subElement;
        }

        return result;
    }
}
