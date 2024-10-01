import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const OrderNav = () => {
    return (
        <Breadcrumb className='mx-3'>
            <BreadcrumbItem href="/cart" tag="a" className='text-primary'>
                Cart
            </BreadcrumbItem>
            <BreadcrumbItem href="#" tag="a" className='text-black'>
                Details
            </BreadcrumbItem>
            <BreadcrumbItem href="/shipping" tag="a" className='text-light-emphasis'>
                Shipping
            </BreadcrumbItem>
            <BreadcrumbItem href="/payment" active className='text-light-emphasis'>
                Payment
            </BreadcrumbItem>
        </Breadcrumb>
    );
};

export default OrderNav;