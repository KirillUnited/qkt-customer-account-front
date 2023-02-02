import Tabs from "./Tabs";
import Modal from "./Modal";
import Dropdown from "./Dropdown";

document.addEventListener('DOMContentLoaded', () => {
    Tabs();
    Modal();
    Dropdown();

    const productFilter = document.querySelector('.products-filter');

    productFilter !== null && productFilter.addEventListener('click', function (e) {
        const back = e.target.closest('.header .back');

        if (back) {
            e.preventDefault();
            this.classList.remove('modal-show');
        }
    })
});
