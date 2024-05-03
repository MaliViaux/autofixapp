import axios from "axios";

const RECORD_API_URL = "http://localhost:80/api/v1/record";

function create(record){
    return axios.post(RECORD_API_URL, record)
}

function getAll(){
    return axios.get(RECORD_API_URL)
}

function get(id){
    return axios.get(`${RECORD_API_URL}/${id}`)
}

function update(record){
    return axios.put(RECORD_API_URL, record)
}

function finalize(id){
    return axios.put(`${RECORD_API_URL}/${id}/finalize`)
}

function pickup(id){
    return axios.put(`${RECORD_API_URL}/${id}/pickup`)
}

function applyVoucher(id){
    return axios.put(`${RECORD_API_URL}/${id}/applyVoucher`)
}

function removeVoucher(id){
    return axios.put(`${RECORD_API_URL}/${id}/removeVoucher`)
}

function remove(id){
    return axios.delete(`${RECORD_API_URL}/${id}`)
}

export default { getAll, create, get, update, finalize, pickup, remove, applyVoucher, removeVoucher  };