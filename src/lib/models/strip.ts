import type CellModel from './cell';

export default interface Strip {
    index: number;
    blank_value: string | null;
    cells: CellModel[];
}