const checkComplete = (id) =>{
    const i = document.createElement("i");
    i.classList.add("far","fa-check-square", "icon");
    i.addEventListener("click", (evento) => completeTask(evento, id));
    return i;
};


const completeTask = (event, id) =>{
    const elemento = event.target;
    elemento.classList.toggle("fas");
    elemento.classList.toggle("completeIcon");
    elemento.classList.toggle("far");

    const tasks = JSON.parse(localStorage.getItem("tasks"));     //Obtiene las tareas  
    const index = tasks.findIndex(item => item.id == id);        //Obtiene el id de cada tarea   
    tasks[index]["complete"] = !tasks[index]["complete"];        //Modifica la propiedad complete a true o false;
    localStorage.setItem("tasks", JSON.stringify(tasks));        //Almacena en localStorage la actualización de complete

};

export default checkComplete;