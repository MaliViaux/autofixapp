import axios from "axios";

const REPORT_API_URL = "http://localhost:80/api/v1/report";

function getAverageRepairTimes(){
    return axios.get(`${REPORT_API_URL}/averageRepairTime`)
}

function getRepairTypeStatistics(reportNumber){
    return axios.get(`${REPORT_API_URL}/stats/${reportNumber}`)
}

export default { getAverageRepairTimes, getRepairTypeStatistics };