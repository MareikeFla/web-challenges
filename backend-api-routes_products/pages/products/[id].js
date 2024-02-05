import { useRouter } from "next/router";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Product() {
  const router = useRouter();
  const { data: product, isLoading } = useSWR(
    router.query.id ? `/api/products/${router.query.id}` : null,
    fetcher
  );

  if (isLoading || !product) {
    return "Loading...";
  }
  return <p>{product.name}</p>;
}
