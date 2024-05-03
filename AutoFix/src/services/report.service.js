import httpClient from "../http-common";

const getAverageRepairTimes = () => {
    return httpClient.get(`/api/v1/report/averageRepairTime`);
}

const getRepairTypeStatistics = reportNumber => {
    return httpClient.get(`/api/v1/report/stats/${reportNumber}`);
}

export default { getAverageRepairTimes, getRepairTypeStatistics };