import s from './s.module.css';

export function Address() {
  return (
    <address className={s.address}>
      <h5>Address</h5>
      <p>
        Украина 54038 Николаев <br />
        Логинова 50а <br />
      </p>
    </address>
  );
}

