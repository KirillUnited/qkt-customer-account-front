import { html } from "common-tags";
import Datepicker from "../../vendors/Datepicker.js/datepicker";

export default class ProductsFilterCustomDate {
    config = {
        multiple: true,
        inline: true,
        classNames: {
            node: 'datepicker custom hidden'
        },

        templates: {
            container: [
                '<div class="datepicker__container">',
                '<div class="datepicker__pane">',
                '<%= renderHeader() %>',
                '<%= renderCalendar() %>',
                this.getFooter(),
                '</div>',
                '</div>'
            ].join('')
        }
    };
    handleClick = (e) => {
        const saveButton = e.target.closest('[data-filter-date-save="true"]');
        const resetButton = e.target.closest('[data-filter-date-reset="true"]');

        if (saveButton) {
            this.hide();
        }
        if (resetButton) {
            this.reset();
        }
    }

    constructor(selector) {
        this.selector = selector;
        this.datepicker = new Datepicker(this.selector, this.config);
        this.customDate = document.querySelector('.datepicker');

        this.customDate?.addEventListener("click", this.handleClick);
    }

    show() {
        this.customDate?.classList.remove('hidden');
        this.customDate?.closest('.products-filter-date')?.classList.add('products-filter-date-opened');
    }

    hide() {
        this.customDate?.classList.add('hidden');
        this.customDate?.closest('.products-filter-date')?.classList.remove('products-filter-date-opened')
    }

    reset() {
        const selectedDates = this.customDate.querySelectorAll('.is-selected');
        
        this.datepicker.setDate([]);
        selectedDates.forEach(item=>{
            item.classList.remove('is-selected')
        });
    }

    getFooter() {
        return html`
            <div class="datepicker-footer">
                <button class="btn" type="button" data-filter-date-reset="true">
                    Clear Dates
                </button>
                <button class="btn btn-primary" type="button" data-filter-date-save="true">
                    save
                </button>
            </div>
            `;
    }
}