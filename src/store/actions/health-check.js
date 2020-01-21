export const Types = {
    GET_HEALTH_CHECK: 'hc/GET',
    SUCCESS: 'hc/SUCCESS',
    ERROR: 'hc/ERROR'
};

export const Creators = {
    getHealthCheckData: () => ({
        type: Types.GET_HEALTH_CHECK,
    }),
    hcSuccess: (apohealthcheck) => ({
        type: Types.SUCCESS,
        apohealthcheck,
    }),
    hcError: () => ({
        type: Types.ERROR
    }),
}
