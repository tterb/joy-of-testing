module.exports = {
    setupFilesAfterEnv: ['<rootDir>/setup-test-env.js'],
}
module.exports = {
    transform: {
        '^.+\\.jsx?$': `<rootDir>/jest-preprocess.js`,
    },
    setupFilesAfterEnv: ['<rootDir>/setup-test-env.js'],
    testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
    transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
    globals: {
        __PATH_PREFIX__: ``,
    },
    testURL: `http://localhost`,
}
