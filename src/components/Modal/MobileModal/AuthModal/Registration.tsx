import { Formik, Field, Form, ErrorMessage } from 'formik';
import styles from './AuthModal.module.css';
import { ReactComponent as User } from './img/closeBtn.svg';
import { useDispatch } from 'react-redux';
import { setTypeModal, setisOpenModal } from '../../../../redux/slices/ProductsSlice';
import { useEffect, useRef } from 'react';

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegistrationModal: React.FC = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  let isFirstRender = useRef<boolean>(false);
  const handleClickOutside = (event: MouseEvent) => {
    if (isFirstRender.current && menuRef.current && !menuRef.current.contains(event.target as Node)) {
      dispatch(setisOpenModal());
    }
    isFirstRender.current = true;
  };

  useEffect(() => {
    document.body.classList.add('no-scroll');
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.body.classList.remove('no-scroll');
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setTypeModal('login'));
  };

  const handleCloseClick = () => {
    dispatch(setisOpenModal());
  };

  const validateEmail = (value: string) => {
    let error: string | undefined;
    if (!value) {
      error = 'Поле "Email" є обов\'язковим';
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      error = 'Невалідний електронний адрес';
    }
    return error;
  };

  const validateName = (value: string) => {
    let error: string | undefined;
    if (!value) {
      error = 'Поле "Ваше ім\'я" є обов\'язковим';
    }
    return error;
  };

  const validatePassword = (value: string) => {
    let error: string | undefined;
    if (!value) {
      error = 'Поле "Пароль" є обов\'язковим';
    }
    if (value.length < 5 || value.length > 10) {
      error = 'Пароль занадто короткий або довгий';
    }
    return error;
  };

  const validateConfirmPassword = (value: string, values: FormValues) => {
    let error: string | undefined;
    if (!value) {
      error = 'Поле "Підтвердження пароля" є обов\'язковим';
    } else if (value !== values.password) {
      error = 'Паролі не співпадають';
    }
    return error;
  };

  const handleSubmit = () => {
    window.location.href = '/';
  };

  return (
    <div className={styles.modal} ref={menuRef}>
      <Formik initialValues={{ name: '', email: '', password: '', confirmPassword: '' }} onSubmit={handleSubmit}>
        {({ isSubmitting, values }) => (
          <Form className={styles.form} onKeyPress={(event) => event.key === 'Enter' && handleSubmit()}>
            <div className={styles.formWrapper}>
              <button onClick={handleCloseClick} className={styles.closeBtn}>
                <User />
              </button>
              <h2>Регистрация</h2>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  Ваше имя
                  <Field type="text" name="name" placeholder="Введіть ваше ім'я" validate={validateName} />
                  <ErrorMessage name="name" component="div" className={styles.error} />
                </label>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  Email
                  <Field type="email" name="email" placeholder="Введіть електронну пошту" validate={validateEmail} />
                  <ErrorMessage name="email" component="div" className={styles.error} />
                </label>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  Пароль
                  <Field
                    type="password"
                    name="password"
                    placeholder="Введіть ваш пароль"
                    validate={validatePassword}
                  />
                  <ErrorMessage name="password" component="div" className={styles.error} />
                </label>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  Підтвердіть ваш пароль
                  <Field
                    type="password"
                    name="confirmPassword"
                    placeholder="Підтвердити ваш пароль"
                    validate={(value: string) => validateConfirmPassword(value, values)}
                  />
                  <ErrorMessage name="confirmPassword" component="div" className={styles.error} />
                </label>
              </div>
              <button type="submit" disabled={isSubmitting}>
                Регистрация
              </button>
              <div className={styles.btnChageWrapper}>
                <span>Маєте аккаунт?</span>
                <button onClick={handleClick} type="button" className={styles.changeForm}>
                  Ввійти
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationModal;
