/* eslint-disable max-len */
export type CamelToSnakeCase<S extends string> =
  S extends `${infer T}${infer U}` ?
  `${T extends Capitalize<T> ? '_' : ''}${Lowercase<T>}${CamelToSnakeCase<U>}` :
  S

// Convert type object from camel case to snake case
export type CamelToSnakeCaseObject <T> = T extends object ? { [K in keyof T as CamelToSnakeCase<K & string>]: CamelToSnakeCaseObject<T[K]>}: T

// Convert type nested object from camel case to snake case
export type CamelToSnakeCaseNested<T> = T extends object ? {
  [K in keyof T as CamelToSnakeCase<K & string>]: CamelToSnakeCaseNested<T[K]>
} : T
