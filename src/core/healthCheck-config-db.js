
const healthCheck = {
    n_dumps: {
        title: 'Number of dumps (ST22)',
        details: {
            columns: {
                dump_date: 'Dump Date',
                time: 'Dump Time',
                host: 'Host',
                user: 'User',
                dump_id: 'Dump ID',
                program_name: 'Program Name',
                include_name: 'Include Name',
            }
        },
        config: {
            order: 4,
        }
    }, 
    n_queye: {
        title: 'Number of objects in CIF (SMQ1/SMQ2)',
        details: {
            columns: {
                man: '',
                queue_name: 'Queue Name',
                destination: '',
                // queue entries: 'Number Of Objects (???)',
                queue_state: 'Queue Status',
                system: 'System',
                flow: 'Flow',
            }
        },
        config: {
            order: 3,
        }
    },
    lc_status: {
        title: 'Live Cache status (LC10)',
        details: {
            columns: {
                // lc_name: '',
                // lc_state: ''
            }
        },
        config: {
            hideCardOptions: true,
            order: 1,
        }
    },
    memory_consumption: {
        title: 'Memory consumption (SM04)',
        details: {
            columns: {
                user: 'User Name',
                transaction: 'Transaction Code',
                mem_consumption: 'Memory Consumption',
                time: 'Time',
                terminal: 'Terminal',
                actual_program: 'Actual Program',
                // session_type: '',
                // priority: '',
            }
        },
        config: {
            order: 7,
        }
    },
    job_process: {
        title: 'Highest processing time of one job in execution (SM50)',
        details: {
            columns: {
                process_id: 'Process ID',
                status: 'Status',
                on_hold: 'On Hold',
                cpu_time: 'CPU Time',
                report: 'Report',
                user: 'User name',
            }
        },
        config: {
            order: 8,
        }
    },
    lc_logarea: {
        title: 'Log space (LC10)',
        details : {
            columns: {
                usable_size: 'Usable Size - Mb',
                used_lamb: 'Used Log Area - MB',
                "used_la%": 'Used Log Area - %',
                free_lamb: 'Free Log Area - Mb',
                "free_la%": 'Free Log Area - %',
            }
        },
        config: {
            order: 9,
        }
    },
    pchain_error: {
        title: 'Process chain error (RSPC)',
        details: {
            columns: {
                process_chain: 'Process Chain',
                log_id: 'Log ID',
                step_type: 'Step Type',
                pc_variant: 'PC Variant',
                exec_date: 'Execution Date',
                exec_time: 'Execution Time',
                step_status: 'Step Status',
                start_time: 'Start Time',
                end_time: 'End Time',
                duration: 'Duration',
            }
        },
        config: {
            order: 2,
        }
    },
    pchain_tlimit: {
        title: 'Process chain execution that exceed time limit (RSPC)',
        details: {
            columns: {
                process_chain: 'Process Chain',
                log_id: 'Log ID',
                exec_date: 'Execution Date',
                exec_time: 'Execution Time',
                duration: 'Duration',
                // Time Limit
                // % Above Time Limit
            }
        },
        config: {
            order: 5,
        }
    },
    pchain_stddev: {
        title: 'Process chain execution that passed two standard deviation of last x execution (RSPC)',
        details: {
            columns: {
                process_chain: 'Process Chain',
                log_id: 'Log ID',
                exec_date: 'Execution Date',
                exec_time: 'Execution Time',
                duration: 'Duration # Of executions',
                average: 'Average',
                std_deviation: 'Standard Deviation',
                // #Of Deviation
            }
        },
        config: {
            order: 6,
        }
    },
}

export function getColumns(cardType) {
    return healthCheck[cardType].details.columns;
}

export function getCardTitle(cardType) {
    return healthCheck[cardType].title;
}

export function getConfig(cardType) {
    return healthCheck[cardType].config;
}

export function sortCards(apohealthcheck) {
    return apohealthcheck.sort((a, b) => {
        if(getCardOrder(Object.keys(a)[0]) < getCardOrder(Object.keys(b)[0])){
            return -1;
        } else {
            return 1;
        }
    });
}

function getCardOrder(cardType) {
    return healthCheck[cardType].config.order;
}