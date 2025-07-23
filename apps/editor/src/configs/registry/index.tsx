import { ZmwImage, ZmwText, ZmwVideo } from "@lowcode/ui";
import { ItemTypesKeys } from "@/configs/dnd/ItemTypes";

export const Registry = {
  [ItemTypesKeys.TEXT]: ZmwText,
  [ItemTypesKeys.IMAGE]: ZmwImage,
  [ItemTypesKeys.VIDEO]: ZmwVideo,
  [ItemTypesKeys.SLIDER]: ZmwImage,
  [ItemTypesKeys.BLANK]: ZmwImage,
  [ItemTypesKeys.ROWS]: ZmwImage,
  [ItemTypesKeys.COLUMNS]: ZmwImage,
  [ItemTypesKeys.CANVAS]: ZmwImage,
};
