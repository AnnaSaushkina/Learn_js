export default function TaskItem({
  task,
  onDelete,
  onToggle,
  onOpen,
}: TaskItemProps) {
  const [hovered, setHovered] = useState(false);
  const isDone = task.completed;
  const taskStatus = task.status ?? 'свободно';

  // универсальные для всех компонентов статусы задач
  const tags = [
    task.ticketNumber && <Tag key="ticket">#{task.ticketNumber}</Tag>,
    !isDone && taskStatus === 'свободно' && <Tag key="status">Можно взять</Tag>,
    !isDone && taskStatus === 'в_работе' && <Tag key="status">В работе</Tag>,
    !isDone && taskStatus === 'тестирование' && (
      <Tag key="status">Тестируется</Tag>
    ),
    task.deadline && <Tag key="deadline">{formatDeadline(task.deadline)}</Tag>,
  ].filter(Boolean); // убираем false/null

  // Обработчик события для предотвращения активации кнопок внутри задачи
  const handleToggle = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    onToggle(task.id); // вызов проп-функции родителя
  };

  return (
    <div
      onClick={() => onOpen(task)}
      style={{ transform: hovered ? 'scale(1.005)' : 'scale(1)' }}
    >
      {/* условный рендеринг добавленной задачи */}
      {isDone ? (
        <Text>{task.ticketNumber || task.title}</Text>
      ) : (
        <>
          <Text>{task.title}</Text>
          <div>{tags}</div>
        </>
      )}
    </div>
  );
}

export default function TaskForm({ values, onChange }: TaskFormProps) {
  const [managerOpen, setManagerOpen] = useState(false);

  // скрытие нативного инпута
  const fileInputRef = useRef<HTMLInputElement>(null);

  // универсальный обработчик для всех полей
  const update = (field: keyof TaskFormValues, value: unknown) => {
    onChange({ ...values, [field]: value }); // иммутабельное обновление и уведомление родителя
  };

  return (
    <div>
      {/* управление данными в инпуте через родительские пропсы*/}
      <Input
        value={values.title}
        onChange={(e) => update('title', e.target.value)}
      />
      {/* useRef для открытия скрытого инпута */}
      <Button onClick={() => fileInputRef.current?.click()}>
        Загрузить файл
      </Button>
      <input
        ref={fileInputRef}
        style={{ display: 'none' }} // скрыт, открывается через ref
        onChange={handleFileUpload}
      />
      {/* map для рендера списка */}
      {values.screenshots.map((src, i) => (
        <div key={i}>
          <img src={src} />
          <button
            onClick={() =>
              update(
                'screenshots',
                values.screenshots.filter((_, idx) => idx !== i),
              )
            }
          >
            Закрыть
          </button>
        </div>
      ))}
    </div>
  );
}
