export const get_timer_obj_storage = (id) => {
    let jsonString = localStorage.getItem(id);
    if (jsonString === undefined || jsonString == null){
        return {
            sec: 0,
            is_active: false
        }
    } 
    var retrievedObject = JSON.parse(jsonString);
    return retrievedObject
}

export const get_is_active = (id) => {
    var retrievedObject = get_timer_obj_storage(id)
    return retrievedObject.is_active
}

export const get_seconds_of_error = (id) => {
    var retrievedObject = get_timer_obj_storage(id)
    return retrievedObject.sec
}
