import uuidv4 from 'uuid/v4';

const pageData = [
  {
    id: uuidv4(),
    type: 'border',
    gridIndex: {
      rowStart: '4', rowEnd: '8', columnStart: '6', columnEnd: '10',
    },
    zIndex: 0,
  },
  {
    id: uuidv4(),
    type: 'border',
    gridIndex: {
      rowStart: '5', rowEnd: '9', columnStart: '13', columnEnd: '17',
    },
    zIndex: 0,
  },
  {
    id: uuidv4(),
    type: 'border',
    gridIndex: {
      rowStart: '15', rowEnd: '19', columnStart: '12', columnEnd: '16',
    },
    zIndex: 0,
  },
  {
    id: uuidv4(),
    type: 'border',
    gridIndex: {
      rowStart: '18', rowEnd: '22', columnStart: '6', columnEnd: '10',
    },
    zIndex: 0,
  },
  {
    id: uuidv4(),
    type: 'border',
    gridIndex: {
      rowStart: '28', rowEnd: '30', columnStart: '3', columnEnd: '7',
    },
    zIndex: 0,
  },
  {
    id: uuidv4(),
    type: 'border',
    gridIndex: {
      rowStart: '32', rowEnd: '38', columnStart: '2', columnEnd: '6',
    },
    zIndex: 0,
  },
  {
    id: uuidv4(),
    type: 'border',
    gridIndex: {
      rowStart: '35', rowEnd: '38', columnStart: '9', columnEnd: '17',
    },
    zIndex: 0,
  },
  {
    id: uuidv4(),
    type: 'line',
    gridIndex: {
      rowStart: '12', rowEnd: '14', columnStart: '2', columnEnd: '6',
    },
    zIndex: 20,
  },
  {
    id: uuidv4(),
    type: 'line',
    gridIndex: {
      rowStart: '24', rowEnd: '26', columnStart: '13', columnEnd: '17',
    },
    zIndex: 20,
  },
  {
    id: uuidv4(),
    type: 'line',
    gridIndex: {
      rowStart: '24', rowEnd: '26', columnStart: '2', columnEnd: '6',
    },
    zIndex: 20,
  },
  {
    id: uuidv4(),
    type: 'fill',
    gridIndex: {
      rowStart: '6', rowEnd: '10', columnStart: '12', columnEnd: '16',
    },
    zIndex: 0,
  },
  {
    id: uuidv4(),
    type: 'fill',
    gridIndex: {
      rowStart: '16', rowEnd: '18', columnStart: '1', columnEnd: '5',
    },
    zIndex: 0,
  },
  {
    id: uuidv4(),
    type: 'fill',
    gridIndex: {
      rowStart: '33', rowEnd: '37', columnStart: '8', columnEnd: '10',
    },
    zIndex: 0,
  },
  {
    id: uuidv4(),
    type: 'fill',
    gridIndex: {
      rowStart: '37', rowEnd: '41', columnStart: '3', columnEnd: '7',
    },
    zIndex: 0,
  },
  {
    id: uuidv4(),
    type: 'product',
    gridIndex: {
      rowStart: '5', rowEnd: '13', columnStart: '1', columnEnd: '9',
    },
    image: 'img01',
    zIndex: 10,
  },
  {
    id: uuidv4(),
    type: 'product',
    gridIndex: {
      rowStart: '7', rowEnd: '11', columnStart: '11', columnEnd: '15',
    },
    image: 'img02',
    zIndex: 10,
  },
  {
    id: uuidv4(),
    type: 'product',
    gridIndex: {
      rowStart: '17', rowEnd: '21', columnStart: '1', columnEnd: '9',
    },
    image: 'img03',
    zIndex: 10,
  },
  {
    id: uuidv4(),
    type: 'product',
    gridIndex: {
      rowStart: '17', rowEnd: '25', columnStart: '13', columnEnd: '17',
    },
    image: 'img04',
    zIndex: 10,
  },
  {
    id: uuidv4(),
    type: 'product',
    gridIndex: {
      rowStart: '25', rowEnd: '29', columnStart: '5', columnEnd: '9',
    },
    image: 'img05',
    zIndex: 10,
  },
  {
    id: uuidv4(),
    type: 'product',
    gridIndex: {
      rowStart: '29', rowEnd: '37', columnStart: '9', columnEnd: '17',
    },
    image: 'img06',
    zIndex: 10,
  },
  {
    id: uuidv4(),
    type: 'product',
    gridIndex: {
      rowStart: '33', rowEnd: '41', columnStart: '1', columnEnd: '5',
    },
    image: 'img07',
    zIndex: 10,
  },
  {
    id: uuidv4(),
    type: 'text',
    kind: 'title',
    gridIndex: {
      rowStart: '5', rowEnd: '6', columnStart: '1', columnEnd: '7',
    },
    position: {
      top: -15,
    },
    content: 'LINEN BLAZER',
    zIndex: 30,
  },
  {
    id: uuidv4(),
    type: 'text',
    kind: 'title',
    gridIndex: {
      rowStart: '11', rowEnd: '13', columnStart: '13', columnEnd: '17',
    },
    position: {
      top: 25,
    },
    content: 'FREELIFT',
    zIndex: 30,
  },
  {
    id: uuidv4(),
    type: 'text',
    kind: 'title',
    gridIndex: {
      rowStart: '16', rowEnd: '18', columnStart: '3', columnEnd: '9',
    },
    position: { },
    content: 'SUPER SKINNY',
    zIndex: 30,
  },
  {
    id: uuidv4(),
    type: 'text',
    kind: 'title',
    gridIndex: {
      rowStart: '17', rowEnd: '20', columnStart: '11', columnEnd: '16',
    },
    position: {
      top: -70,
    },
    content: 'DENIM',
    zIndex: 30,
    rotate: 270,
  },
  {
    id: uuidv4(),
    type: 'text',
    kind: 'title',
    gridIndex: {
      rowStart: '26', rowEnd: '28', columnStart: '1', columnEnd: '7',
    },
    position: { },
    content: 'SWEATSHIRTS',
    zIndex: 30,
  },
  {
    id: uuidv4(),
    type: 'text',
    kind: 'title',
    gridIndex: {
      rowStart: '28', rowEnd: '30', columnStart: '10', columnEnd: '17',
    },
    position: {
      left: 40,
    },
    content: 'VINTAGE DENIM',
    zIndex: 30,
  },
  {
    id: uuidv4(),
    type: 'text',
    kind: 'title',
    gridIndex: {
      rowStart: '31', rowEnd: '36', columnStart: '3', columnEnd: '4',
    },
    position: {
      top: 3,
      left: 10,
    },
    content: 'EDITION',
    zIndex: 30,
    rotate: 90,
  },
  {
    id: uuidv4(),
    type: 'text',
    kind: 'page',
    gridIndex: {
      rowStart: '13', rowEnd: '14', columnStart: '1', columnEnd: '2',
    },
    position: {},
    content: '01',
    zIndex: 30,
  },
  {
    id: uuidv4(),
    type: 'text',
    kind: 'page',
    gridIndex: {
      rowStart: '5', rowEnd: '6', columnStart: '16', columnEnd: '17',
    },
    position: {},
    content: '02',
    zIndex: 30,
  },
  {
    id: uuidv4(),
    type: 'text',
    kind: 'page',
    gridIndex: {
      rowStart: '21', rowEnd: '22', columnStart: '9', columnEnd: '10',
    },
    position: {},
    content: '03',
    zIndex: 30,
  },
  {
    id: uuidv4(),
    type: 'text',
    kind: 'page',
    gridIndex: {
      rowStart: '24', rowEnd: '25', columnStart: '12', columnEnd: '13',
    },
    position: {},
    content: '04',
    zIndex: 30,
  },
  {
    id: uuidv4(),
    type: 'text',
    kind: 'page',
    gridIndex: {
      rowStart: '28', rowEnd: '29', columnStart: '3', columnEnd: '4',
    },
    position: {},
    content: '05',
    zIndex: 30,
  },
  {
    id: uuidv4(),
    type: 'text',
    kind: 'page',
    gridIndex: {
      rowStart: '32', rowEnd: '33', columnStart: '8', columnEnd: '9',
    },
    position: {},
    content: '06',
    zIndex: 30,
  },
  {
    id: uuidv4(),
    type: 'text',
    kind: 'page',
    gridIndex: {
      rowStart: '40', rowEnd: '41', columnStart: '6', columnEnd: '7',
    },
    position: {},
    content: '07',
    zIndex: 30,
  },
  {
    id: uuidv4(),
    type: 'text',
    kind: 'comment',
    gridIndex: {
      rowStart: '6', rowEnd: '7', columnStart: '10', columnEnd: '15',
    },
    position: {
      top: 15,
      left: 30,
    },
    content: 'Men’s basics',
    zIndex: 30,
  },
  {
    id: uuidv4(),
    type: 'text',
    kind: 'comment',
    gridIndex: {
      rowStart: '11', rowEnd: '13', columnStart: '7', columnEnd: '10',
    },
    position: {
      top: 20,
      left: 15,
    },
    content: 'Men’s outfit',
    zIndex: 30,
    rotate: 90,
  },
  {
    id: uuidv4(),
    type: 'text',
    kind: 'comment',
    gridIndex: {
      rowStart: '15', rowEnd: '17', columnStart: '13', columnEnd: '17',
    },
    position: {
      left: 35,
    },
    content: 'Men’s cadual',
    zIndex: 30,
    rotate: 90,
  },
  {
    id: uuidv4(),
    type: 'text',
    kind: 'comment',
    gridIndex: {
      rowStart: '21', rowEnd: '22', columnStart: '1', columnEnd: '5',
    },
    position: {
      top: -10,
      left: 20,
    },
    content: 'Men’s pattern shirts',
    zIndex: 30,
  },
  {
    id: uuidv4(),
    type: 'text',
    kind: 'comment',
    gridIndex: {
      rowStart: '25', rowEnd: '26', columnStart: '9', columnEnd: '12',
    },
    position: {},
    content: 'Men’s jacket',
    zIndex: 30,
  },
  {
    id: uuidv4(),
    type: 'text',
    kind: 'comment',
    gridIndex: {
      rowStart: '32', rowEnd: '33', columnStart: '1', columnEnd: '4',
    },
    position: {
      top: 10,
    },
    content: 'Men’s shirts',
    zIndex: 30,
  },
  {
    id: uuidv4(),
    type: 'text',
    kind: 'comment',
    gridIndex: {
      rowStart: '37', rowEnd: '38', columnStart: '12', columnEnd: '16',
    },
    position: {
      top: -10,
    },
    content: 'Men’s classic',
    zIndex: 30,
  }
];

export default pageData;
