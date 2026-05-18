import { useState, useEffect } from 'react';

// Задача 1: useState + useEffect — Счётчик с автосохранением
// Условие:
// Создай компонент счётчика, который:

// Сохраняет значение в localStorage при каждом изменении
// Восстанавливает значение из localStorage при загрузке
// Имеет кнопки +1 и -1
function Counter() {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem('counter');
    return JSON.parse(saved);
  });

  function handleCount() {
    setCount((prev) => prev + 1);
  }

  useEffect(() => {
    localStorage.setItem('counter', JSON.stringify(count));
  }, [count]);

  const currentSaved = localStorage.getItem('counter');
  return (
    <>
      <p>{count}</p>
      <p>{currentSaved}</p>
      <button onClick={handleCount}>Нaжми меня</button>
    </>
  );
}

// Задача 2: key в списках — Баг с переключением
// Условие:
// Найди и исправь баг в коде.
// При переключении вкладок состояние input'а сохраняется,хотя это разные формы.

function TabsWithBug() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div>
      <button onClick={() => setActiveTab('login')}>Показать Login</button>
      <button onClick={() => setActiveTab('signup')}>Показать Signup</button>
      <p>Активный: {activeTab}</p>
      {activeTab === 'login' && <LoginForm key="login" />}
      {activeTab === 'signup' && <SignupForm key="signup" />}
    </div>
  );
}

function LoginForm() {
  const [email, setEmail] = useState('');
  return (
    <>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <p>Введено: {email}</p>
    </>
  );
}

function SignupForm() {
  const [email, setEmail] = useState('');
  return (
    <>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <p>Введено: {email}</p>
    </>
  );
}

export default function App() {
  return (
    <>
      {/* <Counter /> */}
      <TabsWithBug />
      {/* <LoginForm /> */}
      {/* <SignupForm /> */}
    </>
  );
}
