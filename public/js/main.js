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

    // Silme
    $('#todo-list').on('click', '.delete-btn', function () {
        const id = $(this).data('id');
        const $item = $(this).closest('li');

        $.ajax({
            url: '/api/todos/' + id,
            type: 'DELETE',
            success: function () {
                $item.remove();
                showToast('Görev silindi 🗑️');
            },
            error: function () {
                showToast('Silme işlemi başarısız ❌');
            }
        });
    });

    // Toast mesajı
    function showToast(message) {
        const toast = $(`
            <div class="toast align-items-center text-bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="d-flex">
                    <div class="toast-body">${message}</div>
                    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
        `);
        $('#toast-container').append(toast);
        const bsToast = new bootstrap.Toast(toast[0]);
        bsToast.show();
    }
});
