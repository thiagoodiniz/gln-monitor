
export const healthCheck = {
    n_dumps: {
        title: 'Number of dumps (ST22)',
    }, 
    n_queye: {
        title: 'Number of objects in CIF (SMQ1/SMQ2)',
    },
    lc_status: {
        title: 'Live Cache status (LC10)',
    },
    memory_consumption: {
        title: 'Memory consumption (SM04)',
    },
    job_process: {
        title: 'Highest processing time of one job in execution (SM50)',
    },
    lc_logarea: {
        title: 'Log space (LC10)',
    },
    pchain_error: {
        title: 'Process chain error (RSPC)',
    },
    pchain_tlimit: {
        title: 'Process chain execution that exceed time limit (RSPC)',
    },
    pchain_stddev: {
        title: 'Process chain execution that passed two standard deviation of last x execution (RSPC)',
    },
}