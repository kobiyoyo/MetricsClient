import { CamelToSnakeCaseObject } from '../../helpers';

type InputType = {
    id: number;
    value: string;
    categoryId: number;
  }

export type MetricApiProps = CamelToSnakeCaseObject<InputType>
export type MetricsApiProps = MetricApiProps[];
