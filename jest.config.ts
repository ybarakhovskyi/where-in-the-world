import type {Config} from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: 'v8',
  testEnvironment: "jsdom",
  coverageThreshold: {
    global: {
      lines: 80,
      branches: 80,
      functions: 80,
      statements: 80
    }
  }
};

export default createJestConfig(config);
