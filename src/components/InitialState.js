import { v4 } from 'uuid';

const id1 = v4();
const id2 = v4();

export default {
  masterWineBarrelList: {
    [id1]: {
      name: 'Che Non Che',
      origin: 'Istria',
      liters: '100',
      id: id1
    },
    [id2]: {
      name: 'Smederevka',
      origin: 'Serbia',
      liters: '75',
      id: id2
    }
  }
}