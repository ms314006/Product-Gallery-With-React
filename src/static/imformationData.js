import uuidv4 from 'uuid/v4';

const pageData = [
  {
    id: uuidv4(),
    type: 'border',
    gridIndex: {
      rowStart: '10', rowEnd: '14', columnStart: '8', columnEnd: '16',
    },
    zIndex: 0,
  },
  {
    id: uuidv4(),
    type: 'border',
    gridIndex: {
      rowStart: '30', rowEnd: '34', columnStart: '2', columnEnd: '10',
    },
    zIndex: 0,
  },
  {
    id: uuidv4(),
    type: 'line',
    gridIndex: {
      rowStart: '38', rowEnd: '40', columnStart: '4', columnEnd: '8',
    },
    zIndex: 20,
  },
  {
    id: uuidv4(),
    type: 'fill',
    gridIndex: {
      rowStart: '4', rowEnd: '8', columnStart: '2', columnEnd: '6',
    },
    zIndex: 0,
  },
  {
    id: uuidv4(),
    type: 'fill',
    gridIndex: {
      rowStart: '29', rowEnd: '33', columnStart: '12', columnEnd: '16',
    },
    zIndex: 0,
  },
  {
    id: uuidv4(),
    type: 'product',
    gridIndex: {
      rowStart: '5', rowEnd: '13', columnStart: '3', columnEnd: '15',
    },
    image: 'img06',
    zIndex: 10,
  },
  {
    id: uuidv4(),
    type: 'product',
    gridIndex: {
      rowStart: '31', rowEnd: '39', columnStart: '7', columnEnd: '15',
    },
    image: 'img0601',
    zIndex: 10,
  },
  {
    id: uuidv4(),
    type: 'product',
    gridIndex: {
      rowStart: '28', rowEnd: '33', columnStart: '3', columnEnd: '9',
    },
    image: 'img0602',
    zIndex: 10,
  },
  {
    id: uuidv4(),
    type: 'text',
    kind: 'page',
    gridIndex: {
      rowStart: '4', rowEnd: '5', columnStart: '11', columnEnd: '15',
    },
    position: {
      left: '33',
    },
    content: 'VINTAGE',
    zIndex: 30,
  },
  {
    id: uuidv4(),
    type: 'text',
    kind: 'page',
    gridIndex: {
      rowStart: '5', rowEnd: '8', columnStart: '14', columnEnd: '15',
    },
    position: { top: '-45', },
    content: 'DENIM',
    zIndex: 30,
    rotate: 90,
  },
  {
    id: uuidv4(),
    type: 'text',
    kind: 'page',
    gridIndex: {
      rowStart: '11', rowEnd: '13', columnStart: '2', columnEnd: '3',
    },
    position: {
      top: 20,
      left: 30,
    },
    content: '06',
    zIndex: 30,
    rotate: 270,
  },
  {
    id: uuidv4(),
    type: 'text',
    kind: 'page',
    gridIndex: {
      rowStart: '12', rowEnd: '14', columnStart: '3', columnEnd: '4',
    },
    position: {
      left: 35,
    },
    content: 'TOP',
    zIndex: 30,
    rotate: 180,
  },
  {
    id: uuidv4(),
    type: 'text',
    kind: 'page',
    gridIndex: {
      rowStart: '17', rowEnd: '18', columnStart: '5', columnEnd: '13',
    },
    position: {},
    content: 'VINTAGE DENIM',
    zIndex: 30,
  },
  {
    id: uuidv4(),
    type: 'text',
    kind: 'comment',
    gridIndex: {
      rowStart: '18', rowEnd: '20', columnStart: '1', columnEnd: '5',
    },
    position: {
      top: 25,
      left: -15,
    },
    content: 'PRODUCT DETAILS',
    zIndex: 30,
    rotate: 90,
  },
  {
    id: uuidv4(),
    type: 'text',
    kind: 'minorTitle',
    gridIndex: {
      rowStart: '18', rowEnd: '19', columnStart: '5', columnEnd: '13',
    },
    position: {},
    content: 'Kogi Cosby sweater ethical squid irony',
    zIndex: 30,
  },
  {
    id: uuidv4(),
    type: 'text',
    kind: 'describe',
    gridIndex: {
      rowStart: '19', rowEnd: '22', columnStart: '5', columnEnd: '15',
    },
    position: {},
    content: 'In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew. Now hands are wanted here, and then again hands are wanted there. There is no staying in any one place; for at one and the same time everything has to be done everywhere. It is much the same with him who endeavors the description of the scene.',
    zIndex: 30,
  },
  {
    id: uuidv4(),
    type: 'text',
    kind: 'describe',
    gridIndex: {
      rowStart: '22', rowEnd: '24', columnStart: '5', columnEnd: '15',
    },
    position: {},
    content: 'We must now retrace our way a little. It was mentioned that upon first breaking ground in the whale‘s back, the blubber-hook was inserted into the original hole there cut by the spades of the mates. But how did so clumsy and weighty a mass as that same hook get fixed in that hole? It was inserted there by my particular friend Queequeg, whose duty it was, as harpooneer.',
    zIndex: 30,
  }
];

export default pageData;
