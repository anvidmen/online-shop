import { 
  benjerry, caffelatte, calippo, chipsahoy, coffee, evax, greenTea, pizza, scottex, spaghetti, strawberries, triangulos, xibeca 
} from 'assets/images'

const data = {
  products: [
    { id: 'BJ1', name: 'benjerry', img: benjerry, price: 5.95, category: 'frozen'},
    { id: 'CL1', name: 'caffelatte', img: caffelatte, price: 1.27,category: 'fresh' },
    { id: 'CP1', name: 'calippo', img: calippo, price: 4.10, category: 'frozen'},
    { id: 'CS1', name: 'chipsahoy', img: chipsahoy, price: 2.20, category: 'basics'},
    { id: 'CF1', name: 'Coffee',  img: coffee, price: 11.23, category: 'fresh', offer: '34%', description: 'purchases over 3' },
    { id: 'EX1', name: 'evax', img: evax, price: 2.40, category: 'cleaning and household'},
    { id: 'GR1', name: 'Green tea',  img: greenTea, price: 3.11, category: 'fresh', offer: '2x1' },
    { id: 'PZ1', name: 'pizza', img: pizza, price: 4.95, category: 'basics'},
    { id: 'ST1', name: 'scottex', img: scottex, price: 4.50, category: 'cleaning and household'},
    { id: 'SP1', name: 'spaghetti', img: spaghetti, price: 1.25, category: 'basics'},
    { id: 'SR1', name: 'Strawberries', img: strawberries, price: 5.00, category: 'fresh', offer: '0.3%', description: 'purchases over 3' },
    { id: 'TG1', name: 'triangulos', img: triangulos, price: 2.35, category: 'fresh'},
    { id: 'XB1', name: 'xibeca', img: xibeca, price: 3.75, category: 'basics'}
  ]
}

export default data
