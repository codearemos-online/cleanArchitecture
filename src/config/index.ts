import { devConfig } from "./dev";
import { env } from "./env";
import { prodConfig } from "./prod";
import { testConfig } from "./test";

const config = {
    development: devConfig,
    testing: testConfig,
    production: prodConfig,
}

export const getConfig = () => {
    return config[env.nodeEnv as keyof typeof config];
}


