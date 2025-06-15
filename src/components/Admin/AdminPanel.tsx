import React from "react";
import StatsCard from "./StatsCard";
import SalesChart from "./SalesChart";
import { salesData } from "../../data";
import { products } from "../../data";

const AdminPanel: React.FC = () => {
  const totalSales = salesData.reduce((sum, data) => sum + data.sales, 0);
  const totalOrders = salesData.length;
  const averageSale = totalSales / totalOrders;
  const totalProducts = products.length;
  const outOfStock = products.filter((p) => p.stock === 0).length;

  return (
    <div className="container my-5 pt-5">
      <h2>Panel de Administrador</h2>
      <div className="row g-4 mb-4">
        <div className="col-md-3">
          <StatsCard
            title="Ventas Totales"
            value={`$${totalSales.toFixed(2)}`}
          />
        </div>
        <div className="col-md-3">
          <StatsCard title="Pedidos Totales" value={totalOrders} />
        </div>
        <div className="col-md-3">
          <StatsCard
            title="Venta Promedio"
            value={`$${averageSale.toFixed(2)}`}
          />
        </div>
        <div className="col-md-3">
          <StatsCard title="Productos sin Stock" value={outOfStock} />
        </div>
      </div>
      <SalesChart salesData={salesData} />
    </div>
  );
};

export default AdminPanel;
