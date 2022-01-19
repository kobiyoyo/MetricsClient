/* eslint-disable max-len */
import { CamelToSnakeCaseObject } from '../../helpers';

type InputType = {
    id: number;
    name: string;
    siteId: number;
  }

export type CategoryApiProps = CamelToSnakeCaseObject<InputType>
export type CategoriesApiProps = CategoryApiProps[];
