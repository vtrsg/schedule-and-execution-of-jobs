/* Função para ordenar jobs por data de conclusão */
function sortJobs(jobs) {
    return jobs.sort((a, b) =>
        new Date(a["Data Máxima de conclusão"]).getTime() -
        new Date(b["Data Máxima de conclusão"]).getTime()
    );
}

module.exports = {
    sortJobs,
}