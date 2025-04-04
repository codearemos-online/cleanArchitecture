import dotenvFlow from "dotenv-flow";
dotenvFlow.config();

const requiredEnvs = ["NODE_ENV", "PORT"];

for(const key of requiredEnvs){
    if(!process.env[key]){
        throw new Error(`Environment variable ${key} is not set.`);
    }
}

export const env = {
    nodeEnv: process.env.NODE_ENV || "development",
    port: process.env.PORT || 3000,
}


