// Ler todas as tarefas 

fetch('https://jsonplaceholder.typicode.com/1')
    .then(response => response.json())
    .then(data => console.log('Todas as tarefas:', data))
    .catch(error => console.log('Erro ao ler as tarefas:', error))

// Criar uma nova tarefa

const newTask = {
    title: 'Nova tarefa',
    completed: false
}

fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTask)
})

    .then(response => response.json())
    .then(data => console.log('Tarefa criada:', data))
    .catch(error => console.error('Erro ao criar a tarefa:', error));

// Atualizar uma tarefa existnte ( assumindo que o ID 1 existe)

const updatedTask = {
    id: 1,
    title: 'Tarefa atualizada',
    completed: true
};

fetch(`https://jsonplaceholder.typicode.com/todos/${updatedTask.id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedTask)
})

    .then(response => response.json())
    .then(data => console.log('Tarefa atualizada:', data))
    .catch(error => console.error('Erro ao atualizar a tarefa:', error));

// Excluir uma tarefa (assumindo que o ID 1 existe)

const taskIdDelete = 1;

fetch(`https://jsonplaceholder.typicode.com/todos/${taskIdDelete}`, {
    method: 'DELETE'
})
    .then(response => {
        if (response.ok) {
            console.log('Tarefa excluída com sucesso!');
        } else {
            throw new Error(`Erro ao excluir a tarefa: ${response.status}`);
        }
    })
    .catch(error => console.error('Erro ao excluir a tarefa:', error));
