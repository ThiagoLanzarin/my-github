// Funcionalidade de navegação com melhorias
document.addEventListener("DOMContentLoaded", () => {
  const navButtons = document.querySelectorAll(".nav-btn");
  const contentSections = document.querySelectorAll(".content-section");
  const defaultContent = document.getElementById("default-content");

  const hideAllSections = () => {
    contentSections.forEach(section => {
      section.classList.remove("active", "fade-in");
    });
  };

  const showSection = (section) => {
    section.classList.add("active");
    // Trigger reflow para animar
    section.offsetWidth;
    section.classList.add("fade-in");
  };

  navButtons.forEach(button => {
    button.addEventListener("click", () => {
      const sectionName = button.getAttribute("data-section");
      const targetSection = document.getElementById(`${sectionName}-content`);

      if (!targetSection) return; // evita erro se o id não existir

      // Alternância: se o botão já estiver ativo, volta para conteúdo padrão
      if (button.classList.contains("active")) {
        hideAllSections();
        showSection(defaultContent);
        navButtons.forEach(btn => btn.classList.remove("active"));
        return;
      }

      // Mostra a seção clicada
      hideAllSections();
      showSection(targetSection);

      // Atualiza classes ativas nos botões
      navButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });

  // Inicializa mostrando o conteúdo padrão
  hideAllSections();
  showSection(defaultContent);
});
