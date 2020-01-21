import { env, endpoints } from "../env"

export const services = {
    getHealthCheck: () => {
        return fetch(`${env.apiURL}/${endpoints.healthCheck}`)
                .then(res => res.json())
    }
}