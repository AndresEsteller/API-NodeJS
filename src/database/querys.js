export const commands = {
    getTaskCmd: 'SELECT * FROM tasks',
    getTaskIdCmd: 'SELECT * FROM tasks WHERE id = ?',
    createTaskCmd: 'INSERT INTO tasks(title, description) VALUES(?,?)',
    updateTaskCmd: 'UPDATE tasks SET ? WHERE id = ?',
    deleteTaskCmd: 'DELETE FROM tasks WHERE id = ?'
};