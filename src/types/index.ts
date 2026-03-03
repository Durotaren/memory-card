type ModalProps = {
  firstTime: boolean;
  setFirstTime: (value: boolean) => void;
};

type Character = {
  id: number;
  url: string;
  image: string;
};

export { Character, ModalProps };
