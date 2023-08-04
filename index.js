const jobs = require("./data/jobs.json")
const help = require("./helpers.js")

/* Pegando data inicial e data final */
let startDate = ''
let EndDate = ''

/* Função Principal para separar os jobs para que sejam executados em, no máximo, 8h e respeitem a data limite*/
function schedulerJobs(jobs){
    const orderedJobs = help.sortJobs(jobs)

    startDate = new Date(orderedJobs[0]['Data Máxima de conclusão'])
    EndDate = new Date(orderedJobs[orderedJobs.length - 1]['Data Máxima de conclusão'])

    let list = [];

    for (const job of orderedJobs) {
        const date = new Date(job['Data Máxima de conclusão']).getTime()
        const totalTime = parseInt(job['Tempo estimado'])
    
        const existingListIndex = list.findIndex(item => {
            const existingDate = new Date(item[0]['Data Máxima de conclusão']).getTime()
            const totalHours = item.reduce((total, currentJob) => total + parseInt(currentJob['Tempo estimado']), 0)

            return existingDate === date && totalHours + totalTime <= 8
        });

        if (existingListIndex !== -1) {
          list[existingListIndex].push(job)
        } else {
          list.push([job]);
        }
    }


    return list
}

console.log(schedulerJobs(jobs));