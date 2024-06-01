import { useState } from 'react';
import { Modal } from './Modal';

type Props = {
  title: string;
  price: number;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  rate: number;
};

export const ItemCard = ({
  title,
  price,
  description,
  imageSrc,
  imageAlt = 'item image',
  rate,
}: Props) => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="group relative cursor-pointer" onClick={handleModal}>
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <span aria-hidden="true" className="absolute inset-0" />
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{price}$</p>
      </div>
      {modal && (
        <Modal
          price={price}
          imageSrc={imageSrc}
          title={title}
          rate={rate}
          modal={modal}
        />
      )}
    </div>
  );
};
