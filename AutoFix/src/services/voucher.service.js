import axios from "axios";

const VOUCHERS_API_URL = "http://localhost:80/api/v1/voucher";

function create(voucher){
    return axios.post(VOUCHERS_API_URL, voucher)
}

function getAll(){
    return axios.get(VOUCHERS_API_URL)
}

function get(id){
    return axios.get(`${VOUCHERS_API_URL}/${id}`)
}

function update(voucher){
    return axios.put(VOUCHERS_API_URL, voucher)
}

function remove(id){
    return axios.delete(`${VOUCHERS_API_URL}/${id}`)
}

export default { getAll, create, get, update, remove };