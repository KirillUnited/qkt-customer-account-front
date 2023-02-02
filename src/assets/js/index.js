import Tabs from "./tabs";
import Modal from "./modal";
import Dropdown from "./dropdown";

document.addEventListener('DOMContentLoaded', () => {
    const productFilter = document.querySelector('.products-filter');

    Tabs();
    Modal();
    Dropdown();

    productFilter?.addEventListener('click', function (e) {
        const back = e.target.closest('.header .back');

        if (back) {
            e.preventDefault();
            this.classList.remove('modal-show');
        }
    })
});
