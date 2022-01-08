export type MetricsFormValues = {
  value: number;
};

export type TableProps = {
  data: {
    key: number;
    name: string;
    id: number;
    value: number;
    time: string;
  }[];
};
