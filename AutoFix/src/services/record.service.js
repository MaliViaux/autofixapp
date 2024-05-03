import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/api/v1/record/');
}

const create = data => {
    return httpClient.post("/api/v1/record/", data);
}

const get = id => {
    return httpClient.get(`/api/v1/record/${id}`);
}

const update = data => {
    return httpClient.put('/api/v1/record/', data);
}

const finalize = id => {
    return httpClient.put(`/api/v1/record/${id}/finalize`);
}

const pickup = id => {
    return httpClient.put(`/api/v1/record/${id}/pickup`);
}

const applyVoucher = id => {
    return httpClient.put(`/api/v1/record/${id}/applyVoucher`);
}

const removeVoucher = id => {
    return httpClient.put(`/api/v1/record/${id}/removeVoucher`);
}

const remove = id => {
    return httpClient.delete(`/api/v1/record/${id}`);
}

export default { getAll, create, get, update, finalize, pickup, remove, applyVoucher, removeVoucher };