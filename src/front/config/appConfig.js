// @flow

export const appConfig = {
    DEV_MODE: true, // block fetch

    // api endpoints:
    api: {
        fakeEndPoint: 'api/somewhere',
        users: 'api/someusersapi',
    },

    // sw path
    sw: {
        path: 'assets/sw.js',
    },
};

export default appConfig;
