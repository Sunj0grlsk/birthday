const Boxlayout = (() => {
    const wrapper = document.body,
        sections = [...document.querySelectorAll(".section")],
        closeButtons = [...document.querySelectorAll(".close-section")],
        expandedClass = "is-expanded",
        hasExpandedClass = "has-expanded-item";

    const initEvents = () => {
        sections.forEach((element) => {
            element.addEventListener("click", () => openSection(element));
        });
        closeButtons.forEach((element) => {
            element.addEventListener("click", (event) => {
                event.stopPropagation();
                closeSection(element.parentElement);
            });
        });
    };

    const openSection = (element) => {
        if (element.classList.contains(expandedClass)) return;

        // Получаем текст из data-атрибута и обновляем текст в box
        const newText = element.getAttribute("data-text");
        element.querySelector(".box").innerText = newText;

        element.classList.add(expandedClass);
        wrapper.classList.add(hasExpandedClass);
    };

    const closeSection = (element) => {
        if (!element.classList.contains(expandedClass)) return;

        // Можно сбросить текст обратно, если необходимо
        const originalText = element.querySelector(".box").dataset.originalText;
        element.querySelector(".box").innerText = originalText;

        element.classList.remove(expandedClass);
        wrapper.classList.remove(hasExpandedClass);
    };

    return { init: initEvents };
})();

Boxlayout.init();