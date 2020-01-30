
export const healthCheck = {
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
        }
    },
    lc_status: {
        title: 'Live Cache status (LC10)',
        details: {
            columns: {
                lc_name: '',
                lc_state: ''
            }
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
        }
    },
}


export function getColumns(cardType) {
    return healthCheck[cardType].details.columns;
}

export function getCardTitle(cardType) {
    return healthCheck[cardType].title;
}