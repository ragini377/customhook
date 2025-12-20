import useFetch from "../hooks/useFetch";

const products = () => {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
      {data.slice(0, 9).map((item) => (
        <div key={item.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
          <img src={item.images[0]} alt={item.title} width="100%" />
          <h4>{item.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default products;
