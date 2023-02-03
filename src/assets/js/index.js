import Tabs from "./tabs";
import Modal from "./modal";
import Dropdown from "./dropdown";
import ProductsFilter from "./products/ProductsFilter";

document.addEventListener('DOMContentLoaded', () => {
    const productFilters = document.querySelectorAll('.products-filter');
    const productsFilter = new ProductsFilter("products_filter", {
        showItems: 1
    });

    Tabs();
    Modal();
    Dropdown();

    productsFilter.init();
    productFilters.forEach((item) => {
        bindProductFilterEvents(item);
    });
});

function bindProductFilterEvents(productFilter) {
    productFilter?.addEventListener('click', function (e) {
        const back = e.target.closest('.header .back');

        if (back) {
            e.preventDefault();
            this.classList.remove('modal-show');
        }
    });
}
