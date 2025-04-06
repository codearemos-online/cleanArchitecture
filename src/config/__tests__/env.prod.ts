import * as process from 'process';

describe("env production process",() => {
    beforeEach(() => {
        process.env.port = "8000";
    })

    afterEach(() => {
        jest.resetModules();
    })

    it("should load required environment variables", () => {
        const { env } = require('../env');

        expect(env.port).toBe("3000");
    })
})

