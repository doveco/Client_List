// Neste exercício quero que você crie um arquivo JSON com alguns clientes, e utilizando o conceito de fetch API, leia
// o arquivo e imprima os dados do usuário em uma tabela no HTML ao clicar no botão de pesquisar.

// searchButton.addEventListener('click', () => {
//     fetch('db.json')
//         .then(response => response.json())
//         .then(data => {
//             console.log('Lista de Clientes:', data);
//             data.clientes.forEach(cliente => {
//                 const row = document.createElement('tr');
//                 const idCell = document.createElement('td');
//                 const nomeCell = document.createElement('td');
//                 const emailCell = document.createElement('td');
//                 const foneCell = document.createElement('td');
//                 idCell.textContent = cliente.id;
//                 nomeCell.textContent = cliente.nome;
//                 emailCell.textContent = cliente.email;
//                 foneCell.textContent = cliente.fone;
//                 row.appendChild(idCell);
//                 row.appendChild(nomeCell);
//                 row.appendChild(emailCell);
//                 row.appendChild(foneCell);
//                 tableBody.appendChild(row);
//             });
//         })
//         .catch(error => console.log('Erro ao ler a lista de clientes:', error));
// });

const searchButton = document.getElementById('searchButton');
const tableBody = document.getElementById('tableBody');

searchButton.addEventListener('click', () => {    
    fetch('db.json')
        .then(response => response.json())
        .then(data => {
            console.log('Lista de Clientes:', data);
            data.clientes.forEach(cliente => {
                const row = document.createElement('tr');
                const idCell = document.createElement('td');
                const nomeCell = document.createElement('td');
                const emailCell = document.createElement('td');
                const foneCell = document.createElement('td');
                idCell.textContent = cliente.id;
                nomeCell.textContent = cliente.nome;
                emailCell.textContent = cliente.email;
                foneCell.textContent = cliente.fone;
                row.appendChild(idCell);
                row.appendChild(nomeCell);
                row.appendChild(emailCell);
                row.appendChild(foneCell);
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.log('Erro ao ler a lista de clientes:', error));
});

const addButton = document.getElementById('addButton');

addButton.addEventListener('click', () => {
    
    const clientData = { 
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        fone: document.getElementById('fone').value        
    };

    fetch('http://localhost:3000/clientes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(clientData)
    })
        .then(response => response.json())
        .then(data => console.log('Cliente adicionado:', data))
        .catch(error => console.log('Erro ao adicionar o cliente:', error));
});

const deleteButton = document.getElementById('deleteButton');

deleteButton.addEventListener('click', () => {
    
    const idClient = document.getElementById('idClient').value;    

fetch(`http://localhost:3000/clientes/${idClient}`, {
    method: 'DELETE'
})
    .then(response => {
        if (response.ok) {
            console.log('Cliente excluído com sucesso!');
        } else {
            throw new Error(`Erro ao excluir a tarefa: ${response.status}`);
        }
    })
    .catch(error => console.error('Erro ao excluir a tarefa:', error));

})

const idClientInput = document.getElementById('idClient');
const nomeEditarInput = document.getElementById('nomeEditar');
const emailEditarInput = document.getElementById('emailEditar');
const foneEditarInput = document.getElementById('foneEditar');

idClientInput.addEventListener('input', (event) => {
    const idClient = event.target.value;

    fetch(`http://localhost:3000/clientes/${idClient}`)
        .then(response => response.json())
        .then(data => {
            nomeEditarInput.value = data.nome;
            emailEditarInput.value = data.email;
            foneEditarInput.value = data.fone;
        })
        .catch(error => console.error('Erro ao obter o cliente:', error));
});

const editButton = document.getElementById('editButton');

editButton.addEventListener('click', () => {
    const idClient = document.getElementById('idClient').value; 
    const nome = document.getElementById('nomeEditar').value;
    const email = document.getElementById('emailEditar').value;
    const fone = document.getElementById('foneEditar').value;

    const clientData = {
        id: idClient,
        nome: nome,
        email: email,
        fone: fone
    };

    fetch(`http://localhost:3000/clientes/${idClient}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(clientData)
    })
    .then(response => response.json())
    .then(data => console.log('Dados atualizados:', data))
    .catch(error => console.error('Erro ao atualizar os dados do cliente:', error));
});

