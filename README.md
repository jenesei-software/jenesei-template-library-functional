# 'library-name'

This is a template for functional typescript library from Jenesei Software.

Replace ``library-name`` with the name of your library.

## Customize the axios error

```typescript
//react-query.d.ts
import 'library-name'
import { AxiosResponseDto } from 'library-name'
import '@tanstack/react-query'
import { AxiosError } from 'axios'

declare module '@tanstack/react-query' {
  interface Register {
    defaultError: AxiosError<AxiosResponseDto>
  }
}
```

```typescript
//axios.d.ts
import 'axios'

import { AxiosResponseDto } from 'library-name'

declare module 'axios' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export interface AxiosResponse<T = any> extends AxiosResponseDto {
    data: T
  }
}
```

## Peer Dependencies