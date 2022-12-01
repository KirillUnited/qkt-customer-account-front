document.addEventListener('DOMContentLoaded', () => {
    const Tabs = (function () {
        const tablist = document.querySelector('[data-tablist]');
        const tabs = tablist.querySelectorAll('[data-tab]');
        const panels = document.querySelectorAll('[data-panel]');
        const onTabClick = (e) => {
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
        tablist.addEventListener('click', onTabClick);

        function setActivePanel(panel) {
            panels.forEach(item => item.hidden = true);
            panel.hidden = false;
        }

        function setActiveTab(tab) {
            tabs.forEach(tab => tab.classList.remove('tabs-link-active'));
            tab.classList.add('tabs-link-active');
        }
    })();
});
