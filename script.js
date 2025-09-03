// Funcionalidade de navegação
document.addEventListener("DOMContentLoaded", () => {
  const navButtons = document.querySelectorAll(".nav-btn")
  const contentSections = document.querySelectorAll(".content-section")
  const defaultContent = document.getElementById("default-content")

  navButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const sectionName = this.getAttribute("data-section")
      const targetSection = document.getElementById(sectionName + "-content")

      // Verifica se está clicando no mesmo botão (funcionalidade de alternância)
      if (this.classList.contains("active")) {
        // Esconde a seção atual e mostra o conteúdo padrão
        contentSections.forEach((section) => section.classList.remove("active"))
        defaultContent.classList.add("active")
        navButtons.forEach((btn) => btn.classList.remove("active"))
        return
      }

      // Esconde todas as seções
      contentSections.forEach((section) => section.classList.remove("active"))

      // Remove a classe ativa de todos os botões
      navButtons.forEach((btn) => btn.classList.remove("active"))

      // Mostra a seção alvo e ativa o botão
      if (targetSection) {
        targetSection.classList.add("active")
        this.classList.add("active")
      }
    })
  })
})
