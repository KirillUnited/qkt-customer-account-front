const Modal = () => {
    const elements = document.querySelectorAll('[data-modal]');
    if (elements.length === 0) return;
    const showButtons = document.querySelectorAll('[data-toggle="modal"]');
    const handleClick = (e) => {
        const closeButton = e.target.dataset.close;
        const forms = e.currentTarget.querySelectorAll(`.form`);

        if (closeButton) {
            hide(e);
            forms.forEach((form) => {
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
};

export default Modal;
