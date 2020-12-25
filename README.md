# node-ecwid

## install

```shell
npm install ecwid
# or
yarn add ecwid
```

## example

```ts
import {Ecwid} from "ecwid";

(async () => {
    const accessToken = 'secret_xxx';
    const storeId = 1;
    const ecwid = new Ecwid(storeId, accessToken);
    const storeProfile = (await ecwid.getStore()).unwrap();
    console.log(storeProfile);
})();
```