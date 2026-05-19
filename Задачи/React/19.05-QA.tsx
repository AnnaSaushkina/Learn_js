import { useState, useRef } from 'react';

// Компонент задачи с выбором статусов
export default function TaskItem({ task, onDelete, onToggle, onOpen }) {
  const [hovered, setHovered] = useState(false);
  const isDone = task.completed;
  const taskStatus = task.status ?? 'свободно';

  // Массив тегов с разными условиями
  const tags = [
    task.ticketNumber && <Tag key="ticket">#{task.ticketNumber}</Tag>,
    !isDone && taskStatus === 'свободно' && (
      <Tag key="status-free">Можно взять</Tag>
    ),
    !isDone && taskStatus === 'в работе' && (
      <Tag key="status-progress">В работе</Tag>
    ),
    !isDone && taskStatus === 'тестирование' && (
      <Tag key="status-test">Тестируется</Tag>
    ),
    task.deadline && <Tag key="дедлайн">{formatDeadline(task.deadline)}</Tag>,
  ].filter(Boolean);

  return (
    <div
      onClick={() => onOpen(task)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: hovered ? 'scale(1.005)' : 'scale(1)',
        transition: 'transform 0.2s ease',
        cursor: 'pointer',
      }}
    >
      <Checkbox
        checked={isDone}
        onChange={(e) => {
          e.stopPropagation();
          onToggle(task.id);
        }}
      />

      {isDone ? (
        <Text style={{ textDecoration: 'line-through' }}>
          {task.ticketNumber || task.title}
        </Text>
      ) : (
        <>
          <Text>{task.title}</Text>
          <div className="tags">{tags}</div>
        </>
      )}
    </div>
  );
}

// Компонент окна редактирования задачи с добавлением скриншотов и файла
export default function TaskForm({ values, onChange }) {
  const fileInputRef = useRef(null);

  // Универсальный обработчик для всех полей
  const update = (field, value) => {
    onChange({ ...values, [field]: value });
  };

  // Загрузка файлов
  const handleFileUpload = (e) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        update('screenshots', [...values.screenshots, event.target.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  // Удаление скриншота
  const removeScreenshot = (index) => {
    update(
      'screenshots',
      values.screenshots.filter((_, i) => i !== index),
    );
  };

  return (
    <div>
      <Input
        value={values.title}
        onChange={(e) => update('title', e.target.value)}
      />

      {/* Кнопка открывает скрытый инпут через ref */}
      <Button onClick={() => fileInputRef.current.click()}>
        Загрузить файл
      </Button>

      <input
        ref={fileInputRef}
        type="file"
        multiple
        style={{ display: 'none' }}
        onChange={handleFileUpload}
      />

      {/* Рендер списка */}
      {values.screenshots.map((src, i) => (
        <div key={i}>
          <img src={src} alt={`Скриншот ${i + 1}`} />
          <button onClick={() => removeScreenshot(i)}>×</button>
        </div>
      ))}
    </div>
  );
}
