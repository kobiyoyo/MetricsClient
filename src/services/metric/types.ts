import { CamelToSnakeCaseNested } from '../../helpers';

type InputType = {
    id: number;
    value: number;
    createdAt: string;
    category: {
      id: number;
      name: string;
      siteId: number;
    }
  }
type AddInputType = { values: number; categoryId: number };
export type MetricApiProps = CamelToSnakeCaseNested<InputType>
export type MetricsApiProps = MetricApiProps[];
export type AddMerticProps = CamelToSnakeCaseNested<AddInputType>
