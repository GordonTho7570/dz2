import { Card, Button } from "antd";

function ProductCard({ title, price }) {
  return (
    <Card title={title}>
      <p>Цена: {price}</p>
      <Button type="primary">Купить</Button>
    </Card>
  );
}

export default ProductCard;