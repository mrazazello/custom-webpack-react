import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { ISideBarItem } from "../model/items";

interface IProps {
  item: ISideBarItem;
}

export const SideBarItem: FC<IProps> = memo((props: IProps) => {
  const { item } = props;
  const { t } = useTranslation();

  return (
    <AppLink to={item.url}>
      <item.Icon width={24} height={24} />
      <span>{t(item.text)}</span>
    </AppLink>
  );
});

SideBarItem.displayName = "SideBarItem";
