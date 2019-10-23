// Type definitions for TOAST UI Select Box v0.0.1
// TypeScript Version: 3.6.4

export interface IItemData {
  text: string;
  value: string;
  disabled?: boolean;
  selected?: boolean;
}

export class Item {
  constructor(options: IItemData & { index: number });

  public getIndex(): number;
  public getLabel(): string;
  public getValue(): string;
  public isDisabled(): boolean;
  public isSelected(): boolean;
}

export interface IItemGroupData {
  text: string;
  data: IItemData[];
  disabled?: boolean;
}

export class ItemGroup {
  constructor(options: IItemGroupData & { index: number; itemGroupIndex: number });

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
  'input.showIcon'?: boolean;
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
  'itemGroup.items.paddingLeft'?: string | boolean;
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

export interface IEvents {
  change?: (ev: IEventObjects['change']) => void;
  close?: (ev: IEventObjects['close']) => void;
  disable?: (ev: IEventObjects['disable']) => void;
  enable?: (ev: IEventObjects['enable']) => void;
  open?: (ev: IEventObjects['open']) => void;
}

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
