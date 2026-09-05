// Задача к встрече: код-ревью, не запуск.
// В одном useEffect два независимых побочных эффекта: запрос и WebSocket.
// Clean-up у эффекта один.

export function LivePrice({ productId }) {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    fetch(`/api/price/${productId}`)
      .then((r) => r.json())
      .then((data) => setPrice(data.price));

    const ws = new WebSocket('/ws');
    ws.onmessage = (e) => setPrice(JSON.parse(e.data).price);
  }, [productId]);

  return <div>{price}</div>;
}

// Вопрос: где возвращается clean-up, если побочных эффектов два?
// Хватит одной функции очистки на весь useEffect или нужно разносить
// fetch и WebSocket по двум разным useEffect — и по какому правилу решать?
