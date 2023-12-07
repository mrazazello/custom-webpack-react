import React, { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./icon.module.scss";

interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: IconProps) => {
  const { className, Svg } = props;

  return <Svg className={classNames(cls.Icon, {}, [className])} />;
});

Icon.displayName = "Icon";
