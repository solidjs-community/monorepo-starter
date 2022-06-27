import type { Config } from "@jest/types"

const projectRootPath = "<rootDir>/../.."
const solidjsPath = `${projectRootPath}/node_modules/solid-js`

const config: Config.InitialOptions = {
	preset: "ts-jest",

	globals: {
		"ts-jest": {
			tsconfig: `<rootDir>/tsconfig.json`,
			babelConfig: {
				presets: [
					"@babel/preset-env",
					["babel-preset-solid", { generate: "ssr", hydratable: true }],
				],
			},
		},
	},

	testEnvironment: "node",

	setupFilesAfterEnv: [`${projectRootPath}/configs/jest.setup.ssr.ts`],

	moduleNameMapper: {
		"solid-js/web": `${solidjsPath}/web/dist/server.cjs`,
		"solid-js/store": `${solidjsPath}/store/dist/server.cjs`,
		"solid-js": `${solidjsPath}/dist/server.cjs`,
	},

	testMatch: ["<rootDir>/test/**.ssr.test.(js|ts)?(x)"],

	verbose: true,
}
export default config
