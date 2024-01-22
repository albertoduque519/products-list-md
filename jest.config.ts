export default {
    preset: 'ts-jest/presets/js-with-babel',
    testEnvironment: 'jsdom',
  
    moduleNameMapper: {
      '^@app/(.*)$': '<rootDir>/src/$1',
      '^@assets/(.*)$': '<rootDir>/src/assets/$1',
      '^@components/(.*)$': '<RootDir>/src/components/$1',
      "\\.(css|sass)$": "identity-obj-proxy"
    },
  
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
  
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts', '!src/index.tsx'],
  
  };
  