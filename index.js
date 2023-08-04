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

let list = [];

for (const job of orderedJobs) {
    const date = new Date(job['Data Máxima de conclusão']).getTime();
    const jobDuration = parseInt(job['Tempo estimado']);
  
    const existingListIndex = list.findIndex(item => {
        const existingDate = new Date(item[0]['Data Máxima de conclusão']).getTime();
        const totalHours = item.reduce((total, currentJob) => total + parseInt(currentJob['Tempo estimado']), 0);
        
        return existingDate === date && totalHours + jobDuration <= 8;
    });
    
    if (existingListIndex !== -1) {
      list[existingListIndex].push(job);
    } else {
      list.push([job]);
    }
}

console.log(list);

  
  