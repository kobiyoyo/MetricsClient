import { CamelToSnakeCaseNested } from '../../helpers';

type InputType = {
    perMinute: number;
    perHour: number;
    perDay: number;
  }
export type AveragesApiProps = CamelToSnakeCaseNested<InputType>
