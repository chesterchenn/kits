# caesar

这是一个实现凯撒密码的实验性功能模块。

## 使用
1. 可以将文件下的index.js修改成需要的文件名，引入进来
```
import { encrypt, decrypt } from './caesar';
```
2. 可以将整个文件放入到node_modules下
```
import { encrypt, decrypt } from 'caesar';
```

## API
`function encrypt(key?: number, message?: string)`  
`function decrypt(key?: number, message?: string)`

## 实例
```
encrypt(3, 'Hello World! This is from caesar.'); // Khoor Zruog! Wklv lv iurp fdhvdu.
decrypt(3, 'Khoor Zruog! Wklv lv iurp fdhvdu.'); // Hello World! This is from caesar.
```
