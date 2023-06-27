import { Formik, Field, Form, ErrorMessage } from 'formik';
import styles from './AuthModal.module.css';
import { ReactComponent as User } from './img/closeBtn.svg';
import { setTypeModal, setisOpenModal } from '../../../../redux/slices/ProductsSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../redux/store';
import { useEffect, useRef } from 'react';

const LoginModal = () => {
  const dispatch: AppDispatch = useDispatch();
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

  const handleClick = () => {
    dispatch(setTypeModal('registration'));
  };

  const handleCloseClick = () => {
    dispatch(setisOpenModal());
  };

  const validateEmail = (value: string) => {
    let error;
    if (!value) {
      error = 'Поле "Email" є обов\'язковим';
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      error = 'Невалідний електронний адрес';
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

  const handleSubmit = (values: { email: string, password: string }) => {
    window.location.href = '/';
    console.log(values);
  };

  return (
    <div className={styles.modal} ref={menuRef}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form} >
          <div className={styles.formWrapper}>
            <button onClick={handleCloseClick} className={styles.closeBtn}>
              <User />
            </button>
            <h2>Авторизація</h2>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>
                Ваше имя
                <Field
                  type="email"
                  name="email"
                  placeholder="Електронна пошта"
                  validate={validateEmail}
                />
                <ErrorMessage name="email" component="div" className={styles.error} />
              </label>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>
                Пароль
                <Field
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  validate={validatePassword}
                />
                <ErrorMessage name="password" component="div" className={styles.error} />
              </label>
            </div>
            <button type="submit">Увійти</button>
            <button type="button" className={styles.formRegisterWithGoogle}>
              <span className={styles.formRegisterWithGoogleText}>Login with Google</span>
            </button>
            <div className={styles.btnChageWrapper}>
              <button onClick={handleClick} type="button" className={styles.changeForm}>
                Регистрация
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginModal;
