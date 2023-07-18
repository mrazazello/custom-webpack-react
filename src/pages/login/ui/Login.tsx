import { useTranslation } from "react-i18next";
import { Button, ButtonThemeEnum } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

const LoginPage = () => {
  const { t } = useTranslation("login");
  return (
    <div className="centeredContainer">
      <h1>{t("page title")}</h1>

      <Input name="login" placeholder={t("field_login")} />

      <Input name="password" placeholder={t("field_password")} />

      <Button theme={ButtonThemeEnum.PRIMARY}>{t("login")}</Button>
    </div>
  );
};

export default LoginPage;
