import { Header, ItemCard, Footer } from '../../components';
import { Items } from '../../types.ts';
import { useGetItems } from '../../hooks/';
import { Loading } from '../../components/Loading.tsx';
export const Main = () => {
  const items: Items[] = useGetItems();
  return (
    <div className="h-screen flex-col flex justify-between">
      <Header />
      <div>
        {items.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 px-20">
            {items?.map((item) => (
              <ItemCard
                key={item.id}
                price={item.price}
                imageSrc={item.image}
                description={item.description}
                title={item.title}
              />
            ))}
          </div>
        ) : (
          <Loading />
        )}
      </div>
      <Footer />
    </div>
  );
};
