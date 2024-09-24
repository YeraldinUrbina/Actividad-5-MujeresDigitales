import React from "react";
import Encabezado from "./Encabezado";
import Plan from "./Plan";
import DetallesCostos from "./DetallesCostos";
import Boton from "./Boton";
import "../estilos/OrderSummary.scss";

const OrderSummary = () => {
  return (
    <div className="ordersummary">
      <div className="encabezado">
        <Encabezado />
      </div>
      <div className="plan">
        <Plan />
      </div>
      <div className="detalles-costos">
        <DetallesCostos />
      </div>
      <Boton className="boton">Finalizar Pedido</Boton>
    </div>
  );
};

export default OrderSummary;