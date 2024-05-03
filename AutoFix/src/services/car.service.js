import axios from "axios";

const CAR_API_URL = "http://localhost:80/api/v1/car";

function create(car){
    return axios.post(CAR_API_URL, car)
}

function getAll(){
    return axios.get(CAR_API_URL)
}

function get(id){
    return axios.get(`${CAR_API_URL}/${id}`)
}

function update(car){
    return axios.put(CAR_API_URL, car)
}

function remove(id){
    return axios.delete(`${CAR_API_URL}/${id}`)
}

export default { getAll, create, get, update, remove };