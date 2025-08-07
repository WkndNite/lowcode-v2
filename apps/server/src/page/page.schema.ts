import * as Joi from "joi";

export const createPageSchema = Joi.object({
  name: Joi.string().min(1).required().messages({
    "string.base": "页面名称必须是字符串",
    "string.empty": "页面名称不能为空",
    "any.required": "页面名称必须传递",
  }),
  title: Joi.string().min(1).required().messages({
    "string.base": "页面标题必须是字符串",
    "string.empty": "页面标题不能为空",
    "any.required": "页面标题必须传递",
  }),
  content: Joi.object().required().messages({
    "any.required": "页面内容必须传递",
  }),
});

export const updatePageSchema = Joi.object({
  name: Joi.string().min(1).messages({
    "string.empty": "页面名称不能为空",
  }),
  title: Joi.string().min(1).messages({
    "string.empty": "页面标题不能为空",
  }),
  content: Joi.object(),
});
