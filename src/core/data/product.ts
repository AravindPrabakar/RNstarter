import { Product } from '@src/core/model';
import {
  imageProduct1,
  imageProduct2,
  imageProduct3,
  imageProduct4,
  imageProduct5,
  imageProduct6,
} from '@src/assets/images';

export const products: Product[] = [
  {
    name: 'Ed Sheeran',
    type: 'T-shirt',
    colors: ['Black', 'Red', 'White'],
    cost: 150,
    currency: '$',
    photo: imageProduct1,
    description: 'The Vitra Plastic Side Chairs are undoubtedly an absolute classic when it comes to the living area.' +
      'The unusual mix of a plastic seat shell and wooden frame has since become a source of inspiration for ' +
      'many designers.',
    size: 'H:80cm  W:50cm  D:40cm',
  },
  {
    name: 'Ed sheeran',
    type: 'T-shirt',
    colors: ['pink', 'blue'],
    cost: 130,
    currency: '$',
    photo: imageProduct2,
    description: 'The Vitra Plastic Side Chairs are undoubtedly an absolute classic when it comes to the living area.' +
      'The unusual mix of a plastic seat shell and wooden frame has since become a source of inspiration for ' +
      'many designers.',
    size: 'H:80cm  W:50cm  D:40cm',
  },
  {
    name: 'Josh groban',
    type: 'Hoodie',
    colors: ['black'],
    cost: 80,
    currency: '$',
    photo: imageProduct3,
    description: 'The Vitra Plastic Side Lamps are undoubtedly an absolute classic when it comes to the living area.' +
      'The unusual mix of a plastic shell and wooden frame has since become a source of inspiration for ' +
      'many designers.',
    size: 'medium',
  },
  {
    name: 'David guetta',
    type: 'Hoodie',
    colors: ['yellow'],
    cost: 100,
    currency: '$',
    photo: imageProduct4,
    description: 'The Vitra Plastic Side Lamps are undoubtedly an absolute classic when it comes to the living area.' +
      'The unusual mix of a plastic shell and wooden frame has since become a source of inspiration for ' +
      'many designers.',
    size: 'small',
  },
  {
    name: 'WMG',
    type: 'Shirt',
    colors: ['blue', 'red', 'tomato'],
    cost: 10,
    currency: '$',
    photo: imageProduct5,
    description: 'The Vitra Glass Side Cookware are undoubtedly an absolute classic when it comes to the living area.' +
      'The unusual mix of a glass shell has since become a source of inspiration for many designers.',
    size: 'big',
  },
  {
    name: 'Asylum records',
    type: 'T-shirt',
    colors: ['blue', 'red', 'tomato'],
    cost: 10,
    currency: '$',
    photo: imageProduct6,
    description: 'The Vitra Glass Side Cookware are undoubtedly an absolute classic when it comes to the living area.' +
      'The unusual mix of a glass shell has since become a source of inspiration for many designers.',
    size: 'big',
  },
];
