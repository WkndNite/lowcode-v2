import { type TObject, type TSchema, Type } from "@sinclair/typebox";

export const getSchema = <T extends TSchema>(
  params: T,
): TObject<{
  desktop: T;
  mobile: T;
}> => {
  return Type.Object({
    desktop: params,
    mobile: params,
  });
};
