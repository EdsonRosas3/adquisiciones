export interface DetalleOrdenCompra{
    purchaseOrder: number;
    quatity: number;
    unitCost: number;
    measureUnit: string;
    totalAmount: number;
    item: string;
    providerItemCode: string;
    itemCode:string;
    unidadDelProveedor?:string;
}