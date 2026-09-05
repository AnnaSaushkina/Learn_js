// Один clean-up на оба побочных эффекта или разносить по двум useEffect?

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
