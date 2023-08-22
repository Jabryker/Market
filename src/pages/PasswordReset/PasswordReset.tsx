import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { HelpText, Input } from "../../components/atoms";
import AuthController from "../../controllers/AuthController";
import { Button } from "../../components/atoms/Button/Button";
import styles from "./PasswordReset.module.scss";

type IResetFormData = {
  email: string;
  password: string;
};

const PasswordReset: FC = () => {
  const [step, setStep] = useState("request"); // "request", "validate", "reset"
  const [token, setToken] = useState("");

  const handleStepRequest = async (data: IResetFormData) => {
    const success = await AuthController.requestPasswordReset(data.email);
    if (success) {
      setStep("validate");
    }
  };

  const handleStepValidate = async () => {
    const success = await AuthController.validatePasswordResetToken(token);
    if (success) {
      setStep("reset");
    }
  };

  const handleStepReset = async (data: IResetFormData) => {
    const success = await AuthController.confirmPasswordReset(token, data.password);
    if (success) {
      // FIXME: redirect
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IResetFormData>();

  const onSubmit = (resetData: IResetFormData) => {
    if (step === "request") {
      handleStepRequest(resetData);
    } else if (step === "validate") {
      handleStepValidate();
    } else if (step === "reset") {
      handleStepReset(resetData);
    }
  };

  return (
    <div className={styles.PasswordResetWrapper}>
      <h1 className={styles.PasswordResetWrapperTitle}>Сброс пароля</h1>
      {step === "request" && (
        <>
          <p className={styles.PasswordResetWrapperSubTitle}>
            Введите вашу электронную почту, и мы вам отправим инструкцию по восстановлению пароля
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="email"
              name="email"
              label="Email"
              placeholder="Enter your email"
              error={errors.password?.message}
              register={register}
            />
            <Button type="submit">Сбросить пароль</Button>
          </form>
        </>
      )}
      {step === "validate" && (
        <>
          <p>Enter the token received in your email:</p>
          <input type="text" value={token} onChange={(e) => setToken(e.target.value)} />
          <button onClick={handleStepValidate}>Validate Token</button>
        </>
      )}
      {step === "reset" && (
        <>
          <p>Enter your new password:</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="password"
              name="password"
              label="New Password"
              placeholder="Enter your new password"
              register={register}
            />
            <Button type="submit">Reset Password</Button>
          </form>
        </>
      )}
      <HelpText linkTo="/login" linkText="Войти">
        Вспомнили пароль?
      </HelpText>
    </div>
  );
};

export default PasswordReset;
