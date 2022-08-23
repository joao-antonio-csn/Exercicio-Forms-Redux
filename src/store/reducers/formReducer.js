import { PERSONAL_ACTION } from '../actions/personalForm';
import { PROFESSIONAL_ACTION } from '../actions/professionalForm';

const INITIAL_STATE = {
  personal: {
    nome: '',
    email: '',
    cpf: '',
    endereco: '',
    cidade: '',
    estado: '',
  },
  professional: {
    curriculum: '',
    job: '',
    description: '',
  },
};

const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PERSONAL_ACTION:
    return {
      ...state,
      personal: { ...action.payload },
    };
  case PROFESSIONAL_ACTION:
    return {
      ...state,
      professional: { ...action.payload },
    };
  default:
    return state;
  }
};

export default formReducer;
