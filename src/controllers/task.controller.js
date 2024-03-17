import { connectionDB, commands } from '../database/index'

export const getTasks = async (req, res) => {
    try{
        const connection = await connectionDB();
        const [response] = await connection.query(commands.getTaskCmd);
        res.json(response);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

export const getTask = async (req, res) => {

    try{
        const connection = await connectionDB();
        const [response] = await connection.query(commands.getTaskIdCmd, [req.params.id]);
        res.json(response);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

export const createTask = async (req, res) => {
    try{
        const connection = await connectionDB();
        await connection.query(commands.createTaskCmd, [req.body.title, req.body.description]);
        res.json("Created task");
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

export const updateTask = async (req, res) => {
    try{
        const connection = await connectionDB();
        await connection.query(commands.updateTaskCmd, [req.body, req.params.id]);
        res.json("Updated task")
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

export const deleteTask = async (req, res) => {
    try{
        const connection = await connectionDB();
        await connection.query(commands.deleteTaskCmd, [req.params.id]);
        res.json("Deleted task")
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}
