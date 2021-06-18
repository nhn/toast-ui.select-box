// Type definitions for TOAST UI Select Box v1.1.0
// TypeScript Version: 3.6.4

export interface IItemData {
  label: string;
  value: string;
  disabled?: boolean;
  selected?: boolean;
}

export type ItemOptionsType = IItemData & { index: number };

export class Item {
  constructor(options: ItemOptionsType);

  public getIndex(): number;
  public getLabel(): string;
  public getValue(): string;
  public isDisabled(): boolean;
  public isSelected(): boolean;
}

export interface IItemGroupData {
  label: string;
  data: IItemData[];
  disabled?: boolean;
}

export type ItemGroupOptionsType = IItemGroupData & { index: number; itemGroupIndex: number };

export class ItemGroup {
  constructor(options: ItemGroupOptionsType);

  public getIndex(): number;
  public getLabel(): string;
  public getItems(): Item[];
  public isDisabled(): boolean;
}

export interface IThemeConfig {
  'common.border'?: string;
  'common.background'?: string;
  'common.color'?: string;
  'common.width'?: string;
  'common.height'?: string;
  'common.disabled.background'?: string;
  'common.disabled.color'?: string;
  'input.border'?: string;
  'input.borderBottom'?: string;
  'input.background'?: string;
  'input.color'?: string;
  'input.width'?: string;
  'input.height'?: string;
  'input.open.border'?: string;
  'input.open.background'?: string;
  'input.open.color'?: string;
  'input.disabled.border'?: string;
  'input.disabled.background'?: string;
  'input.disabled.color'?: string;
  'dropdown.border'?: string;
  'dropdown.borderTop'?: string;
  'dropdown.background'?: string;
  'dropdown.width'?: string;
  'dropdown.maxHeight'?: string;
  'itemGroup.items.paddingLeft'?: string;
  'itemGroup.label.border'?: string;
  'itemGroup.label.background'?: string;
  'itemGroup.label.color'?: string;
  'itemGroup.label.fontWeight'?: string;
  'itemGroup.label.height'?: string;
  'itemGroup.label.disabled.border'?: string;
  'itemGroup.label.disabled.background'?: string;
  'itemGroup.label.disabled.color'?: string;
  'item.border'?: string;
  'item.background'?: string;
  'item.color'?: string;
  'item.height'?: string;
  'item.selected.border'?: string;
  'item.selected.background'?: string;
  'item.selected.color'?: string;
  'item.disabled.border'?: string;
  'item.disabled.background'?: string;
  'item.disabled.color'?: string;
  'item.highlighted.border'?: string;
  'item.highlighted.background'?: string;
  'item.highlighted.color'?: string;
}

export interface IOptions {
  data: Array<IItemData | IItemGroupData>;
  placeholder?: string;
  disabled?: boolean;
  autofocus?: boolean;
  autoclose?: boolean;
  showIcon?: boolean;
  theme?: IThemeConfig;
  usageStatistics?: boolean;
}

export interface IEventObjects {
  change: {
    type: 'change';
    prev: Item;
    curr: Item;
  };
  close: {
    type: 'close';
  };
  disable: {
    type: 'disable';
    target: Item | ItemGroup | SelectBox;
  };
  enable: {
    type: 'enable';
    target: Item | ItemGroup | SelectBox;
  };
  open: {
    type: 'open';
  };
}

export type IEvents = { [P in keyof IEventObjects]?: (ev: IEventObjects[P]) => void };

export type EventNameType = keyof IEvents;

export type EventHandlerType = IEvents[keyof IEvents];

export default class SelectBox {
  constructor(container: string | Element, options: IOptions);

  public close(): void;
  public deselect(): void;
  public destroy(): void;
  public disable(value: number | string | Item | ItemGroup): void;
  public enable(value: number | string | Item | ItemGroup): void;
  public getItem(value: number | string): Item;
  public getItemGroup(index: number): ItemGroup;
  public getItemGroups(callback?: (itemGroup: ItemGroup) => boolean, num?: number): ItemGroup[];
  public getItems(callback?: (item: Item) => boolean, num?: number): Item[];
  public getSelectedItem(): Item;
  public open(): void;
  public select(value: number | string | Item): void;
  public toggle(): void;
  public off(
    eventName?: EventNameType | IEvents | EventHandlerType,
    handler?: EventHandlerType
  ): void;
  public on(
    eventName: EventNameType | IEvents,
    handler?: EventHandlerType | object,
    context?: object
  ): void;
}
