import { Order } from '@/models/order';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '../ui/data-table';

const columns: ColumnDef<Order>[] = [
  {
    accessorKey: 'id',
    header: 'Order ID',
  },
  {
    header: 'Order Total',
    accessorKey: 'total',
  },
  {
    header: 'Total Products',
    accessorKey: 'totalProducts',
  },
  {
    header: 'Total Quantity',
    accessorKey: 'totalQuantity',
  },
];

const OrdersTable = ({ data }: { data: Order[] }) => {
  console.log(data);
  return <DataTable columns={columns} data={data} />;
};

export default OrdersTable;
