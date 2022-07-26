import { uniqueDates } from "../services/date.js";
import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import { displayTasks } from "./displayTasks.js";

export const addTask = (evento) =>{                                      // El evento lo genera el formulario
    evento.preventDefault();                                             // Cancela el refresco de la página al momento de un submit

    const list = document.querySelector("[data-list]");                  // Elemento donde vamos a ir agregando las tareas   
    const input = document.querySelector("[data-form-input]");           // El usuario llena con el título de la tarea
    const calendar = document.querySelector("[data-form-date]");         // Selecciona la fecha
    
    const date = calendar.value;                                            
    const value = input.value;
    const dateFormat = moment(date).format("DD/MM/YYYY");                // Formato de fecha con API moments.js que recibe como parámetro la fecha que define el usuario

    if(value == "" || date == ""){
        return;                                                          // Si esta el formulario vacío que no regrese nada
    }


    input.value="";
    calendar.value = "";

    const complete = false;

    const taskObj = {                                                   // Generamos una constante que es un objeto que almacenamos value y dateFormat
        value,
        dateFormat,
        complete, 
        id: uuid.v4(),
    };

    list.innerHTML = "";
    
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];   // El valor de la constante es lo que va a recibir del localStorage con la llave "tasks". 
                                                                        // JSON.parse convierte en un objeto tipo JavaScript. Si es null, se define un []
    taskList.push({value,dateFormat});                                  // Agregamos la última tarea que estamos creando

    localStorage.setItem("tasks", JSON.stringify(taskList));            // Volvemos a almacenar nuestro arreglo de tareas y lo convertimos con JSON.stringify

    displayTasks();                                                     // Se encarga de generar toda la estructura
}



export const createTask = ({value,dateFormat, complete, id}) =>{                      // Recibimos el objeto
      const task = document.createElement("li");                        
            task.classList.add("card");                                 

      const taskContent = document.createElement("div");

      const check=  checkComplete(id);
      if(complete){
        check.classList.toggle("fas");
        check.classList.toggle("completeIcon");
        check.classList.toggle("far");
      }
   
      const titleTask = document.createElement("span");
            titleTask.classList.add("task");
            titleTask.innerHTML = value;
            taskContent.appendChild(check);
            taskContent.appendChild(titleTask);

      const dateElement = document.createElement("span");
            dateElement.innerHTML = dateFormat;
            task.appendChild(taskContent);
            task.appendChild(deleteIcon(id));
    return task;
       
}
