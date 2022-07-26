import { createTask } from "./addTask.js";
import { uniqueDates } from "../services/date.js";
import dateElement from "./dateElement.js";
import { orderDates } from "../services/date.js";

export const displayTasks = () => {
    const list = document.querySelector("[data-list]");
    const tasksList = JSON.parse(localStorage.getItem("tasks")) || [];
    const dates = uniqueDates(tasksList);                                                       // Función para agrupar las tareas con la misma fecha
    orderDates(dates);
    dates.forEach(date =>{
        list.appendChild(dateElement(date));
        const dateMoment = moment(date, "DD/MM/YYYY");
        tasksList.forEach((task) => {                                                            //recorrer el arreglo para crear cada tarea que existe dentro de ese arreglo       
            const taskDate = moment(task.dateFormat , "DD/MM/YYYY" );     
            const diff = dateMoment.diff(taskDate) ;                                             // Indica cual es la diferencia entre una fecha y otra 
            if(diff == 0){
                list.appendChild(createTask(task)); 
            } 
           
        });
    });

    
}