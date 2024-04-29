# Otoroshi Types for writing Wasm plugin using Typescript

package.json
```json 
{
  "name": "my-typescript-plugin",
  "version": "1.0.0",
  "devDependencies": {
    "esbuild": "^0.17.9",
    "otoroshi-ts-types": "0.0.1"
  }
}
```

index.ts
```ts
import { WasmAccessValidatorContext, WasmAccessValidatorResponse } from 'otoroshi-ts-types';

export declare var Host: any;

export function execute() {
    let context = JSON.parse(Host.inputString()) as WasmAccessValidatorContext;

    if (context.request.headers["foo"] === "bar") {
        const out: WasmAccessValidatorResponse = {
            result: true
        };
        Host.outputString(JSON.stringify(out));
    } else {
        const error: WasmAccessValidatorResponse = {
            result: false,
            error: {
                message: "you're not authorized",
                status: 401
            }
        };
        Host.outputString(JSON.stringify(error));
    }

    return 0;
}
```
