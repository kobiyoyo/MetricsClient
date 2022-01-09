export type CardProps = {
    size: number;
    title: string;
    id: number;
    handleDelete: (idx: number) => void
    handleView: (idx: number) => void
}
