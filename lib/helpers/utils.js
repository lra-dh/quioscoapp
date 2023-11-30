const formatearDinero = (cantidad) => {
    return cantidad.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}

const fetcher = (url) => fetch(url).then((res) => res.json());

export { formatearDinero, fetcher }