import { from } from "rxjs";
import { factura }from "..//app/facturas";

export const Detalle: factura[

]=[
    {
        fechaEmisión:"23-06-2021",
        numeroFactura :1,
         cédula: 1725036782,
        nombreCliente: "Steven",
         dirección: "la magdalena", 
         teléfono:0987506176,
         subtotal:10,
         IVA:12,
         total:20,
         productos:[
             {
                valorTotal: 10,
                valorUnitario: 1,
                cantidad:20,
                nombrePrducto: "zanahoria",
             }
         ]
    }
]
