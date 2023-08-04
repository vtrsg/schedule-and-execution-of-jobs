const jobs = require("./data/jobs.json")

/* Função para ordenar jobs por data de conclusão */
function sortJobs(jobs) {
    return jobs.sort((a, b) =>
        new Date(a["Data Máxima de conclusão"]).getTime() -
        new Date(b["Data Máxima de conclusão"]).getTime()
    );
}

const orderedJobs = sortJobs(jobs)

/* Pegando data inicial e data final */
const startDate = new Date(orderedJobs[0]['Data Máxima de conclusão'])
const EndDate = new Date(orderedJobs[orderedJobs.length - 1]['Data Máxima de conclusão'])

console.log(startDate)
console.log(EndDate)