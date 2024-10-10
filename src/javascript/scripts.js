// Selecionando os cartões e as colunas corretamente
let kanbanKards = document.querySelectorAll('.kanban-card');
let kanbanColumns = document.querySelectorAll('.kanban-column'); // Colunas inteiras

// Adicionando eventos de drag para os cartões
kanbanKards.forEach(card => {
    card.addEventListener('dragstart', e => {
        e.currentTarget.classList.add('dragging');
    });

    card.addEventListener('dragend', e => {
        e.currentTarget.classList.remove('dragging');
    });
});

// Adicionando eventos de drag e drop para as colunas inteiras
kanbanColumns.forEach(column => {
    column.addEventListener('dragover', e => {
        e.preventDefault(); // Permitir o drop
        e.currentTarget.classList.add('cards-hover'); // Estilização ao arrastar sobre a coluna
    });

    column.addEventListener('dragleave', e => {
        e.currentTarget.classList.remove('cards-hover'); // Remover estilização ao sair da coluna
    });

    column.addEventListener('drop', e => {
        e.preventDefault(); // Prevenir comportamento padrão

        // Remover a classe de destaque da coluna
        e.currentTarget.classList.remove('cards-hover');

        // Selecionar o cartão que está sendo arrastado
        const dragCard = document.querySelector('.kanban-card.dragging');

        // Verificar se o cartão existe
        if (dragCard) {
            // Selecionar o container que contém os cartões dentro da coluna
            const kanbanCardsContainer = e.currentTarget.querySelector('.kanban-cards');
            if (kanbanCardsContainer) {
                kanbanCardsContainer.appendChild(dragCard); // Adicionar o cartão ao container da coluna
            }
        }
    });
});
