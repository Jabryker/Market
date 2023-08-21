import { FC } from "react";
import { useForm } from "react-hook-form";
import HelpText from "../../components/atoms/HelpText/HelpText";
import Input from "../../components/atoms/Input/Input";
import { Button } from "../../components/atoms/Button/Button";
import styles from "./PasswordReset.module.scss";

type IResetFormData = {
  email: string;
};

const PasswordReset: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IResetFormData>();

  const onSubmit = (RestData: IResetFormData) => {
    console.log(RestData.email);
  };

  return (
    <>
      <div className={styles.PasswordResetWrapper}>
        <h1 className={styles.PasswordResetWrapperTitle}>Сброс пароля</h1>
        <p className={styles.PasswordResetWrapperSubTitle}>
          Введите вашу электронную почту, и мы вам отправим инструкцию по восстановлению пароля
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            name="email"
            label="Email"
            placeholder="Enter your email"
            error={errors.email?.message}
            register={register}
          />
          <Button type="submit">Сбросить пароль</Button>
        </form>

        <HelpText linkTo="/login" linkText="Войти">
          Вспомнили пароль?
        </HelpText>
      </div>
    </>
  );
};

export default PasswordReset;
