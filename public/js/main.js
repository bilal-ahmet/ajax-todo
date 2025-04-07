$(document).ready(function () {
    // Sayfa yüklendiğinde görevleri getir
    fetchTodos();

    // Görev ekleme
    $('#todo-form').submit(function (e) {
        e.preventDefault();
        const task = $('#task-input').val();
        if (!task) return;

        $.post('/api/todos', { task }, function (newTodo) {
            $('#task-input').val('');
            appendTodo(newTodo);
        });
    });

    // Listeleme
    function fetchTodos() {
        $.get('/api/todos', function (todos) {
            $('#todo-list').empty();
            todos.forEach(todo => appendTodo(todo));
        });
    }

    // Listeye ekleme
    function appendTodo(todo) {
        $('#todo-list').append(`
            <li class="list-group-item d-flex justify-content-between">
                ${todo.task}
                <button class="btn btn-danger btn-sm delete-btn" data-id="${todo.id}">Sil</button>
            </li>
        `);
    }

    // Silme işlemi (ileriki adımda tamamlayacağız)
});
