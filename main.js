// Placeholder para scripts dinâmicos
document.addEventListener("DOMContentLoaded", () => {
  const sections = [
    {
      id: "objetivo",
      title: "🎯 Objetivo do Projeto",
      content: `
        <p>Otimizar a organização de programas no TIA Portal, promovendo:</p>
        <ul>
          <li>Clareza na estrutura de blocos (FBS, FCS, DBS)</li>
          <li>Uso eficiente de ARRAYs e tipos de dados</li>
          <li>Redução de erros operacionais</li>
          <li>Aumento da segurança e confiabilidade</li>
          <li>Melhoria na manutenção e escalabilidade</li>
        </ul>
      `
    },
    // Outras seções conforme modelo
  ];

  const main = document.querySelector('main');
  sections.forEach(sec => {
    const card = document.createElement('section');
    card.id = sec.id;
    card.className = 'card';
    card.innerHTML = `<h2>${sec.title}</h2>${sec.content}`;
    main.appendChild(card);
  });
});