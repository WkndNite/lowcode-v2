import {
  ZmwBlank,
  ZmwColumns,
  ZmwImage,
  ZmwRows,
  ZmwSlider,
  ZmwText,
  ZmwVideo,
} from "@lowcode/ui";
import { ItemTypesKeys } from "@/configs/dnd/ItemTypes";

export const Registry = {
  [ItemTypesKeys.TEXT]: ZmwText,
  [ItemTypesKeys.IMAGE]: ZmwImage,
  [ItemTypesKeys.VIDEO]: ZmwVideo,
  [ItemTypesKeys.SLIDER]: ZmwSlider,
  [ItemTypesKeys.BLANK]: ZmwBlank,
  [ItemTypesKeys.ROWS]: ZmwRows,
  [ItemTypesKeys.COLUMNS]: ZmwColumns,
  [ItemTypesKeys.CANVAS]: ZmwImage,
};
