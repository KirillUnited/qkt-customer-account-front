import Tabs from "./tabs";
import Modal from "./modal";
import Dropdown from "./dropdown";
import ProductsFilter from "./products/ProductsFilter";

document.addEventListener('DOMContentLoaded', () => {
    const productFilters = document.querySelectorAll('.products-filter');
    const productsFilter = new ProductsFilter("products_filter", {
        showItems: 3
    });

    Tabs();
    Modal();
    Dropdown();

    productsFilter.init();
});
