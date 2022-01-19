export type CardProps = {
    size: number;
    title: string;
    id: number;
    handleDelete: (idx: number) => void
    handleView: (idx: number) => void
}

export type StatsCardProps = {
    value: number | undefined;
    title: string;
    loading: boolean
}
