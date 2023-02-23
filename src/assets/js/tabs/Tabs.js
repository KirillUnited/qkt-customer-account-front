const Tabs = () => {
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
};

export default Tabs;
