export const uniqueDates = (tasks) =>{
    const unique = [];

    tasks.forEach(task => {                                 // recorremos y agregamos la fecha si no existe para que no se repita
        if(!unique.includes(task.dateFormat)){              
            unique.push(task.dateFormat);
        }
    });

    return unique;
}


export const orderDates = (dates) =>{
    return dates.sort((a,b) =>{
        const firstDate = moment(a, "DD/MM/YYYY");
        const secondDate = moment(b, "DD/MM/YYYY");
        return firstDate - secondDate;
    });
};