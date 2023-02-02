const Dropdown = () => {
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
};

export default Dropdown;
