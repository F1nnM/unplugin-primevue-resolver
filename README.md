# unplugin-primevue-resolver
A resolver for the [unplugin-vue-components](https://www.npmjs.com/package/unplugin-vue-components) for use with [PrimeVue](https://primevue.org/) components.

This is **not** official from either party, but is more up-to-date than the resolver provided by unplugin. 

## Usage
### 1. Install
```
npm i unplugin-primevue-resolver -D
```
### 2. Set up
If you are not already using the PrimeVue Resolver from unplugin, set up the resovler as instructed [here](https://www.npmjs.com/package/unplugin-vue-components?activeTab=readme#installation).

Then simply replace the import:
```typescript
// old
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers';
// new
import { PrimeVueResolver } from 'unplugin-primevue-resolver';
```

## Contributing
Pull-Requests are very welcome, especially if I overlooked a component. When adding new components please keep the order alphabetical :D
