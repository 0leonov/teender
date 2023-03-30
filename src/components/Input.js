import styles from '../styles/Input.module.css';

const Input = ({name, type, label, register, errors, rules}) => {
  return (
    <div>
      <p className='mb-2 text-neutral-100 text-sm'>{label}</p>
      <input className={errors?.message ? styles.inputError : styles.inputNormal}
             {...(register(name, rules))} type={type}/>
      {errors?.message && <p className='text-red-500 text-xs'>{errors.message}</p>}
    </div>
  );
};

export default Input;