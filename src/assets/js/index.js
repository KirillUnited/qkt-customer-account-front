document.addEventListener('DOMContentLoaded', () => {
    const Tabs = (function () {
        const tablist = document.querySelector('[data-tablist]');
        if (!tablist) return;
        const tabs = tablist.querySelectorAll('[data-tab]');
        const panels = document.querySelectorAll('[data-panel]');
        const handleClick = (e) => {
            const tab = e.target.closest('[data-tab]');

            if (tab) {
                e.preventDefault();

                const target = tab.dataset.tab;
                const panel = document.getElementById(target);

                setActiveTab(tab);
                setActivePanel(panel);
            }
        };

        setActivePanel(document.querySelector('[data-panel]'));
        setActiveTab(tablist.querySelector('[data-tab]'));
        tablist.addEventListener('click', handleClick);

        function setActivePanel(panel) {
            if (!panels.length) return;

            panels.forEach(item => item.hidden = true);
            panel.hidden = false;
        }

        function setActiveTab(tab) {
            if (!tabs.length) return;

            tabs.forEach(tab => tab.classList.remove('tabs-link-active'));
            tab.classList.add('tabs-link-active');
        }
    })();
    const Modal = (function () {
        const elements = document.querySelectorAll('[data-modal]');
        if (elements.length === 0) return;
        const showButtons = document.querySelectorAll('[data-toggle="modal"]');
        const handleClick = (e) => {
            const closeButton = e.target.dataset.close;
            const forms = e.currentTarget.querySelectorAll(`.form`);

            if (closeButton) {
                hide(e);
                forms.forEach((form)=>{
                    form.reset()
                })
            }
        };

        showButtons.forEach((btn) => btn.addEventListener('click', show));
        elements.forEach(modal => modal.addEventListener('click', handleClick));

        function show(e) {
            e.preventDefault();
            const target = document.querySelector(`[data-modal="${this.dataset.target}"]`);

            if (!target) return;
            target.classList.add('modal-show');
        }

        function hide(e) {
            const target = e.target.closest(`[data-modal]`);

            if (!target) return;
            target.classList.remove('modal-show');
        }
    })();
    // TODO: Refact Modal and Dropdown into proto Class
    const Dropdown = (function () {
        let current = null;
        const elements = document.querySelectorAll('[data-dropdown]');
        if (elements.length === 0) return;
        const showButtons = document.querySelectorAll('[data-toggle="dropdown"]');

        showButtons.forEach((btn) => btn.addEventListener('click', show));
        document.addEventListener('click', hide);

        function show(e) {
            e.preventDefault();
            const target = document.querySelector(`[data-dropdown="${this.dataset.target}"]`);

            if (!target) return;
            current && current.classList.remove('dropdown-show');
            current = target;
            target.classList.add('dropdown-show');
        }

        function hide(e) {
            elements.forEach((dropdown) => {
                const target = e.target.closest(".dropdown");
                if (target) return
                dropdown.classList.remove('dropdown-show');
            });
        }
    })();
});
