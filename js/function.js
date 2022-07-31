/**
 * Set Alert Function
 */
const setAlert = (msg, type="danger") => {
    return `<p class="alert alert-${type} d-flex justify-content-between">${msg}<button class="btn-close" data-bs-dismiss="alert"></button></p>`;
}

/**
 * Data Send to Local Storage
 */
const createLSData = (key, value) => {
    let data = [];

    if(localStorage.getItem(key)){
        data = JSON.parse(localStorage.getItem(key));
    }

    data.push(value);

    localStorage.setItem(key, JSON.stringify(data));
}

/**
 * Data read from Local Storage
 */
const readLSData = (key) => {

    if(localStorage.getItem(key)){
        return JSON.parse(localStorage.getItem(key));
    }else{
        return false;
    }
}

/**
 * Update Local Storage Data
 */
const updateLSData = (key, array) => {
    localStorage.setItem(key, JSON.stringify(array));
}